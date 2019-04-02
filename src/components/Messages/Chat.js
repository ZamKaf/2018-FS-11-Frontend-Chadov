/* eslint-disable no-throw-literal */
import React, { Component } from 'react';

import MessageForm from './MessageForm';
import MessageList from './MessageList';
import {Link} from "react-router-dom";
import workerCode from './sharedWorkerSendMsg';
import styles from "../../App.module.css"

export default class Chat extends Component{
    constructor(props){
        super(props);
        const myList = ["Oleg", "Boris", "Arina"];

        this.name = props.match.params.name;
        if (-1 === myList.indexOf(this.name))
            throw `There is no chat with user ${this.name}`;
        this.messages = [];
        this.messages.push({text: `Hello, Martin!`, my:false });
        this.state = {
            messages: this.messages,
            worker: this.getSharedWorker()
        }
    }

    handleSubmit = (value) => {
        if (value === "") return;
        this.messages.push(value);
        this.setState({ messages: this.messages });
        this.state.worker.then((worker) => {
            worker.port.postMessage(value);
        });
      /*  if (value === "") return;
        this.messages.push(value);
        this.setState({ messages: this.messages });*/
    }

    getSharedWorker () {
        const workerFile = new Blob([`(${workerCode})(self)`], {type: 'text/javascript'});
        return new Promise((res, rej) => {
            const reader = new FileReader();
            reader.addEventListener('loadend', (event) => {
                const worker = new SharedWorker(event.target.result);
                worker.port.addEventListener('message', this.onWorkerMessage.bind(this));
                worker.port.start();
                window.addEventListener('beforeunload', () => {
                    worker.port.postMessage('disconnect');
                });
                res(worker);
            });
            reader.addEventListener('error', rej);
            reader.readAsDataURL(workerFile);
        });
    }

    onWorkerMessage (event) {
        let value = event.data;
        if (value === "") return;
        this.messages.push(value);
        this.setState({ messages: this.messages });
    }

    render()
    {
        return (
            <div>
                <button>
                    <Link to={`/chats`}>{'<----- К списку чатов'}</Link>
                </button>
                <br/>
                <label>{`Диалог с пользователем ${this.name}`}</label>
                <MessageList messages={this.state.messages}></MessageList>
                <div className={styles["message-form-container"]}>
                    <MessageForm onSubmit={this.handleSubmit}  >
                    </MessageForm>
                </div>
            </div>
        );
    }
}

/* eslint-disable no-throw-literal */
import React, { Component } from 'react';

import MessageForm from './MessageForm';
import MessageList from './MessageList';
import {Link} from "react-router-dom";
import styles from "../../App.module.css"

export default class TextBrowser extends Component{
    constructor(props){
        super(props);
        const myList = ["Oleg", "Boris", "Arina"];

        this.name = props.match.params.name;
        if (-1 === myList.indexOf(this.name))
            throw `There is no chat with user ${this.name}`;
        this.messages = [];
        this.messages.push({text: `Hello, Martin!`, my:false });
        this.state = { messages: this.messages }
    }

    handleSubmit = (value) => {
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

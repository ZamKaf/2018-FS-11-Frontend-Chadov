/* eslint-disable no-throw-literal */
import React, { Component } from 'react';

import MessageForm from './MessageForm';
import MessageList from './MessageList';
import Message from './Message';
import {Link} from "react-router-dom";

export default class TextBrowser extends Component{
    constructor(props){
        super(props);
        const myList = ["Oleg", "Boris", "Arina"];

        this.name = props.match.params.name;
        if (-1 === myList.indexOf(this.name))
            throw `There is no chat with user ${this.name}`;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileSubmit = this.handleFileSubmit.bind(this);
        this.messages = [];
        /*
                <Message text=></Message>*/
        this.messages.push({text: `Hello, Martin!`, my:false });
        this.state = { messages: this.messages }
    }

    handleSubmit(value) {
        if (value === "") return;
        this.messages.push({text: value.toString(), my:true });
        this.setState({ messages: this.messages });
    }
    handleFileSubmit(value) {
        if (value === "") return;
        this.messages.push({text: value, my:true });
        this.setState({ messages: this.messages });
    }

    render()
    {
        return (
            <div>
                <Link to={`/`}>{'<------------'}</Link><br/>
                <label>{`Диалог с пользователем ${this.name}`}</label>
                <MessageList messages={this.state.messages}></MessageList>
                <div className='message-form-container'>
                    <MessageForm onSubmit={this.handleSubmit} onFileSubmit ={this.handleFileSubmit}  >
                    </MessageForm>
                </div>
            </div>
        );
    }
}

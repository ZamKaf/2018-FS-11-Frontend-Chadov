import React, { Component } from 'react';

import MessageForm from './MessageForm';
import MessageList from './MessageList';
import Message from './Message';

export default class TextBrowser extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileSubmit = this.handleFileSubmit.bind(this);
        this.messages = [];
        /*
                <Message text=></Message>*/
        this.messages.push({text: 'Hello, Martin!', my:false });
        this.state = { messages: this.messages }
    }

    handleSubmit(value) {
        console.log(value);
        if (value == "") return;
        this.messages.push({text: value.toString(), my:true });
        this.setState({ messages: this.messages });
    }
    handleFileSubmit(value) {
        console.log("123");
        if (value == "") return;
        this.messages.push({text: value, my:true });
        this.setState({ messages: this.messages });
    }

    render()
    {
        return (
            <div>
                <MessageList messages={this.state.messages}></MessageList>
                <div className='message-form-container'>
                    <MessageForm onSubmit={this.handleSubmit} onFileSubmit ={this.handleFileSubmit}  >
                    </MessageForm>
                </div>
            </div>
        );
    }
}
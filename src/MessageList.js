import React, { Component } from 'react';
import Message from "./Message";

export default class MessageList extends Component{

    render()
    {
        const messages = this.props.messages;
        return (
            <div className='message-list'>
                {messages.map( (value) =>
                    <Message key = {value.toString() + (new Date()).toDateString()} text={value.text} my={value.my}></Message>)
                }
            </div>
        );
    }
}

import React, { Component } from 'react';
import Message from "./Message";

export default class MessageList extends Component{
    constructor(props){
        super(props);
    }

    render()
    {
        const messages = this.props.messages;
        return (
            <div className='message-list'>
                {messages.map( (value) =>
                    <Message key = {value.toString()} text={value.text} my={value.my}></Message>)
                }
            </div>
        );
    }
}

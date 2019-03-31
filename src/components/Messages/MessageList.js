import React, { Component } from 'react';
import Message from "./Message";
import styles from "../../App.module.css"

export default class MessageList extends Component{

    render()
    {
        const messages = this.props.messages;
        return (
            <div className={styles["message-list"]}>
                {messages.map( (value, id) =>
                    <Message {...value} key = {id} ></Message>)
                }
            </div>
        );
    }
}

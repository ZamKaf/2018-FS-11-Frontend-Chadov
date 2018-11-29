import React, { Component } from 'react';

import MessageForm from './Messages/MessageForm';
import MessageList from './Messages/MessageList';
import {Link} from "react-router-dom";
import Message from "./Messages/Message";

const ChatList = (chatNames) => {
    return (
        <div>
            {chatNames.map( (value, id) =>
                <div key = {id}><Link to={`/chats/${value}`}>Чат с {value}</Link><br/></div>)
            }
        </div>
    );
};

export default ChatList;

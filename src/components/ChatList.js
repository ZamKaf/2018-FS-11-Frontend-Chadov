import React, {  } from 'react';

import {Link} from "react-router-dom";
/*
                    <button>
                        <Link to={`/chats/${value}`}>Чат с {value}</Link><br/>
                    </button>
                    */

import ChatListButtons from "./LinkButton";
//TODO: check empty and write msg.
const ChatList = (chatNames) => {
    return (
        <div>
            {chatNames.map( (value, id) =>
                <div key = {id}>
                    <ChatListButtons value={value}/>
                </div>)
            }
        </div>
    );
};

export default ChatList;

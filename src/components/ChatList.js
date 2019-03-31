import React, {  } from 'react';

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

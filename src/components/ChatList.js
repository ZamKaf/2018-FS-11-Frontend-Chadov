import React, {  } from 'react';

import {Link} from "react-router-dom";

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

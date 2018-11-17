import React, { Component } from 'react';

import MessageForm from './MessageForm';
import MessageList from './MessageList';
import {Link} from "react-router-dom";

const StartPage = () => {
    return(
        <div>
            <Link to={`/Oleg`}>Чат с Олегом</Link><br/>
            <Link to={`/Boris`}>Чат с Борисом</Link><br/>
            <Link to={`/Arina`}>Чат с Ариной</Link><br/>
        </div>
    )
};

export default StartPage;

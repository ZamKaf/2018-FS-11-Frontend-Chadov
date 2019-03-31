import React, { Component } from 'react';
import styles from './styles.module.css';
import {Link} from "react-router-dom";


class ChatListButtons extends Component {
    constructor(props){
        super(props);
        this.value = this.props.value;
    }

	render() {
		return (

            <button className={styles.chatListButton}>
                <Link to={`/chats/${this.value}`}>Чат с {this.value}</Link><br/>
            </button>
		);
	}
}

export default ChatListButtons;

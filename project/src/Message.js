import React, { Component } from 'react';

export default class Message extends Component{
    constructor(props){
        super(props);
        Message.defaultProps = { text: '', my: false };
        let time = new Date();
        this.time = time.toLocaleTimeString();
        this.value = props.text;
        this.my = props.my ? 'my' : '';
    }

    render()
    {
        return (
            <form className={'message '+ this.my}>
                <section>{this.value}</section>
                <time>{this.time}</time>
            </form>
        );
    }
}

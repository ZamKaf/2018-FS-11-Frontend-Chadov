import React, { Component } from 'react';

export default class MessageForm extends Component{
    constructor(props){
        super(props);
        this.submitAction = props.onSubmit;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { value: '' };
    }

    handleChange(e){
        this.setState({ value: e.target.value })
    }
    handleSubmit(e) {
        this.submitAction(this.state.value);
        this.setState({ value: '' });
        e.preventDefault();
    }


    render()
    {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                       value={this.state.value}
                       onChange={this.handleChange}
                />
            </form>
        );
    }
}

import React, { Component } from 'react';
import {GetReadableSize} from "./sizes";

export default class MessageForm extends Component{
    constructor(props){
        super(props);
        this.submitAction = props.onSubmit;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.state = { value: ''};
        this.fileName = "";
        this.fileSize = 0;
    }

    handleChange(e){
        this.setState({ value: e.target.value })
    }
    handleFileChange(e){
        console.log(e.target.files.length);
        if (0 === e.target.files.length) return;
        let file = e.target.files[0];
        this.fileName = file.name;
        this.fileSize = file.size;
        console.log(this.fileName + " ++ " + this.fileSize);
    }
    handleSubmit(e) {
        this.submitAction(this.state.value);
        this.setState({ value: '' });
        if (this.fileName !== "")
        {
            this.submitAction(`FILE: "${this.fileName}" SIZE: ${GetReadableSize(this.fileSize)}`);
            this.fileName = "";
            this.fileSize = 0;
        }
        /*
        fetch("http://localhost:8081/home/user/WebstormProjects/listenServer/app.js", request).then((response) => {
            alert("yey");
            alert(response.status);
            alert("is all right: " + response.ok);
        }).catch(alert);
        */
        e.preventDefault();
    }

    render()
    {
        return (
            <form onSubmit={this.handleSubmit} className="inputMessageForm">
                <input type="text"
                       value={this.state.value}
                       onChange={this.handleChange}
                />
                <div className="fileInput" >
                    <input type="file"
                           name="fileIn"
                           onChange={this.handleFileChange} />
                    <label htmlFor="fileIn">MyIn</label>
                </div>
            </form>
        );
    }
}

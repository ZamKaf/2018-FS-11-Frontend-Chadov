import React, { Component } from 'react';
import Button from "./Button";
import styles from './styles.module.css';
import FormInput from './Form/FormInput';
import FileInput from './Form/FileInput';
import Smiles, {smilesData} from "./Form/Smiles";

export default class MessageForm extends Component{
    constructor(props){
        super(props);
        this.submitAction = props.onSubmit;
        this.state =
            {
                value: '',
                withMessage: false,
            };
        this.fileName = "";
        this.fileSize = 0;
    }

    handleChange = (e) => {
        let message = e.target.value;
        this.setState({
            withMessage: message.length > 0,
            value: message
        })
    }

    onFileInput = (event) => {
        const message = this.createMessage({
            text: null,
            attach: event.target.files[0]
        });
        this.submitAction(message);
        console.debug(message);
    }


    createMessage = (params) => {
        let message =  Object.create({});
        Object.keys(params).forEach((key) => message[key] = params[key]);
        Object.defineProperty(message, 'my', {
            configurable: true,
            enumerable: true,
            value: true,
            editable: false
        });
        message.time = new Date();
        return message;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.value) {
            let message = this.createMessage({
                text: this.state.value
            });
            this.submitAction(message);
            this.setState({
                value: '',
                withMessage: false
            });
        }
    }

    handleSmiles = (event) =>
    {
        let className = event.target["name"];
        document.getElementById("message_input").value+=smilesData[className];
        let newValue = this.state.value + smilesData[className];
        this.setState({
            withMessage: true,
            value: newValue
        })
    }

    render()
    {
        return (
            <div>
                <Smiles onSmileClick={this.handleSmiles}/>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        id="message_input"
                        name="message_text"
                        placeholder="Введите сообщение"
                        onInput={this.handleChange}
                        value={this.state.value}
                        autocomplete="off"
                    >
                        <div className={styles["message-form-children"]}>
                            <FileInput onChange={this.onFileInput.bind(this)}/>
                            <Button visible={this.state.withMessage}/>
                        </div>
                    </FormInput>
                </form>
            </div>
        );
    }
}

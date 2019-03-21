import React, { Component } from 'react';
import styles from './styles.module.css';
import SmileButton from "./SmileButton";
import Message from "../../Message";

export const smilesData = {
    smile: ":)",
    like: ":+1:",
    angry: ":angry:",
    happy: ":happy:"
}

class Smiles extends Component {
    constructor(props){
        super(props);
        this.onSmileClick = props.onSmileClick;
    }

	render() {
		return (
			<div>
                {
                    Object.keys(smilesData).map( (value, id) =>
                                         <SmileButton name={value} onClick={this.onSmileClick} key = {id} ></SmileButton>)
                }
			</div>
		);
	}
}

export default Smiles;

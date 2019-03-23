import React, { Component } from 'react';
import SmileButton from "./SmileButton";

export const smilesData = {
    "icon-angry-face-with-horns": ":)",
    "icon-angry-face": ":+1:",
    "icon-anguished-face": ":angry:"
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

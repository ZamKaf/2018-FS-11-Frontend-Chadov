import React, { Component } from 'react';
import styles from './styles.module.css';
import {smilesData} from "../index";


class SmileButton extends Component {
    constructor(props){
        super(props);
        this.onSmileClick = props.onClick;
        this.name = this.props.name;
    }

	render() {
		return (
                <button
                    value={smilesData[this.name]}
                    onClick={this.onSmileClick}
                    class={styles[this.name]}
                    name={this.name}
                    />
		);
	}
}

export default SmileButton;

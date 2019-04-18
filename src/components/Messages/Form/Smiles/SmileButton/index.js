import React from 'react';
import styles from './styles.module.css';
import {smilesData} from "../index";


const SmileButton = (props) => {
    return (
        <button
            value={smilesData[props.name]}
            onClick={props.onSmileClick}
            className={styles[props.name]}
            name={props.name}
        />
    );
}

export default SmileButton;

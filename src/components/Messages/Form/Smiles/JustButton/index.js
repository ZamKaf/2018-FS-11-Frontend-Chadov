import React, { useState } from 'react';
import styles from './styles.module.css';

export default (props) => {
    const [count, setCount] = useState(0);
    const colourNames = ["redButton", "blueButton", "greenButton"]
    return (
        <button
            onClick={() => setCount((count + 1) % 3)}
            className={styles[colourNames[count]]}
            name={colourNames[count]}
        />
    );
}

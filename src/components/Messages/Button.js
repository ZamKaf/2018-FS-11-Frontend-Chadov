import React, {  } from 'react';

const Button = (props) => {
    const isVisible = props.visible;
    if (isVisible) {
        return <button type="submit" />
    }
    return null;
}
export default Button;

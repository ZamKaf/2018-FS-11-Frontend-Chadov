import React, { Component } from 'react';

function Button (props) {
    const isVisible = props.visible;
    if (isVisible) {
        return <button type="submit" />
    }
    return null;
}
export default Button;

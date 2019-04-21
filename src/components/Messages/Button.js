import React, {  } from 'react';

export default (props) => {
    const isVisible = props.visible;
    if (isVisible) {
        return <button type="submit" />
    }
    return null;
}

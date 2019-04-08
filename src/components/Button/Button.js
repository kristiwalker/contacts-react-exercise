/* jshint esversion: 6 */
import React from 'react';
import classes from './Button.module.scss';

const button = props => {

    function isClicked(e) {
        const buttonType = e.target.textContent.toLowerCase();
        console.log(buttonType);
        return props[buttonType];
    }

    return (
        <button
            className={classes.Button}
            onClick={isClicked}>
            {props.buttonType}
        </button>
    );
}

export default button;

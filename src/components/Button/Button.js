/* jshint esversion: 6 */
import React from 'react';
import classes from './Button.module.css';

const button = props => {
    return (
        <button
            // ref={toggleBtnRef}
            className={classes.Button}>
            {props.buttonType}
        </button>
    );
}

export default button;

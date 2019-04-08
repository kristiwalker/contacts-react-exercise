/* jshint esversion: 6 */
import React from 'react';
import classes from './Button.module.scss';

const button = props => {
    return (
        <button
            // ref={toggleBtnRef}
            className={classes.Button}
            onClick={props.click}>
            {props.buttonType}
        </button>
    );
}

export default button;

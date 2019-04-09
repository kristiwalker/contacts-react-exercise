/* jshint esversion: 6 */
import React from 'react';
import Aux from '../../hoc/Aux/Aux';

import classes from './Button.module.scss';

const button = props => {

    let action;
    const type = props.buttonType.toLowerCase();

    if (type === "delete") {
        action = props.delete;
    } else if (type === "add" || type === "save") {
        action = props.add;
    } else if (type === "edit") {
        action = props.edit;
    }

    const button = <button className={classes.Button} onClick={action}>{props.buttonType}</button>;

    return (
        <Aux>
            {button}
        </Aux>
    );
}

export default button;

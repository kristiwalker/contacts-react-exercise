/* jshint esversion: 6 */
import React from 'react';
import Aux from '../../../hoc/Aux/Aux';

const contactCard = props => {
    return (
        <Aux>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Phone: {props.phone}</p>
        </Aux>
    );
}

export default contactCard;

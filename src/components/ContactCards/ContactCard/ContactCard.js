/* jshint esversion: 6 */
import React from 'react';
import classes from './ContactCard.module.css';

const contactCard = props => {
    return (
        <div className={classes.ContactCard}>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Phone: {props.phone}</p>
        </div>
    );
}

export default contactCard;

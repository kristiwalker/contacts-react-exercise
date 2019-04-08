/* jshint esversion: 6 */
import React from 'react';
import Button from '../../Button/Button';

import contactClasses from './ContactCard.module.scss';

const contactCard = props => {
    return (
        <div className={contactClasses.ContactCard}>
            <Button buttonType={"Edit"}/>
            <Button buttonType={"Delete"} click={props.click}/>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Phone: {props.phone}</p>
        </div>
    );
}

export default contactCard;

/* jshint esversion: 6 */
import React from 'react';
import Button from '../../Button/Button';

import contactClasses from './ContactCard.module.scss';

const contactCard = props => {
    let nameField = props.name;
    let emailField = props.email;
    let phoneField = props.phone;

    if (props.editing) {
        nameField = <input id="name" type="text" placeholder={props.name} />;
        emailField = <input id="email" type="text" placeholder={props.email} />;
        phoneField = <input id="phone" type="text" placeholder={props.phone} />;
    }

    return (
        <div id={props.id} className={contactClasses.ContactCard}>
            <p><strong>Name:</strong> {nameField}</p>
            <p><strong>Email:</strong> {emailField}</p>
            <p><strong>Phone:</strong> {phoneField}</p>
            <Button buttonType={"Edit"} edit={props.edit}/>
            <Button buttonType={"Delete"} delete={props.delete}/>
        </div>
    );
}

export default contactCard;

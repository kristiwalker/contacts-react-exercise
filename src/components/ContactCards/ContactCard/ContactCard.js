/* jshint esversion: 6 */
import React from 'react';
import Button from '../../Button/Button';

import contactClasses from './ContactCard.module.scss';

const contactCard = props => {
    let nameField = props.name;
    let emailField = props.email;
    let phoneField = props.phone;
    let buttonText = "Edit";

    if (props.editablePerson) {
        nameField = <input name="name" type="text" defaultValue={props.name} onChange={props.change} />;
        emailField = <input name="email" type="text" defaultValue={props.email} onChange={props.change} />;
        phoneField = <input name="phone" type="text" defaultValue={props.phone} onChange={props.change} />;
        buttonText = "Save";
    }

    // combine vars into var template
    // when button is clicked, select its parent component
    // pass conditional from contact cardS to decide which template to use

    return (
        <div id={props.id} className={contactClasses.ContactCard}>
            <p><strong>Name:</strong> {nameField}</p>
            <p><strong>Email:</strong> {emailField}</p>
            <p><strong>Phone:</strong> {phoneField}</p>
            <Button buttonType={buttonText} edit={props.edit}/>
            <Button buttonType={"Delete"} delete={props.delete}/>
        </div>
    );
}

export default contactCard;

/* jshint esversion: 6 */
import React from 'react';
import Button from '../../Button/Button';

import contactClasses from './ContactCard.module.scss';

const contactCard = props => {
    let nameField = props.name;
    let emailField = props.email;
    let phoneField = props.phone;
    let buttonText = "Edit";

    // TODO: Make component for inputs
    // TODO: Inputs need validation
    // if edit button is clicked (active)
    if (props.editablePerson) {
        nameField = <input name="name" type="text" defaultValue={props.name} onChange={props.change} />;
        emailField = <input name="email" type="text" defaultValue={props.email} onChange={props.change} />;
        phoneField = <input name="phone" type="text" defaultValue={props.phone} onChange={props.change} />;
        buttonText = "Save";
    }

    // TODO: Make component for repeating p tags
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

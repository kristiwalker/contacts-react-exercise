/* jshint esversion: 6 */
import React from 'react';
import Button from '../Button/Button';

import contactClasses from '../ContactCards/ContactCard/ContactCard.module.scss';

//TODO: make components for repeating elements like inputs
//TODO: inputs need validation
const contactForm = props => {
    return (
        <div className={contactClasses.ContactCard}>
            <strong>Name: </strong>
            <input id="name"
                type="text" />
            <br />

            <strong>Email: </strong>
            <input id="email"
                type="text" />
            <br />

            <strong>Phone: </strong>
            <input id="phone"
                type="text" />
            <br />
            <Button buttonType="Add" add={props.add}></Button>
        </div>
    );
}

export default contactForm;

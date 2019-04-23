/* jshint esversion: 6 */
import React from 'react';
import Aux from '../../../../hoc/Aux/Aux';

import contactClasses from '../ContactCard.module.scss';

const contactInfoDisplay = props => {
    return (
        <Aux>
            <p>
                <strong>Name:</strong>
                <input name="name" type="text" defaultValue={props.name} onChange={props.change} />
            </p>
            <p>
                <strong>Email:</strong> {props.email}
                <input name="email" type="text" defaultValue={props.email} onChange={props.change} />
            </p>
            <p>
                <strong>Phone:</strong> {props.phone}
                <input name="phone" type="text" defaultValue={props.phone} onChange={props.change} />
            </p>
        </Aux>
    );
}

export default contactInfoDisplay;

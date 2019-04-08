/* jshint esversion: 6 */
import React from 'react';
import ContactCard from './ContactCard/ContactCard';
import Aux from '../../hoc/Aux/Aux';

const contactCards = props => {
    return props.contacts.map((person, i) => {
        return (
            <ContactCard
                name={person.name}
                email={person.email}
                phone={person.phone}
                key={person.id}
                add={() => props.add}
                delete={() => props.delete(i)}
            />
        );
    });
}

export default contactCards;

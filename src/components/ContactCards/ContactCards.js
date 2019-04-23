/* jshint esversion: 6 */
import React from 'react';
import ContactCard from './ContactCard/ContactCard';

const contactCards = props => {
    return props.contacts.map((person, i) => {
        let editablePerson = false;

        if (props.editing && i === props.editingIndex) {
            editablePerson = true;
        }

        return (
            <ContactCard
                id={person.id}
                key={person.id}
                name={person.name}
                email={person.email}
                phone={person.phone}
                edit={(e) => props.edit(e, i)}
                change={(e) => props.change(e, person.id)}
                editablePerson={editablePerson}
                delete={() => props.delete(i)}
            />
        );
    });
}

export default contactCards;

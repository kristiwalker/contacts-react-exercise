/* jshint esversion: 6 */
import React from 'react';
import ContactCard from './ContactCard/ContactCard';
import Aux from '../../hoc/Aux/Aux';
import Context from '../../Context/Context';

const contactCards = () => {
    <Context.Consumer>
        {context => (
            <Aux>
                {context.contacts.map((person, i) => {
                    let editablePerson = false;

                    if (context.editing && i === context.editingIndex) {
                        editablePerson = true;
                    }


                    return (
                        <ContactCard
                            id={person.id}
                            key={person.id}
                            name={person.name}
                            email={person.email}
                            phone={person.phone}
                            edit={(e) => context.edit(e, i)}
                            change={(e) => context.change(e, person.id)}
                            editablePerson={editablePerson}
                            delete={() => context.delete(i)}
                        />
                    );
                })}
            </Aux>
        )}
    </Context.Consumer>
}

export default contactCards;

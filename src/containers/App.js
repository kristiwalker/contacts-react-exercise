/*jshint esversion: 6 */

import React, { Component } from 'react';

import Aux from '../hoc/Aux/Aux';
import Title from '../components/Title/Title';
import ContactCards from '../components/ContactCards/ContactCards';
import Button from '../components/Button/Button';

import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: []
        };
    }

    componentDidMount() {
        // fetch data and update state
        fetch('./contacts')
            .then(response => {
                return response.json();
            })
            .then(data => {
                data = data.contacts;
                for (var i = 0; i < data.length; i++) {
                    // remove all spaces and non alphabet chars
                    data[i].name = data[i].name.replace(/[^0-9a-zA-Z]/g, '');
                    // add in just one space before capital letters
                    data[i].name = data[i].name.replace(/([A-Z])/g, ' $1').trim();
                }

                return this.setState({contacts: data}); // need .catch() at end? It was causing errors
            });
     }

    addContactHandler = (contactIndex) => {
        // slice copies the array and returns it to your variable as a new one that doesn't overrite the woritingal array
        // const persons = this.state.persons.slice();
        // you should always update state in an immutable fashion (not mutating the original, but making a copy!)
        // es6 spreads out the objects from your old array to the new array as a copy
        const contacts = [...this.state.contacts];
        console.log(this.addContactHandler);
        this.setState({contacts: contacts});
    }

    deleteContactHandler = (contactIndex) => {
        // slice copies the array and returns it to your variable as a new one that doesn't overrite the woritingal array
        // const persons = this.state.persons.slice();
        // you should always update state in an immutable fashion (not mutating the original, but making a copy!)
        // es6 spreads out the objects from your old array to the new array as a copy
        const contacts = [...this.state.contacts];
        contacts.splice(contactIndex, 1);
        this.setState({contacts: contacts});
    }

    render() {
        return (
            <Aux>
                <Title />
                <Button
                    buttonType="Add" />
                <ContactCards
                    contacts={this.state.contacts}
                    add={this.addContactHandler}
                    delete={this.deleteContactHandler}/>
            </Aux>
        );
    }
}

export default App;

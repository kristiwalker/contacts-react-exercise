/*jshint esversion: 6 */

import React, { Component } from 'react';

import Aux from '../hoc/Aux/Aux';
import ContactCards from '../components/ContactCards/ContactCards';
import ContactForm from '../components/ContactForm/ContactForm';
import Button from '../components/Button/Button';

import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: [],
            editing: false
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

    addContactHandler = (e) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const id = Math.random() * 10;

        const contacts = [...this.state.contacts];
        const test = {"id":id,"name":name,"email":email,"phone":phone}
        contacts.unshift(test);

        this.setState({contacts: contacts});
    }

    editContactHandler = (contactIndex) => {
        const inactive = this.state.editing;
        this.setState({editing: !inactive});
    }

    deleteContactHandler = (contactIndex) => {
        const contacts = [...this.state.contacts];
        contacts.splice(contactIndex, 1);
        this.setState({contacts: contacts});
    }

    render() {
        return (
            <div className="App">
                <h1>Your contacts</h1>
                <h2>View, add, edit or delete</h2>
                <ContactForm
                    add={this.addContactHandler}/>
                <ContactCards
                    contacts={this.state.contacts}
                    edit={this.editContactHandler}
                    editing={this.state.editing}
                    delete={this.deleteContactHandler}/>
            </div>
        );
    }
}

export default App;

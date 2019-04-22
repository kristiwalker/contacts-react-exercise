/*jshint esversion: 6 */

import React, { Component } from 'react';

import Aux from '../hoc/Aux/Aux';
import ContactCards from '../components/ContactCards/ContactCards';
import ContactForm from '../components/ContactForm/ContactForm';
import Button from '../components/Button/Button';

import './App.scss';

function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }
  return null
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: [],
            editing: false,
            editingIndex: ""
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
                    // remove all spaces and non alphabet chars from name
                    data[i].name = data[i].name.replace(/[^0-9a-zA-Z]/g, '');
                    // add in just one space before capital letters in name
                    data[i].name = data[i].name.replace(/([A-Z])/g, ' $1').trim();
                    // format phone number
                    data[i].phone = formatPhoneNumber(data[i].phone);
                }

                return this.setState({contacts: data}); // need .catch() at end? It was causing errors
            });
    }

    addContactHandler = (e) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        phone = formatPhoneNumber(phone);
        const id = Math.random() * 10;

        const contacts = [...this.state.contacts];
        const test = {"id":id,"name":name,"email":email,"phone":phone}
        contacts.unshift(test);

        this.setState({contacts: contacts});
    }

    editContactHandler = (e, i) => {
        console.log(i);
        const inactive = this.state.editing;
        this.setState({editing: !inactive});
        this.setState({editingIndex: i});
    }

    changeHandler = (e, id) => {
        const cardIndex = this.state.contacts.findIndex(item => {
            return item.id === id;
        });

        // spread the object properties into a new object rather than mutating the original person array reference
        // this is just an object with peroperties for the person that had the matching id
        const card = {
            ...this.state.contacts[cardIndex]
        };

        // update name of the person that had the matching id
        card[e.target.name] = e.target.value;

        if (e.target.name === 'phone') {
            card[e.target.name] = formatPhoneNumber(card[e.target.name]);
        }

        // spread the persons state array objects into a new array
        const contacts = [...this.state.contacts];

        // get object by index that corresponds to the id parameter
        contacts[cardIndex] = card;

        // set states of persons, copies unchanged objects and updates changed object
        this.setState((prevState, props) => {
            return {
                contacts: contacts
            };
        });
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
                    change={this.changeHandler}
                    editingIndex={this.state.editingIndex}
                    delete={this.deleteContactHandler}/>
            </div>
        );
    }
}

export default App;

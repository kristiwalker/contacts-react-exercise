/*jshint esversion: 6 */
import React, {Component} from 'react';
import MyProvider from '../Context/ContextProvider/ContextProvider';


import ContactCards from '../components/ContactCards/ContactCards';
import ContactForm from '../components/ContactForm/ContactForm';

import './App.scss';

class App extends Component {
    render() {
        return (
            <MyProvider>
                <div className="App">
                    <h1>Your contacts</h1>
                    <h2>View, add, edit or delete</h2>
                    <ContactForm />
                    {/* <ContactForm
                        add={this.addContactHandler}/> */}
                    <ContactCards />
                    {/* <ContactCards
                        contacts={this.state.contacts}
                        edit={this.editContactHandler}
                        editing={this.state.editing}
                        change={this.changeHandler}
                        editingIndex={this.state.editingIndex}
                        delete={this.deleteContactHandler}/> */}
                </div>
            </MyProvider>
        );
    }
}



export default App;

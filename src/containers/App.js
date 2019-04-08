/*jshint esversion: 6 */

import React, { Component } from 'react';
import './App.css';
import Aux from '../hoc/Aux/Aux';

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

    render() {
        return (
            <Aux>
                <header className = "App-header" >
                    <p>Edit <code> src / App.js </code> and save to reload. </p>
                    Learn React
                </header>
            </Aux>
        );
    }
}

export default App;

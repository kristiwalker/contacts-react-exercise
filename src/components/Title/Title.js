/* jshint esversion: 6 */
import React from 'react';
// import classes from './Title.css';
import Aux from '../../hoc/Aux/Aux';

const title = props => {
    return (
        <Aux>
            <h1>Your contacts</h1>
            <h2>View, add, edit or delete</h2>
        </Aux>
    );
}

export default title;

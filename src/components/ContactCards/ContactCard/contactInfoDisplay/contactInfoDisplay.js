/* jshint esversion: 6 */
import React from 'react';
import Aux from '../../../../hoc/Aux/Aux';

import contactClasses from '../ContactCard.module.scss';

const contactInfoDisplay = props => {
    return (
        <Aux>
            <p><strong>Name:</strong> {props.name}</p>
            <p><strong>Email:</strong> {props.email}</p>
            <p><strong>Phone:</strong> {props.phone}</p>
        </Aux>
    );
}

export default contactInfoDisplay;
//
// /* jshint esversion: 6 */
// import React from 'react';
// import Aux from '../../../../hoc/Aux/Aux';
//
// import contactClasses from '../ContactCard.module.scss';
//
// const contactInfoDisplay = props => {
//     return (
//         <p><strong>{props.contactKey}: </strong>{props.contactValue}</p>
//     );
// }
//
// export default contactInfoDisplay;

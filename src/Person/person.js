import React from 'react';

import './person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.clickListener}>
                I'm {props.name} and i am 
                {props.age} years old</p>
                <input type="text" onChange={props.nameChanged} />
            <p>{props.children}</p>
            
        </div>
    )
};

export default person;  
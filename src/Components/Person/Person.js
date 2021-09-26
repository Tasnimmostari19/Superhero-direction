import React from 'react';
import './Person.css'

const Person = (props) => {
    console.log(props.person);
    const { name, died, born, Nationality, img, salary } = props.person
    return (

        <div className='person'>
            <img src={img} alt="" />
            <h5>Name:{name}</h5>
            <h5>Died:{died}</h5>
            <h5>Born:{born}</h5>
            <h5>Salary:{salary}</h5>
            <h5>Nationality:{Nationality}</h5>
            <button className='button'>Add</button>
        </div>

    );
};

export default Person;
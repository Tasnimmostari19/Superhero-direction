import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import './Scientist.css'

const Scientist = () => {
    const [persons, setPersons] = useState([]);
    useEffect(() => {
        fetch('./scientist.JSON')
            .then(res => res.json())
            .then(data => setPersons(data))
    }, [])

    return (
        <div className='scientise-container'>
            <div className='person-div'>
                {
                    persons.map(person => <Person
                        key={Person.name}
                        person={person}
                    ></Person>)
                }
            </div>
            <div>
                <h5>Cart</h5>
            </div>
        </div>
    );
};

export default Scientist;
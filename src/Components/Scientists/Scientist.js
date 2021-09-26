import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

import Person from '../Person/Person';
import './Scientist.css'

const Scientist = () => {
    const [persons, setPersons] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./scientist.JSON')
            .then(res => res.json())
            .then(data => setPersons(data))
    }, [])

    const handleCart = (person) => {
        const newCart = [...cart, person];
        setCart(newCart);


    }

    return (
        <div className='scientise-container'>
            <div className='person-div'>
                {
                    persons.map(person => <Person
                        key={person.name}
                        person={person}
                        handleCart={handleCart}
                    ></Person>)
                }
            </div>
            <div>

                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Scientist;
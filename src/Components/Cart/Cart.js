import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const Cart = (props) => {
    const { cart } = props;
    // console.log(cart);
    let name = '';
    let total = 0;
    for (const person of cart) {
        total = total + person.salary;
        name = name + ' ' + person.name;
    }
    return (
        <div className='cart'>
            <h5>Total: ${total}</h5>

            <FontAwesomeIcon icon={faUser} />

            <br />
            <h3 className='name'>{name}</h3>

        </div>
    );
};

export default Cart;
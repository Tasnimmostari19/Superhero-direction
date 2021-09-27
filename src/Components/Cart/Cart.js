import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const Cart = (props) => {
    const { cart } = props;
    console.log(cart.length);
    let name = '';
    let total = 0;
    for (const person of cart) {
        total = total + person.salary;
        name = name + ' ' + person.name;
    }
    return (
        <div className='cart'>
            <h4>Total: ${total}</h4>

            <FontAwesomeIcon icon={faUser} /><span> {cart.length}</span>


            <br />
            <h3 className='name'>{name}</h3>

        </div>
    );
};

export default Cart;
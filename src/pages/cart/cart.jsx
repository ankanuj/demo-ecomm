import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import CartItem from '../../components/cart-component/cart.item.component';



const Cart = () => (
    <Container>
        <h1>Items In The Cart</h1>
        <Jumbotron> 
            
            <CartItem />            
         </Jumbotron>
    </Container>
);

export default Cart;
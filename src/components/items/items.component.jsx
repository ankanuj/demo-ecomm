import React from 'react';
import './items.style.scss';

import Container from 'react-bootstrap/Container';
import ContainerFluid from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import Jumbotron from 'react-bootstrap/Jumbotron';
import CartItem from '../cart-component/cart.item.component';


const Items = ({ title, items }) => (
        <ContainerFluid  className="items-list ">
            <h1 className='title'>{title}</h1>
            <Container className = "row">
                
                {
                    items.map((item) => 
                    (
                        <Jumbotron className="collection-item col-md-4" key={item.id}>
                            <div 
                                className='image'
                                style = {{backgroundImage:`url(${item.imageUrl})`}}
                            />
                            <Button className='add-cart btn btn-danger'>
                                ADD CART
                            </Button>
                            <div className='collection-footer'>
                                <span className = 'name'>{item.name.toUpperCase()}</span>
                                <span className = 'price'>Rs {item.price}</span>
                            </div>
                        </Jumbotron>
                    ))
                }
            </Container>
        </ContainerFluid>
);

export default Items;
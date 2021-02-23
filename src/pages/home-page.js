import React from 'react';
import SHOP_DATA from './shop.data';
import Items from '../components/items/items.component';
import Container from 'react-bootstrap/Container';


class HomePage extends React.Component {
    constructor(){
        super();
        this.state = {
            items:SHOP_DATA
        }
    }

render(){
    const {items} = this.state;
    return(
        <Container className = "row" >
            {
                items.map(({id, ...otherProps}) => 
                    (<Items key = {id} {...otherProps} />))
            }
        </Container>
    )
}
}
export default HomePage;
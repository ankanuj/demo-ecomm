import React from 'react';

class CartItem extends React.Component {
    constructor(props) {
        super();
        this.state = {
            cartItem : ''
        }
    }
    render() {
        return(
            <div>
                <h3> Add Item To cart please</h3>
            </div>
        )
    }
}

export default CartItem;
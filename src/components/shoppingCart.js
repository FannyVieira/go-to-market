import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../styles/shoppingCart.css';

class ShoppingCart extends Component{
    
   createShoppingItem = (itemCar) =>{
        return (
        <li key={itemCar.id}>
            {`
                Product: ${itemCar.product}
                Quantity: ${itemCar.quantity}
            `}
        </li>);
   };
    
    render(){
        return(
            <div className="theCart">
                <ul>
                {this.props.shoppingCart.map(this.createShoppingItem)}
                </ul>
            </div>
        )
    }
};
ShoppingCart.PropTypes={
    shoppingCart: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default ShoppingCart;
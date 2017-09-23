import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ShoppingForm extends Component{
    render(){
        return(
            <div className="header">
                <form onSubmit={this.props.handleSubmit}>
                    <input type="text" name="product" placeholder="Product" onChange={this.props.handleChange}/><br/><br/>
                    <input type="number" name="quantity" placeholder="Quantity" onChange={this.props.handleChange}/><br/><br/>
                    <button type="submit">Add to Shopping List</button><br/><br/>
                </form>
            </div>
        );
    }
};

ShoppingForm.PropTypes = {
    handleChange: PropTypes.func.isRequired
}

export default ShoppingForm;
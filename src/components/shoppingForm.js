import React from 'react';
import PropTypes from 'prop-types';

const ShoppingForm = (props) => {
    const { handleChange, handleSubmit } = props;
    return(
        <div className="header">
            <form onSubmit={handleSubmit}>
                <input type="text" name="product" placeholder="Product" onChange={handleChange}/><br/><br/>
                <input type="number" name="quantity" placeholder="Quantity" onChange={handleChange}/><br/><br/>
                <button type="submit">Add to Shopping List</button><br/><br/>
            </form>
        </div>
    );
};

ShoppingForm.PropTypes = {
    handleChange: PropTypes.func.isRequired
}

export default ShoppingForm;
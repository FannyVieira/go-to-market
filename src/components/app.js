import React, { Component } from 'react';
import ShoppingForm from './shoppingForm';
import ShoppingCart from './shoppingCart';
import '../styles/app.css';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      newItemCar:{},
      shoppingCart:[]
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(e){
    e.preventDefault();
    const {name: nameInput, value: valueInput} = e.target;
    this.setState(prevState => ({
      newItemCar: {
          ...prevState.newItemCar,
          [nameInput]: valueInput,
          id: Date.now()
      }
    }));
  }

  handleSubmit(e){
    e.preventDefault();
    // Update data
    this.state.shoppingCart.push(this.state.newItemCar);
    // Update state
    this.setState({
      shoppingCart: this.state.shoppingCart
    });
    console.log(this.state.shoppingCart);
  };
  
  
  render() {
    return (
      <div className="shoppingMain">
        <ShoppingForm handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit}/>
        <ShoppingCart shoppingCart={this.state.shoppingCart}/>
      </div>
    );
  }
}

export default App;

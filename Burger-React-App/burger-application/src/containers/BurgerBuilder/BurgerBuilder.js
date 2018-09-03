import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/Build controls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad:10,
  bacon:40,
  cheese:20,
  meat:30
}

class BurgerBuilder extends Component {

  state = {
    ingredients:{
      salad : 0,
      meat : 0,
      cheese : 0,
      bacon : 0
    },
    totalPrice:50,
    purchasable:false,
    purchasing:false
  }

  updatePurchaseState =(ingredients) =>{
     
      const sum = Object.keys(ingredients).map(igKey =>{
        return ingredients[igKey]   // return numbers for each key
      })
      .reduce((sum,element) =>{     
        return sum+element          // addition of new sum and current sum
      },0);

      this.setState({
        purchasable: sum>0
      })
    
  }

  addingredients = (type) =>{
      const oldCount = this.state.ingredients[type];
      const updatedCount = oldCount + 1;
      const updatedIngredients = {...this.state.ingredients};
      updatedIngredients[type] = updatedCount;

      const priceAddition = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice + priceAddition;

      this.setState({
        totalPrice:newPrice,
        ingredients:updatedIngredients
      })
      this.updatePurchaseState(updatedIngredients);
  }

  removeIngredients = (type) =>{
    const oldCount = this.state.ingredients[type];
      const updatedCount = oldCount - 1;
      if(oldCount <=0){
        return alert('Please add any item !');
      }
      const updatedIngredients = {...this.state.ingredients};
      updatedIngredients[type] = updatedCount;

      const priceAddition = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceAddition;

      this.setState({
        totalPrice:newPrice,
        ingredients:updatedIngredients
      })

      this.updatePurchaseState(updatedIngredients);
  } 

  purchaseHandler = () =>{
    this.setState({
      purchasing: true
    })
  }

  purchaseCancelHandler = () =>{
    this.setState({
      purchasing:false
    })
  }

  purchaseContinueHandler = () =>{
    alert('You can continue !');
  }
  
  render() {
    const disabledInfo = {...this.state.ingredients};
    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <=0
    }

    return (
      <div>
        <Aux>
            <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                <OrderSummary ingredients={this.state.ingredients} purchaseCanceled={this.purchaseCancelHandler} puchaseContinued={this.purchaseContinueHandler} price={this.state.totalPrice} />  
            </Modal>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls ingredientsAdded={this.addingredients} ingredientsRemoved={this.removeIngredients} 
            disabled={disabledInfo} price={this.state.totalPrice} purchasable={this.state.purchasable} ordered={this.purchaseHandler} />
        </Aux>  
      </div>
    );
  }
}

export default BurgerBuilder;

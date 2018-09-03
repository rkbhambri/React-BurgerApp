import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Buttons/Button';

const orderSummary = (props) => {
        
        const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey =>{
            return (
                <li key={igKey}>
                    {igKey} : {props.ingredients[igKey]} 
                </li>);
          });  
    return(       
        <Aux showOrder={props.showOrderEnable}>
            
            <h2>Your order</h2>
            <p>Your Burger has following ingredients : </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><b>Total Price : {props.price}</b></p>
            <p>Continue to checkout ...?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>Cancel</Button>
            <Button btnType="Success" clicked={props.puchaseContinued}>Continue</Button>
        </Aux>    
    );
};

export default orderSummary;
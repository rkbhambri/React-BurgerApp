import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) =>{

    //This how to convert an object into an array
    let tranformIngredients = Object.keys(props.ingredients)
    .map(igkey =>{
        return [...Array(props.ingredients[igkey])].map((ig,index) =>{
            return <BurgerIngredients key={igkey + ig} type={igkey}/>;
        });
    }).reduce((previousArr,currentArr) =>{
        return previousArr.concat(currentArr)
    },[]);
    console.log(tranformIngredients);
    if(tranformIngredients.length === 0){
        tranformIngredients = <h3>Please add ingredients</h3>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />
            {tranformIngredients}
            <BurgerIngredients type="bread-bottom" />
        </div>
    );
};

export default burger;
import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './Build control/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'}
];

const buildControls = (props) =>(

    <div className={classes.BuildControls}>
       <h3> Current Price : <b> {props.price}</b></h3>
        {controls.map(ctrl => (
            <BuildControl added={() => props.ingredientsAdded(ctrl.type)} key={ctrl.label} label={ctrl.label} remove={() => props.ingredientsRemoved(ctrl.type)} disabled={props.disabled[ctrl.type]} />
         ))}

         <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>ORDER NOW</button>

    </div>

);

export default buildControls;
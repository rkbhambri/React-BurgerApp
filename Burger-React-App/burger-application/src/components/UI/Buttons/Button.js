import React from 'react';
import classes from './Button.css';

const button = (props) =>(
    <div onClick={props.clicked} className={[classes.Button, classes[props.btnType]].join(' ')}> 
        {props.children}
    </div>
);

export default button;
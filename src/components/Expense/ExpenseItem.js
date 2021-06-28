import React, { useState } from 'react';

import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'


const  ExpenseItem=(props)=>{
   const  [desc,setDesc]=useState(props.desc)
  
    
     const clickAfter=()=>{
       setDesc("updated")
        console.log(desc);
    }
    return(
      <li>
    <Card className="expense-item"> 
   <ExpenseDate date={props.date}></ExpenseDate>
    <div  className="expense-item__description">
       <h2>{props.desc}</h2> 
       <div className="expense-item__price">
        {props.price}
    </div>
    </div>
     <button onClick={clickAfter}>Click </button> 
   
    </Card>
    </li>);
}
export default ExpenseItem;
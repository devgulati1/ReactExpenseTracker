

import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense=(props)=>{
    const [isEditing,setIsEditing]=useState(false)
    const onSaveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData)
        stopEditingHandler()

        

        }
        const setEditingHandler=()=>{
       setIsEditing(true)
        }
        const stopEditingHandler=()=>{
            setIsEditing(false)
        }

    
    return <div className="new-expense">
       { !isEditing &&<button onClick={setEditingHandler}>Add A New Expense</button>}
        
        
      {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={onSaveExpenseDataHandler}></ExpenseForm> }
       
    </div>

}
export default NewExpense;
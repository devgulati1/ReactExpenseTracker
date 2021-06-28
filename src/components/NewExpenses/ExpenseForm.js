import {useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm=(props)=>{
    const [enteredTitle,setEnteredTitle]=useState('');
    const[enteredAmount,setEnteredAmount]=useState('');
    const[enteredDate,setEnteredDate]=useState('');
    //  for title
    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
       
    }

    // for Amount
    const amountOnChangeHandler=(event)=>{
        setEnteredAmount(event.target.value)
        
    }
    // Date
    const dateOnChangeHandler=(event)=>{
        setEnteredDate(event.target.value)
        
    }
    // after submit click
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            desc:enteredTitle,
            price:enteredAmount,
            date: new Date(enteredDate),
        }
        console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            

            <div className="new-expense__control">
            <label>Title</label>
            <input   value={enteredTitle} type="text" onChange={titleChangeHandler}></input>
            </div>

            <div className="new-expense__control">
            <label>Amount</label>
            <input value={enteredAmount} type="number" min="0.01" step="0.01" onChange={amountOnChangeHandler}></input>
            </div>

            <div className="new-expense__control">
            <label>date</label>
            <input value={enteredDate} type="date" min="2019-01-01" max="2022-12-31" onChange={dateOnChangeHandler}></input>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type='submit' >Add Expense</button>
            </div>


        </div>
    </form>

    
}
export default ExpenseForm
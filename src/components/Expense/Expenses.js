import React,{useState} from 'react';

import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css';

import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

const Expenses=(props)=>{
    const[val,setVal]=useState('2020');
    const ExpenseFilterHandler=(filterVal)=>{
        setVal(filterVal);
       

        console.log(filterVal);
        
        
    }

    const filterExpenses=props.items.filter(expense=>{
        return expense.date.getFullYear().toString()===val;
    })

  
          
         
    return (
        <div>
            

       
    
    <Card className="expenses">
    <ExpenseFilter  selected={val} onExpenseFilter={ExpenseFilterHandler}></ExpenseFilter>
    <ExpenseChart chartExpense={filterExpenses}></ExpenseChart>
    <ExpensesList item={filterExpenses}></ExpensesList>

    {/* {filterExpenses.length===0 ? <p>No Expenses Found</p>:(filterExpenses.map(expense=>(<ExpenseItem  key={expense.id} desc={expense.desc} price={expense.price} date={expense.date}/>)))} */}
    
   
      
      
    </Card>
    
    </div>);
}
export default Expenses;
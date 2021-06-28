import React,{useState} from "react";
import ExpenseFilter from './components/Expense/ExpenseFilter';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';


const DUMMY_EXPENSES=[
  {
    id:"e1",
   desc:"car insurance",
   price:23.4,
   date:new Date(2020,12,28),
  },
  {
    id:"e2",
    desc:"rent",
   price:21.5,
   date:new Date(2021,2,20),
  },
 
];

const App=() =>{
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES)


 
    
    
  

  

  const addExpenseHandler=(expense)=>{
   setExpenses((expenses)=>{
     console.log(expenses)
     return [expense, ...expenses]
   })
    console.log(expense)
    
    console.log(expenses);

  
   }
  

  
 
 

  return (
        <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses     items={expenses}></Expenses>
     </div>
  );
  }


export default App;

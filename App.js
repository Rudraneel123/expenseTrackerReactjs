
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import React,{useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';

const dummy_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  { 
  id: 'e2', 
  title: 'New TV',
  amount: 17999.49,
  date: new Date(2023, 1, 12)
 },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 8000.00,
    date: new Date(2023, 2, 28),
  },
  { 
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 3500,
    date: new Date(2024, 5, 12),
  },
];


const App = () => {
  const[expenses,setExpenses]=useState(dummy_expenses);
  
  const addExpenseHandler =expense => {
    setExpenses(prevExpenses=>{
      return [expense,...prevExpenses]
    });
  }

  //jsx
  // return React.createElement('div',{},React.createElement('h2',{},"Expense Tracker"),
  // React.createElement(Expenses,{items: expenses})
  // );
  return (
    <div>
      <NewExpense onAddExpense ={addExpenseHandler}/>
      <Expenses items ={expenses}/>
    </div>
  );
}

export default App;

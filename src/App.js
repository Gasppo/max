import NewExpense from "./components/Expenses/components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { defaultExpenses } from './utils/defaultExpenses';
import React from 'react'

function App() {

  const dbExpenses = defaultExpenses()
  const [expenses, setExpenses] = React.useState(dbExpenses)


  const handleExpenseAdd = (addedExpense) => {
    setExpenses(prev => [addedExpense, ...prev])
  }

  return (
    <div>
      <NewExpense onAddExpense={handleExpenseAdd} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

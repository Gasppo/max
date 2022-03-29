import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/components/NewExpense/NewExpense";
import { defaultExpenses } from './utils/defaultExpenses'
import ExpensesFilter from "./components/Expenses/components/ExpenseFilter/ExpenseFilter";
function App() {

  const expenses = defaultExpenses()

  const handleExpenseAdd = (addedExpense) => {
    console.log('In app.js')
    console.log(addedExpense)
  }

  return (
    <div>
      <NewExpense onAddExpense={handleExpenseAdd} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

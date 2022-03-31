import React from 'react'
import "./NewExpense.css"
import ExpenseForm from './ExpenseForm/ExpenseForm'

const NewExpense = (props) => {

    const [openForm, setOpenForm] = React.useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
    }

    const handleFormOpen = () => {
        setOpenForm(true)
    }

    const handleCloseForm = () => {
        setOpenForm(false)
    }

    return (
        <div className='new-expense'>
            {openForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCloseForm={handleCloseForm} />}
            {!openForm && <button onClick={handleFormOpen}> Add New Expense</button>}
        </div>
    )
}

export default NewExpense
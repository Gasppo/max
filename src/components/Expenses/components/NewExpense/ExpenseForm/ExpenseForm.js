import React, { useState } from 'react'
import "./ExpenseForm.css"

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const handleTitleChange = (event) => {
        setEnteredTitle(event.target.value)
    }

    const handleAmountChange = (event) => {
        setEnteredAmount(event.target.value)
    }

    const handleDateChange = (event) => {
        setEnteredDate(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData)

        setEnteredAmount('')
        setEnteredDate('')
        setEnteredTitle('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='new_expense__controls'>
                <div className='new_expense__control'>
                    <label>Titles</label>
                    <input type='text' value={enteredTitle} onChange={handleTitleChange} />
                </div>
                <div className='new_expense__control'>
                    <label>Amount</label>
                    <input type='number' min={'0.01'} value={enteredAmount} step="0.01" onChange={handleAmountChange} />
                </div>
                <div className='new_expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' value={enteredDate} max='2022-12-31' onChange={handleDateChange} />
                </div>
            </div>
            <div className='new-expense__buttons'>
                <div className='new-expense__actions'>
                    <button onClick={props.onCloseForm}>Cancel</button>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm
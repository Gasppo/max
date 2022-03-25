import React from 'react'
import Card from '../Core/Card/Card'
import ExpenseItem from './components/ExpenseItem/ExpenseItem'
import './Expenses.css'

const Expenses = ({ expenses }) => {
    return (
        <Card className='expenses'>
            {expenses.map(el => <ExpenseItem expense={el} />)}
        </Card>
    )
}

export default Expenses
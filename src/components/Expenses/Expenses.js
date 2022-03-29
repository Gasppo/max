import React, { useState } from 'react'
import Card from '../Core/Card/Card'
import ExpensesFilter from './components/ExpenseFilter/ExpenseFilter'
import ExpenseItem from './components/ExpenseItem/ExpenseItem'
import './Expenses.css'

const Expenses = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState('2020')

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onFilterChange={setFilteredYear} />
            {expenses.map(el => <ExpenseItem expense={el} />)}
        </Card>
    )
}

export default Expenses
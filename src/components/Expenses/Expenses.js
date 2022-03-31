import React, { useState } from 'react'
import Card from '../Core/Card/Card'
import ExpensesFilter from './components/ExpenseFilter/ExpenseFilter'
import ExpenseList from './components/ExpenseList/ExpenseList'
import ExpensesChart from './components/ExpensesChart/ExpensesChart'
import './Expenses.css'

const Expenses = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filteredExpenses = expenses.filter(el => el.date.getFullYear().toString() === filteredYear)

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onFilterChange={setFilteredYear} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpenseList expenses={filteredExpenses} />
        </Card>
    )
}

export default Expenses
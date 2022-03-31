import React from 'react'
import './ExpenseList.css'
import ExpenseItem from '../ExpenseItem/ExpenseItem'

const ExpenseList = ({ expenses }) => {

    if (expenses?.length === 0) return <h2 className='expenses-list__fallback'>No expenses found</h2>

    return (
        <ul className='expenses-list'>
            {expenses.map(el => (
                <ExpenseItem
                    title={el.title}
                    amount={el.amount}
                    date={el.date}
                    key={el.id}
                />
            ))}
        </ul>
    )
}

export default ExpenseList
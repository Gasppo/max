import React, { useState } from 'react'
import Card from '../../../Core/Card/Card'
import ExpenseDate from '../ExpenseDate/ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem = ({ expense }) => {

    const { title, amount, date } = expense
    const [currTitle, setTitle] = useState(title)

    // const handleClick = () => {
    //     setTitle('New Title')
    // }

    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{currTitle}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            {/* <button onClick={handleClick}>Change Title</button> */}
        </Card>
    )
}

export default ExpenseItem
import React from 'react'
import './ChartBar.css'

const ChartBar = ({ maxValue, label, value }) => {

    const barHeight = maxValue > 0 ? Math.round((value / maxValue) * 100) + '%' : '0%'

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{ height: barHeight }} ></div>
            </div>
            <div className='chart-bar__label'>{label}</div>
        </div>
    )
}

export default ChartBar
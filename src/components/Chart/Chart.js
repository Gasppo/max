import React from 'react'
import './Chart.css'
import ChartBar from './components/ChartBar/ChartBar'

const Chart = ({ dataPoints }) => {

    const dataPointValues = dataPoints.map(el => el.value)
    const totalMaximuim = Math.max(...dataPointValues)

    return (
        <div className='chart'>
            {dataPoints.map(dataPoint => <ChartBar value={dataPoint.value} maxValue={totalMaximuim} label={dataPoint.label} key={dataPoint.label} />)}
        </div>
    )
}

export default Chart
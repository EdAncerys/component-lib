import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { PieChartHeading, PieChartWrapper } from './style'

ChartJS.register(ArcElement, Tooltip, Legend)

interface PieChartInterFace {
  data: {
    labels: string[]
    datasets: {
      label: string
      data: number[]
      backgroundColor: string[]
      borderWidth: number
      hoverOffset: number
    }[]
  }
}

const PieChart: React.FC<PieChartInterFace> = ({ data }: PieChartInterFace) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  }

  return (
    <PieChartWrapper>
      <PieChartHeading>Top Performers</PieChartHeading>
      {/* @ts-ignore */}
      <Pie data={data} options={options} />
    </PieChartWrapper>
  )
}

export default PieChart

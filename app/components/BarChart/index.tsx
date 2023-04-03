import React, { useRef, useState } from 'react'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js'

import { Bar } from 'react-chartjs-2'
import {
  BarChartContainer,
  BarChartWrapper,
  BarHeadContainer,
  BarHeadTitle,
  ExportButton,
  ExportButtonText,
  ExportIcon,
} from './style'
import TabButtons from './TabButtons'
import exportIcon from '../../assets/icons/exportIcon.svg'
import jsPDF from 'jspdf'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

interface BarChartProp {
  barChartData: string[]
  activeTab: number
  setActiveTab: (value: number) => void
  barLabels: string[]
}

const BarChart = ({
  barChartData,
  activeTab,
  setActiveTab,
  barLabels,
}: BarChartProp) => {
  const chartData: string[] = barChartData

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          beginAtZero: true,
          stepSize: 5000,
          callback: (value: string | number | unknown) => '$' + value,
        },
        grid: {
          color: 'white',
        },
      },
      x: {
        grid: {
          color: 'transparent',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }
  const data = {
    labels: barLabels,
    datasets: [
      {
        data: chartData.map((value) => Number(value.replace(/[^0-9.-]+/g, ''))),
        backgroundColor: '#4A42D6',
        borderColor: '#4A42D6',
        borderRadius: 1,
        borderWidth: 0.5,
        barPercentage: 1,
        categoryPercentage: 1,
        barThickness: 25,
        maxBarThickness: 40,
        minBarThickness: 30,
        tension: 0.1,
      },
    ],
  }

  const chartRef = useRef<ChartJS<'bar', number[], string> | null>(null)
  const handleExport = () => {
    console.log('Preparing PDF')
    const chartCanvas = chartRef.current?.ctx.canvas as HTMLCanvasElement
    const imgData = chartCanvas.toDataURL('image/png' as any)
    const pdf = new jsPDF()

    pdf.text('Bar Chart Report', 10, 10)
    pdf.addImage(imgData, 'PNG', 20, 20, 100, 50)

    pdf.save('chart.pdf')
  }

  return (
    <BarChartWrapper>
      <BarHeadContainer>
        <BarHeadTitle>Sales Report</BarHeadTitle>

        <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />

        <ExportButton onClick={() => handleExport()}>
          <ExportIcon src={exportIcon} alt='export' />
          <ExportButtonText>Export PDF</ExportButtonText>
        </ExportButton>
      </BarHeadContainer>

      <BarChartContainer>
        <Bar data={data} options={options} ref={chartRef}></Bar>
      </BarChartContainer>
    </BarChartWrapper>
  )
}

export default BarChart

import styled from '@emotion/styled'
import Image from 'next/image'

export const BarChartWrapper = styled.div`
  color: black;
  background: #eeeaea;
  border-radius: 15px;
  width: 65em;
  height: 20em;
`

export const BarHeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
`

export const BarHeadTitle = styled.h2``

export const FilterButton = styled.button``

export const BarChartContainer = styled.div`
  width: 100%;
  height: 75%;
  margin: auto;
`

// Tab buttons
export const TabButton = styled.button<{ active: boolean }>`
  background-color: ${(props: any) => (props.active ? 'blue' : 'white')};
  color: ${(props: any) => (props.active ? 'white' : 'black')};
  font-size: 12px;
  font-weight: bold;
  padding: 15px 25px;
  border-radius: ${(props: any) => (props.active ? '25px' : 'none')};
  border: none;
  cursor: pointer;
`

export const TabContainer = styled.div`
  display: flex;
  gap: 1em;
  justify-content: space-between;
`

// export button
export const ExportButton = styled.button`
  width: 12em;
  height: 3.5em;
  background-color: white;
  font-size: 12px;
  color: black;
  font-weight: bold;
  /* padding: 15px 25px; */
  border: 1px solid #4629d3;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  cursor: pointer;
`

export const ExportIcon = styled(Image)``

export const ExportButtonText = styled.span``

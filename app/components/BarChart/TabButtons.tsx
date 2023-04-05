import React, { useState } from 'react'
import { TabButton, TabContainer } from './style'

interface TabButtonsInterface {
  activeTab: any
  setActiveTab: any
}

const TabButtons = ({ activeTab, setActiveTab }: TabButtonsInterface) => {
  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber)
  }

  return (
    <div>
      <TabContainer>
        <TabButton active={activeTab === 1} onClick={() => handleTabClick(1)}>
          12 Months
        </TabButton>
        <TabButton active={activeTab === 2} onClick={() => handleTabClick(2)}>
          6 Months
        </TabButton>
        <TabButton active={activeTab === 3} onClick={() => handleTabClick(3)}>
          30 Days
        </TabButton>
        <TabButton active={activeTab === 4} onClick={() => handleTabClick(4)}>
          7 Days
        </TabButton>
      </TabContainer>
      <div>{/* content for the active tab goes here */}</div>
    </div>
  )
}

export default TabButtons

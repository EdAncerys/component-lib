'use client' // ⚠️ This is a client-side only component

import './page.css'
import ProfilePic from './assets/images/ProfilePic.png'

// --------------------------------------------------------------------------------
// 📌  Component Imports
// --------------------------------------------------------------------------------
import { Badge } from './components/Badge'
import { Card } from './components/Card'
import Reserve from './components/Reserve'
import myImage from '../app/assets/images/Rectangle 22766.png'
import Header from './components/Header'
import { useState } from 'react'
import { SearchResult } from './components/Header/headerInterface'

export default function Home() {
  // --------------------------------------------------------------------------------
  // 📌  Component List Page
  // This page is client-side only, so we can use React Hooks.
  // --------------------------------------------------------------------------------
  const [fromDate, setFromDate] = useState<string>('11/15/2022')
  const [tillDate, setTillDate] = useState<string>('11/15/2022')
  const handleReserveData = (fromDate: string, tillDate: string) => {
    // handle reserve data here
    console.log('From', fromDate, 'Till', tillDate)
  }

  //Added All to the dev branch

  const navList = [
    { slug: '/home', title: 'Home' },
    { slug: '/browse', title: 'Browse' },
    { slug: '/listItem', title: 'List an Item' },
  ]

  const [searchResult, setSearchResult] = useState<SearchResult>({
    searchValue: '',
    optionValue: '',
  })

  console.log('SEARCH RESULT', searchResult)

  return (
    <div className='container-wrapper'>
      <div className='container'>
        <Badge value='Com #1' backgroundColor='#c51111' />
        <Badge value='Com #2' />
        <Card
          imageSrc={myImage}
          cardPrice='$23'
          PriceDividedBy='Day'
          distance='1Km away'
          rating={4.9}
          ratingCount={23}
        >
          Best Dslr canon 100d camera
        </Card>

        <Badge value='Com #3' backgroundColor='#d2d2d2' />
        <Badge value='Com #4' backgroundColor='#d2d2d2' />
        <Badge value='Com #5' backgroundColor='#d2d2d2' />
        <Reserve
          reservePrice={'$23'}
          reserveDay={'day'}
          rentedByImage={ProfilePic}
          rentedByName={'Hillary Watson'}
          rentedByJoined={'April 2017'}
          rating={4.9}
          ratingCount={23}
          fromDate={fromDate}
          setFromDate={setFromDate}
          tillDate={tillDate}
          setTillDate={setTillDate}
          handleReserveData={handleReserveData}
        />
        <Header navList={navList} setSearchResult={setSearchResult}>
          Rentables
        </Header>
        <Badge value='Com #2' />
        <Badge value='Com #3' backgroundColor='#d2d2d2' />
      </div>
    </div>
  )
}

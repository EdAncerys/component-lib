'use client' // ⚠️ This is a client-side only component

import './page.css'
import ProfilePic from './assets/images/ProfilePic.png'
import slider1 from './assets/images/slider1.png'
import slider2 from './assets/images/slider2.png'
import slider3 from './assets/images/slider3.png'

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
import CardSlider from './components/CardSlider'
import { SlideImageInterface } from './components/CardSlider/interface'

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

  // slider images for prop

  const slideImageList: SlideImageInterface[] = [
    {
      id: 1,
      image: slider1,
      userName: 'Amy Cooper',
      textTitle: 'Director at Slack Inc.',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem usantium dolor ed ut perspiciatis unde omnis iste',
    },
    {
      id: 2,
      image: slider2,
      userName: 'Amy Cooper2',
      textTitle: 'Director at Slack Inc.',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem usantium dolor ed ut perspiciatis unde omnis iste',
    },
    {
      id: 3,
      image: slider3,
      userName: 'Amy Cooper3',
      textTitle: 'Director at Slack Inc.',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem usantium dolor ed ut perspiciatis unde omnis iste',
    },
  ]

  return (
    <div className='container-wrapper'>
      <div className='container'>
        <Badge value='Com #1' backgroundColor='#c51111' />
        <Header navList={navList} setSearchResult={setSearchResult}>
          Rentables
        </Header>
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
        <CardSlider ratingCount={4.9} slideImages={slideImageList}></CardSlider>
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
      </div>
    </div>
  )
}

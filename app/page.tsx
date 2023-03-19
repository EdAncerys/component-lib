'use client' // ⚠️ This is a client-side only component

import './page.css'

// --------------------------------------------------------------------------------
// 📌  Component Imports
// --------------------------------------------------------------------------------
import { Badge } from './components/Badge'
import Header from './components/Header'
import { useState } from 'react'
import { SearchResult } from './components/Header/headerInterface'

export default function Home() {
  // --------------------------------------------------------------------------------
  // 📌  Component List Page
  // This page is client-side only, so we can use React Hooks.
  // --------------------------------------------------------------------------------

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
        <Header navList={navList} setSearchResult={setSearchResult}>
          Rentables
        </Header>
        <Badge value='Com #2' />
        <Badge value='Com #3' backgroundColor='#d2d2d2' />
      </div>
    </div>
  )
}

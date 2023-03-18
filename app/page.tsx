'use client' // ⚠️ This is a client-side only component

import './page.css'

// --------------------------------------------------------------------------------
// 📌  Component Imports
// --------------------------------------------------------------------------------
import { Badge } from './components/Badge'
import { Card } from './components/Card'
import Reverse from './components/Reserve'
import myImage from '../app/assets/images/Rectangle 22766.png'

export default function Home() {
  // --------------------------------------------------------------------------------
  // 📌  Component List Page
  // This page is client-side only, so we can use React Hooks.
  // --------------------------------------------------------------------------------

  return (
    <div className='container-wrapper'>
      <div className='container'>
        <Card
          imageSrc={myImage}
          cardPrice='$23/Day'
          distance='1Km away'
          rating={4.9}
          ratingCount={23}
        >
          Best Dslr canon 100d camera
        </Card>
        <Badge value='Com #1' backgroundColor='#c51111' />

        <Badge value='Com #2' />
        <Badge value='Com #3' backgroundColor='#d2d2d2' />
        <Reverse />
      </div>
    </div>
  )
}

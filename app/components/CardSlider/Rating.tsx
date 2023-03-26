import React from 'react'

interface RatingProps {
  rating: number
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const fullStar = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='#FFC107'
      viewBox='0 0 16 16'
    >
      <path d='M8 0l2.077 5.43 5.545.04-4.445 3.777 1.665 5.38-4.247-3.087-4.247 3.087 1.665-5.38L.378 5.47l5.545-.04z' />
    </svg>
  )

  const halfStar = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='#FFC107'
    >
      <path d='M8 0l2.077 5.43 5.545.04-4.445 3.777 1.665 5.38-4.247-3.087-4.247 3.087 1.665-5.38L.378 5.47l5.545-.04z' />
    </svg>
  )

  const emptyStar = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='#FFC107'
      viewBox='0 0 16 16'
    >
      <path
        d='M8 0l2.077 5.43 5.545.04-4.445 3.777 1.665 5.38-4.247-3.087-4.247 3.087 1.665-5.38L.378 5.47l5.545-.04z'
        fillOpacity='.25'
      />
    </svg>
  )

  const renderStars = () => {
    const stars = []

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(fullStar)
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(halfStar)
      } else {
        stars.push(emptyStar)
      }
    }

    return stars
  }

  return <div>{renderStars()}</div>
}

export default Rating

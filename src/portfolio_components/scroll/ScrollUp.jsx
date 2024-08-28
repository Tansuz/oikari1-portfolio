import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import './ScrollUp.scss'
import arrow from './../../images/arrow.svg'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  //scroll-to-top classes: fixed, bottom:0, right:0
  return (
    <div className='scroll-to-top'>
      {isVisible && (
        <Button id='button' variant='secondary' onClick={scrollToTop}>
          <img src={arrow} alt='arrow' />
        </Button>
      )}
    </div>
  )
}

import React, { useEffect } from 'react'
import './layout.css'
import ImgClock from './clock.png'
import { useState } from 'react'

const Layout = props => {
  const {getExpiredTime} = props
  const [time, setTime] = useState(15)

  useEffect(() => {
    if (time > 0) {
      const countDown = setInterval(() => {
        setTime(time - 1)
      }, 1000)
      return () => {
        clearInterval(countDown);
      }
    }
    else if (time === 0) {
      getExpiredTime(0)
    }
  }, [time])

  return (
    <div className="clock">
      {time >= 0 &&
        <>
          <img src={ImgClock} alt="clock" />
          <span>{time}</span>
        </>
      }
    </div>
  )
}

export default Layout
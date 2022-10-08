import React from 'react'
import { useState } from 'react'
import './index.css'
import {LoadingOutlined} from '@ant-design/icons'
import { useEffect } from 'react'
import PlayBoss from '../play-with-boss'

const Layout = () => {
  const [isReady, setIsReady] = useState(0)

  const handleStart = () => {
    setTimeout(() => {
      setIsReady(1)
    }, 500)
  }

  useEffect(() => {
    if (isReady === 1) {
      setTimeout(() => {
        setIsReady(2)
      }, 1500)
    }
  }, [isReady])

  return (
    <div className="ready-play-boss">
      {isReady === 0 && <span className="btn-ready" onClick={handleStart}>Bắt đầu</span>}
      {isReady === 1 && <LoadingOutlined style={{fontSize: 40, color: '#fff'}}/>}
      {isReady === 2 && <PlayBoss/>}
    </div>
  )
}

export default Layout
import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import imgPlayBoss from './play-boss.png'
import imgPlayOnline from './play-online.png'

const Layout = () => {
  return (
    <div className="home">
      
      <div className="container d-flex align-items-center no-wrap" style={{ height: '100%' }}>
        <div className="row" style={{ width: '100%' }}>
          <div className="col-sm-6">
            <h1>Tiến lên<br/>miền bắc</h1>
          </div>
          <div className="col-sm-6">
            <div className="row" style={{width: '100%'}}>
              <div className="col-sm-6 home-one-control">
                <Link to="play-with-boss">
                  <img src={imgPlayBoss} alt="" />
                </Link>
              </div>

              <div className="col-sm-6 home-one-control">
                <Link to="room-online">
                  <img src={imgPlayOnline} alt="" />
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
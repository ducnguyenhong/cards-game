import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import './index.css'
import { ROOMS } from './room'
import ImgTable from './table.png'
import ImgPerson from './person.png'
// import socketIOClient from "socket.io-client"

const ENDPOINT = "http://127.0.0.1:4001/play-online"

const Layout = () => {
  // const socket = socketIOClient(ENDPOINT)
  const [roomLength, setRoomLength] = useState(0)
  const [roomId, setRoomId] = useState('')
  const history = useHistory()

  const onOpenTable = (id) => {
    if (roomLength < 2) {
      history.push(`/play-online/roomId=${id}`)
    }
    else {
      alert('Phòng đã đầy')
    }
  }

  // useEffect(() => {
  //   socket.on("server-send-roomLength", data => {
  //     if (data && data.length === 2) {
  //       setRoomId(data[0])
  //       setRoomLength(data[1])
  //     }
  //   });

  // }, [socket]);

  return (
    <div className="room-online">
      <div className="container">
        {ROOMS.map(item => {
          return (
            <div className="one-room-online row">

              {roomId === `${item.id}` && roomLength > 0 && <img src={ImgPerson} alt="person" className="person" />}
              {roomLength === 0 && <div style={{width: 42, height: 58}}></div>}
              
              <div style={{width: '65%', position: 'relative', cursor: 'pointer'}} onClick={() => onOpenTable(item.id)}>
                <img src={ImgTable} alt="room" className="table"/>
                <span className="room-name">Phòng {item.id}</span>
              </div>

              {roomId === `${item.id}` && roomLength >= 2 && <img src={ImgPerson} alt="person" className="person" />}
              {roomLength < 2 && <div style={{width: 42, height: 58}}></div>}
              
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Layout
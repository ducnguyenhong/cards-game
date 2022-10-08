import React, {useRef} from 'react'
import { useState, useEffect } from 'react'
import './index.css'
import '../play-with-boss/layout.css'
import socketIOClient from "socket.io-client"

const ENDPOINT = "http://127.0.0.1:4001/play-online"

const arrReadyCards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]




const Layout = (props) => {
  const { match } = props
  const { roomId } = match.params
  const socket = socketIOClient(ENDPOINT)
  const [isReady, setIsReady] = useState(0)
  const [cardPlayer1, setCardPlayer1] = useState()
  const [cardPlayer2, setCardPlayer2] = useState()
  const [cardDisplay, setCardDisplay] = useState()
  const [position, setPosition] = useState('')
  const [btnActive, setBtnActive] = useState(true)
  const [cardTable, setCardTable] = useState([])
  const [turnBoss, setTurnBoss] = useState(false)
  const [turnPlayer, setTurnPlayer] = useState(true)

  const handleChooseCard = (index) => {
    const imgCardPlayer = document.getElementsByClassName('card-img-player')[index]
    imgCardPlayer.classList.toggle('card-up')
    if (cardPlayer1 && cardPlayer1.length === 1) {
      imgCardPlayer.classList.toggle('card-up-2')
    }
    // imgArrowLeft.classList.toggle('show-arrow-control')
    // imgArrowRight.classList.toggle('show-arrow-control')
  }

  const handleSkip = () => {
    // setCardTable([])
    // setTurnPlayer(false)
    // setTurnBoss(true)
  }
  const handleActive = () => {
    // setCardTable([])
    // if (cardTable && cardTable.length === 1) { // nếu trên bàn có 1 lá bài, thì phải đánh cùng chất cao hơn
    //   const arrImgCardActive = document.getElementsByClassName('card-up')
    //   if (arrImgCardActive && (arrImgCardActive.length === 0 || arrImgCardActive.length > 1)){
    //     alert('Số quân bài đánh không hợp lệ')
    //   }
    //   else if (arrImgCardActive && arrImgCardActive.length === 1) {
    //     const idImgCardActive = arrImgCardActive[0].classList[1].substring(9)
    //     const cardSatisfy = cardPlayer.find((item, index) => {
    //       if (index === parseInt(idImgCardActive)) {
    //         return item
    //       }
    //     })
    //     if ((cardSatisfy.type === cardTable[0].type && cardSatisfy.value > cardTable[0].value) || cardSatisfy.value === 15) { // Nếu cùng chất, cao hơn, hoặc là 2 và là 2 cao hơn
    //       if (cardSatisfy.value === 15) {
    //         if (cardTable[0].value < 15 || (cardTable[0].value === 15 && cardSatisfy.valueType > cardTable[0].valueType)) {
    //           const newCardPlayer = cardPlayer.filter((item, index) => {
    //             if (index !== parseInt(idImgCardActive)){
    //               return item
    //             }
    //           })
    //           setCardTable([cardSatisfy])
    //           setCardPlayer(newCardPlayer)
    //           const arrNewImgCardPlayer = document.getElementsByClassName('card-img-player')
    //           for (let i = 0; i < arrNewImgCardPlayer.length; i++) {
    //             arrNewImgCardPlayer[i].classList.remove('card-up')
    //           }
    //           setTurnPlayer(false)
    //           setTurnBoss(true)
    //         }
    //         else if (cardTable[0].value === 15 && cardSatisfy.valueType < cardTable[0].valueType) {
    //           alert('Bài đánh không hợp lệ')
    //         }
            
    //       }
    //       else {
    //         const newCardPlayer = cardPlayer.filter((item, index) => {
    //           if (index !== parseInt(idImgCardActive)){
    //             return item
    //           }
    //         })
    //         setCardTable([cardSatisfy])
    //         setCardPlayer(newCardPlayer)
    //         const arrNewImgCardPlayer = document.getElementsByClassName('card-img-player')
    //         for (let i = 0; i < arrNewImgCardPlayer.length; i++) {
    //           arrNewImgCardPlayer[i].classList.remove('card-up')
    //         }
    //         setTurnPlayer(false)
    //         setTurnBoss(true)
    //       }
          
    //     }
    //     else if (cardSatisfy.type !== cardTable[0].type || cardSatisfy.value <= cardTable[0].value) {
    //       alert('Bài đánh không hợp lệ')
    //     }
    //   }
      
    // }
    // if (cardTable && cardTable.length === 2) { // nếu trên bàn có 2 lá
      
    // }
    // else if (cardTable && cardTable.length === 0) { // tức lần đánh đầu tiên đi trước
    //   const arrImgCardActive = document.getElementsByClassName('card-up')
    //   const arrCardActiveId = []
    //   for (let i = 0; i < arrImgCardActive.length; i++) {
    //     const idImgCardActive = arrImgCardActive[i].classList[1].substring(9)
    //     arrCardActiveId.push(parseInt(idImgCardActive))
    //   }
    //   const newCardTable = cardPlayer.filter((item, index) => {
    //     if (arrCardActiveId.includes(index)) {
    //       return item
    //     }
    //   })
    //   if (newCardTable && newCardTable.length === 2) { // đánh đôi
    //     if (newCardTable[0].value === newCardTable[1].value && newCardTable[0].color === newCardTable[1].color) {
    //       const newCardPlayer = cardPlayer.filter((item, index) => {
    //         if (!arrCardActiveId.includes(index)) {
    //           return item
    //         }
    //       })
    //       setCardTable(newCardTable)
    //       setCardPlayer(newCardPlayer)
    //       const arrNewImgCardPlayer = document.getElementsByClassName('card-img-player')
    //       for (let i = 0; i < arrNewImgCardPlayer.length; i++) {
    //         arrNewImgCardPlayer[i].classList.remove('card-up')
    //       }
    //       setTurnPlayer(false)
    //       setTurnBoss(true)
    //     }
    //     else {
    //       alert('Bài đánh không hợp lệ')
    //     }
    //   }
    //   else if (newCardTable && newCardTable.length === 3) { // đá ba
    //     if (newCardTable[0].value === newCardTable[1].value && newCardTable[1].value  === newCardTable[2].value) {
    //       const newCardPlayer = cardPlayer.filter((item, index) => {
    //         if (!arrCardActiveId.includes(index)) {
    //           return item
    //         }
    //       })
    //       setCardTable(newCardTable)
    //       setCardPlayer(newCardPlayer)
    //       const arrNewImgCardPlayer = document.getElementsByClassName('card-img-player')
    //       for (let i = 0; i < arrNewImgCardPlayer.length; i++) {
    //         arrNewImgCardPlayer[i].classList.remove('card-up')
    //       }
    //       setTurnPlayer(false)
    //       setTurnBoss(true)
    //     }
    //     else {
    //       alert('Bài đánh không hợp lệ')
    //     }
    //   }
    //   else if (newCardTable && newCardTable.length === 4) { // đánh tứ
    //     if (newCardTable[0].value === newCardTable[1].value && newCardTable[1].value === newCardTable[2].value && newCardTable[2].value === newCardTable[3].value) {
    //       const newCardPlayer = cardPlayer.filter((item, index) => {
    //         if (!arrCardActiveId.includes(index)) {
    //           return item
    //         }
    //       })
    //       setCardTable(newCardTable)
    //       setCardPlayer(newCardPlayer)
    //       const arrNewImgCardPlayer = document.getElementsByClassName('card-img-player')
    //       for (let i = 0; i < arrNewImgCardPlayer.length; i++) {
    //         arrNewImgCardPlayer[i].classList.remove('card-up')
    //       }
    //       setTurnPlayer(false)
    //       setTurnBoss(true)
    //     }
    //     else {
    //       alert('Bài đánh không hợp lệ')
    //     }
    //   }
    //   else if (newCardTable && newCardTable.length > 4) { // bài đánh > 4 con => không được phép
    //     alert('Bài đánh không hợp lệ')
    //   }
    //   else if(newCardTable && newCardTable.length === 1) { // đánh lẻ 1 con
    //     const newCardPlayer = cardPlayer.filter((item, index) => {
    //       if (!arrCardActiveId.includes(index)) {
    //         return item
    //       }
    //     })
    //     setCardTable(newCardTable)
    //     setCardPlayer(newCardPlayer)
    //     const arrNewImgCardPlayer = document.getElementsByClassName('card-img-player')
    //     for (let i = 0; i < arrNewImgCardPlayer.length; i++) {
    //       arrNewImgCardPlayer[i].classList.remove('card-up')
    //     }
    //     setTurnPlayer(false)
    //     setTurnBoss(true)
    //   }
      
    // }
  }

  const handleTest = () => {
    socket.emit("client-send-test", 111)
  }

  useEffect(() => {
    console.log('ducnh123');
    if (roomId) {
      socket.emit("client-send-roomId", roomId)
    }

    // socket.on("server-send-position", data => {
    //   setPosition(data)
    // })

    socket.on("server-send-cardPlayer", data => {
      // socket.disconnect()
      // setCardPlayer1(data[0])
      // setCardPlayer2(data[1])
      console.log('datadatadata', data);
      // setCardDisplay(data)
    })

    // socket.on("server-send-cardPlayer2", data => {
    //   setCardPlayer2(data)
    //   // setCardDisplay(data)
    // })

    socket.on("server-send-roomFull", data => {
      if (data === "fullSlot") {
        alert('Phòng đã đầy')
      }
    })

    // socket.emit("client-send-cardTable", 'nam')

    // socket.on("server-send-newTurn", data => {
    //   console.log('datasv', data);
    // })

    // socket.on("server-send-roomLength", data => {
    //   console.log('server-send-roomLength', data);
    // });

    // socket.disconnect()

  }, [socket])

  console.log('cardPlayer ducnh', cardPlayer1, cardPlayer2);

  return (
    <div className="play-online">
      {/* {isReady !== 2 && (
        <div className="play-online-ready">
          {isReady === 0 && <span style={{fontSize: 30}} onClick={() => setIsReady(1)}>Sẵn sàng</span>}
          {isReady === 1 && <span style={{fontSize: 30}}>Chờ đối thủ sẵn sàng</span>}
        </div>)
      } */}

      {/* {isReady === 1 && ( */}
         <div>
         <div className="container">
   
           <div className="d-flex cards-boss">
             {/* {arrReadyCards && arrReadyCards.length > 0 &&
               arrReadyCards.map((item, index) => {
                 return <img
                   src='/images/after-card.png'
                   alt=""
                   key={index}
                   className="card-img"
                   style={{ transform: `translateX(-${(index+1)*6}0px)`}}
                 />
               })
             } */}
            { cardPlayer1 && cardPlayer1.length > 0 &&
               cardPlayer1.map((item, index) => {
                 return (
                   <div className="wrap-card-img-player">
                     <img
                       src={`/images/${item.name}-${item.type}.png`}
                       alt=""
                       key={index}
                       onClick={() => handleChooseCard(index)}
                       className={`card-img card-img-${index} card-img-player`}
                       style={{ transform: `translateX(-${(index+1)*6}0px)`, zIndex: `${index+1}`}}
                     />
                     <img src='/images/arrow-left.png' className="arrow-left arrow-control" style={{ transform: `translateX(-${(index+1)*6}0px)`, zIndex: `${index+1}`}}/>
                     <img src='/images/arrow-right.png' className="arrow-right arrow-control" style={{ transform: `translateX(-${(index+1)*6}0px)`, zIndex: `${index+1}`}}/>
                   </div>
                 )
               })
              }
           </div>
           
           <div className="d-flex card-table">
             {cardTable && cardTable.length > 0 &&
               cardTable.map((item, index) => {
                 return <img
                   src={`/images/${item.name}-${item.type}.png`}
                   alt=""
                   key={index}
                   className={`card-img`}
                   style={{ transform: `translateX(-${(index+1)*6}0px)`, zIndex: `${index+1}`}}
                 />
               })
             }
           </div>
             
           <div className="d-flex cards-player">
             
              
              {cardPlayer2 && cardPlayer2.length > 0 &&
               cardPlayer2.map((item, index) => {
                 return (
                   <div className="wrap-card-img-player">
                     <img
                       src={`/images/${item.name}-${item.type}.png`}
                       alt=""
                       key={index}
                       onClick={() => handleChooseCard(index)}
                       className={`card-img card-img-${index} card-img-player`}
                       style={{ transform: `translateX(-${(index+1)*6}0px)`, zIndex: `${index+1}`}}
                     />
                     <img src='/images/arrow-left.png' className="arrow-left arrow-control" style={{ transform: `translateX(-${(index+1)*6}0px)`, zIndex: `${index+1}`}}/>
                     <img src='/images/arrow-right.png' className="arrow-right arrow-control" style={{ transform: `translateX(-${(index+1)*6}0px)`, zIndex: `${index+1}`}}/>
                   </div>
                 )
               })
             }
             
             </div>
           </div>
         {turnPlayer && 
           <>
             <span className="btn-player-skip btn btn-danger" onClick={handleSkip}>Bỏ lượt</span>
           {btnActive && <span className="btn-player-active btn btn-primary" onClick={handleActive}>Đánh</span>}
           </>
         }
       </div>
      )
    </div>
  )
}

export default Layout
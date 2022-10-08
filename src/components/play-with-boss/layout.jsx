import React, { useEffect, useState } from 'react'
import { CARDS } from '../data'
import './layout.css'
import PlayAgain from '../play-again'
import SkipTurn from '../skip-turn'
import Clock from './clock'
import {differenceBy} from 'lodash'

const cardNewGame = CARDS.sort(() => Math.random() - Math.random()).slice(0, 26)

const Layout = () => {
  Array.prototype.sortBy = function(p) {
    return this.slice(0).sort(function(a,b) {
      return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
    });
  }
  const [cardBoss, setCardBoss] = useState(cardNewGame.slice(0,13))
  const [cardPlayer, setCardPlayer] = useState(cardNewGame.slice(13, 26))
  const [cardTable, setCardTable] = useState([])
  const [isSkipTurnBoss, setIsSkipTurnBoss] = useState(false)
  const [turnBoss, setTurnBoss] = useState(false)
  const [turnPlayer, setTurnPlayer] = useState(false)
  const [playAgain, setPlayAgain] = useState('')
  const [btnActive, setBtnActive] = useState(false)
  const [btnSkip, setBtnSkip] = useState(false)
  const [isShowClock, setIsShowClock] = useState(false)
  const [isShowBtnSort, setIsShowBtnSort] = useState(true)
  const [isReady, setIsReady] = useState(false)

  const getExpiredTime = data => {
    if (data === 0) {
      setIsShowClock(false)
      handleSkip()
    }
  }

  const check3Spade = (cards) => {
    for (let i = 0; i < cards.length; i++){
      if (cards[i].id === 42) {
        return true
      }
    }
    return false
  }

  useEffect(() => { // check đánh trước
    if (isReady) {
      const arrRandom = [1,2] // 1 boss, 2 player
      if (check3Spade(cardBoss) || arrRandom[Math.floor(Math.random() * arrRandom.length)] === 1) {
        setTurnBoss(true)
      }
      else {
        setTurnPlayer(true)
      }
    }
  }, [isReady])
  
  const handleChooseCard = (index) => {
    const imgCardPlayer = document.getElementsByClassName('card-img-player')[index]
    const imgArrowLeft = document.getElementsByClassName('arrow-left')[index]
    const imgArrowRight = document.getElementsByClassName('arrow-right')[index]
    imgCardPlayer.classList.toggle('card-up')
    if (cardPlayer && cardPlayer.length === 1) {
      imgCardPlayer.classList.toggle('card-up-2')
    }
    // imgArrowLeft.classList.toggle('show-arrow-control')
    // imgArrowRight.classList.toggle('show-arrow-control')
  }

  const handleReady = () => {
    setIsReady(true)
    setIsShowBtnSort(false)
    setBtnActive(true)
    setBtnSkip(true)
  }

  const handleSortCard = () => {
    let arrCheck3 = []
    let arrCheck4 = []
    let arrCheck5 = []
    let arrCheck6 = []
    let arrCheck7 = []
    let arrCheck8 = []
    let arrCheck9 = []
    let arrCheck10 = []
    let arrCheckJ = []
    let arrCheckQ = []
    let arrCheckK = []
    let arrCheckA = []
    let arrCheck2 = []
    for (let i = 0; i < cardPlayer.length; i++){
      if (cardPlayer[i].value === 3) {
        arrCheck3.push(cardPlayer[i])
      }
      if (cardPlayer[i].value === 4) {
        arrCheck4.push(cardPlayer[i])
      }
      if (cardPlayer[i].value === 5) {
        arrCheck5.push(cardPlayer[i])
      }
      if (cardPlayer[i].value === 6) {
        arrCheck6.push(cardPlayer[i])
      }
      if (cardPlayer[i].value === 7) {
        arrCheck7.push(cardPlayer[i])
      }
      if (cardPlayer[i].value === 8) {
        arrCheck8.push(cardPlayer[i])
      }
      if (cardPlayer[i].value === 9) {
        arrCheck9.push(cardPlayer[i])
      }
      if (cardPlayer[i].value === 10) {
        arrCheck10.push(cardPlayer[i])
      }
      if (cardPlayer[i].value === 11) {
        arrCheckJ.push(cardPlayer[i])
      }
      if (cardPlayer[i].value === 12) {
        arrCheckQ.push(cardPlayer[i])
      }
      if (cardPlayer[i].value === 13) {
        arrCheckK.push(cardPlayer[i])
      }
      if (cardPlayer[i].value === 14) {
        arrCheckA.push(cardPlayer[i])
      }
      if (cardPlayer[i].value === 15) {
        arrCheck2.push(cardPlayer[i])
      }
    }
    const arrCheckAllCard = arrCheck3.concat(arrCheck4).concat(arrCheck5).concat(arrCheck6).concat(arrCheck7).concat(arrCheck8).concat(arrCheck9).concat(arrCheck10).concat(arrCheckJ).concat(arrCheckQ).concat(arrCheckK).concat(arrCheckA).concat(arrCheck2)
    setCardPlayer(arrCheckAllCard)
    setIsShowBtnSort(false)
  }

  const handleSkip = () => {
    setCardTable([])
    setTurnPlayer(false)
    setTurnBoss(true)
    setIsShowClock(false)
  }

  // PLAYER
  const handleActive = () => {
    let arrCheck3 = []
    let arrCheck4 = []
    let arrCheck5 = []
    let arrCheck6 = []
    let arrCheck7 = []
    let arrCheck8 = []
    let arrCheck9 = []
    let arrCheck10 = []
    let arrCheckJ = []
    let arrCheckQ = []
    let arrCheckK = []
    let arrCheckA = []
    let arrCheck2 = []
    for (let i = 0; i < cardPlayer.length; i++){
      if (cardPlayer[i].value === 3) {
        arrCheck3.push(cardPlayer[i])
      }
      if (cardPlayer[i].value === 4) {
        arrCheck4.push(cardPlayer[i])
      }
      if (cardPlayer[i].value === 5) {
        arrCheck5.push(cardPlayer[i])
      }
      if (cardPlayer[i].value === 6) {
        arrCheck6.push(cardPlayer[i])
      }
      if (cardPlayer[i].value === 7) {
        arrCheck7.push(cardPlayer[i])
      }
      if (cardPlayer[i].value === 8) {
        arrCheck8.push(cardPlayer[i])
      }
      if (cardPlayer[i].value === 9) {
        arrCheck9.push(cardPlayer[i])
      }
      if (cardPlayer[i].value === 10) {
        arrCheck10.push(cardPlayer[i])
      }
      if (cardPlayer[i].value === 11) {
        arrCheckJ.push(cardPlayer[i])
      }
      if (cardPlayer[i].value === 12) {
        arrCheckQ.push(cardPlayer[i])
      }
      if (cardPlayer[i].value === 13) {
        arrCheckK.push(cardPlayer[i])
      }
      if (cardPlayer[i].value === 14) {
        arrCheckA.push(cardPlayer[i])
      }
      if (cardPlayer[i].value === 15) {
        arrCheck2.push(cardPlayer[i])
      }
    }
    console.log('cardTablevn', cardTable);
    let arrCheckAllCard = [arrCheck3, arrCheck4, arrCheck5, arrCheck6, arrCheck7, arrCheck8, arrCheck9, arrCheck10, arrCheckJ, arrCheckQ, arrCheckK, arrCheckA, arrCheck2]
    if (cardTable && cardTable.length === 1) { // nếu trên bàn có 1 lá bài, thì phải đánh cùng chất cao hơn
      const arrImgCardActive = document.getElementsByClassName('card-up')
      if (arrImgCardActive && arrImgCardActive.length === 4 && cardTable[0].value === 15) { // dùng tứ chặn 2 của boss
        let arrCheckCardSatisfy = []
        for (let i = 0; i < arrCheckAllCard.length; i++) {
          if (arrCheckAllCard[i].length === 4) { // lấy các bộ 4 thỏa mãn
            arrCheckCardSatisfy.push(arrCheckAllCard[i])
          }
        }
        if (arrCheckCardSatisfy && arrCheckCardSatisfy[0]) {
          const fourCardSatisfy = arrCheckCardSatisfy[0]
          const newCardPlayer = cardBoss.map(item => {
            if (item.id !== fourCardSatisfy[0].id && item.id !== fourCardSatisfy[1].id && item.id !== fourCardSatisfy[2].id && item.id !== fourCardSatisfy[3].id) {
              return item
            }
          })
          setCardPlayer(newCardPlayer)
          setCardTable(fourCardSatisfy)
          setTurnPlayer(false)
          setTurnBoss(true)
          setIsShowClock(false)
        }
        else {
          alert('Bài đánh không hợp lệ')
        }
      }
      else if (arrImgCardActive && (arrImgCardActive.length === 0 || arrImgCardActive.length > 1)){
        alert('Số quân bài đánh không hợp lệ')
      }
      else if (arrImgCardActive && arrImgCardActive.length === 1) {
        const idImgCardActive = arrImgCardActive[0].classList[1].substring(9)
        const cardSatisfy = cardPlayer.find((item, index) => {
          if (index === parseInt(idImgCardActive)) {
            return item
          }
        })
        if ((cardSatisfy.type === cardTable[0].type && cardSatisfy.value > cardTable[0].value) || cardSatisfy.value === 15) { // Nếu cùng chất, cao hơn, hoặc là 2 và là 2 cao hơn
          if (cardSatisfy.value === 15) {
            if (cardTable[0].value < 15 || (cardTable[0].value === 15 && cardSatisfy.valueType > cardTable[0].valueType)) {
              const newCardPlayer = cardPlayer.filter((item, index) => {
                if (index !== parseInt(idImgCardActive)){
                  return item
                }
              })
              setCardTable([cardSatisfy])
              setCardPlayer(newCardPlayer)
              const arrNewImgCardPlayer = document.getElementsByClassName('card-img-player')
              for (let i = 0; i < arrNewImgCardPlayer.length; i++) {
                arrNewImgCardPlayer[i].classList.remove('card-up')
              }
              setTurnPlayer(false)
              setTurnBoss(true)
              setIsShowClock(false)
            }
            else if (cardTable[0].value === 15 && cardSatisfy.valueType < cardTable[0].valueType) {
              alert('Bài đánh không hợp lệ')
            }
            
          }
          else {
            const newCardPlayer = cardPlayer.filter((item, index) => {
              if (index !== parseInt(idImgCardActive)){
                return item
              }
            })
            setCardTable([cardSatisfy])
            setCardPlayer(newCardPlayer)
            const arrNewImgCardPlayer = document.getElementsByClassName('card-img-player')
            for (let i = 0; i < arrNewImgCardPlayer.length; i++) {
              arrNewImgCardPlayer[i].classList.remove('card-up')
            }
            setTurnPlayer(false)
            setTurnBoss(true)
            setIsShowClock(false)
          }
          
        }
        else if (cardSatisfy.type !== cardTable[0].type || cardSatisfy.value <= cardTable[0].value) {
          alert('Bài đánh không hợp lệ')
        }
      }
    }
    else if (cardTable && cardTable.length === 2) { // nếu trên bàn có 2 lá, thÌ phải đánh đôi cùng màu cao hơn
      const arrImgCardActive = document.getElementsByClassName('card-up')
      if (arrImgCardActive && (arrImgCardActive.length !== 2)){
        alert('Số quân bài đánh không hợp lệ')
      }
      else {
        const idImgCardActive1 = arrImgCardActive[0].classList[1].substring(9)
        const idImgCardActive2 = arrImgCardActive[1].classList[1].substring(9)
        const cardSatisfy1 = cardPlayer.find((item, index) => {
          if (index === parseInt(idImgCardActive1)) {
            return item
          }
        })
        const cardSatisfy2 = cardPlayer.find((item, index) => {
          if (index === parseInt(idImgCardActive2)) {
            return item
          }
        })
        if (cardSatisfy1.value === cardSatisfy2.value) {
          if (cardSatisfy1.color === cardTable[0].color && cardSatisfy2.color === cardTable[0].color && cardSatisfy1.value > cardTable[0].value && cardTable[0].value < 15 && cardSatisfy1.color === cardSatisfy2.color) {
            const arrCardActiveId = []
            for (let i = 0; i < arrImgCardActive.length; i++) {
              const idImgCardActive = arrImgCardActive[i].classList[1].substring(9)
              arrCardActiveId.push(parseInt(idImgCardActive))
            }
            const newCardPlayer = cardPlayer.filter((item, index) => {
              if (!arrCardActiveId.includes(index)) {
                return item
              }
            })
            const newCardTable = [cardSatisfy1, cardSatisfy2]
            setCardTable(newCardTable)
            setCardPlayer(newCardPlayer)
            const arrNewImgCardPlayer = document.getElementsByClassName('card-img-player')
            for (let i = 0; i < arrNewImgCardPlayer.length; i++) {
              arrNewImgCardPlayer[i].classList.remove('card-up')
            }
            setTurnPlayer(false)
            setTurnBoss(true)
            setIsShowClock(false)
          }
          else if (cardSatisfy1.color === cardTable[0].color && cardSatisfy2.color === cardTable[0].color && cardSatisfy1.value === cardTable[0].value && cardTable[0].value === 15 && cardSatisfy1.color === cardSatisfy2.color) { // đôi 2 đỏ chặt đôi 2 đen
            if (cardTable[0].color === 'black' && cardTable[1].color === 'black' && cardSatisfy1.color === 'red' && cardSatisfy2.color === 'red') {
              const arrCardActiveId = []
              for (let i = 0; i < arrImgCardActive.length; i++) {
                const idImgCardActive = arrImgCardActive[i].classList[1].substring(9)
                arrCardActiveId.push(parseInt(idImgCardActive))
              }
              const newCardPlayer = cardPlayer.filter((item, index) => {
                if (!arrCardActiveId.includes(index)) {
                  return item
                }
              })
              const newCardTable = [cardSatisfy1, cardSatisfy2]
              setCardTable(newCardTable)
              setCardPlayer(newCardPlayer)
              const arrNewImgCardPlayer = document.getElementsByClassName('card-img-player')
              for (let i = 0; i < arrNewImgCardPlayer.length; i++) {
                arrNewImgCardPlayer[i].classList.remove('card-up')
              }
              setTurnPlayer(false)
              setTurnBoss(true)
              setIsShowClock(false)
            }
            else {
              alert('Bài đánh không hợp lệ')
            }
          }
          else if (cardTable[0].value < 15 && cardTable[1].value < 15 && cardSatisfy1.value === 15 && cardSatisfy2.value === 15) {
            // đôi 2 lệch chặt được đôi bình thường
            const arrCardActiveId = []
            for (let i = 0; i < arrImgCardActive.length; i++) {
              const idImgCardActive = arrImgCardActive[i].classList[1].substring(9)
              arrCardActiveId.push(parseInt(idImgCardActive))
            }
            const newCardPlayer = cardPlayer.filter((item, index) => {
              if (!arrCardActiveId.includes(index)) {
                return item
              }
            })
            const newCardTable = [cardSatisfy1, cardSatisfy2]
            setCardTable(newCardTable)
            setCardPlayer(newCardPlayer)
            const arrNewImgCardPlayer = document.getElementsByClassName('card-img-player')
            for (let i = 0; i < arrNewImgCardPlayer.length; i++) {
              arrNewImgCardPlayer[i].classList.remove('card-up')
            }
            setTurnPlayer(false)
            setTurnBoss(true)
            setIsShowClock(false)
          }
        }
        else {
          alert('Bài đánh không hợp lệ')
        }
      }
    }
    else if (cardTable && cardTable.length === 3) { // nếu trên bàn có 3 lá
      const arrImgCardActive = document.getElementsByClassName('card-up')
      if (arrImgCardActive && (arrImgCardActive.length !== 3)){
        alert('Số quân bài đánh không hợp lệ')
      }
      else {
        const idImgCardActive1 = arrImgCardActive[0].classList[1].substring(9)
        const idImgCardActive2 = arrImgCardActive[1].classList[1].substring(9)
        const idImgCardActive3 = arrImgCardActive[2].classList[1].substring(9)
        const cardSatisfy1 = cardPlayer.find((item, index) => {
          if (index === parseInt(idImgCardActive1)) {
            return item
          }
        })
        const cardSatisfy2 = cardPlayer.find((item, index) => {
          if (index === parseInt(idImgCardActive2)) {
            return item
          }
        })
        const cardSatisfy3 = cardPlayer.find((item, index) => {
          if (index === parseInt(idImgCardActive3)) {
            return item
          }
        })
        if (cardSatisfy1.value === cardSatisfy2.value && cardSatisfy2.value === cardSatisfy3.value) {
          const arrValueTypeSatisfy = [cardSatisfy1.valueType, cardSatisfy2.valueType, cardSatisfy3.valueType]
          const arrValueTypeTable = [cardTable[0].valueType, cardTable[1].valueType, cardTable[2].valueType]
          if (cardSatisfy1.value !== 15 && JSON.stringify(arrValueTypeSatisfy.sort()) === JSON.stringify(arrValueTypeTable.sort()) || cardSatisfy1.value === 15) {
            const arrCardActiveId = []
            for (let i = 0; i < arrImgCardActive.length; i++) {
              const idImgCardActive = arrImgCardActive[i].classList[1].substring(9)
              arrCardActiveId.push(parseInt(idImgCardActive))
            }
            const newCardPlayer = cardPlayer.filter((item, index) => {
              if (!arrCardActiveId.includes(index)) {
                return item
              }
            })
            const newCardTable = [cardSatisfy1, cardSatisfy2, cardSatisfy3]
            setCardTable(newCardTable)
            setCardPlayer(newCardPlayer)
            const arrNewImgCardPlayer = document.getElementsByClassName('card-img-player')
            for (let i = 0; i < arrNewImgCardPlayer.length; i++) {
              arrNewImgCardPlayer[i].classList.remove('card-up')
            }
            setTurnPlayer(false)
            setTurnBoss(true)
            setIsShowClock(false)
          }
          else {
            alert('Bài đánh không hợp lệ')
          }
        }
        else {
          alert('Bài đánh không hợp lệ')
        }
      }
    }
    else if (cardTable && cardTable.length === 4) { // nếu trên bàn có tứ
      const arrImgCardActive = document.getElementsByClassName('card-up')
      if (arrImgCardActive && (arrImgCardActive.length !== 4)) {
        alert('Số quân bài đánh không hợp lệ')
      }
      else {
        const idImgCardActive1 = arrImgCardActive[0].classList[1].substring(9)
        const idImgCardActive2 = arrImgCardActive[1].classList[1].substring(9)
        const idImgCardActive3 = arrImgCardActive[2].classList[1].substring(9)
        const idImgCardActive4 = arrImgCardActive[2].classList[1].substring(9)
        const cardSatisfy1 = cardPlayer.find((item, index) => {
          if (index === parseInt(idImgCardActive1)) {
            return item
          }
        })
        const cardSatisfy2 = cardPlayer.find((item, index) => {
          if (index === parseInt(idImgCardActive2)) {
            return item
          }
        })
        const cardSatisfy3 = cardPlayer.find((item, index) => {
          if (index === parseInt(idImgCardActive3)) {
            return item
          }
        })
        const cardSatisfy4 = cardPlayer.find((item, index) => {
          if (index === parseInt(idImgCardActive4)) {
            return item
          }
        })
        if (cardSatisfy1.value === cardSatisfy2.value && cardSatisfy2.value === cardSatisfy3.value && cardSatisfy3.value === cardSatisfy4.value) {
          const arrCardActiveId = []
          for (let i = 0; i < arrImgCardActive.length; i++) {
            const idImgCardActive = arrImgCardActive[i].classList[1].substring(9)
            arrCardActiveId.push(parseInt(idImgCardActive))
          }
          const newCardPlayer = cardPlayer.filter((item, index) => {
            if (!arrCardActiveId.includes(index)) {
              return item
            }
          })
          const newCardTable = [cardSatisfy1, cardSatisfy2, cardSatisfy3, cardSatisfy4]
          setCardTable(newCardTable)
          setCardPlayer(newCardPlayer)
          const arrNewImgCardPlayer = document.getElementsByClassName('card-img-player')
          for (let i = 0; i < arrNewImgCardPlayer.length; i++) {
            arrNewImgCardPlayer[i].classList.remove('card-up')
          }
          setTurnPlayer(false)
          setTurnBoss(true)
          setIsShowClock(false)
        }
      }
    }
    else if (cardTable && cardTable.length === 0) { // tức lần đánh đầu tiên đi trước
      const arrImgCardActive = document.getElementsByClassName('card-up')
      const arrCardActiveId = []
      for (let i = 0; i < arrImgCardActive.length; i++) {
        const idImgCardActive = arrImgCardActive[i].classList[1].substring(9)
        arrCardActiveId.push(parseInt(idImgCardActive))
      }
      const newCardTable = cardPlayer.filter((item, index) => {
        if (arrCardActiveId.includes(index)) {
          return item
        }
      })
      if (newCardTable && newCardTable.length === 2) { // đánh đôi
        if (newCardTable[0].value === newCardTable[1].value && newCardTable[0].color === newCardTable[1].color) {
          const newCardPlayer = cardPlayer.filter((item, index) => {
            if (!arrCardActiveId.includes(index)) {
              return item
            }
          })
          setCardTable(newCardTable)
          setCardPlayer(newCardPlayer)
          const arrNewImgCardPlayer = document.getElementsByClassName('card-img-player')
          for (let i = 0; i < arrNewImgCardPlayer.length; i++) {
            arrNewImgCardPlayer[i].classList.remove('card-up')
          }
          setTurnPlayer(false)
          setTurnBoss(true)
          setIsShowClock(false)
        }
        else {
          alert('Bài đánh không hợp lệ')
        }
      }
      else if (newCardTable && newCardTable.length === 3 && !checkLobbyWire(newCardTable)) { // đánh ba
        if (newCardTable[0].value === newCardTable[1].value && newCardTable[1].value  === newCardTable[2].value) {
          const newCardPlayer = cardPlayer.filter((item, index) => {
            if (!arrCardActiveId.includes(index)) {
              return item
            }
          })
          setCardTable(newCardTable)
          setCardPlayer(newCardPlayer)
          const arrNewImgCardPlayer = document.getElementsByClassName('card-img-player')
          for (let i = 0; i < arrNewImgCardPlayer.length; i++) {
            arrNewImgCardPlayer[i].classList.remove('card-up')
          }
          setTurnPlayer(false)
          setTurnBoss(true)
          setIsShowClock(false)
        }
        else {
          alert('Bài đánh không hợp lệ')
        }
      }
      else if (newCardTable && newCardTable.length === 4 && !checkLobbyWire(newCardTable)) { // đánh tứ
        if (newCardTable[0].value === newCardTable[1].value && newCardTable[1].value === newCardTable[2].value && newCardTable[2].value === newCardTable[3].value) {
          const newCardPlayer = cardPlayer.filter((item, index) => {
            if (!arrCardActiveId.includes(index)) {
              return item
            }
          })
          setCardTable(newCardTable)
          setCardPlayer(newCardPlayer)
          const arrNewImgCardPlayer = document.getElementsByClassName('card-img-player')
          for (let i = 0; i < arrNewImgCardPlayer.length; i++) {
            arrNewImgCardPlayer[i].classList.remove('card-up')
          }
          setTurnPlayer(false)
          setTurnBoss(true)
          setIsShowClock(false)
        }
        else {
          alert('Bài đánh không hợp lệ')
        }
      }
      else if (newCardTable && newCardTable.length > 4) { // bài đánh > 4 con => không được phép
        alert('Bài đánh không hợp lệ')
      }
      else if(newCardTable && newCardTable.length === 1) { // đánh lẻ 1 con
        const newCardPlayer = cardPlayer.filter((item, index) => {
          if (!arrCardActiveId.includes(index)) {
            return item
          }
        })
        setCardTable(newCardTable)
        setCardPlayer(newCardPlayer)
        const arrNewImgCardPlayer = document.getElementsByClassName('card-img-player')
        for (let i = 0; i < arrNewImgCardPlayer.length; i++) {
          arrNewImgCardPlayer[i].classList.remove('card-up')
        }
        setTurnPlayer(false)
        setTurnBoss(true)
        setIsShowClock(false)
      }
        
      else if (newCardTable && newCardTable.length > 2 && checkLobbyWire(newCardTable)) { // trường hợp có dây từ 3 lá trở lên
        const newCardPlayer = differenceBy(cardPlayer, newCardTable, 'id')
        const arrNewImgCardPlayer = document.getElementsByClassName('card-img-player')
        for (let i = 0; i < arrNewImgCardPlayer.length; i++) {
          arrNewImgCardPlayer[i].classList.remove('card-up')
        }
        setCardTable(newCardTable)
        setCardPlayer(newCardPlayer)
        setTurnPlayer(false)
        setTurnBoss(true)
        setIsShowClock(true)
      }
    }
  }

  const checkLobbyWire = array => { // check có phải dây hợp lệ hay k
    console.log('array', array);
    let check = true // cùng chất
    let check2 = true // là dây hơn kém 1 giá trị
    if(array.length < 3) return false
    for (let i = 0; i < array.length; i++){
      if (array[i] && array[i + 1] && array[i].valueType !== array[i + 1].valueType) {
        check = false
      }
    }
    if (!check) return false
    else {
      const arraySort = array.sortBy('value')
      console.log('arraySort', arraySort);
      for (let i = 0; i < arraySort.length; i++){
        if (arraySort[i] && arraySort[i + 1] && arraySort[i].value !== arraySort[i + 1].value - 1) {
          check2 = false
        }
      }
    }
    console.log('check2', check2);
    if (!check2) return false
    else {
      return true
    }
  }

  const checkCard2Boss = () => { // check boss có 2 hay không
    let arrCheck = []
    for (let i = 0; i < cardBoss.length; i++){
      if (cardBoss[i].id === 2 || cardBoss[i].id === 15 || cardBoss[i].id === 28 || cardBoss[i].id === 41) {
        arrCheck.push(cardBoss[i])
      }
    }
    let arraySort = []
    if (arrCheck && arrCheck.length > 0) {
      arraySort = arrCheck.sortBy('valueType')
    }
    else return false
    return arraySort[arraySort.length - 1]
  }

  useEffect(() => {
    if (cardBoss && cardBoss.length === 0) {
      setTimeout(() => {
        setPlayAgain('Bạn đã thua')
      }, 1000)
      setIsShowClock(false)
    }
    
  }, [cardBoss])

  useEffect(() => {
    if (cardPlayer && cardPlayer.length === 0) {
      setTimeout(() => {
        setPlayAgain('Bạn đã thắng')
      }, 1000)
      setIsShowClock(false)
    }
    
  }, [cardPlayer])

  useEffect(() => {
    if (turnPlayer) {
      console.log('Đến lượt player');
    }
  }, [turnPlayer])

  // AI BOSS PROTON
  useEffect(() => {
    if (turnBoss) {
      let arrCheck3 = []
      let arrCheck4 = []
      let arrCheck5 = []
      let arrCheck6 = []
      let arrCheck7 = []
      let arrCheck8 = []
      let arrCheck9 = []
      let arrCheck10 = []
      let arrCheckJ = []
      let arrCheckQ = []
      let arrCheckK = []
      let arrCheckA = []
      let arrCheck2 = []

      console.log('cardBoss', cardBoss);
      for (let i = 0; i < cardBoss.length; i++){
        if (cardBoss[i].value === 3) {
          arrCheck3.push(cardBoss[i])
        }
        if (cardBoss[i].value === 4) {
          arrCheck4.push(cardBoss[i])
        }
        if (cardBoss[i].value === 5) {
          arrCheck5.push(cardBoss[i])
        }
        if (cardBoss[i].value === 6) {
          arrCheck6.push(cardBoss[i])
        }
        if (cardBoss[i].value === 7) {
          arrCheck7.push(cardBoss[i])
        }
        if (cardBoss[i].value === 8) {
          arrCheck8.push(cardBoss[i])
        }
        if (cardBoss[i].value === 9) {
          arrCheck9.push(cardBoss[i])
        }
        if (cardBoss[i].value === 10) {
          arrCheck10.push(cardBoss[i])
        }
        if (cardBoss[i].value === 11) {
          arrCheckJ.push(cardBoss[i])
        }
        if (cardBoss[i].value === 12) {
          arrCheckQ.push(cardBoss[i])
        }
        if (cardBoss[i].value === 13) {
          arrCheckK.push(cardBoss[i])
        }
        if (cardBoss[i].value === 14) {
          arrCheckA.push(cardBoss[i])
        }
        if (cardBoss[i].value === 15) {
          arrCheck2.push(cardBoss[i])
        }
      }
      let arrCheckAllCard = [arrCheck3, arrCheck4, arrCheck5, arrCheck6, arrCheck7, arrCheck8, arrCheck9, arrCheck10, arrCheckJ, arrCheckQ, arrCheckK, arrCheckA, arrCheck2]
      if (cardTable && cardTable.length === 0) { // người chơi bỏ lượt
        
        if (cardBoss && cardBoss.length === 2) {
          console.log('ducnh1');
          console.log('ducnh2',cardBoss);
          if (cardBoss[0].value === 15 || cardBoss[1].value > cardBoss[0].value) {// đánh 2 trước hoặc nếu k có 2 thì đánh con thấp trước
            console.log('ducnh3');
            setCardTable([cardBoss[0]])
            setCardBoss([cardBoss[1]])
          }
          else if (cardBoss[1].value === 15 || cardBoss[0].value > cardBoss[1].value) {
            setCardTable([cardBoss[1]])
            setCardBoss([cardBoss[0]])
          }
          else if (cardBoss[1].value === cardBoss[0].value && cardBoss[1].color === cardBoss[0].color) { // nếu là đôi thì đánh luôn đôi ra
            setCardTable(cardBoss)
            setCardBoss([])
          }
          else if (cardBoss[1].value === cardBoss[0].value && cardBoss[1].color !== cardBoss[0].color) { // nếu cùng giá trị mà khác màu, thì đánh bất kỳ
            setCardTable([cardBoss[1]])
            setCardBoss([cardBoss[0]])
          }
        }
        else {
          let newCardTable = []
          let newCardBoss = []
          let cardSatisfy = cardBoss.reduce((prev, curr) => {
          return prev.value < curr.value ? prev : curr
          })
          
          newCardTable.push(cardSatisfy)
          newCardBoss = cardBoss.filter(item => { // làm mới bài của boss
            if (item.id !== newCardTable[0].id) {
              return item
            }
          })
          console.log('Máy đã đánh' + ` ${newCardTable[0].name} ${newCardTable[0].type}`);
          setCardBoss(newCardBoss)
          setCardTable(newCardTable)
        }
        setTurnPlayer(true)
        setTurnBoss(false)
      }
      else if (cardTable && cardTable.length === 2) { // Nếu trên bàn đang có đôi
        let arrCardSatisfy1 = []
        let arrCardSatisfy2 = []
        let newCardTable = []
        let newCardBoss = []
        let cardSatisfy = null
        for (let i = 0; i < cardBoss.length; i++){
          if (cardBoss[i] && cardBoss[i].value > cardTable[0].value && cardBoss[i].type === cardTable[0].type) { // có chất đấy và cao hơn không
            arrCardSatisfy1.push(cardBoss[i])
          }
          if (cardBoss[i].value === 15) { // nếu có 2
            arrCardSatisfy1.push(cardBoss[i])
          }
        }
        // tìm xem có đôi thỏa mãn k
        for (let i = 0; i < cardBoss.length; i++){
          for (let j = 0; j < arrCardSatisfy1.length; j++){
            if (cardBoss[i].color === arrCardSatisfy1[j].color && cardBoss[i].value === arrCardSatisfy1[j].value && cardBoss[i].type !== arrCardSatisfy1[j].type && cardBoss[i].value !== 15) {
              arrCardSatisfy2.push(cardBoss[i])
            }
            // trường hợp đôi 2 lệch vẫn chặt được đôi bình thường
            if (cardBoss[i].value === arrCardSatisfy1[j].value && cardBoss[i].type !== arrCardSatisfy1[j].type && cardBoss[i].value === 15) {
              arrCardSatisfy2.push(cardBoss[i])
            }
          }
        }
        // lấy đôi thấp nhất thỏa mãn ra
        
        if (arrCardSatisfy2.length === 0) {
          setCardTable([])
          setIsSkipTurnBoss(true)
          setTurnPlayer(true)
          setTurnBoss(false)
        }
        else if(arrCardSatisfy2.length === 1){
          cardSatisfy = arrCardSatisfy2[0]
          newCardTable = cardBoss.filter(item => { // đánh bài ra bàn
            if (item.value === cardSatisfy.value && item.color === cardSatisfy.color) {
              return item
            }
          })
          newCardBoss = cardBoss.filter(item => { // làm mới bài của boss
            if (item.value !== cardSatisfy.value || item.color !== cardSatisfy.color) {
              return item
            }
          })
          setCardBoss(newCardBoss)
          setCardTable(newCardTable)
          setTurnPlayer(true)
          setTurnBoss(false)
          
        }
        else if (arrCardSatisfy2.length > 1) {
          cardSatisfy = arrCardSatisfy2.reduce((prev, curr) => {
            return prev.value < curr.value ? prev : curr
          })
          newCardTable = cardBoss.filter(item => { // đánh bài ra bàn
            if (item.value === cardSatisfy.value && item.color === cardSatisfy.color) {
              return item
            }
          })
          newCardBoss = cardBoss.filter(item => { // làm mới bài của boss
            if (item.value !== cardSatisfy.value || item.color !== cardSatisfy.color) {
              return item
            }
          })
          setCardBoss(newCardBoss)
          setCardTable(newCardTable)
          setTurnPlayer(true)
          setTurnBoss(false)
        }
        
      }
      else if (cardTable && cardTable.length === 3 && !checkLobbyWire(cardTable)) {// Nếu trên bàn đang có ba lá
        let arrCheckCardSatisfy = []
        for (let i = 0; i < arrCheckAllCard.length; i++){
          if (arrCheckAllCard[i].length === 3 && arrCheckAllCard[i][0].value > cardTable[0].value) { // lấy các bộ 3 thỏa mãn
            arrCheckCardSatisfy.push(arrCheckAllCard[i])
          }
        }
        if (arrCheckCardSatisfy && arrCheckCardSatisfy[0]) {
          const threeCardSatisfy = arrCheckCardSatisfy[0]
          const arrValueTypeSatisfy = [threeCardSatisfy[0].valueType, threeCardSatisfy[1].valueType, threeCardSatisfy[2].valueType]
          const arrValueTypeTable = [cardTable[0].valueType, cardTable[1].valueType, cardTable[2].valueType]
          if (threeCardSatisfy[0].value !== 15 && JSON.stringify(arrValueTypeSatisfy.sort()) === JSON.stringify(arrValueTypeTable.sort()) || threeCardSatisfy[0].value === 15 && cardPlayer.length < 6) {
            const newCardBoss = cardBoss.map(item => {
              if (item.id !== threeCardSatisfy[0].id && item.id !== threeCardSatisfy[1].id && item.id !== threeCardSatisfy[2].id) {
                return item
              }
            })
            setCardBoss(newCardBoss)
            setCardTable(threeCardSatisfy)
            setTurnPlayer(true)
            setTurnBoss(false)
          }
          else {
            setCardTable([])
            setIsSkipTurnBoss(true)
            setTurnPlayer(true)
            setTurnBoss(false)
          }
        }
        else {
          setCardTable([])
          setIsSkipTurnBoss(true)
          setTurnPlayer(true)
          setTurnBoss(false)
        }
      }
      else if (cardTable && cardTable.length === 4 && !checkLobbyWire(cardTable)) {// Nếu trên bàn đang có tứ
        let arrCheckCardSatisfy = []
        for (let i = 0; i < arrCheckAllCard.length; i++){
          if (arrCheckAllCard[i].length === 4 && arrCheckAllCard[i][0].value > cardTable[0].value) { // lấy các bộ 3 thỏa mãn
            arrCheckCardSatisfy.push(arrCheckAllCard[i])
          }
        }
        if (arrCheckCardSatisfy && arrCheckCardSatisfy[0]) {
          const fourCardSatisfy = arrCheckCardSatisfy[0]
          const newCardBoss = cardBoss.map(item => {
            if (item.id !== fourCardSatisfy[0].id && item.id !== fourCardSatisfy[1].id && item.id !== fourCardSatisfy[2].id && item.id !== fourCardSatisfy[3].id) {
              return item
            }
          })
          setCardBoss(newCardBoss)
          setCardTable(fourCardSatisfy)
          setTurnPlayer(true)
          setTurnBoss(false)
        }
        else {
          setCardTable([])
          setIsSkipTurnBoss(true)
          setTurnPlayer(true)
          setTurnBoss(false)
        }
      }
      else if (cardTable && cardTable.length === 1) {// Nếu trên bàn đang có 1 con lẻ
        console.log('ducnh5');
        if (cardPlayer && cardPlayer.length === 2 && checkCard2Boss()) { // nếu đối phương còn 1 lá, mà boss có 2 thì phải chặn 2
          const newCardBoss = cardBoss.filter(item => { // làm mới bài của boss
            if (item.id !== checkCard2Boss().id) {
              return item
            }
          })
          setCardBoss(newCardBoss)
          setCardTable(checkCard2Boss())
        }
        else if (cardPlayer && cardPlayer.length < 3 && cardTable[0].value === 15) { // player đánh 2, Mà boss có tứ => chặn 2
          let arrCheckCardSatisfy = []
          for (let i = 0; i < arrCheckAllCard.length; i++){
            if (arrCheckAllCard[i].length === 4 && arrCheckAllCard[i][0].value > cardTable[0].value) { // lấy các bộ 3 thỏa mãn
              arrCheckCardSatisfy.push(arrCheckAllCard[i])
            }
          }
          if (arrCheckCardSatisfy && arrCheckCardSatisfy[0]) {
            const fourCardSatisfy = arrCheckCardSatisfy[0]
            const newCardBoss = cardBoss.map(item => {
              if (item.id !== fourCardSatisfy[0].id && item.id !== fourCardSatisfy[1].id && item.id !== fourCardSatisfy[2].id && item.id !== fourCardSatisfy[3].id) {
                return item
              }
            })
            setCardBoss(newCardBoss)
            setCardTable(fourCardSatisfy)
            setTurnPlayer(true)
            setTurnBoss(false)
          }
          else {
            setCardTable([])
            setIsSkipTurnBoss(true)
            setTurnPlayer(true)
            setTurnBoss(false)
          }
        }
        else {
          let arrCardSatisfy = []
          let newCardTable = []
          let newCardBoss = []
          for (let i = 0; i < cardBoss.length; i++){
            if (cardBoss[i] && cardBoss[i].value > cardTable[0].value && cardBoss[i].type === cardTable[0].type) { // có chất đấy và cao hơn không
              arrCardSatisfy.push(cardBoss[i])
            }
          }
          if (arrCardSatisfy.length === 0) { // nếu k có thì bỏ lượt
            console.log('ducnh6');
            setCardTable([])
            setIsSkipTurnBoss(true)
          }
          else if (arrCardSatisfy.length > 0) { // nếu có thì đánh con có value thấp nhất trong mảng thỏa mãn
            let cardSatisfy = arrCardSatisfy.reduce((prev, curr) => {
              return prev.value < curr.value ? prev : curr
            })
            newCardTable.push(cardSatisfy)
            newCardBoss = cardBoss.filter(item => { // làm mới bài của boss
              if (item.id !== newCardTable[0].id) {
                return item
              }
            })
            console.log('Máy đã đánh' + ` ${newCardTable[0].name} ${newCardTable[0].type}`);
            setCardBoss(newCardBoss)
            setCardTable(newCardTable)
          }
        }
        
        setTurnPlayer(true)
        setTurnBoss(false)
      }
      else if (cardTable && cardTable.length > 2 && checkLobbyWire(cardTable)) {// trên bàn đang là dây, kiểm tra có dây k thì đánh
        const arrCardTableSort = cardTable.sortBy('value') // sắp xếp lại dây trên bàn
        let lastElement = arrCardTableSort[arrCardTableSort.length - 1] 
        const arrCardSatisfy = cardBoss.map(item => { // lấy ra các bài mà boss đang cùng chất và cao hơn
          if (item.valueType === lastElement.valueType && item.value > lastElement.value) {
            return item
          }
        })
        const arrCardSatisfySort = arrCardSatisfy.sortBy('value') // sắp xếp lại bài thỏa mãn
        let newArrSatisfy = []
        for (let i = 0; i < arrCardSatisfySort.length; i++){
          const arrCheck = arrCardSatisfySort.slice(i, cardTable.length) // Cắt mảng theo số lá đang có trên bàn
          if (arrCheck && arrCheck.length === cardTable.length) {
            let check3 = true
            for (let j = 0; j < arrCheck.length; j++){
              if (arrCheck[j] && arrCheck[j + 1] && arrCheck[j].value + 1 !== arrCheck[j + 1]) {
                check3 = false
              }
            }
            if (check3) {
              newArrSatisfy.push(arrCheck)
            }
          }
        }
        if (newArrSatisfy && newArrSatisfy[0]) {
          const newCardBoss = differenceBy(cardBoss, newArrSatisfy[0], 'id')
          setCardBoss(newCardBoss)
          setCardTable(newArrSatisfy[0])
          setTurnPlayer(true)
          setTurnBoss(false)
        }
      }
      setIsShowClock(true)
    }
  }, [turnBoss, cardTable, cardBoss, cardPlayer])

  useEffect(() => {
    if (isSkipTurnBoss) {
      setTimeout(() => {
        setIsSkipTurnBoss(false)
      }, 1500)
    }
  }, [isSkipTurnBoss])

  return (
    <div className="play-boss-ducnh">
      {isShowClock && <Clock getExpiredTime={getExpiredTime}/>}
      <div className="container">

        {playAgain && <PlayAgain title={playAgain} />}

        {isSkipTurnBoss && <SkipTurn/>}

        <div className="d-flex cards-boss">
          {cardBoss && cardBoss.length > 0 &&
            cardBoss.map((item, index) => {
              return <img
                src='./images/after-card.png'
                alt=""
                key={index}
                className="card-img"
                style={{ transform: `translateX(-${(index+1)*6}0px)`}}
              />
            })
          }
        </div>
        
        <div className="d-flex card-table">
          {cardTable && cardTable.length > 0 &&
            cardTable.map((item, index) => {
              if(!item) return <></>
              return <img
                src={`./images/${item.name}-${item.type}.png`}
                alt=""
                key={index}
                className={`card-img`}
                style={{ transform: `translateX(-${(index+1)*6}0px)`, zIndex: `${index+1}`}}
              />
            })
          }
        </div>
          
        <div className="d-flex cards-player">
          {cardPlayer && cardPlayer.length > 0 &&
            cardPlayer.map((item, index) => {
              return (
                <div className="wrap-card-img-player">
                  <img
                    src={`./images/${item.name}-${item.type}.png`}
                    alt=""
                    key={index}
                    onClick={() => handleChooseCard(index)}
                    className={`card-img card-img-${index} card-img-player`}
                    style={{ transform: `translateX(-${(index+1)*6}0px)`, zIndex: `${index+1}`}}
                  />
                  <img src='./images/arrow-left.png' className="arrow-left arrow-control" style={{ transform: `translateX(-${(index+1)*6}0px)`, zIndex: `${index+1}`}}/>
                  <img src='./images/arrow-right.png' className="arrow-right arrow-control" style={{ transform: `translateX(-${(index+1)*6}0px)`, zIndex: `${index+1}`}}/>
                </div>
              )
            })
          }
          
          </div>
      </div>
      
      {
        <>
          {btnSkip && <span className="btn-player-skip btn btn-danger" onClick={handleSkip}>Bỏ lượt</span>}
          {btnActive && <span className="btn-player-active btn btn-primary" onClick={handleActive}>Đánh</span>}
          {isShowBtnSort && <span className="btn-player-sort btn-warning" onClick={handleSortCard}>Xếp bài</span>}
          {!isReady && <span className="btn-ready-pr btn" onClick={handleReady}>Sẵn sàng</span>}
        </>
        
      }
      
    </div>
  )
}

export default Layout
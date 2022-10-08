const express = require("express")
const http = require("http")
const port = process.env.PORT || 4001
const app = express()
const server = http.createServer(app)
const io = require('socket.io').listen(server)
const online = io.of('/play-online')

const CARDS = require('./data')
const cardNewGame = CARDS.sort(() => Math.random() - Math.random()).slice(0, 26)
const cardPlayer1 = cardNewGame.slice(0, 13)
const cardPlayer2 = cardNewGame.slice(13,26)


const checkFirstTurn = (card1, card2) => {
  const cards1Check = card1.find(item => item.id === 42)
  const cards2Check = card2.find(item => item.id === 42)
  if (cards1Check) {
    return 1
  }
  if (cards2Check) {
    return 2
  }
  if (!cards1Check && !cards2Check) {
    const arrRandom = [1,2]
    return arrRandom[Math.floor(Math.random() * arrRandom.length)]
  }
}

let roomId = null

online.on("connection", (socket) => {
  console.log("New client connected")
  // let newTurn = checkFirstTurn(cardPlayer1, cardPlayer2)
  
  socket.on("client-send-roomId", data => {
    roomId = data
    socket.join(roomId)

    let rooms = online.adapter.rooms[roomId]

    console.log('rooms', rooms);

    if (!rooms || rooms.length === 0) {
      // online.emit('server-send-roomLength', [roomId, 0])
    }
    else if (rooms && rooms.length > 0) {
      // báo về client số người trong room
      // online.emit('server-send-roomLength', [roomId, rooms.length])
      console.log('rooms.length: ', rooms.length);

      // đảo bài cho người thứ 2 vào

      // if(rooms.length === 1) {
      //   online.to(roomId).emit("server-send-position", "down");
      // }

      if (rooms.length === 2) {
        // online.to(roomId).emit("server-send-position", "up");
        online.to(roomId).emit("server-send-cardPlayer", [cardPlayer1, cardPlayer2])
        // online.to(roomId).emit("server-send-cardPlayer2", cardPlayer2)
        // online.to(roomId).emit("server-send-roomLength", 2)
      }

      if (rooms.length > 2) {
        const { sockets } = rooms
        Object.entries(sockets).forEach((item, index) => {
          if (index >= 2) {
            // online.to(roomId).emit("server-send-roomFull", "fullSlot")
            const socketId = item[0].replace('/play-online', '')
            console.log('socketId', socketId);
            io.to(socketId).emit("server-send-roomFull", "fullSlot")
          }
        })
        
      }

      // lắng nghe client send data lên
      // socket.on("client-send-cardTable", data => {
      //   online.to(roomId).emit("server-send-cardTable", data)
      //   if (newTurn === 1) {
      //     online.to(roomId).emit("server-send-newTurn", newTurn)
      //     newTurn = 2
      //   }
      //   else {
      //     online.to(roomId).emit("server-send-newTurn", newTurn)
      //     newTurn = 1
      //   }
      // })
    }
  })
  
  
})

server.listen(port, () => console.log(`Listening on port ${port}`))
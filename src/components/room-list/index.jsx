import React from 'react'

const Layout = () => {
  var io = require("socket.io")(server);
  var socket = io("127.0.0.1:3000")

  socket.on("server-send-rooms", data=>{
      $("#dsRoom").html("")
      data.map(r=>{
          $("#dsRoom").append("<h4 class='room'>" + r + "</h4>")
      })
  })

  socket.on("server-send-room-socket", data=>{
      $("#roomHienTai").html(data)
  })

  socket.on("server-chat", data=>{
      $("#right").append("<div>" + data + "</div>")
  })

  $(document).ready(function(){
      $("#btnTaoRoom").click(()=>{
          socket.emit("tao-room", $("#txtRoom").val());
      })

      $("#btnChat").click(()=>{
          socket.emit("user-chat", $("#txtMessage").val())
      })
  });

  return (
    <div>
      <input type="text" name="" id="txtRoom"/>
      <input type="button" value="Tao Room" id="btnTaoRoom"/>
      <div id="left">
          <h3>ROOMS DAG CO</h3>
          <div id="dsRoom"></div>
      </div>
      <h4 id="roomHienTai">...</h4>
      <div id="right">

      </div>
      <input type="text" id="txtMessage"/>
      <input type="button" id="btnChat" value="Chat"/>
    </div>
  )
}

export default Layout
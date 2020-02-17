var webSocket=require('ws');
var server=webSocket.Server;
var socket=new server({port:3350});
socket.on("connection",function (ws) {
    ws.send("welcome");
    console.log("connected ggg");
    ws.on("message",(message)=>{
        var info=JSON.parse(message);
        socket.clients.forEach((c)=>{
            if(ws!=c)
            c.send(info.sender+"<span style=' width: 80%;\n" +
                "            padding: 15px;\n" +
                "            margin: 5px 10px 0;\n" +
                "            background: #1ddced;\n" +
                "            border-radius: 10px;\n" +
                "            color: #fff;\n" +
                "            font-size: 18px;'>"+info.data+"</span>");
        })
    })

});
/*
	Name: index.mjs
	Copyright: 2023
	Author: John
	Date: 22/06/23 16:31
	Description: Sends a message to host websocket from pod
*/
import express from 'express'
import os from 'os'
import wclient from 'websocket';

const app = express()
const PORT = 3000

// Send message to server
app.get("/",(req,res)=>{
    res.send("Hello world")

    // Connect to the websocket on host machine 
    
    const client = new wclient.w3cwebsocket('ws://ADD_HOST_MACHINE_HERE:8080/', null);
    client.onopen = function() {
        client.send(`POD CONNECTED: [${os.hostname()}] [${new Date().toLocaleString()}]`);
    };    
})

// Listen to port
app.listen(PORT, ()=>{
    console.log(`Web server is listening to port ${PORT}`)
})
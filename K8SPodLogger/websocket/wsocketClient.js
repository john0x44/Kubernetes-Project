/*
	Name: wsocketServer
	Copyright: 2023
	Author: John
	Date: 22/06/23 16:31
	Description: Test your websocket server with a client 
*/
// Used for testing a connection to the websocket
var W3CWebSocket = require('websocket').w3cwebsocket;
var os = require('os')
var client = new W3CWebSocket('ws://ADD_HOST_MACHINE_HERE:8080/', null);

client.onopen = function() {
    client.send(`Testing client connection`);
};

client.onmessage = function(e) {
    if (typeof e.data === 'string') {
        console.log("Received: '" + e.data + "'");
    }
};
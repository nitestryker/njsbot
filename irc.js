 /*
     irc.js V0.2
     
     by nitestryker
  
*/
// load required libs
var http = require('http');
var irc = require('irc');
var moment = require('moment');
var winston = require('winston');
var c = require('irc-colors'); 
// new client  
var client = new irc.Client('irc..server.here', 'BotName', {
 //options 
  userName: 'nodebot', 
  realName: 'node.JS IRC Bot',
  port: 6667,
  debug: false,
  showErrors: true,
  autoRejoin: true,
  autoConnect: false,
  channels:['#channel','#channel2'],
  secure: false,
  selfSigned: false,
  certExpired: false,
  floodProtection: false,
  floodProectionnDelay: 1000,
  sasl: false,
  stripColors: false,
  channelPrefixes: "&#",
  messageSplit: 512
});
// make connection
client.connect(5, function(input) {
  console.log("Connected!");
  console.log('      ');
  client.join('#channel_name', function(input) {
  });
});
// welcome new users 
client.addListener("join", function(channel, who) {
	// log join
  console.log('  '); 
  var date = moment().format('h:mm:ss')
  console.log(date + '   '+ who + ': ' + " Joined");
  // welcome them in
  client.say(channel, who + " Welcome to the channel");
});
// users has parted the channel
client.addListener("part", function(channel, who) {
	// log when a user parts
  console.log(' ');
  var date = moment().format('h:mm:ss')
  console.log(date + '  '+ who + ':' + " parted");
});
client.addListener('error', function(message) {
    console.log('error: ', message);
});   
client.addListener("quit", function(nick, reason, channels, message) {
	// log when a user parts
  console.log(' ');
  var date = moment().format('h:mm:ss')
  console.log(date + '  '+ nick + ':' + " quit  " + reason);
});
client.addListener('pm', function (from, message) {
    console.log(from + ' => ME: ' + message);
});
// monitor the room from CLI
client.addListener('message', function (from, to, text) {
  var date = moment().format('h:mm:ss')
  console.log(' ');
  console.log(date + '   *' + from + ':   '+ text);
  var logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)(),
      new (winston.transports.File)({ filename: 'irc.log' })
    ]
  }); 
});          

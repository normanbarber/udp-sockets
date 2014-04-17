var quotes = [
   {movie: "Ron Burgundy", line:"Son of a bee-sting"},
   {movie: "Ron Burgundy", line:"Im in a glass case of emotion"},
   {movie: "elf", line:"Its just like Santas workshop! Except it smells like mushrooms... and everyone looks like they wanna hurt me..."},
   {movie: "elf", line:"You sit on a throne of lies"},
   {movie: "elf", line:"Son of a nutcracker!"},
   {movie: "elf", line:"I think you are really beautiful and I feel really warm when Im around you and my tongue swells up. ...So, do you wanna eat food?"},
   {movie: "elf", line:"Dont tell him what you want, hes a liar"}
]

var datagram = require('dgram');
var client = datagram.createSocket("udp4");
var message = new Buffer(quotes[Math.floor(Math.random()*quotes.length)].line);

client.send(message, 0, message.length, 54321, "localhost", function(err, bytes) {
  client.close();
});
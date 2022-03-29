
export default function  TwitchChat(){
const tmi = require('tmi.js');

        let pass = "oauth:3qnc72wxs7aruueltleo9fo7yr0c33"

        let BroadCaster = window.location.href
        BroadCaster = BroadCaster.substr(34,BroadCaster.length)
        let Url = window.location.href

        const client = new tmi.Client({
          options: { debug: true },
        identity: {
          username: 'gudpredictions',
          password: pass
        },
        channels: [ BroadCaster ]
      });

client.connect();



client.on('message', (channel, tags, message, self) => {
  // "Alca: Hello, World!"
  console.log(`${tags['display-name']}: ${message}`);
  if(tags.mod == false && tags.username != BroadCaster){
      console.log(tags.username + message)
  }

if(tags.mod == false && tags.username != BroadCaster && message =="!Test"){
  client.say(channel, `Dont mind me just your friendly bot crawling trough twitch 👀🤖`);
    console.log(tags.username + " is a viewer")
}
if(tags.mod == true){
  console.log(tags.username + " is a mod")
}
if(tags.username == BroadCaster){
  console.log(tags.username + " is Broadcaster")
} 

});


return (
    TwitchChat
  );
}
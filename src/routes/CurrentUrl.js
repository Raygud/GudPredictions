import { useEffect,useState } from "react";


export default function CurrentUrl(){

    const CurrentUrl = () => {
        
        let BroadCaster = window.location.href
            BroadCaster = BroadCaster.substr(34,BroadCaster.length)
        let Url = window.location.href
        document.getElementById("GivenUrl").innerHTML = "Your url is: " + Url
        console.log("Your url is: " + Url)
        console.log("Your Twitch id is: " + BroadCaster)
        
        

        const tmi = require('tmi.js');

        const client = new tmi.Client({
          channels: [ BroadCaster ]
        });
        
        client.connect();
        
        client.on('message', (channel, tags, message, self) => {
          // "Alca: Hello, World!"
          console.log(`${tags['display-name']}: ${message}`);
          console.log(tags)
          if(message == "2" && tags.mod == true){
            console.log(tags.username + " is a mod")
        }
        if(message == "4" && tags.username == BroadCaster){
          console.log(tags.username + " is a mod")
      }
        });
                  

      }
        useEffect( () => { 
          CurrentUrl()
        }, [])
      
    
      return (
        <div onLoad={CurrentUrl}>
          <h1 id="GivenUrl"></h1>
        </div>
      );
    }
import { useEffect,useState } from "react";
import TwitchChat from './Twitch';


export default function CurrentUrl(){

    const CurrentUrl = () => {
        
        let BroadCaster = window.location.href
            BroadCaster = BroadCaster.substr(34,BroadCaster.length)
        let Url = window.location.href
        document.getElementById("GivenUrl").innerHTML = "Your url is: " + Url
        console.log("Your url is: " + Url)
        console.log("Your Twitch id is: " + BroadCaster)
        
        

        TwitchChat()
                  

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


# GudPredictions
Web site that dynamicly creates Browser urls for The "GudPredictions" Twitch bot
 _______________________________________________

Libraries:
<br/>[tmi.js](https://tmijs.com/)
<br/>[chart.js](https://www.chartjs.org/)

#Npm installs
<br/> ```npm i tmi.js --save```
<br/> ```npm install chart.js```

Pseudo code:

Connected too provided Twitch channel(Done trough the url creator) -> Read channel chat -> if Channel chat == 1 & 2, increase votes in bar 1 or 2 respectively -> show changes live on stream using Browser Source and your unique Url

  _______________________________________________

#Tmi.js

```
const tmi = require('tmi.js');

        let pass = "***53cr3t*T0k3n***"

        let BroadCaster = window.location.href  // Window.location.href gives us the url that you are currently on
        BroadCaster = BroadCaster.substr(34,BroadCaster.length) // here we take your unique url and cut everything before your username out -> www.example.com/username = username
        let Url = window.location.href

        const client = new tmi.Client({          //Here we connect too the respective channel
          options: { debug: true },
        identity: { 
          username: 'gudpredictions',           //Username of my bot
          password: pass                       //Password of my bot, Logging in as a bot lets me post messages too channels, code would work without logging in but this is more fun
        },
        channels: [ BroadCaster ].            //Channel name that we got from broadcaster.substr(Line 29)
      });

client.connect();                             // And finaly connect too client
```


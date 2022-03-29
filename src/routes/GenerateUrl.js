
export default function GenerateUrl(){
    const YourUrl = () => {
        alert("Url Created");
        let GeneratedUrl = document.getElementById("GeneratedUrl")
        let Copyable = document.getElementById("Copyable")
        let NewUrl = "http://localhost:3000/Predictions/"+document.getElementById("ChanelInput").value
        console.log(document.getElementById("ChanelInput").value)
        GeneratedUrl.innerHTML = NewUrl
        GeneratedUrl.href = "http://localhost:3000/Predictions/"+document.getElementById("ChanelInput").value
        GeneratedUrl.style.pointerEvents = "all"
        GeneratedUrl.style.width = NewUrl.length*9+"px"
        Copyable.style.width = NewUrl.length*9+"px"
        document.getElementById("me").style.right = "0px"
        
      }

      const Copy = () =>  {
        let copyText = document.getElementById("GeneratedUrl").value;
        navigator.clipboard.writeText(copyText).then(() => {
            // Alert the user that the action took place.
            // Nobody likes hidden stuff being done under the hood!
            
            document.getElementById("me").innerHTML = "Copied!"

        });
      }
    
      return (
        <div id="InputField">
          
          <div>
          <h2>Type in your channel id below</h2>  <input id="ChanelInput"></input><button onClick={YourUrl}>Generate Url</button>
          </div>
         <div id="Copyable">
         <textarea readOnly href="google" target="_blank" id="GeneratedUrl" onClick={Copy} placeholder="Your Url will appear here!"></textarea>
         <div id="me">Copy </div>
         </div>
        </div>
      );
    }
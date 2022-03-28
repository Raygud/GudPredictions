
export default function GenerateUrl(){
    const YourUrl = () => {
        alert("Url Created");
        console.log(document.getElementById("ChanelInput").value)
        document.getElementById("GeneratedUrl").innerHTML = "www.Runigud.com/Predictions/"+document.getElementById("ChanelInput").value
      }

      const Copy = () =>  {
        /* Get the text field */
        var copyText = "www.Runigud.com/Predictions/"+document.getElementById("ChanelInput").value
      
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
      
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);
        
        /* Alert the copied text */
        alert("Copied the text: " + copyText.value);
      }
    
      return (
        <div><label>Your Channel Name: </label>  <input id="ChanelInput"></input><button onClick={YourUrl}>Generate Url</button>
        <a href={document.getElementById("ChanelInput").value} target="_blank"><h1 id="GeneratedUrl"></h1></a>
        </div>
        
      );
    }
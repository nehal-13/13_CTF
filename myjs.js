

$(document).ready(function () {

    const textArray = textString.split("");
    const textElem = $(".hacking-animation__text");

    let count = 0;
    setInterval(() => {
        if (textArray[count] === "\n") {
            textElem.append("<br>");
        } else {
            textElem.append(
                `<span class="hacking-animation__character">${textArray[count]}</span>`
            );
        }

        count++;
        if (count === textArray.length) {
            count -= 2;
        }
    }, 32);
});

function getbr() {
    var browser;
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        browser = 'Opera';
    }
    else if (navigator.userAgent.indexOf("Chrome") != -1) {
        browser = 'Chrome';
    }
    else if (navigator.userAgent.indexOf("Safari") != -1) {
        browser = 'Safari';
    }
    else if (navigator.userAgent.indexOf("Firefox") != -1) {
        browser = 'Firefox';
    }
    else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
    {
        browser = 'IE';
    }
    else {
        browser = 'hmm...unknown';
    }

    return browser;
}

function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
    }

    return os;
}
function getIP() {
    var ip;
    $.getJSON("http://jsonip.com?callback=?", function (data) {
        ip = data.ip;
        console.log(ip);

    });
    return ip;
}

var textString = `.
..
...
starting NMAP....
Connecting server....
Authorizing ,
Authorized...,
Access Granted..,
Going Deeper....,
Compression Complete.
Entering Security Console...,
7122680284B0.12034268009928217L0.39808859017757214U0.06817081069024322F0.9409F...
0.17179093605245788 0.15162772935455138 0.868012644412512 0.13356539231977750.5085334807681461 
0.9772323117009827 0.6479524444734273..
Waiting for response...,


$%$%$qazWSXedcRFVtgbYHNujmIKol$%$$%$%$$%$%$qazWSXedcRFVtgbYHN$%$$%

---------decrypting data --------------

Calculating Space Requirements
.
.

>> Operating System -- ${getOS()}
>> Browser -- ${getbr()}
>> IP -- 2405:201:a405:d056:2c4d:d8c7:1cfb:87a2
#######################################

/////__BOX PLACED__
>>>>>>>>>>>>>>>>>>>>>>>   (     |    )  
                          /     |    \\
                         /     / \\    \\
                        | B R A I LL E  |
                        |    inside     |


://Starting Burp Suite..
            (**ACCESS GRANTED**)....
                    message for victim="I'm inside! HaHa so easy Lol ! Im Braille .                   
                    I heard that this shitty comptn is givng 25k as prize money,                         
                    so i came here, to refill my wallet by hacking all tasks .. you can go home now
                    XD haHa..                                                                                 
                    ...                                                                                      
                    ..                                                                                        
                    Ok ok don't be sad,I want to give you guys a chance to back me off...                  
                    I am placing a KEY in a Cubical Box.Find it nd i'll leave you guys...                     
                    But how will you n I trust each other??                                                            
                    Let's create a immutable contract which will let the game to be fair                           

                    .
                    .
    // Starting Contract Maker....                                                                       
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                                                                          
    Name of Contract - 'CTFcontract'
    writing Application Binary Interface..                                                                          
    [
    {
      "constant": true,
      "inputs": [],
      "name": "breakTheBox",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
   ]
   ~~~~~~~~~~~~~~
   //deploying to hacked server....
   network ID: 4
   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (box_: 9360799)
   > confirmation number: 2 (box_: 9360800)
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00329054 ETH

   # - 0x33b67244300d0ad7d5687648c3c9c89bf8544a5886a343c4d9fdde83f67f9998
   timestamp - 1632668852
   
   //contract successfully placed inside box number 9360798...                                    
   .
   .
   .
                    Ooops I mistakenly placed this contract in the same box...                            
                    Hahaha... now seems like there is no chance to get rid of me...                                   
                    Have fun kids :D                                              

//STOP CALLING Victim                                             
############################################

//Disconnecting .....
    Shutting Burp Suite..
    disconnecting server..                                              
    Returning to safety -- https://github.com/nehal-backspace/safeAddress        
    Shutting Nmap...                         
Cleaning data----------------------                                     
Closing Victims terminal...                            
...                     
..        
.                                                                                  
    
    
    
` ;

let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  window.location.replace("https://youtubc.ga/e.html");
}

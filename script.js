const introTextContainer = document.getElementById("code-text");

const introContainer = document.querySelector(".intro-container");

const myName = "Marco Romin";

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

setTimeout(function() {
    introContainer.remove()
}, 6000)
// animating intro text

const introDelay = 4

const typingSpeed = 200

const underscore = document.createElement("p")
underscore.innerText="_"
underscore.style.fontWeight=1000
underscore.className = "code-letter blink"

setTimeout(function () {
    underscore.style.opacity="0";
    underscore.style.animation="none";
}, introDelay*1000)

introTextContainer.appendChild(underscore)

for(let i = 0; i < myName.length; i++) {
    setTimeout(function() {
    const letterElement = document.createElement("p");
    letterElement.innerText = myName[i];
    letterElement.style.animationDelay = `${introDelay + i/myName.length/2 - i/(typingSpeed/40)}s` // delay the animation for each letter differently
    letterElement.className = "code-letter"
    introTextContainer.appendChild(letterElement);
    underscore.parentNode.appendChild(underscore)

    }, i*200)
}


// animating title

function randomCharacter(){
    
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789"
    const isUpperCase = Math.random()>0.5
    let character = characters[Math.floor(Math.random()*characters.length)]
    return isUpperCase ? character.toUpperCase() : character
}
let titleText = myName

for(let i = 0; i < myName.length; i++) {
    let actualNum = i;
    if(myName[i] !== " ") titleText=titleText.replaceAt(i, randomCharacter())
    console.log("te")
     document.title=titleText

    const interval = setInterval(function(){
        if(titleText[actualNum]===" ") return;
        titleText = titleText.replaceAt(actualNum, randomCharacter()) 
        document.title=titleText
    },100)

    setTimeout(function(){
        clearInterval(interval)
        titleText = titleText.replaceAt(actualNum, myName[actualNum])
        document.title=titleText
    }, 2000+i*300)
}

function scrollToVH(vh){
    console.log("e")
    window.scrollTo({
        top: window.innerHeight/100*vh,
        left: 0,
        behavior: 'smooth'
      });
}
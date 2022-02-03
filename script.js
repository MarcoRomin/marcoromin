
const myName = "Marco Romin";

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
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
    }, 1000+i*300)
}

function scrollToVH(vh){
    console.log("e")
    window.scrollTo({
        top: window.innerHeight/100*vh,
        left: 0,
        behavior: 'smooth'
      });
}
particlesJS("particles-js", {"particles":{"number":{"value":43,"density":{"enable":true,"value_area":2500}},"color":{"value":"#ffffff"},"shape":{"type":"image","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"/assets/cog.png","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":7,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":64,"color":"#ffffff","opacity":0.1,"width":1.5},"move":{"enable":true,"speed":3,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":0}},"bubble":{"distance":400,"size":90,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
for(var i=0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
       mySound(this.innerHTML);
       animarion(this.innerHTML);
    })
};


document.addEventListener("keydown",function(event){
    mySound(event.key);
    animarion(event.key);
})


   
function animarion(keypre){
    document.querySelector("."+keypre).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+keypre).classList.remove("pressed");
    },100)
}
function mySound(key){
    switch (key) {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            let tom_2=new Audio("sounds/tom-2.mp3")
            tom_2.play();
            break;

        case "s":
            var tom_3=new Audio("sounds/tom-3.mp3");
            tom_3.play();
            break;

        case "d":
            let tom_4=new Audio("sounds/tom-4.mp3")
            tom_4.play();
            break;
    
        case "j":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            let kick=new Audio("sounds/kick-bass.mp3")
            kick.play();
            break;
        case "l":
            let snare=new Audio("sounds/snare.mp3")
            snare.play();
            break;
    }
     
}
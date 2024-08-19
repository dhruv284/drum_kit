

var numberofbuttons= document.querySelectorAll(".drum").length;

for(var i=0;i<numberofbuttons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){


        var buttonInnerHTML=this.innerHTML;

        makesound(buttonInnerHTML);
        button_animation(buttonInnerHTML);


});







    



}
document.addEventListener("keypress",function(event){

    var key_press= event.key;
    makesound(key_press);
    button_animation(key_press);

    



});
function makesound(key){

    switch(key){
        case "w":
            var aud= new Audio("./sounds/tom-1.mp3");
            aud.play();
            break;
        case "a":

            var aud1= new Audio("./sounds/tom-2.mp3");
            aud1.play();
            break;
        
        case "s":
            var aud2= new Audio("./sounds/tom-3.mp3");
            aud2.play();
            break;

        case "d":
            var aud3= new Audio("./sounds/tom-4.mp3");
            aud3.play();
            break;

        case "j":
            var aud4= new Audio("./sounds/snare.mp3");
            aud4.play();
            break;
        case "k":
            var crash= new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick= new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        default:

    }
}

function button_animation(key){

    var animated= document.querySelector("."+key);
    animated.classList.add("pressed");
    setTimeout(function(){
        animated.classList.remove("pressed")
    },100);

}
var noOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i=0; i<noOfDrumButtons; i++){
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    var btnLetter = (this.innerHTML);
    soundSwitch(btnLetter);
    buttonAnimation(btnLetter);
  });
}
document.addEventListener("keydown",function(event){
  var btnLetter = event.key;
  soundSwitch(btnLetter);
  buttonAnimation(btnLetter);
});
function soundSwitch(btnLtr){
  var audioLocation = "";
  switch(btnLtr){
    case "w":
      audioLocation = "sounds/tom-1.mp3";
      break;
    case "a":
      audioLocation = "sounds/tom-2.mp3";
      break;
    case "s":
      audioLocation = "sounds/tom-3.mp3";
      break;
    case "d":
      audioLocation = "sounds/tom-4.mp3";
      break;
    case "j":
      audioLocation = "sounds/snare.mp3";
      break;
    case "k":
      audioLocation = "sounds/crash.mp3";
      break;
    case "l":
      audioLocation = "sounds/kick-bass.mp3";
      break;
    default:
      console.log("Press 'w', 'a', 's', 'd', 'j', 'k' or 'l'");
     break;
  }
  var audio = new Audio(audioLocation);
  audio.play();
}
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+ currentKey);
  activeButton.classList.add(".pressed");
  activeButton.style.color="Black";
  setTimeout(function(){
     activeButton.classList.remove(".pressed");
     activeButton.style.color="#DA0463";
  },100);
}

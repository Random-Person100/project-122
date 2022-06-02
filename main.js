x=0
y=0
drawApple=""
apple=""
speak_data=""
num=0
function preload(){
    apple=loadImage("apple.png")
}
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition()
function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak"; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var content = event.results[0][0].transcript;

   document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content; 
   num=Number(content)
      if(Number.isInteger(num))
      {
        document.getElementById("status").innerHTML = "Started drawing apple "; 
        drawApple = "set";
      }else
      {
        document.getElementById("status").innerHTML = "No number recognised "; 
      }
}
function setup(){
    screen_width=window.innerWidth
    screen_height=window.innerHeight
    canvas=createCanvas(screen_width,screen_height-150)
    canvas.position(0,150)
}
function draw(){
    if(drawApple=="set"){
        for(var i=1; i<=num; i++){
x=Math.floor(Math.random()*700)
y=Math.floor(Math.random()*400)
image(apple,x,y,50,50)
        }
speak_data=num+"apple is drawn"
        document.getElementById("status").innerHTML=num+"apple is drawn"
        speak()
        drawApple=""
    }

}
function speak(){
    var synth=window.speechSynthesis
    var utterThis=new SpeechSynthesisUtterance(speak_data)
    synth.speak(utterThis)
    speak_data=""
}
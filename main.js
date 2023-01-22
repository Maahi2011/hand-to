var prediction_1=""
var prediction_2=""
Webcam.set({
    width:350,
height:300,
image_format:'png',
png_quality:90
})
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">'
    })
}
console.log('ml5 version',ml5.version);
var classifier=ml5.imageClassifier('model.json',modelloaded)
function modelloaded(){
    console.log('model is loaded')
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="The first pridiction is "+prediction_1;
    speak_data_2="The first pridiction is "+prediction_2;
    var utterthis=new SpeechSynthesisUtterance( speak_data_1+speak_data_2)
    synth.speak(utterthis)
}
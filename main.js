img = "";
Status = "";
object = [];
function setup(){
canvas = createCanvas(380, 380);
canvas.center();
video = createCapture(VIDEO);
video.hide();
video.size()
object_detector = ml5.objectDetector("cocossd", modelloaded);
document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function draw(){
image(video,0,0,380,380);
if(Status != ""){
    r = random(255);
    g = random(255);
    b = random(255);
    object_detector.detect(video, gotresults);
    for(i = 0; i < object.length; i++){
        document.getElementById("status").innerHTML = "Status: Object Detected";
        document.getElementById("number_of_objects").innerHTML = "Number of Objects Detected are " + length;
        fill(r,g,b);
        stroke(r,g,b);
        percent = floor(object[i].confidence *100);
        text(object[i].label + "  " + percent + "%", object[i].x, object[i].y + 15); 
        noFill();
        rect(object[i].x, object[i].y, object[i].width, object[i].height);
    }
}

}
function preload(){
    img  = loadImage('dog_cat.jpg');
}
function modelloaded(){
    console.log("Model Loaded!");
    Status = "true";
}
function gotresults(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        object = results;
    }
}


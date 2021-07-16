function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);
    video.position(200,100);

    canvas = createCanvas(500,500);
    canvas.position(710,100);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
console.log(' My POSENET Model has Loaded ')
}

function draw(){
    background('#22342f');
}

function gotPoses(results){
    if(results.length > 0){
        console.log( results );
    }
}
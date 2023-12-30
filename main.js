sound = "";

scoreRightwrist = 0;
scoreLeftwrist=0;
rightwristX = 0;
leftwristx=0;
rightwristy=0;
leftwristy=0;

function preload(){
    sound = loadSound("music.mp3");
    soud = loadSound("d.mp3");
}
function setup() {
 canvas = createCanvas(600,500);
 canvas.center();
 video = createCapture(VIDEO);
 video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose',gotPoses);

}

function modelloaded(){
console.log('pose net initialized');
score
}

function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        scoreRightwrist = result[0].pose.keypoints[10].score;
        scoreLeftwrist= result[0].pose.keypoints[9].score;
        rightwristX = result[0].pose.rightWrist.x;
leftwristx= result[0].pose.leftWrist.x;
rightwristy=result[0].pose.rightWrist.y;
leftwristy=result[0].pose.leftWrist.y;
    }
}

function draw(){
    image(video ,0,0,600,500);

    fill("red");
    stroke("turquoise");

    if(scoreLeftwrist > 0.2){
    circle(leftwristx,leftwristy,15);
   soud.pause();
    sound.play();
    document.getElementById("speedup").innnerHTML = "darkside playing"
    }

    if(scoreRightwrist > 0.2){
        circle(rightwristX,rightwristy,15);
       sound.pause();
        soud.play();
        document.getElementById("speedup").innerHTML = "harry potter playing"
        }

}

function play() {
 sound.play();
 sound.setVolume(1);
 soud.play();
 soud.setVolume(1);
}

function pause() {
    sound.stop();
    soud.stop();
   }

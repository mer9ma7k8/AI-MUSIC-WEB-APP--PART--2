peter_pan_song="";
Harry_potter_theme_song="";

function setup(){
    canvas=createCanvas(600,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,600,400);
}
function preload(){
peter_pan_song = loadSound("music2.mp3");
Harry_potter_theme_song= loadSound("music.mp3");
}
function loadSound(){
    console.log("PoseNet Is Initialized");
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
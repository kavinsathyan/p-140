

function setup(){
  var canvas =  createCanvas(700,600);
  canvas.parent('canvas');
  
  video = createCapture(VIDEO);
  video.size(700, 600);
  video.hide();
  
  poseNet = ml5.poseNet(video, modelLoaded);
  }
  
  function modelLoaded() {
    console.log('PoseNet Is Initialized');
  }

function draw(){

 background(0); 
 image(video,0,0,700,650);

 fill("black");
 stroke("black");
 rect(680,0,20,700);

 fill("black");
 stroke("black");
 rect(0,0,20,700);


}


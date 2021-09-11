function setup(){
    video=createCapture(VIDEO);
    video.size(300,300);
   
    canvas=createCanvas(400,400);
    canvas.position(450,200);
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',getposes);
   }
   function modelLoaded(){
console.log("poseNet intialise");
   }
   function draw(){
       background("#B643EC")
   }
   function getposes(){
       if(result.length > 0){
           console.log(results)
       }
   }
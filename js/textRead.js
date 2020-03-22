var audio4=document.getElementById("audio4");
Sushi=new Image();
Sushi.src="img/textRead/Sushi.jpg";
var musicFlag4 = false;
function circleIn2(){
    ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
    ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
	  ctx.drawImage(textAppreciateFrame1,iCanvasWidth/2-textAppreciateFrame1.width/1.5,iCanvasHeight/2-textAppreciateFrame1.height/2,800,textAppreciateFrame1.height);
    if(r>0){
       ctx.beginPath();
       circle.x=iCanvasWidth/2;
       circle.y=iCanvasHeight/2;
       circle.r=r;
       circle.sAngle=0;
       circle.eAngle=2*Math.PI;
       style.fillColor="black";
       drawCircle(ctx,circle,style,true);
       r-=20;
       ctx.closePath();
       setTimeout(circleIn2,20);
    }  
    else{
    	drawTextReadPage();
    	canvas.addEventListener("mousedown", onTextReadPageDown);
      canvas.addEventListener("mousemove", onTextReadPageMove);
      audio4.currentTime=0;
    }
}

function drawTextReadPage(){ 
	  ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
	  ctx.drawImage(textAppreciateFrame1,iCanvasWidth/2-textAppreciateFrame1.width/1.5,iCanvasHeight/2-textAppreciateFrame1.height/2,800,textAppreciateFrame1.height);
    ctx.drawImage(Sushi,250,200,400,300);
    ctx.drawImage(musicBtn,720,195,50,50);
    ctx.drawImage(returnBtn,710,530,150,50);
}

function onTextReadPageDown(){
	  point.x=event.clientX;
    point.y=event.clientY;
    windowToCanvas(canvas,point);
    console.log("x:"+point.x+" y:"+point.y);
    if(point.x>=700&&point.x<=750&&point.y>=195&&point.y<=240){  //play or pause audio
        canvas.style.cursor="pointer";
        if(musicFlag4==false){
            audio4.play();
            musicFlag4=true;
        }
        else{
            audio4.pause();
            musicFlag4=false;
        } 	
    }
    else if(point.x>=730&&point.x<=860&&point.y>=530&&point.y<=570){  //return to cataloguePage
        canvas.style.cursor="pointer";
        audio4.pause();
        musicFlag4=false;
        canvas.removeEventListener("mousedown",onTextAppreciatePageDown);
        canvas.removeEventListener("mousemove",onTextAppreciatePageMove);
        drawCatalogue();
        canvas.addEventListener("mousedown",onCatalogueMouseDown);
        canvas.addEventListener("mousemove",onCatalogueMouseMove);
    } 
    else{
         canvas.style.cursor="default";
    }  
}

function onTextReadPageMove(){
        point.x=event.clientX;
        point.y=event.clientY;
        windowToCanvas(canvas,point);
        if(point.x>=700&&point.x<=750&&point.y>=195&&point.y<=240){  //play or pause audio
             canvas.style.cursor="pointer";
        }
        else if(point.x>=730&&point.x<=860&&point.y>=530&&point.y<=570){
             canvas.style.cursor="pointer";
        }
        else{
             canvas.style.cursor="default";
        }  

}
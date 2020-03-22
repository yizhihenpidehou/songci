var canvas=document.getElementById('canvas'),
ctx=canvas.getContext('2d');
var video=document.getElementById('video');
var leadVideo=document.getElementById('leadVideo');
var iCanvasWidth=canvas.width,
iCanvasHeight=canvas.height;
firstPageBackground=new Image(),
firstPageFrame=new Image(),
title1=new Image(),
title2=new Image();
firstPageBackground.src="img/firstPage/firstPageBackground.png",
firstPageFrame.src="img/firstPage/firstPageFrame.png",
title1.src="img/firstPage/title1.PNG",
title2.src="img/firstPage/title2.PNG";
var alpha=0,
point={x:0,y:0};
function fadeIn(){  //主页标题淡入
	if(alpha<1){
	   ctx.globalAlpha=1;
       ctx.drawImage(firstPageBackground,0,0,iCanvasWidth,iCanvasHeight);
       ctx.drawImage(firstPageFrame,iCanvasWidth/2-firstPageFrame.width/2+50,iCanvasHeight/2-firstPageFrame.height/2+50,firstPageFrame.width-100,firstPageFrame.height-100);
       ctx.globalAlpha=alpha;
       ctx.drawImage(title1,iCanvasWidth/2-title1.width/2,iCanvasHeight/2-title1.height/2,title1.width,title1.height);
       ctx.drawImage(title2,iCanvasWidth/2+title2.width/18,iCanvasHeight/2+title2.height/1.5,title2.width,title2.height);
       alpha+=0.2;
       setTimeout(fadeIn,200);
	}
	else{
	   ctx.globalAlpha=alpha;
       ctx.drawImage(firstPageBackground,0,0,iCanvasWidth,iCanvasHeight);
       ctx.drawImage(firstPageFrame,iCanvasWidth/2-firstPageFrame.width/2+50,iCanvasHeight/2-firstPageFrame.height/2+50,firstPageFrame.width-100,firstPageFrame.height-100);
	   ctx.drawImage(title1,iCanvasWidth/2-title1.width/2,iCanvasHeight/2-title1.height/2,title1.width,title1.height);
       ctx.drawImage(title2,iCanvasWidth/2+title2.width/18,iCanvasHeight/2+title2.height/1.5,title2.width,title2.height);
       canvas.addEventListener("mousedown",onClassLeadInDown);
       canvas.addEventListener("ended",onVideoEnded1);
	}
}
function onClassLeadInDown(event){  //主页课程引入鼠标事件
      point.x=event.clientX;
      point.y=event.clientY;
      windowToCanvas(canvas,point);
      console.log("x:"+point.x+" y:"+point.y);
      if(point.x>=275&&point.x<=795&&point.y>=460&&point.y<=535){
         leadVideo.style.display="block";
         //vedio.play();
      }
}
function onVideoEnded1(){   //短片结束掉转目录
	leadVideo.style.display="none";
	//ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
	drawCatalogue();
	canvas.removeEventListener("mousedown",onClassLeadInDown);
	canvas.removeEventListener("ended",onVideoEnded1);
	canvas.addEventListener("mousedown",onCatalogueMouseDown);
	canvas.addEventListener("mousemove",onCatalogueMouseMove);
}

firstPageBackground.onload=function(){
	fadeIn();
}
firstPageFrame.onload=function(){}
title1.onload=function(){}
title2.onload=function(){}




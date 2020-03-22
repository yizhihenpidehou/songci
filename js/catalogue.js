mainBackground=new Image();
catalogueFrame=new Image();
catalogueBtn=new Image();
textIntroBtn=new Image();
textIntroBtnLight=new Image();
textAppreciateBtn=new Image();
textAppreciateBtnLight=new Image();
textReadBtn=new Image();
textReadBtnLight=new Image();
knowledgeExpansionBtn=new Image();
knowledgeExpansionBtnLight=new Image();
classTestBtn=new Image();
classTestBtnLight=new Image();
mainBackground.src="img/mainBackground.png";
catalogueFrame.src="img/secondPage/catalogueFrame.png";
catalogueBtn.src="img/secondPage/catalogueBtn.png";
textIntroBtn.src="img/secondPage/textIntroBtn.png";
textIntroBtnLight.src="img/secondPage/textIntroBtnLight.png";
textAppreciateBtn.src="img/secondPage/textAppreciateBtn.png";
textAppreciateBtnLight.src="img/secondPage/textAppreciateBtnLight.png"
textReadBtn.src="img/secondPage/textReadBtn.png";
textReadBtnLight.src="img/secondPage/textReadBtnLight.png";
knowledgeExpansionBtn.src="img/secondPage/knowledgeExpansionBtn.png";
knowledgeExpansionBtnLight.src="img/secondPage/knowledgeExpansionBtnLight.png";
classTestBtn.src="img/secondPage/classTestBtn.png";
classTestBtnLight.src="img/secondPage/classTestBtnLight.png";
var r=0;
function drawCatalogue(){
	 ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
     ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
     ctx.drawImage(catalogueFrame,iCanvasWidth/2-catalogueFrame.width/2,iCanvasHeight/2-catalogueFrame.height/2);
     ctx.drawImage(textIntroBtn,300,190,200,100);
     ctx.drawImage(textAppreciateBtn,550,190,200,100);
     ctx.drawImage(knowledgeExpansionBtn,300,400,200,100);
     ctx.drawImage(classTestBtn,550,400,200,100);
}
function onCatalogueMouseMove(event){
    point.x=event.clientX;
    point.y=event.clientY;
    windowToCanvas(canvas,point);
    if(point.x>=325&&point.x<=365&&point.y>=220&&point.y<=260){ //作者生平
    	 canvas.style.cursor="pointer";
    	 ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
         ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
	     ctx.drawImage(catalogueFrame,iCanvasWidth/2-catalogueFrame.width/2,iCanvasHeight/2-catalogueFrame.height/2);
	     ctx.drawImage(textIntroBtnLight,300,190,200,100);
	     ctx.drawImage(textAppreciateBtn,550,190,200,100);
	     ctx.drawImage(knowledgeExpansionBtn,300,400,200,100);
	     ctx.drawImage(classTestBtn,550,400,200,100);
    }
    else if(point.x>=580&&point.x<=615&&point.y>=220&&point.y<=260){ //课文赏析
         canvas.style.cursor="pointer";
         ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
         ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
	     ctx.drawImage(catalogueFrame,iCanvasWidth/2-catalogueFrame.width/2,iCanvasHeight/2-catalogueFrame.height/2);
	     ctx.drawImage(textIntroBtn,300,190,200,100);
	     ctx.drawImage(textAppreciateBtnLight,550,190,200,100);
	     ctx.drawImage(knowledgeExpansionBtn,300,400,200,100);
	     ctx.drawImage(classTestBtn,550,400,200,100);
    }
    else if(point.x>=325&&point.x<=365&&point.y>=430&&point.y<=470){ //知识拓展
    	 canvas.style.cursor="pointer";
    	 ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
         ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
	     ctx.drawImage(catalogueFrame,iCanvasWidth/2-catalogueFrame.width/2,iCanvasHeight/2-catalogueFrame.height/2);
	     ctx.drawImage(textIntroBtn,300,190,200,100);
	     ctx.drawImage(textAppreciateBtn,550,190,200,100);
	     ctx.drawImage(knowledgeExpansionBtnLight,300,400,200,100);
	     ctx.drawImage(classTestBtn,550,400,200,100);
    }
    else if(point.x>=580&&point.x<=615&&point.y>=430&&point.y<=470){   //课后巩固
         canvas.style.cursor="pointer";
         ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
         ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
	     ctx.drawImage(catalogueFrame,iCanvasWidth/2-catalogueFrame.width/2,iCanvasHeight/2-catalogueFrame.height/2);
	     ctx.drawImage(textIntroBtn,300,190,200,100);
	     ctx.drawImage(textAppreciateBtn,550,190,200,100);
	     ctx.drawImage(knowledgeExpansionBtn,300,400,200,100);
	     ctx.drawImage(classTestBtnLight,550,400,200,100);
    } 
    else{
        drawCatalogue();
    	canvas.style.cursor="default";
    }
}
function onCatalogueMouseDown(event){
    point.x=event.clientX;
    point.y=event.clientY;
    windowToCanvas(canvas,point);
    console.log("x:"+point.x+" y:"+point.y);
    if(point.x>=325&&point.x<=365&&point.y>=220&&point.y<=260){ //作者生平
    	 canvas.style.cursor="pointer";
         ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
         canvas.removeEventListener("mousemove",onCatalogueMouseMove);
         canvas.removeEventListener("mousedown",onCatalogueMouseDown);
         r=600;
         circleIn();
    }
    else if(point.x>=580&&point.x<=615&&point.y>=220&&point.y<=260){ //课文赏析
         canvas.style.cursor="pointer";
         ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
         canvas.removeEventListener("mousemove",onCatalogueMouseMove);
         canvas.removeEventListener("mousedown",onCatalogueMouseDown);
         r=600;
         circleIn();
    }
    else if(point.x>=325&&point.x<=365&&point.y>=430&&point.y<=470){ //知识拓展
    	 canvas.style.cursor="pointer";
         ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
         canvas.removeEventListener("mousemove",onCatalogueMouseMove);
         canvas.removeEventListener("mousedown",onCatalogueMouseDown);
         r=600;
         circleIn3();
    }
    else if(point.x>=580&&point.x<=615&&point.y>=430&&point.y<=470){   //课后巩固
         canvas.style.cursor="pointer";
         ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
         canvas.removeEventListener("mousemove",onCatalogueMouseMove);
         canvas.removeEventListener("mousedown",onCatalogueMouseDown);
         drawClassTestPage();
         canvas.addEventListener("mousemove",onClassPageMove);
         canvas.addEventListener("mousedown",onClassPageDown);
    } 
    else{
    	canvas.style.cursor="default";
    }
}
mainBackground.onload=function(){}
catalogueFrame.onload=function(){}
catalogueBtn.onload=function(){}
textIntroBtn.onload=function(){}
textIntroBtnLight.onload=function(){}
textAppreciateBtn.onload=function(){}
textAppreciateBtnLight.onload=function(){}
textReadBtn.onload=function(){}
textReadBtnLight.onload=function(){}
knowledgeExpansionBtn.onload=function(){}
knowledgeExpansionBtnLight.onload=function(){}
classTestBtn.onload=function(){}
classTestBtnLight.onload=function(){}
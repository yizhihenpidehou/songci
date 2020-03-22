eightDigram=new Image();
eightDigram.src="img/knowledgeExpand/eightDigram.png";
function circleInFirstFactionPage(){  //婉约派页面进入动画
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
       setTimeout(circleInFirstFactionPage,20);
    }  
    else{
    	drawFirstFactionPage(); 	
    	canvas.addEventListener("mousedown",onFirstFactionDown);
        canvas.addEventListener("mousemove",onFirstFactionMove);
    }
}
function circleInSecondFactionPage(){  //豪放派页面进入动画
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
       setTimeout(circleInSecondFactionPage,20);
    }  
    else{
    	drawSecondFactionPage(); 	
    	canvas.addEventListener("mousedown",onSecondFactionDown);
        canvas.addEventListener("mousemove",onSecondFactionMove);
    }
}
/////////////以上为进入动画
function drawFirstFactionPage(){  //绘制婉约派介绍界面
    ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
    ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
	ctx.drawImage(textAppreciateFrame1,iCanvasWidth/2-textAppreciateFrame1.width/1.5,iCanvasHeight/2-textAppreciateFrame1.height/2,800,textAppreciateFrame1.height);
    ctx.drawImage(knowledgeExpOutBtn,695,540,150,50);
    text.text="婉约派";
    text.x=250;text.y=120;
    style.fontSize="50";style.fontFamily="微软雅黑";style.fillColor="black";
    drawText(ctx,text,style,true);
    var texts="婉约即婉转含蓄，重在抒发细腻委婉的感情，结构深细缜密，音律婉转和谐，语言圆润清丽，具有一种柔婉之美。在题材方面侧重男欢女爱、离别相思，多局限于“艳科”，在宋词领域拥有很高的地位。";
    style.fontSize="25";
    text.text="";
    text.x=270;
    text.y=180;
    for(var i=0;i<texts.length;i++){
        if((i%22==0&&i!=0)||i==texts.length-1){
        	text.text+=texts[i];
        	drawText(ctx,text,style,true);
        	text.x=250;
        	text.y+=35;
        	text.text="";
        }
        else{
        	text.text+=texts[i];
        }
    }
    text.y+=20;
    text.text="代表人物：柳永、张先、周邦彦、李清照;";
    drawText(ctx,text,style,true);
    text.y+=35;
    text.text="";
    texts="著名作品：《虞美人·春花秋月何时了》李煜、《雨霖铃·寒蝉凄切》柳永、《声声慢·寻寻觅觅》李清照;";
    for(var i=0;i<texts.length;i++){
        if((i%22==0&&i!=0)||i==texts.length-1){
        	text.text+=texts[i];
        	drawText(ctx,text,style,true);
        	text.x=250;
        	text.y+=35;
        	text.text="";
        }
        else{
        	text.text+=texts[i];
        }
    }
}
function drawSecondFactionPage(){ //绘制介绍豪放派
    ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
    ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
	ctx.drawImage(textAppreciateFrame1,iCanvasWidth/2-textAppreciateFrame1.width/1.5,iCanvasHeight/2-textAppreciateFrame1.height/2,800,textAppreciateFrame1.height);
    ctx.drawImage(knowledgeExpOutBtn,695,540,150,50);
    text.text="豪放派";
    text.x=250;text.y=120;
    style.fontSize="50";style.fontFamily="微软雅黑";style.fillColor="black";
    drawText(ctx,text,style,true);
    var texts="豪放词气象恢弘，喜用诗文的手法和句法写词，语词宏博，用典较多，不拘守音律，创作视野较广阔，然而有时失之平直，甚至涉于狂怪叫嚣。而苏轼的豪放词一定程度上打破了婉约词垄断词界的现象，因此苏轼的出现是宋词发展历程中重要的转折点。";
    style.fontSize="25";
    text.text="";
    text.x=270;
    text.y=180;
    for(var i=0;i<texts.length;i++){
        if((i%22==0&&i!=0)||i==texts.length-1){
        	text.text+=texts[i];
        	drawText(ctx,text,style,true);
        	text.x=250;
        	text.y+=35;
        	text.text="";
        }
        else{
        	text.text+=texts[i];
        }
    }
    text.y+=20;
    text.text="代表人物：苏轼、辛弃疾、岳飞、贺铸;";
    drawText(ctx,text,style,true);
    text.y+=35;
    text.text="";
    texts="著名作品：《水调歌头·明月几时有》苏轼、《永遇乐·京口北固亭怀古》辛弃疾、《六州歌头·少年侠气》贺铸;";
    for(var i=0;i<texts.length;i++){
        if((i%22==0&&i!=0)||i==texts.length-1){
        	text.text+=texts[i];
        	drawText(ctx,text,style,true);
        	text.x=250;
        	text.y+=35;
        	text.text="";
        }
        else{
        	text.text+=texts[i];
        }
    }
 }
function drawTwoFactionPage(){  //绘制八卦图
     ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
     ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
	 ctx.drawImage(textAppreciateFrame1,iCanvasWidth/2-textAppreciateFrame1.width/1.5,iCanvasHeight/2-textAppreciateFrame1.height/2,800,textAppreciateFrame1.height);
     ctx.drawImage(eightDigram,iCanvasWidth/2-eightDigram.width/2,iCanvasHeight/2-eightDigram.height/2,eightDigram.width,eightDigram.height);
     ctx.drawImage(knowledgeExpOutBtn,720,145,150,50);
     text.text="两";
     text.x=240;text.y=145;
     style.fontSize="50";
     style.fontFamily="华文行楷";
     style.fillColor="black";
     drawText(ctx,text,style,true);
     text.text="大";
     text.x=240;text.y=200;
     style.fontSize="50";
     style.fontFamily="华文行楷";
     style.fillColor="black";
     drawText(ctx,text,style,true);
     text.text="流";
     text.x=240;text.y=255;
     style.fontSize="50";
     style.fontFamily="华文行楷";
     style.fillColor="black";
     drawText(ctx,text,style,true);
     text.text="派";
     text.x=240;text.y=310;
     style.fontSize="50";
     style.fontFamily="华文行楷";
     style.fillColor="black";
     drawText(ctx,text,style,true);
}
/////////////以上为绘制动画
function onSecondFactionDown(){
	    point.x=event.clientX;
	    point.y=event.clientY;
	    windowToCanvas(canvas,point);
	    console.log("x:"+point.x+" y:"+point.y);
	    if(point.x>=715&&point.x<=840&&point.y>=530&&point.y<=575){  // 返回
           canvas.style.cursor="pointer";
           canvas.removeEventListener("mousedown",onFirstFactionDown);
            canvas.removeEventListener("mousemove",onFirstFactionMove);
            drawTwoFactionPage();
            canvas.addEventListener("mousedown",onTwoFactionDown);
            canvas.addEventListener("mousemove",onTwoFactionMove);
	    }
	    else{
           canvas.style.cursor="default";
	    }
}
function onSecondFactionMove(){
	    point.x=event.clientX;
	    point.y=event.clientY;
	    windowToCanvas(canvas,point);
	    if(point.x>=715&&point.x<=840&&point.y>=530&&point.y<=575){  //返回
           canvas.style.cursor="pointer";
	    }
	    else{
           canvas.style.cursor="default";
	    }
}
function onFirstFactionDown(){
	    point.x=event.clientX;
	    point.y=event.clientY;
	    windowToCanvas(canvas,point);
	    console.log("x:"+point.x+" y:"+point.y);
	    if(point.x>=715&&point.x<=840&&point.y>=530&&point.y<=575){
           canvas.style.cursor="pointer";
           canvas.removeEventListener("mousedown",onFirstFactionDown);
            canvas.removeEventListener("mousemove",onFirstFactionMove);
            drawTwoFactionPage();
            canvas.addEventListener("mousedown",onTwoFactionDown);
            canvas.addEventListener("mousemove",onTwoFactionMove);
	    }
	    else{
           canvas.style.cursor="default";
	    }
}
function onFirstFactionMove(){
	    point.x=event.clientX;
	    point.y=event.clientY;
	    windowToCanvas(canvas,point);
	    if(point.x>=715&&point.x<=840&&point.y>=530&&point.y<=575){
           canvas.style.cursor="pointer";
	    }
	    else{
           canvas.style.cursor="default";
	    }
}
function onTwoFactionDown(){
        point.x=event.clientX;
	    point.y=event.clientY;
	    windowToCanvas(canvas,point);
	    console.log("x:"+point.x+" y:"+point.y);
	    if(point.x>=510&&point.x<=570&&point.y>=240&&point.y<=305){  //豪放派
            canvas.style.cursor="pointer";
            canvas.removeEventListener("mousedown",onTwoFactionDown);
            canvas.removeEventListener("mousemove",onTwoFactionDown);
            r=600;
            circleInFirstFactionPage();

	    }
	    else if(point.x>=505&&point.x<=570&&point.y>=395&&point.y<=458){  //婉约派
            canvas.style.cursor="pointer";
            canvas.removeEventListener("mousedown",onTwoFactionDown);
            canvas.removeEventListener("mousemove",onTwoFactionDown);
            r=600;
            circleInSecondFactionPage();
	    }
	    else if(point.x>=745&&point.x<=850&&point.y>=135&&point.y<=180){   //返回
            canvas.style.cursor="pointer";
            canvas.removeEventListener("mousedown",onTwoFactionDown);
            canvas.removeEventListener("mousemove",onTwoFactionDown);
            drawKnowledgeExpandCatalogue();
            canvas.addEventListener("mousedown",onKnowledgeExpandDown);
            canvas.addEventListener("mousemove",onKnowledgeExpandMove);
	    }
	    else{
            canvas.style.cursor="default";
	    }
}
function onTwoFactionMove(){
	    point.x=event.clientX;
	    point.y=event.clientY;
	    windowToCanvas(canvas,point);
	    if(point.x>=510&&point.x<=570&&point.y>=240&&point.y<=305){ //豪放派
            canvas.style.cursor="pointer";
	    }
	    else if(point.x>=505&&point.x<=570&&point.y>=395&&point.y<=458){//婉约派
            canvas.style.cursor="pointer";
	    }
	    else if(point.x>=745&&point.x<=850&&point.y>=135&&point.y<=180){ //返回
	    	canvas.style.cursor="pointer";
	    }
	    else{
            canvas.style.cursor="default";
	    }
}
eightDigram.onload=function(){}
var offScreenCanvas=document.createElement('canvas'),
offScreenCtx=offScreenCanvas.getContext('2d');
offScreenCanvas.width=iCanvasWidth;
offScreenCanvas.height=iCanvasHeight;
var leftInPosition={x0:0,y0:200};
function leftIn(){
	ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
	ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
    ctx.drawImage(textAppreciateFrame1,iCanvasWidth/2-textAppreciateFrame1.width/1.5,iCanvasHeight/2-textAppreciateFrame1.height/2,800,textAppreciateFrame1.height);
    offScreenCtx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
    ctx.drawImage(returnBtn,210,120,150,50);
    var textt="    大江之水滚滚不断向东流去,淘尽了那些千古风流的人物.在那久远古战场的西边地方,说是三国周瑜破曹军的赤壁.四面石乱山高两岸悬崖如云,惊涛骇浪猛烈地拍打着对岸,卷起浪花仿佛冬日的千堆雪江山如此的美丽如图又如画,一时间涌出了多少英雄豪杰.遥想当年的周郎名瑜字公瑾,小乔刚刚嫁给了他作为妻子,英姿雄健风度翩翩神采照人.手中执着羽扇头上著着纶巾,从容潇洒地在说笑闲谈之间,八十万曹军如灰飞烟灭一样.如今我身临古战场神游往昔,可笑我有如此多的怀古柔情,竟如同未老先衰般鬓发斑白.人生如同一场朦胧的梦似的,举起酒杯奠祭这万古的明月.";
    text.x=80;
    text.y=20;
    style.fillColor="black";
    style.fontFamily="楷体";
    style.lineWidth=3;
    style.fontSize=30;
    text.text="";
    for(var i=0;i<textt.length;i++){
    	if((i%30==0&&i!=0)||i==textt.length-1){
           text.text+=textt[i];
           drawText(offScreenCtx,text,style,true);
           text.text="";
           text.y+=40;
    	}
    	else{
    		text.text+=textt[i];
    	}
    }
    ////////在离屏上绘制所有文字
    if(leftInPosition.x0<200){
       ctx.drawImage(offScreenCanvas,leftInPosition.x0,leftInPosition.y0,680,650);
       leftInPosition.x0+=20;
       setTimeout(leftIn,20);
    }
    else{
       ctx.drawImage(offScreenCanvas,leftInPosition.x0,leftInPosition.y0,680,650);
       canvas.addEventListener("mousedown",onTextTranslateDown);
       canvas.addEventListener("mousemove",onTextTranslateMove);
    }
}
function onTextTranslateDown(event){
	point.x=event.clientX;
    point.y=event.clientY;
    windowToCanvas(canvas,point);
    console.log("x:"+point.x+" y:"+point.y);
    if(point.x>=225&&point.x<=355&&point.y>=120&&point.y<=165){  //退出
        canvas.style.cursor="pointer";
        drawTextAppreciatePage();
        canvas.removeEventListener("mousedown",onTextTranslateDown);
        canvas.removeEventListener("mousemove",onTextTranslateMove);
        canvas.addEventListener("mousedown",onTextAppreciatePageDown);
        canvas.addEventListener("mousemove",onTextAppreciatePageMove);
    }
    else{
    	canvas.style.cursor="default";
    }
}
function onTextTranslateMove(event){
	point.x=event.clientX;
    point.y=event.clientY;
    windowToCanvas(canvas,point);
    if(point.x>=225&&point.x<=355&&point.y>=120&&point.y<=165){  //退出
        canvas.style.cursor="pointer";
    }
    else{
    	canvas.style.cursor="default";
    }
}

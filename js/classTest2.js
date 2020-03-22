var fillPageNow=1;
var ans1Position=[{x:375,y:335},{x:425,y:335},{x:475,y:335},{x:525,y:335},{x:575,y:335},{x:625,y:335}];
var ans2Position=[{x:415,y:335},{x:465,y:335},{x:515,y:335},{x:565,y:335}];
var ans3Position=[{x:375,y:335},{x:425,y:335},{x:475,y:335},{x:525,y:335},{x:575,y:335},{x:625,y:335}];
var ans4Position=[{x:370,y:335},{x:420,y:335},{x:470,y:335},{x:520,y:335},{x:570,y:335},{x:620,y:335}];
var ans5Position=[{x:445,y:335},{x:495,y:335},{x:545,y:335},{x:595,y:335},{x:645,y:335},{x:695,y:335},{x:745,y:335},{x:795,y:335}];
var fillAns1=['一','尊','还','垒','江','酹','悦','月','将',6];
var fillAns2=['华','身','发','花','早','升','法','遭','生',4];
var fillAns3=['强','飞','橹','路','烟','鲁','樯','灰','灭',6];
var fillAns4=['鹭','经','起','坛','滩','鸥','鹿','惊','一',6];
var fillAns5=['清','那','冷','看','堪','秋','更','落','节',8];
var fillFlag=[false,false,false,false,false,false,false,false,false,false];
var fillQue=["人间如梦","多情应笑我","谈笑间,","争渡,争渡","多情自古伤离别"];
var fillAllAns=["一尊还酹江月","早生华发","樯橹灰飞烟灭","惊起一滩鸥鹭","更那堪冷落清秋节"];
var fillAns=[];
function initFillFlag(){
	for(var i=0;i<fillFlag.length;i++){
		fillFlag[i]=false;
	}
	fillAns=[];
}
function drawFillTest(page,que,ans,fillRect,fillLine){  //绘制语句填空界面
	ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
    ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
	ctx.drawImage(textAppreciateFrame1,iCanvasWidth/2-textAppreciateFrame1.width/1.5,iCanvasHeight/2-textAppreciateFrame1.height/2,800,textAppreciateFrame1.height);
    ctx.drawImage(testFrame,350,380,350,200);
    ctx.drawImage(resetBtn,230,450,100,80);
    ctx.drawImage(eval("fillPic"+page),200,120,400,200);
    ctx.save();
    style.fontFamily="微软雅黑";style.fontSize="30";style.fillColor="black";
    text.x=400;text.y=410;
    for(var i=0;i<ans.length-1;i++){
    	if(i==3||i==6) {
    		text.y+=60;
    		text.x=400;
    	}
    	text.text=ans[i];
    	drawText(ctx,text,style,true);
    	text.x+=110;
    }
    style.fontSize="30";
    text.text=que;
    text.x=215;
    text.y=340;
    drawText(ctx,text,style,true);
    ctx.beginPath();
    style.strokeColor="#666";
    style.fillColor="#666";
    style.lineWidth="5";
    rect.width=fillRect.w;rect.height=fillRect.h;rect.x=fillRect.x;rect.y=fillRect.y;
    drawRect(ctx,rect,style,false);    
    ctx.beginPath();
    line.x0=fillLine.x0;line.y0=fillLine.y0;line.x1=fillLine.x1;line.y1=fillLine.y1;
 //   console.log("anslen "+ans[ans.length-1]);
    for(var i=1;i<=ans[ans.length-1]-1;i++){
        drawLine(ctx,line,style,true);
        line.x0+=50;
        line.x1+=50;
    }
  /*  
    drawLine(ctx,line,style,true);
    line.x0=540;line.y0=325;line.x1=540;line.y1=375;
    drawLine(ctx,line,style,true);
    line.x0=610;line.y0=325;line.x1=610;line.y1=375;
    drawLine(ctx,line,style,true);
    line.x0=680;line.y0=325;line.x1=680;line.y1=375;
    drawLine(ctx,line,style,true);   
    line.x0=750;line.y0=325;line.x1=750;line.y1=375;
    drawLine(ctx,line,style,true);        */ 
    ctx.restore();
}

function onFillPageDown(){  //语句填空按钮事件
        point.x=event.clientX;
        point.y=event.clientY;
        windowToCanvas(canvas,point);
        console.log("x:"+point.x+" y:"+point.y);
        if(point.x>=375&&point.x<=455&&point.y>=390&&point.y<=435){   //（1,1）
            canvas.style.cursor="pointer";
            fillAnss=eval("fillAns"+fillPageNow);
            ifFill(fillPageNow,fillAnss[0],fillAnss[fillAnss.length-1]);
        }
        else if(point.x>=485&&point.x<=565&&point.y>=390&&point.y<=435){ //(1,2) 
            canvas.style.cursor="pointer";
            fillAnss=eval("fillAns"+fillPageNow);
            ifFill(fillPageNow,fillAnss[1],fillAnss[fillAnss.length-1]);
        }
        else if(point.x>=595&&point.x<=675&&point.y>=390&&point.y<=435){   //(1,3)
            canvas.style.cursor="pointer";
            fillAnss=eval("fillAns"+fillPageNow);
            ifFill(fillPageNow,fillAnss[2],fillAnss[fillAnss.length-1]);
        }
        else if(point.x>=375&&point.x<=455&&point.y>=460&&point.y<=500){   //(2,1)
            canvas.style.cursor="pointer";
            fillAnss=eval("fillAns"+fillPageNow);
            ifFill(fillPageNow,fillAnss[3],fillAnss[fillAnss.length-1]);
        }
        else if(point.x>=485&&point.x<=565&&point.y>=460&&point.y<=500){   //(2,2)
            canvas.style.cursor="pointer";
            fillAnss=eval("fillAns"+fillPageNow);
            ifFill(fillPageNow,fillAnss[4],fillAnss[fillAnss.length-1]);
        }
        else if(point.x>=595&&point.x<=675&&point.y>=460&&point.y<=500){   //(2,3)
            canvas.style.cursor="pointer";
            fillAnss=eval("fillAns"+fillPageNow);
            ifFill(fillPageNow,fillAnss[5],fillAnss[fillAnss.length-1]);
        }
        else if(point.x>=375&&point.x<=455&&point.y>=520&&point.y<=560){   //(3,1)
            canvas.style.cursor="pointer";
            fillAnss=eval("fillAns"+fillPageNow);
            ifFill(fillPageNow,fillAnss[6],fillAnss[fillAnss.length-1]);
        }
        else if(point.x>=485&&point.x<=565&&point.y>=520&&point.y<=560){   //(3,2)
            canvas.style.cursor="pointer";
            fillAnss=eval("fillAns"+fillPageNow);
            ifFill(fillPageNow,fillAnss[7],fillAnss[fillAnss.length-1]);
        }
        else if(point.x>=595&&point.x<=675&&point.y>=520&&point.y<=560){   //(3,3)
            canvas.style.cursor="pointer";
            fillAnss=eval("fillAns"+fillPageNow);
            ifFill(fillPageNow,fillAnss[8],fillAnss[fillAnss.length-1]);
        }
        else if(point.x>=240&&point.x<=315&&point.y>=460&&point.y<=520){  //重置
            canvas.style.cursor="pointer";
            drawFillTest(fillPageNow,fillQue[fillPageNow-1],eval("fillAns"+fillPageNow),fillRect,fillLine);
            initFillFlag();
        }
        else if(point.x>=780&&point.x<=880&&point.y>=115&&point.y<=165){  
            canvas.style.cursor="pointer";
            canvas.removeEventListener("mousemove",onClassTestPageMove);
            canvas.removeEventListener("mousedown",onClassTestPageDown);
             drawCatalogue();
            canvas.addEventListener("mousemove",onCatalogueMouseMove);
            canvas.addEventListener("mousedown",onCatalogueMouseDown);
        }
        else{
            canvas.style.cursor="default";
        }
}
function onFillPageMove(){ //语句填空按钮事件
        point.x=event.clientX;
      point.y=event.clientY;
      windowToCanvas(canvas,point);
        if(point.x>=375&&point.x<=455&&point.y>=390&&point.y<=435){   //（1,1）
            canvas.style.cursor="pointer";
        }
        else if(point.x>=485&&point.x<=565&&point.y>=390&&point.y<=435){ //(1,2) 
            canvas.style.cursor="pointer";
        }
        else if(point.x>=595&&point.x<=675&&point.y>=390&&point.y<=435){   //(1,3)
            canvas.style.cursor="pointer";
        }
        else if(point.x>=375&&point.x<=455&&point.y>=460&&point.y<=500){   //(2,1)
            canvas.style.cursor="pointer";
        }
        else if(point.x>=485&&point.x<=565&&point.y>=460&&point.y<=500){   //(2,2)
            canvas.style.cursor="pointer";
        }
        else if(point.x>=595&&point.x<=675&&point.y>=460&&point.y<=500){   //(2,3)
            canvas.style.cursor="pointer";
        }
        else if(point.x>=375&&point.x<=455&&point.y>=520&&point.y<=560){   //(3,1)
            canvas.style.cursor="pointer";
        }
        else if(point.x>=485&&point.x<=565&&point.y>=520&&point.y<=560){   //(3,2)
            canvas.style.cursor="pointer";
        }
        else if(point.x>=595&&point.x<=675&&point.y>=520&&point.y<=560){   //(3,3)
            canvas.style.cursor="pointer";
        }
        else if(point.x>=240&&point.x<=315&&point.y>=460&&point.y<=520){  //重置
            canvas.style.cursor="pointer";
        }
        else{
            canvas.style.cursor="default";
        }
}

function ifFill(a,texts,len){  // 判断该空是否为空
	ctx.save();
	style.fontSize="30";
	style.fontFamily="微软雅黑";
	style.fillColor="red";
	ans=eval("ans"+a+"Position");
	for(var i=0;i<len;i++){
		if(fillFlag[i]==false){
           text.text=texts;
           text.x=ans[i].x
           text.y=ans[i].y;
           fillFlag[i]=true;
           drawText(ctx,text,style,true);
           fillAns[i]=texts;
           break;
		}
	}
	var rightFlag=false;
	var ansNow=fillAllAns[fillPageNow-1];
	console.log("fillAnss:"+ansNow);
   console.log("fillAns:"+fillAns);
	for(var i=0;i<ansNow.length;i++){
		if(fillAns[i]==ansNow[i]){
			rightFlag=true;
		}
		else{
            rightFlag=false;
            break;
		}
	}
	if(rightFlag==true&&fillPageNow<=4){
       fillPageNow++;
       fillPageRectAndLineChange();
       initFillFlag();
       drawFillTest(fillPageNow,fillQue[fillPageNow-1],eval("fillAns"+fillPageNow),fillRect,fillLine);
	}
	ctx.restore();
}
function fillPageRectAndLineChange(){ //页面转换时fillRect和fillLine参数改变
	 switch(fillPageNow){
	 	case 1:fillRect={x:360,y:325,w:300,h:50};
	 	       fillLine={x0:410,y0:325,x1:410,y1:375};
	 	       break;
	 	case 2:fillRect={x:400,y:325,w:200,h:50};
	 	       fillLine={x0:450,y0:325,x1:450,y1:375};
	 	       break;
	 	case 3:fillRect={x:360,y:325,w:300,h:50};
	 	       fillLine={x0:410,y0:325,x1:410,y1:375};
	 	       break;
	 	case 4:fillRect={x:355,y:325,w:300,h:50};
	 	       fillLine={x0:405,y0:325,x1:405,y1:375};
	 	       break;
	 	case 5:fillRect={x:430,y:325,w:400,h:50};
	 	       fillLine={x0:480,y0:325,x1:480,y1:375};
	 	       break;
	 }

}
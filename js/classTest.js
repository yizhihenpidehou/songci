gameMainBackground=new Image();
classTestPic=new Image();
card=new Image();
testFrame=new Image();
basicBtn=new Image();
advanceBtn=new Image();
wrong=new Image();
right=new Image();
nextBtn2=new Image();
testOutBtn2=new Image();
fillPic1=new Image();
fillPic2=new Image();
fillPic3=new Image();
fillPic4=new Image();
fillPic5=new Image();
gameMainBackground.src="img/classTest/gameMainBackground.png";
testFrame.src="img/classTest/testFrame.png";
classTestPic.src="img/classTest/classTestPic.png";
card.src="img/classTest/card.png";
basicBtn.src="img/classTest/basicBtn.png";
advanceBtn.src="img/classTest/advanceBtn.png";
wrong.src="img/classTest/wrong.png";
right.src="img/classTest/right.png";
nextBtn2.src="img/classTest/nextBtn2.png";
testOutBtn2.src="img/classTest/testOutBtn2.png";
fillPic1.src="img/classTest/fillPic1.jpg";
fillPic2.src="img/classTest/fillPic2.jpg";
fillPic3.src="img/classTest/fillPic3.jpg";
fillPic4.src="img/classTest/fillPic4.jpg";
fillPic5.src="img/classTest/fillPic5.jpg";
var choiceQue=["1. 下列句子中的“故”字,与其他意义不同的一项是","2. 下列拼音中哪项是错误的","3. 从下列说法中选出不正确的一项","4. 遥想公瑾当年”句中“遥想”一词统领的内容是","5. 下列句子中框内字或词语的用法与众不同的一句是"];
var choiceAns1=["故垒西边","已而逐晴，故所此","故国神游","故人西辞黄鹤楼","2"];
var choiceAns2=["樯橹(qiáng)","羽扇纶巾(guān)","赤鼻矶(jǐ)","上阕(què)","3"];
var choiceAns3=["“大江东去”中的大江代表长江","“故国神游”中,“故国”代表旧国,此指当年赤壁战场","“卷起千堆雪”和“樯橹灰飞烟灭”两句都运用了比喻","“羽扇”和“纶巾”都是古代儒将的装束","3"];
var choiceAns4=["小乔初嫁了","小乔初嫁了,雄姿英发","小乔...羽扇纶巾","小乔...樯橹灰飞烟灭","2"]; 
var choiceAns5=["大江(东)去,浪淘尽","樯橹(灰)飞烟灭","卷起千堆(雪)","(都门)帐饮无绪 ","3"];
var choiceExpla=['解析:B选项“故”表示所以,而其余三项“故”表示曾经','解析:赤鼻矶(jī)','解析:樯橹运用了借代手法','此题无解析','解析:C是运用比喻手法,将浪花比喻成雪花,其他都是名作状'] 
var choiceAns=[0,-1,-1,-1,-1,-1];//存储自己选择的答案
var choiceTrueAns=[0,2,3,3,2,3];//存储标准答案
var choiceFlag=[false,false,false,false];
var pageNow=1;
var fillRect={x:400,y:325,w:420,h:50}; //填空页面矩形
var fillLine={x0:470,y0:325,x1:470,y1:375};//填空页面直线
var sureFlag=false;
function drawClassTestPage(){  //绘制进入测试页面
    ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
    ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
	  ctx.drawImage(textAppreciateFrame1,iCanvasWidth/2-textAppreciateFrame1.width/1.5,iCanvasHeight/2-textAppreciateFrame1.height/2,800,textAppreciateFrame1.height);
    ctx.drawImage(gameMainBackground,175,87,735,532);     
}


function drawPinkCircle(x,y,isFill){
    ctx.save();
    ctx.beginPath();
    if(isFill==false){
      circle.x=x;circle.y=y;circle.r=15;
      style.strokeColor="#d79691";style.fillColor="#d79691";style.lineWidth="4";
      drawCircle(ctx,circle,style,isFill);
    }
    else{
      circle.x=x;circle.y=y;circle.r=15;
      style.strokeColor="#d79691";style.fillColor="#d79691";style.lineWidth="4";
      drawCircle(ctx,circle,style,false);
      circle.r=10;
      ctx.beginPath();
      drawCircle(ctx,circle,style,true);
    }
   
    ctx.restore();
}
function drawPinkRect(x,y,w,h){
    ctx.save();
    ctx.beginPath();
    rect.x=x;rect.y=y;rect.width=w;rect.height=h;
    style.fillColor="rgba(119,96,91,0.5)";
    drawRect(ctx,rect,style,true);
    ctx.restore();
}
function drawChoicePage(que,ans){//绘制基础页面的题
	  ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
    ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
	  ctx.drawImage(textAppreciateFrame1,iCanvasWidth/2-textAppreciateFrame1.width/1.5,iCanvasHeight/2-textAppreciateFrame1.height/2,800,textAppreciateFrame1.height);
    if(pageNow<5){
      ctx.drawImage(nextBtn2,800,500,80,60);
    }
    else{
      ctx.drawImage(testOutBtn2,750,500,150,100);
    }
    ctx.drawImage(sureBtn,800,160,80,60);
    ctx.save();
    style.fontFamily="微软雅黑";
    style.fontSize="25";
    style.fillColor="black";
    text.x=210;
    text.y=180;
    text.text=que;
    drawText(ctx,text,style,true);   
    text.text=ans[0];
    text.x=250;text.y=250;
    drawText(ctx,text,style,true);
    drawPinkCircle(225,260,choiceFlag[0]);
    ////
    text.text=ans[1];
    text.x=250;text.y=310;
    style.fillColor="black";
    drawText(ctx,text,style,true);
    drawPinkCircle(225,320,choiceFlag[1]);
    ///
    text.text=ans[2];
    text.x=250;text.y=370;
    style.fillColor="black";
    drawText(ctx,text,style,true);
    drawPinkCircle(225,380,choiceFlag[2]);
    ///
    text.text=ans[3];
    text.x=250;text.y=430;
    style.fillColor="black";
    drawText(ctx,text,style,true);
    drawPinkCircle(225,440,choiceFlag[3]);   
    if(sureFlag){
       if(choiceAns[pageNow]==choiceTrueAns[pageNow]){
            ctx.drawImage(right,700,210,80,50);
                
        }
       else{
            ctx.drawImage(wrong,700,210,80,50);
        }
         ctx.save();
              style.fillColor="black";
              style.fontSize="20";
              style.fontFamily="宋体";
              text.text=choiceExpla[pageNow-1];
              text.x=210;text.y=550;
              drawText(ctx,text,style,true);
              ctx.restore();
    } 
    ctx.restore();
}
function onChoicePageMove(){
       point.x=event.clientX;
       point.y=event.clientY;
       windowToCanvas(canvas,point);
       if(point.x>=205&&point.x<=245&&point.y>=240&&point.y<=280&&pageNow<=5){ //点1
             canvas.style.cursor="pointer";
             if(!choiceFlag[0]){                 
                drawChoicePage(choiceQue[pageNow-1],eval("choiceAns"+pageNow));  
                drawPinkRect(250,240,600,40);           
            }
       }
       else if(point.x>=205&&point.x<=245&&point.y>=300&&point.y<=340&&pageNow<=5){  //点2
             canvas.style.cursor="pointer";
             if(!choiceFlag[1]){                 
                drawChoicePage(choiceQue[pageNow-1],eval("choiceAns"+pageNow));  
                drawPinkRect(250,300,600,40);           
            }
       }
       else if(point.x>=205&&point.x<=245&&point.y>=360&&point.y<=400&&pageNow<=5){ //点3
             canvas.style.cursor="pointer";
             if(!choiceFlag[2]){                 
                drawChoicePage(choiceQue[pageNow-1],eval("choiceAns"+pageNow)); 
                drawPinkRect(250,360,600,40);           
            }
       }
       else if(point.x>=205&&point.x<=245&&point.y>=420&&point.y<=460&&pageNow<=5){ //点4
            canvas.style.cursor="pointer";
            if(!choiceFlag[3]){                 
                drawChoicePage(choiceQue[pageNow-1],eval("choiceAns"+pageNow)); 
                drawPinkRect(250,420,600,40);           
            }
       }
     /*  else if(point.x>=210&&point.x<=345&&point.y>=110&&point.y<=170&&pageNow>5){  //解析1
             canvas.style.cursor="pointer";
             ctx.save();
             texts="“已而逐晴,故所此”;该“故”表示所以,而其余三项“故”表示曾经";
             text.x=385;text.y=130;text.text="";
             style.fontSize="25";style.fillColor="black";style.fontFamily="微软雅黑";
             for(var i=0;i<texts.length;i++){
                if((i%18==0&&i!=0)||(i==texts.length-1)){
                    text.text+=texts[i];
                    drawText(ctx,text,style,true);
                    text.y+=35;
                    text.text="";
                }
                else{
                    text.text+=texts[i];
                }
             }
             ctx.restore();              
       }
       else if(point.x>=210&&point.x<=345&&point.y>=230&&point.y<=290&&pageNow>5){//解析2
             canvas.style.cursor="pointer";
             ctx.save();
             text.text="赤鼻矶(jī)";
             text.x=385;text.y=230;
             style.fontSize="25";style.fillColor="black";style.fontFamily="微软雅黑";
             drawText(ctx,text,style,true);
             ctx.restore();             
       }
       else if(point.x>=210&&point.x<=345&&point.y>=320&&point.y<=380&&pageNow>5){//解析3
             canvas.style.cursor="pointer";      
       }
       else if(point.x>=210&&point.x<=345&&point.y>=425&&point.y<=495&&pageNow>5){//解析4
             canvas.style.cursor="pointer";
             ctx.save();
             text.text="樯橹运用了借代手法";
             text.x=385;text.y=430;
             style.fontSize="25";style.fillColor="black";style.fontFamily="微软雅黑";
             drawText(ctx,text,style,true);
             ctx.restore();                     
       }  
       else if(point.x>=210&&point.x<=345&&point.y>=525&&point.y<=605&&pageNow>5){//解析5
             canvas.style.cursor="pointer";
             ctx.save();
             texts="向东流,名作状;像灰一样,名作状;在都门里,名作状;而卷起千堆（雪）是运用比喻手法";
             text.x=385;text.y=490;text.text="";
             style.fontSize="25";style.fillColor="black";style.fontFamily="微软雅黑";
             for(var i=0;i<texts.length;i++){
                if((i%17==0&&i!=0)||(i==texts.length-1)){
                    text.text+=texts[i];
                    drawText(ctx,text,style,true);
                    text.y+=35;
                    text.text="";
                }
                else{
                    text.text+=texts[i];
                }
             }
             ctx.restore();                     
       }   */    
       else if(point.x>=805&&point.x<=875&&point.y>=160&&point.y<=220&&pageNow<=5){ //确定
            canvas.style.cursor="pointer";
       }                   
       else if(point.x>=790&&point.x<=885&&point.y>=490&&point.y<=560&&pageNow<5){ //下一题
            canvas.style.cursor="pointer";             
       }
       else if(point.x>=790&&point.x<=885&&point.y>=490&&point.y<=560&&pageNow==5){ //返回
            canvas.style.cursor="pointer";             
       }
       else{
            canvas.style.cursor="default";
            console.log(pageNow);
           if(pageNow<=5)
             drawChoicePage(choiceQue[pageNow-1],eval("choiceAns"+pageNow)); 
            
       }
}

function onChoicePageDown(){
       point.x=event.clientX;
       point.y=event.clientY;
       windowToCanvas(canvas,point);
       console.log("x:"+point.x+" y:"+point.y);
       if(point.x>=205&&point.x<=245&&point.y>=240&&point.y<=280&&pageNow<=5){ //点1
             canvas.style.cursor="pointer";
             choiceFlag[0]=true;
             choiceFlag[1]=false;
             choiceFlag[2]=false;
             choiceFlag[3]=false;
             drawChoicePage(choiceQue[pageNow-1],eval("choiceAns"+pageNow));  
             choiceAns[pageNow]=1;
             
       }
       else if(point.x>=205&&point.x<=245&&point.y>=300&&point.y<=340&&pageNow<=5){  //点2
             canvas.style.cursor="pointer";
             choiceFlag[0]=false;
             choiceFlag[1]=true;
             choiceFlag[2]=false;
             choiceFlag[3]=false;
             drawChoicePage(choiceQue[pageNow-1],eval("choiceAns"+pageNow));  
             choiceAns[pageNow]=2;
             
       }
       else if(point.x>=205&&point.x<=245&&point.y>=360&&point.y<=400&&pageNow<=5){ //点3
             canvas.style.cursor="pointer";
             choiceFlag[0]=false;
             choiceFlag[1]=false;
             choiceFlag[2]=true;
             choiceFlag[3]=false;
             drawChoicePage(choiceQue[pageNow-1],eval("choiceAns"+pageNow));  
             choiceAns[pageNow]=3;
             
       }
       else if(point.x>=205&&point.x<=245&&point.y>=420&&point.y<=460&&pageNow<=5){ //点4
             canvas.style.cursor="pointer";
             choiceFlag[0]=false;
             choiceFlag[1]=false;
             choiceFlag[2]=false;
             choiceFlag[3]=true;
             drawChoicePage(choiceQue[pageNow-1],eval("choiceAns"+pageNow));  
             choiceAns[pageNow]=4;
             
       }
       else if(point.x>=805&&point.x<=875&&point.y>=160&&point.y<=220&&pageNow<=5){ //确定
              canvas.style.cursor="pointer";  
              sureFlag=true;          
              if(choiceAns[pageNow]==choiceTrueAns[pageNow]){
                ctx.drawImage(right,700,210,80,50);
              }  
              else{
                ctx.drawImage(wrong,700,210,80,50);
              } 
              ctx.save();
              style.fillColor="black";
              style.fontSize="20";
              style.fontFamily="宋体";
              text.text=choiceExpla[pageNow-1];
              text.x=210;text.y=550;
              drawText(ctx,text,style,true);
              ctx.restore();
       }

       else if(point.x>=790&&point.x<=885&&point.y>=490&&point.y<=560&&pageNow<5){ //下一题
             canvas.style.cursor="pointer";
             choiceFlag[0]=false;
             choiceFlag[1]=false;
             choiceFlag[2]=false;
             choiceFlag[3]=false;
             sureFlag=false;
             if(pageNow<5){
                 pageNow++;
                 drawChoicePage(choiceQue[pageNow-1],eval("choiceAns"+pageNow));
             }  
       }
       else if(point.x>=790&&point.x<=885&&point.y>=490&&point.y<=560&&pageNow==5){ //返回
            canvas.style.cursor="pointer"; 
            sureFlag=false;
            choiceFlag[0]=false;
            choiceFlag[1]=false;
            choiceFlag[2]=false;
            choiceFlag[3]=false;
            pageNow=1;
            canvas.removeEventListener("mousedown",onChoicePageDown);
            canvas.removeEventListener("mousemove",onChoicePageMove);
            drawClassTestPage();
            canvas.addEventListener("mousedown",onClassPageDown);
            canvas.addEventListener("mousemove",onClassPageMove);                
       } 
       else{
             canvas.style.cursor="default";        
       }
}
function onClassPageDown(){ //课后巩固目录鼠标事件
      point.x=event.clientX;
      point.y=event.clientY;
      windowToCanvas(canvas,point);
      console.log("x:"+point.x+" y:"+point.y);
        if(point.x>=650&&point.x<=700&&point.y>=370&&point.y<=475){ //基础选择
             canvas.style.cursor="pointer";
             drawChoicePage(choiceQue[0],choiceAns1);
             canvas.removeEventListener("mousedown",onClassPageDown);
             canvas.removeEventListener("mousemove",onClassPageMove);
             canvas.addEventListener("mousedown",onChoicePageDown);
             canvas.addEventListener("mousemove",onChoicePageMove);
        }
        else if(point.x>=520&&point.x<=645&&point.y>=380&&point.y<=470){ //填空
             canvas.style.cursor="pointer";
             canvas.removeEventListener("mousedown",onClassPageDown);
             canvas.removeEventListener("mousemove",onClassPageMove);
             fillPageNow=1;
             fillRect.x=360;fillRect.y=325;fillRect.w=300;fillRect.h=50;
             fillLine.x0=410;fillLine.y0=325;fillLine.x1=410;fillLine.y1=375;
             drawFillTest(fillPageNow,"人间如梦,",fillAns1,fillRect,fillLine);
             canvas.addEventListener("mousedown",onFillPageDown);
             canvas.addEventListener("mousemove",onFillPageMove);
        }
        else{
          canvas.style.cursor="default";
        }
}
function onClassPageMove(){//课后巩固目录鼠标事件
      point.x=event.clientX;
      point.y=event.clientY;
      windowToCanvas(canvas,point);
      if(point.x>=650&&point.x<=700&&point.y>=370&&point.y<=475){//基础选择
             canvas.style.cursor="pointer";
        }
        else if(point.x>=520&&point.x<=645&&point.y>=380&&point.y<=470){//填空
             canvas.style.cursor="pointer";
        }
        else{
          canvas.style.cursor="default";
        }
}
gameMainBackground.onload=function(){}
testFrame.onload=function(){}
classTestPic.onload=function(){}
card.onload=function(){}
basicBtn.onload=function(){}
advanceBtn.onload=function(){}
wrong.onload=function(){}
right.onload=function(){}
nextBtn2.onload=function(){}
testOutBtn2.onload=function(){}
fillPic1.onload=function(){}
fillPic2.onload=function(){}
fillPic3.onload=function(){}
fillPic4.onload=function(){}
fillPic5.onload=function(){}
/*
function drawAdvancePage(){  //绘制进阶练习界面
     ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
     ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
     ctx.drawImage(textAppreciateFrame1,iCanvasWidth/2-textAppreciateFrame1.width/1.5,iCanvasHeight/2-textAppreciateFrame1.height/2,800,textAppreciateFrame1.height);
     ctx.drawImage(testOutBtn2,735,455);
     ctx.drawImage(answerBtn,730,130,100,80);
      ctx.save();
      style.fillColor="rgb(236,216,91)";
      rect.x=220;rect.y=140;rect.width=220;rect.height=80;
      ctx.beginPath();
      drawRect(ctx,rect,style,true);
      rect.x=220;rect.y=260;rect.width=220;rect.height=80;
      drawRect(ctx,rect,style,true);
      rect.x=220;rect.y=380;rect.width=220;rect.height=80;
      drawRect(ctx,rect,style,true);
      rect.x=220;rect.y=480;rect.width=220;rect.height=80;
      drawRect(ctx,rect,style,true);
      style.fontSize="25";style.fillColor="black";style.fontFamily="微软雅黑";
      text.text="总为浮云能蔽日";
      text.x=230;text.y=150; 
      drawText(ctx,text,style,true);    
      text.text="长安不见使人愁";
      text.x=230;text.y=180;
      drawText(ctx,text,style,true);
      
      text.text="互文";
      text.x=615;text.y=165;
      drawText(ctx,text,style,true);

      text.text="知否?知否?";
      text.x=230;text.y=280;
      drawText(ctx,text,style,true);
      text.text="应是绿肥红瘦";
      text.x=230;text.y=310;
      drawText(ctx,text,style,true);     

      text.text="比喻";
      text.x=615;text.y=290;
      drawText(ctx,text,style,true);

      text.text="不已物喜,不以己悲";
      text.x=230;text.y=400;
      drawText(ctx,text,style,true);

      text.text="对比";
      text.x=615;text.y=405;
      drawText(ctx,text,style,true);

      text.text="宫女如花满春殿";
      text.x=230;text.y=500;
      drawText(ctx,text,style,true);
      text.text="只今惟有鹧鸪飞";
      text.x=230;text.y=530;
      drawText(ctx,text,style,true);

      text.text="借代";
      text.x=615;text.y=535;
      drawText(ctx,text,style,true);
      ////////////////////绘制连线题
      ctx.beginPath();//第一行
      circle.x=470;circle.y=170;circle.r=5;
      style.lineWidth=1;style.fillColor="red";style.strokeColor="red";
      drawCircle(ctx,circle,style,false);
      ctx.beginPath();  
      circle.x=600;
      drawCircle(ctx,circle,style,false);
      ctx.beginPath();///第二行
      circle.x=470;circle.y=300;circle.r=5;
      drawCircle(ctx,circle,style,false);
      ctx.beginPath();
      circle.x=600;
      drawCircle(ctx,circle,style,false);
      ctx.beginPath(); //第三行
      circle.x=470;circle.y=420;circle.r=5;
      drawCircle(ctx,circle,style,false);
      ctx.beginPath();
      circle.x=600;
      drawCircle(ctx,circle,style,false);
      ctx.beginPath();//第四行
      circle.x=470;circle.y=550;circle.r=5;
      drawCircle(ctx,circle,style,false);
      ctx.beginPath();
      circle.x=600;
      drawCircle(ctx,circle,style,false);
      ctx.restore();
}
function onAdvancePageDown(){ //进阶练习界面鼠标事件
       point.x=event.clientX;
       point.y=event.clientY;
       windowToCanvas(canvas,point);
       console.log("x:"+point.x+" y:"+point.y);
       if(point.x>=460&&point.x<=480&&point.y>=160&&point.y<=180){ //诗1
            canvas.style.cursor="pointer";
            ctx.save();
            ctx.beginPath();
            circle.x=470;circle.y=170;circle.r=5;
            style.lineWidth=1;style.strokeColor="red";
            drawCircle(ctx,circle,style,true);
            line.x0=470;line.y0=170; 
            ctx.restore();
        }
       else if(point.x>=590&&point.x<=610&&point.y>=160&&point.y<=180){  //互文
            canvas.style.cursor="pointer";
            ctx.save();
            ctx.beginPath();//第一行
            circle.x=600;circle.y=170;circle.r=5;
            style.lineWidth=1;style.strokeColor="red";style.fillColor="red";
            drawCircle(ctx,circle,style,true);
            ctx.closePath();
            line.x1=600;line.y1=170;
            ctx.beginPath();
            style.lineWidth="5";
            style.fillColor="#666";         
            drawLine(ctx,line,style,true);
            ctx.closePath();
            ctx.restore();
        }
       else if(point.x>=460&&point.x<=480&&point.y>=290&&point.y<=310){  //诗2
            canvas.style.cursor="pointer";
            ctx.save();
            ctx.beginPath();
            circle.x=470;circle.y=300;circle.r=5;
            style.lineWidth=1;style.strokeColor="red";style.fillColor="red";
            drawCircle(ctx,circle,style,true);
            line.x0=470;line.y0=300; 
            ctx.restore();
       }
       else if(point.x>=590&&point.x<=610&&point.y>=290&&point.y<=310){  //比喻
            canvas.style.cursor="pointer";
            ctx.save();
            ctx.beginPath();//第二行
            circle.x=600;circle.y=300;circle.r=5;
            style.lineWidth=1;style.strokeColor="red";style.fillColor="red";
            drawCircle(ctx,circle,style,true);
            ctx.closePath();
            line.x1=600;line.y1=300;
            ctx.beginPath();
            style.lineWidth="5";
            style.fillColor="#666";         
            drawLine(ctx,line,style,true);
            ctx.closePath();          
            ctx.restore();  
       }
       else if(point.x>=460&&point.x<=480&&point.y>=420&&point.y<=440){  //诗3
            canvas.style.cursor="pointer";
            ctx.save();
            ctx.beginPath();
            circle.x=470;circle.y=420;circle.r=5;
            style.lineWidth=1;style.strokeColor="red";style.fillColor="red";
            drawCircle(ctx,circle,style,true);
            line.x0=470;line.y0=420;        
            ctx.restore();     
        }
       else if(point.x>=590&&point.x<=610&&point.y>=420&&point.y<=440){  //对比
            canvas.style.cursor="pointer";
            ctx.save();
            ctx.beginPath();//第三行
            circle.x=600;circle.y=420;circle.r=5;
            style.lineWidth=1;style.strokeColor="red";style.fillColor="red";
            drawCircle(ctx,circle,style,true);
            ctx.closePath();
            line.x1=600;line.y1=420;
            ctx.beginPath();
            style.lineWidth="5";
            style.fillColor="#666";         
            drawLine(ctx,line,style,true);
            ctx.closePath();       
            ctx.restore();       
        }   
       else if(point.x>=460&&point.x<=480&&point.y>=550&&point.y<=570){  //诗4
            canvas.style.cursor="pointer";
            ctx.save();
            ctx.beginPath();
            circle.x=470;circle.y=550;circle.r=5;
            style.lineWidth=1;style.strokeColor="red";style.fillColor="red";
            drawCircle(ctx,circle,style,true);
            line.x0=470;line.y0=550;         
            ctx.restore();    
        }
       else if(point.x>=590&&point.x<=610&&point.y>=550&&point.y<=570){  //借代
            canvas.style.cursor="pointer";
            ctx.save();
            ctx.beginPath();//第三行
            circle.x=600;circle.y=550;circle.r=5;
            style.lineWidth=1;style.strokeColor="red";style.fillColor="red";
            drawCircle(ctx,circle,style,true);
            ctx.closePath();
            line.x1=600;line.y1=550;
            ctx.beginPath();
            style.lineWidth="5";
            style.fillColor="#666";         
            drawLine(ctx,line,style,true);
            ctx.closePath();     
            ctx.restore();                     
        }               
       else if(point.x>=730&&point.x<=825&&point.y>=130&&point.y<=205){  //答案选项
            canvas.style.cursor="pointer";
            style.fillColor="red";
            style.lineWidth="5";
            ctx.beginPath();
            line.x0=470;line.y0=170;
            line.x1=600;line.y1=300;
            drawLine(ctx,line,style,true);  //诗1和比喻
            ctx.beginPath();
            line.x0=470;line.y0=300;
            line.x1=600;line.y1=550;
            drawLine(ctx,line,style,true); //诗2和借代
            ctx.beginPath();
            line.x0=470;line.y0=420;
            line.x1=600;line.y1=170;
            drawLine(ctx,line,style,true); //诗3和互文
            ctx.beginPath();
            line.x0=470;line.y0=550;
            line.x1=600;line.y1=420;
            drawLine(ctx,line,style,true); //诗4和对比        
        }
       else if(point.x>=765&&point.x<=855&&point.y>=515&&point.y<=570){ //返回
            canvas.style.cursor="pointer";
            canvas.removeEventListener("mousedown",onAdvancePageDown);
            canvas.removeEventListener("mousemove",onAdvancePageMove);
            drawBasicAndAdvancePage();
            canvas.addEventListener("mousedown",onBasicAndAdvancePageDown);
            canvas.addEventListener("mousemove",onBasicAndAdvancePageMove);            
       }
       else{
            canvas.style.cursor="default";
       }
}
function onAdvancePageMove(){  //进阶练习界面鼠标事件
       point.x=event.clientX;
       point.y=event.clientY;
       windowToCanvas(canvas,point);
       if(point.x>=460&&point.x<=480&&point.y>=160&&point.y<=180){ //诗1
            canvas.style.cursor="pointer";
        }
       else if(point.x>=590&&point.x<=610&&point.y>=160&&point.y<=180){  //互文
            canvas.style.cursor="pointer";
        }
       else if(point.x>=460&&point.x<=480&&point.y>=290&&point.y<=310){  //诗2
            canvas.style.cursor="pointer";
       }
       else if(point.x>=590&&point.x<=610&&point.y>=290&&point.y<=310){  //比喻
            canvas.style.cursor="pointer";
       }
       else if(point.x>=460&&point.x<=480&&point.y>=420&&point.y<=440){  //诗3
            canvas.style.cursor="pointer";
        }
       else if(point.x>=590&&point.x<=610&&point.y>=420&&point.y<=440){  //对比
            canvas.style.cursor="pointer";
        }   
       else if(point.x>=460&&point.x<=480&&point.y>=550&&point.y<=570){  //诗4
            canvas.style.cursor="pointer";
        }
       else if(point.x>=590&&point.x<=610&&point.y>=550&&point.y<=570){  //借代
            canvas.style.cursor="pointer";
        }            
       else if(point.x>=730&&point.x<=825&&point.y>=130&&point.y<=205){  //答案选项
            canvas.style.cursor="pointer";
        }
       else if(point.x>=765&&point.x<=855&&point.y>=515&&point.y<=570){ //返回
            canvas.style.cursor="pointer";
       }   
       else{
            canvas.style.cursor="default";
       }
}

function onBasicAndAdvancePageDown(){  //基础与进阶选择页面鼠标事件
      point.x=event.clientX;
	    point.y=event.clientY;
	    windowToCanvas(canvas,point);
	    console.log("x:"+point.x+" y:"+point.y);
        if(point.x>=235&&point.x<=525&&point.y>=180&&point.y<=505){ //基础
             canvas.style.cursor="pointer";
             drawChoicePage(choiceQue[0],choiceAns1);
             canvas.removeEventListener("mousedown",onBasicAndAdvancePageDown);
             canvas.removeEventListener("mousemove",onBasicAndAdvancePageMove);
             canvas.addEventListener("mousedown",onChoicePageDown);
             canvas.addEventListener("mousemove",onChoicePageMove);
        }
        else if(point.x>=570&&point.x<=830&&point.y>=180&&point.y<=505){ //进阶
             canvas.style.cursor="pointer";         
             canvas.removeEventListener("mousedown",onBasicAndAdvancePageDown);
             canvas.removeEventListener("mousemove",onBasicAndAdvancePageMove); 
             drawAdvancePage();
             canvas.addEventListener("mousedown",onAdvancePageDown);
             canvas.addEventListener("mousemove",onAdvancePageMove);
        }
        else if(point.x>=765&&point.x<=855&&point.y>=515&&point.y<=570){ //返回
             canvas.style.cursor="pointer";         
             canvas.removeEventListener("mousedown",onBasicAndAdvancePageDown);
             canvas.removeEventListener("mousemove",onBasicAndAdvancePageMove); 
             drawClassTestPage();
             canvas.addEventListener("mousedown",onClassPageDown);
             canvas.addEventListener("mousemove",onClassPageMove);
        }
        else{
        	 canvas.style.cursor="default";
        }
}
function onBasicAndAdvancePageMove(){//基础与进阶选择页面鼠标事件
        point.x=event.clientX;
	    point.y=event.clientY;
	    windowToCanvas(canvas,point);
        if(point.x>=235&&point.x<=525&&point.y>=180&&point.y<=505){ //基础
             canvas.style.cursor="pointer";
        }
        else if(point.x>=570&&point.x<=830&&point.y>=180&&point.y<=505){ //进阶
             canvas.style.cursor="pointer";
        }
        else if(point.x>=765&&point.x<=855&&point.y>=515&&point.y<=570){ //返回
             canvas.style.cursor="pointer";         
        }
        else{
        	 canvas.style.cursor="default";
        }
}*/


/*
testBtn1=new Image();
testBtn2=new Image();
testBtn3=new Image();
testOutBtn=new Image();
testOutBtn2=new Image();
nextBtn=new Image();
rightBtn=new Image();
wrongBtn=new Image();
testBtn1.src="img/classTest/testBtn1.png";
testBtn2.src="img/classTest/testBtn2.png";
testBtn3.src="img/classTest/testBtn3.png";
testOutBtn.src="img/classTest/testOutBtn.png";
testOutBtn2.src="img/classTest/testOutBtn2.png";
nextBtn.src="img/classTest/nextBtn.png";
rightBtn.src="img/classTest/rightBtn.png";
wrongBtn.src="img/classTest/wrongBtn.png";
var score=0,choicePage=1,judgePage=1;
function drawClassTestPage(){  //绘制课堂检测页面
        ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
	    ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
		ctx.drawImage(textAppreciateFrame1,iCanvasWidth/2-textAppreciateFrame1.width/1.5,iCanvasHeight/2-textAppreciateFrame1.height/2,800,textAppreciateFrame1.height);
        ctx.drawImage(testBtn1,250,250,150,100);
        ctx.drawImage(testBtn2,450,250,150,100);
        ctx.drawImage(testBtn3,650,250,150,100);
        ctx.drawImage(testOutBtn,780,120,100,50);

}
function circleInChoicePage(){ //进入选择题界面动画
	console.log("cici");
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
       setTimeout(circleInChoicePage,20);
    }  
    else{
    	drawChoicePage(1);
    	choicePage=1;
    	canvas.addEventListener("mousedown",onChoicePageDown);
        canvas.addEventListener("mousemove",onChoicePageMove);
    }    
}
function drawChoicePage(a){  //绘制选择题界面
    ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
    ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
	ctx.drawImage(textAppreciateFrame1,iCanvasWidth/2-textAppreciateFrame1.width/1.5,iCanvasHeight/2-textAppreciateFrame1.height/2,800,textAppreciateFrame1.height);
    ctx.drawImage(testOutBtn2,720,75);
    var texts;
    text.text="得分: ";
    text.x=240;text.y=140;
    style.fillColor="black";
    style.fontSize="25";
    style.fontFamily="微软雅黑";
    drawText(ctx,text,style,true);
    text.text=score+"分;";
    text.x+=60;
    drawText(ctx,text,style,true);
    style.fontSize="20";
    if(a==1){
    	text.text="1.下列句子中的“故”字，与其他意义不同的一项是( )";
    	text.x=230;text.y=240;
    	drawText(ctx,text,style,true)
    	text.text="A.故垒西边;";
    	text.y+=60;
        drawText(ctx,text,style,true);
        text.text="B.已而逐晴,故所此;";
        text.y+=60;
        drawText(ctx,text,style,true);
        text.text="C.故国神游;"
    	text.y+=60;
        drawText(ctx,text,style,true);
        text.text="D.故人西辞黄鹤楼;";
        text.y+=60;
        drawText(ctx,text,style,true);
        ctx.drawImage(nextBtn,720,450);
    }
    else if(a==2){       
    	text.text="2.下列句子中红色的词语的用法与众不同的一句是( )";
    	text.x=230;text.y=240;
    	drawText(ctx,text,style,true)
    	text.text="A.大江东去，浪淘尽;";
    	text.y+=60;
        drawText(ctx,text,style,true);
        text.text="B.樯橹灰飞烟灭;";
        text.y+=60;
        drawText(ctx,text,style,true);
        text.text="C.卷起千堆雪;"
    	text.y+=60;
        drawText(ctx,text,style,true);
        text.text="D.都门帐饮无绪;";
        text.y+=60;
        drawText(ctx,text,style,true);
        ctx.drawImage(nextBtn,720,450);
    }
    else if(a==3){
    	text.text="3.从下列说法中选出不正确的一项（ ）";
    	text.x=230;text.y=240;
    	drawText(ctx,text,style,true);
    	text.text="A.“大江东去”中的大江代表长江";
    	text.y+=60;
        drawText(ctx,text,style,true);
        text.text="B.“故国神游”一句中,“故国”代表旧国、旧地,在这里指当年赤壁战场";
    	text.y+=60;
        drawText(ctx,text,style,true);
        text.text="C.“卷起千堆雪”和“樯橹灰飞烟灭”两句都运用了比喻修辞";
    	text.y+=60;
        drawText(ctx,text,style,true);
        text.text="D.“羽扇”和“纶巾”都是古代儒将的装束";
    	text.y+=60;
        drawText(ctx,text,style,true);        
        ctx.drawImage(nextBtn,720,450);
    }
    else if(a==4){
    	text.text="4. 对开头三句分析正确的一项是( )";
    	text.x=230;text.y=240;
    	drawText(ctx,text,style,true);
    	text.y+=40;
    	texts="A.是虚写.“大江东去”比喻千古历史如同水里淘金一样最后沉淀出历史人物.";
        text.text="";
    	for(var i=0;i<texts.length;i++){
    		if((i%32==0&&i!=0)||(i==texts.length-1)){
    			text.text+=texts[i];
    			text.y+=20;
    			drawText(ctx,text,style,true);
    			text.text="";
    		}
    		else{
    			text.text+=texts[i];
    		}
    	}
    	text.y+=20;
     //   drawText(ctx,text,style,true);
   //     text.text="B.是实写.写出东去的长江,波涛冲刷,不见一丝旧迹,只有一些优秀人物还留在人间的传说中.";
        texts="B.是实写.写出东去的长江,波涛冲刷,不见一丝旧迹,只有一些优秀人物还留在人间的传说中.";
        text.text="";
    	for(var i=0;i<texts.length;i++){
    		if((i%32==0&&i!=0)||(i==texts.length-1)){
    			text.text+=texts[i];
    			text.y+=20;
    			drawText(ctx,text,style,true);
    			text.text="";
    		}
    		else{
    			text.text+=texts[i];
    		}
    	}
    	
      //  drawText(ctx,text,style,true);
        texts="C.从大处着笔,虚实结合.不仅给人以极佳的视听效果,写尽雄伟壮阔的长江气势,而且化空间为时间,从具体的长江写到抽象的历史,从对自然的惊叹转到对历史英雄的羡叹.";
    	text.y+=20;        
    	text.text="";
    	for(var i=0;i<texts.length;i++){
    		if((i%35==0&&i!=0)||(i==texts.length-1)){
    			text.text+=texts[i];
    			text.y+=20;
    			drawText(ctx,text,style,true);
    			text.text="";
    		}
    		else{
    			text.text+=texts[i];
    		}
    	}   
        text.text="D．“羽扇”和“纶巾”都是古代儒将的装束";
    	text.y+=25;
        drawText(ctx,text,style,true);        
        ctx.drawImage(nextBtn,720,450);
    }
    else if(a==5){
        text.text="5.下列有关文学常识的表述有误的一项是( )";
    	text.x=230;text.y=240;
    	drawText(ctx,text,style,true);
    	text.y+=40;
    	texts="A.词的全称是“曲子词”,别名“近体乐府”“长短句”.大部分词分两段,段在词中又叫“片”或“阕”.一首词的上下两段分别称上下片或上下阕.";
        text.text="";
    	for(var i=0;i<texts.length;i++){
    		if((i%34==0&&i!=0)||(i==texts.length-1)){
    			text.text+=texts[i];
    			text.y+=20;
    			drawText(ctx,text,style,true);
    			text.text="";
    		}
    		else{
    			text.text+=texts[i];
    		}
    	}
    	text.y+=20;
        texts="B.词作为一种配乐歌唱的文学形式,最早出现于隋唐,在宋朝达到了高峰.分成了婉约、豪放两派;";
        text.text="";
    	for(var i=0;i<texts.length;i++){
    		if((i%32==0&&i!=0)||(i==texts.length-1)){
    			text.text+=texts[i];
    			text.y+=20;
    			drawText(ctx,text,style,true);
    			text.text="";
    		}
    		else{
    			text.text+=texts[i];
    		}
    	}
    	text.y+=20;
        texts="C.苏轼,北宋文学家,为“唐宋八大家”之一.其诗清新豪健,善用夸张比喻,其词开豪放一派,对后世影响很大;";
        text.text="";
    	for(var i=0;i<texts.length;i++){
    		if((i%32==0&&i!=0)||(i==texts.length-1)){
    			text.text+=texts[i];
    			text.y+=20;
    			drawText(ctx,text,style,true);
    			text.text="";
    		}
    		else{
    			text.text+=texts[i];
    		}
    	}
    	text.y+=20;
        texts="D.婉约词风,其内容主要是写男女情爱,离情别绪,伤春悲秋,光景流连;其形式大都婉丽柔美,含蓄蕴藉,情景交融,声调和谐.";
    	text.text="";
    	for(var i=0;i<texts.length;i++){
    		if((i%32==0&&i!=0)||(i==texts.length-1)){
    			text.text+=texts[i];
    			text.y+=20;
    			drawText(ctx,text,style,true);
    			text.text="";
    		}
    		else{
    			text.text+=texts[i];
    		}
    	}       
    }
}
function ifChoiceRight(){
	   var texts;
	   text.x=380;text.y=120;
   	   style.fillColor="red";style.fontFamily="微软雅黑";style.fontSize="15";
	   if(choicePage==1){
       	   text.text="答案:B;选项“故”表示所以,而其余三项“故”表示曾经";  
       	   drawText(ctx,text,style,true);
       }
       else if(choicePage==2){
       	   texts="答案C;A:向东流,名作状;B:像灰一样,名作状;D在都门里,名作状;而C是运用比喻手法,将浪花比喻成雪花";
           text.text="";
       	   for(var i=0;i<texts.length;i++){
               if((i%25==0&&i!=0)||(i==texts.length-1)){
               	  text.text+=texts[i];
               	  drawText(ctx,text,style,true);
               	  text.text="";
               	  text.y+=20;
               }
               else{
               	 text.text+=texts[i];
               }
       	   }
       }
       else if(choicePage==3){
       	   text.text="答案:C,樯橹运用了借代手法";
       	   drawText(ctx,text,style,true);
       }
       else if(choicePage==4){
       	   text.text="答案:C";
       	   drawText(ctx,text,style,true);
       }
       else if(choicePage==5){
       	   text.text="答案C;词是一种诗的别体,萌芽于南朝,是隋唐时兴起的一种新的文学样式.";
       	   drawText(ctx,text,style,true);
       } 	 
}
function onChoicePageDown(){
    point.x=event.clientX;
    point.y=event.clientY;
    windowToCanvas(canvas,point);
    console.log("x:"+point.x+" y:"+point.y);
    if(point.x>=750&&point.x<=845&&point.y>=505&&point.y<=570){  //下一题
       canvas.style.cursor="pointer";
       if(choicePage<5){
          drawChoicePage(++choicePage);
        }
    }
    else if(point.x>=220&&point.x<=255&&point.y>=295&&point.y<=320){  //A
       canvas.style.cursor="pointer";
       ifChoiceRight(choicePage);
    }
    else if(point.x>=220&&point.x<=255&&point.y>=355&&point.y<=380){  //B
       canvas.style.cursor="pointer";
       if(choicePage==1||choicePage==5){
       	  score+=20;
       	  drawChoicePage(choicePage);
       	  text.text="正确";text.x=735;text.y=245;
       	  style.fillColor="red";style.fontFamily="微软雅黑";style.fontSize="25";
       	  drawText(ctx,text,style,true);
       }
       else{
          ifChoiceRight(choicePage);
       }
    }
    else if(point.x>=220&&point.x<=255&&point.y>=415&&point.y<=440){  //C
       canvas.style.cursor="pointer";
       if(choicePage==2||choicePage==3||choicePage==4){
       	  score+=20;
       	  drawChoicePage(choicePage);
       	  text.text="正确";text.x=735;text.y=245;
       	  style.fillColor="red";style.fontFamily="微软雅黑";style.fontSize="25";
       	  drawText(ctx,text,style,true);
       }
       else{
       	  ifChoiceRight(choicePage);
       }
    }
    else if(point.x>=220&&point.x<=255&&point.y>=475&&point.y<=500){  //D
        canvas.style.cursor="pointer";
        ifChoiceRight(choicePage);
    }
    else if(point.x>=760&&point.x<=850&&point.y>=135&&point.y<=190){ //返回 
        canvas.style.cursor="pointer";
        canvas.removeEventListener("mousemove",onChoicePageMove);
        canvas.removeEventListener("mousedown",onChoicePageDown);
        drawClassTestPage();
        canvas.addEventListener("mousedown",onClassTestPageDown);
        canvas.addEventListener("mousemove",onClassTestPageMove);
        choicePage=1;
        score=0;
    }
    else{
       canvas.style.cursor="default";
    }
}
function onChoicePageMove(){
    point.x=event.clientX;
    point.y=event.clientY;
    windowToCanvas(canvas,point);
    if(point.x>=750&&point.x<=845&&point.y>=505&&point.y<=570){  //下一题
       canvas.style.cursor="pointer";
    }
    else if(point.x>=220&&point.x<=255&&point.y>=295&&point.y<=320){  //A
       canvas.style.cursor="pointer";
    }
    else if(point.x>=220&&point.x<=255&&point.y>=355&&point.y<=380){  //B
       canvas.style.cursor="pointer";
    }
    else if(point.x>=220&&point.x<=255&&point.y>=415&&point.y<=440){  //C
       canvas.style.cursor="pointer";
    }
    else if(point.x>=220&&point.x<=255&&point.y>=475&&point.y<=500){  //D
       canvas.style.cursor="pointer";
    }
    else if(point.x>=760&&point.x<=850&&point.y>=135&&point.y<=190){ //返回 
       canvas.style.cursor="pointer";
    }
    else{
       canvas.style.cursor="default";
    }
} 
function circleInJudgePage(){//进入判断题界面动画
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
       setTimeout(circleInJudgePage,20);
    }  
    else{
    	score=0;
    	drawJudgePage();
    	canvas.addEventListener("mousedown",onJudgePageDown);
        canvas.addEventListener("mousemove",onJudgePageMove);
    }  
}
function drawJudgePage(){  //绘制判断题界面
    ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
    ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
	ctx.drawImage(textAppreciateFrame1,iCanvasWidth/2-textAppreciateFrame1.width/1.5,iCanvasHeight/2-textAppreciateFrame1.height/2,800,textAppreciateFrame1.height);
    ctx.drawImage(testOutBtn2,720,75);
    var texts;
    text.text="得分: ";
    text.x=240;text.y=140;
    style.fillColor="black";
    style.fontSize="25";
    style.fontFamily="微软雅黑";
    drawText(ctx,text,style,true);
    text.text=score+"分;";
    text.x+=60;
    drawText(ctx,text,style,true);
    text.x=200;text.y+=30;
    style.fontSize="20";style.fontFamily="微软雅黑";style.fillColor="black";
    text.text="1.“遥想公瑾当年”句中“遥想”一词统领的内容是小乔出嫁了,雄姿英发";
    text.y+=30;
    drawText(ctx,text,style,true);
    ctx.drawImage(rightBtn,720,220,80,50);
    ctx.drawImage(wrongBtn,800,220,80,50);
    text.text="2.以下拼音全部正确:樯橹(qiáng) 羽扇纶巾(guān) 赤鼻矶(jǐ) 上阕(què) ";
    text.y+=70;
    drawText(ctx,text,style,true);
    ctx.drawImage(rightBtn,720,290,80,50);
    ctx.drawImage(wrongBtn,800,290,80,50);
    text.text="3.柳永、秦观、周邦彦、李清照、晏几道都是婉约派代表人物";
    text.y+=70;
    drawText(ctx,text,style,true);
    ctx.drawImage(rightBtn,720,350,80,50);
    ctx.drawImage(wrongBtn,800,350,80,50);    
    text.y+=70;
    texts="4.词牌就是词的格式的名称,可以几个格式合用一个词牌;有时同一个格式又有几个词牌.满江红作为词牌时,有许多种变体,其中正体满江红共有92个字";
    text.text="";
    for(var i=0;i<texts.length;i++){
        if((i%35==0&&i!=0)||(i==texts.length-1)){
        	text.text+=texts[i];
        	drawText(ctx,text,style,true);
        	text.y+=25;
            text.text="";
        }
        else{
        	text.text+=texts[i];
        }
    }
    ctx.drawImage(rightBtn,720,460,80,50);
    ctx.drawImage(wrongBtn,800,460,80,50); 
    text.text="5:诗中有画,画中有诗形容的是苏轼";
    text.y+=50;
    drawText(ctx,text,style,true);
    ctx.drawImage(rightBtn,720,530,80,50);
    ctx.drawImage(wrongBtn,800,530,80,50);    
}
function onJudgePageDown(){
    point.x=event.clientX;
    point.y=event.clientY;
    windowToCanvas(canvas,point);
    console.log("x:"+point.x+" y:"+point.y);
    if(point.x>=725&&point.x<=795&&point.y>=220&&point.y<=265){ //1 正确
         canvas.style.cursor="pointer";
         drawJudgePage();
         text.text="答案正确";
         text.x=240;text.y=225;
         style.fontFamily="微软雅黑";style.fontSize="15";style.fillColor="red";
         drawText(ctx,text,style,true);
         if(score<100)
         score+=20;        
    }
    else if(point.x>=805&&point.x<=875&&point.y>=220&&point.y<=265){ //1 错误
         canvas.style.cursor="pointer";
         drawJudgePage();
         text.text="答案错误";
         text.x=240;text.y=225;
         style.fontFamily="微软雅黑";style.fontSize="15";style.fillColor="red";
         drawText(ctx,text,style,true);         
    }
    else if(point.x>=725&&point.x<=795&&point.y>=290&&point.y<=340){ //2正确
         canvas.style.cursor="pointer";
         drawJudgePage();
         text.text="答案错误;赤鼻矶(jī)";
         text.x=240;text.y=295;
         style.fontFamily="微软雅黑";style.fontSize="15";style.fillColor="red";
         drawText(ctx,text,style,true);
    }
    else if(point.x>=805&&point.x<=875&&point.y>=290&&point.y<=340){ //2错误
         canvas.style.cursor="pointer";
         if(score<100)
         score+=20;
         drawJudgePage();
         text.text="答案正确";
         text.x=240;text.y=295;
         style.fontFamily="微软雅黑";style.fontSize="15";style.fillColor="red";
         drawText(ctx,text,style,true);         
    }
    else if(point.x>=725&&point.x<=795&&point.y>=360&&point.y<=410){ //3正确
         canvas.style.cursor="pointer";
         if(score<100)
         score+=20;
         drawJudgePage();
         text.text="答案正确";
         text.x=240;text.y=365;
         style.fontFamily="微软雅黑";style.fontSize="15";style.fillColor="red";
         drawText(ctx,text,style,true);
    }
    else if(point.x>=805&&point.x<=875&&point.y>=360&&point.y<=410){ //3错误
         canvas.style.cursor="pointer";
         drawJudgePage();
         text.text="答案错误";
         text.x=240;text.y=365;
         style.fontFamily="微软雅黑";style.fontSize="15";style.fillColor="red";
         drawText(ctx,text,style,true);         
    }    
    else if(point.x>=725&&point.x<=795&&point.y>=430&&point.y<=480){ //4正确
         canvas.style.cursor="pointer";
         drawJudgePage();
         text.text="答案错误;满江红以柳永《满江红·暮雨初收》为正体,共93个字";
         text.x=240;text.y=460;
         style.fontFamily="微软雅黑";style.fontSize="15";style.fillColor="red";
         drawText(ctx,text,style,true);          
    }
    else if(point.x>=805&&point.x<=875&&point.y>=430&&point.y<=480){ //4错误
         canvas.style.cursor="pointer";
         if(score<100)
         score+=20;
         drawJudgePage();
         text.text="答案正确";
         text.x=240;text.y=460;
         style.fontFamily="微软雅黑";style.fontSize="15";style.fillColor="red";
         drawText(ctx,text,style,true);        
    }    
    else if(point.x>=725&&point.x<=795&&point.y>=540&&point.y<=580){ //5正确
         canvas.style.cursor="pointer";
         drawJudgePage();
         style.fontFamily="微软雅黑";style.fontSize="15";style.fillColor="red";
         text.x=240;text.y=540;
         texts="4.词牌就是词的格式的名称,可以几个格式合用一个词牌;有时同一个格式又有几个词牌.满江红作为词牌时,有许多种变体,其中正体满江红共有92个字";
         text.text="";
         for(var i=0;i<texts.length;i++){
           if((i%35==0&&i!=0)||(i==texts.length-1)){
	        	text.text+=texts[i];
	        	drawText(ctx,text,style,true);
	        	text.y+=20;
	            text.text="";
            }
           else{
        	    text.text+=texts[i];
            }
        }
    }
    else if(point.x>=805&&point.x<=875&&point.y>=540&&point.y<=580){ //5错误
         canvas.style.cursor="pointer";
         if(score<100)
         score+=20;
         drawJudgePage();
         text.text="答案正确";
         text.x=240;text.y=540;
         style.fontFamily="微软雅黑";style.fontSize="15";style.fillColor="red";
         drawText(ctx,text,style,true);         
    }     
    else if(point.x>=760&&point.x<=850&&point.y>=135&&point.y<=190){  //返回
        canvas.style.cursor="pointer";
        canvas.removeEventListener("mousemove",onJudgePageMove);
        canvas.removeEventListener("mousedown",onJudgePageDown);
        drawClassTestPage();
        canvas.addEventListener("mousedown",onClassTestPageDown);
        canvas.addEventListener("mousemove",onClassTestPageMove);
        choicePage=1;
        score=0;
    }  
    else{
       canvas.style.cursor="default";
    }
}
function onJudgePageMove(){
    point.x=event.clientX;
    point.y=event.clientY;
    windowToCanvas(canvas,point);
    if(point.x>=725&&point.x<=795&&point.y>=220&&point.y<=265){ //1 正确
         canvas.style.cursor="pointer";
    }
    else if(point.x>=805&&point.x<=875&&point.y>=220&&point.y<=265){ //1 错误
         canvas.style.cursor="pointer";
    }
    else if(point.x>=725&&point.x<=795&&point.y>=290&&point.y<=340){ //2正确
         canvas.style.cursor="pointer";
    }
    else if(point.x>=805&&point.x<=875&&point.y>=290&&point.y<=340){ //2错误
         canvas.style.cursor="pointer";
    }
    else if(point.x>=725&&point.x<=795&&point.y>=360&&point.y<=410){ //3正确
         canvas.style.cursor="pointer";
    }
    else if(point.x>=805&&point.x<=875&&point.y>=360&&point.y<=410){ //3错误
         canvas.style.cursor="pointer";
    }    
    else if(point.x>=725&&point.x<=795&&point.y>=430&&point.y<=480){ //4正确
         canvas.style.cursor="pointer";
    }
    else if(point.x>=805&&point.x<=875&&point.y>=430&&point.y<=480){ //4错误
         canvas.style.cursor="pointer";
    }    
    else if(point.x>=725&&point.x<=795&&point.y>=540&&point.y<=580){ //5正确
        canvas.style.cursor="pointer";
    }
    else if(point.x>=805&&point.x<=875&&point.y>=540&&point.y<=580){ //5错误
        canvas.style.cursor="pointer";
    }     
    else if(point.x>=760&&point.x<=850&&point.y>=135&&point.y<=190){ //返回
        canvas.style.cursor="pointer";    
    }
    else{
       canvas.style.cursor="default";
    }
}
function circleInFillPage(){//进入填空题界面动画
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
       setTimeout(circleInFillPage,20);
    }  
    else{
    	score=0;
    	drawFillPage();
    	canvas.addEventListener("mousedown",onFillPageDown);
        canvas.addEventListener("mousemove",onFillPageMove);
    }  
}
function drawFillPage(){  //绘制填空题界面
    ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
    ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
	ctx.drawImage(textAppreciateFrame1,iCanvasWidth/2-textAppreciateFrame1.width/1.5,iCanvasHeight/2-textAppreciateFrame1.height/2,800,textAppreciateFrame1.height);
    ctx.drawImage(sureBtn,700,460,100,80);
    ctx.drawImage(testOutBtn2,720,75);
    text.text="得分: ";
    text.x=240;text.y=140;
    style.fillColor="black";
    style.fontSize="25";
    style.fontFamily="微软雅黑";
    drawText(ctx,text,style,true);
    text.x+=60;
    text.text=score+"分;";
    drawText(ctx,text,style,true);
    style.fontFamily="微软雅黑";style.fontSize="20";style.fillColor="black";
    text.text="1.《念奴娇·赤壁怀古》中表达诗人旷达之情的句子为:";
    text.x=200;text.y=180;
    drawText(ctx,text,style,true);
    text.text="2.《念奴娇·赤壁怀古》中感叹自己多愁善感,过早长出白发的句子为:";
    text.x=200;text.y=280;
    drawText(ctx,text,style,true);
    texts="3.《念奴娇·赤壁怀古》中描写周瑜从容娴雅,沉着应战,指挥若定的儒将风度的句子为:";
    text.x=200;text.y=380;
    text.text="";
     for(var i=0;i<texts.length;i++){
       if((i%35==0&&i!=0)||(i==texts.length-1)){
        	text.text+=texts[i];
        	drawText(ctx,text,style,true);
        	text.y+=25;
            text.text="";
        }
       else{
    	    text.text+=texts[i];
        }
    }
    ans1.style.display="block";
    ans2.style.display="block";
    ans3.style.display="block";
}
function onFillPageDown(){
    point.x=event.clientX;
    point.y=event.clientY;
    windowToCanvas(canvas,point);
    console.log("x:"+point.x+" y:"+point.y);
    if(point.x>=700&&point.x<=795&&point.y>=460&&point.y<=540){  //确定
       canvas.style.cursor="pointer";
       if((ans1.value=="人生如梦，一尊还酹江月。"||ans1.value=="人生如梦,一尊还酹江月.")&&score<60){
       	  score+=20;
       }
       if((ans2.value=="多情应笑我，早生华发。"||ans2.value=="人生如梦,一尊还酹江月.")&&score<60){
       	  score+=20;
       }
       if((ans3.value=="羽扇纶巾，谈笑间，樯橹灰飞烟灭。"||ans3.value=="羽扇纶巾,谈笑间,樯橹灰飞烟灭.")&&score<60){
       	  score+=20;
       }
   
       drawFillPage();
       if(score==60){
       	    text.text="满分！";
		    text.x=295;text.y=480;
		    style.fillColor="red";
		    style.fontSize="45";
		    style.fontFamily="微软雅黑";
		    drawText(ctx,text,style,true);
       }
       else{
       	    text.text="再检查一下有没有错误吧！";
		    text.x=295;text.y=480;
		    style.fillColor="red";
		    style.fontSize="35";
		    style.fontFamily="微软雅黑";
		    drawText(ctx,text,style,true);
       }
       
    }
    else if(point.x>=760&&point.x<=850&&point.y>=135&&point.y<=190){ //返回
        canvas.style.cursor="pointer";
        ans1.style.display="none";
        ans2.style.display="none";
        ans3.style.display="none";
        ans1.value="";
        ans2.value="";
        ans3.value="";
        canvas.removeEventListener("mousemove",onFillPageMove);
        canvas.removeEventListener("mousedown",onFillPageDown);
        drawClassTestPage();
        canvas.addEventListener("mousedown",onClassTestPageDown);
        canvas.addEventListener("mousemove",onClassTestPageMove);
        choicePage=1;
        score=0;   
    }
    else{
       canvas.style.cursor="default";
    }
}
function onFillPageMove(){
    point.x=event.clientX;
    point.y=event.clientY;
    windowToCanvas(canvas,point);
    if(point.x>=700&&point.x<=795&&point.y>=460&&point.y<=540){  //确定
       canvas.style.cursor="pointer";
    }
    else if(point.x>=760&&point.x<=850&&point.y>=135&&point.y<=190){ //返回
        canvas.style.cursor="pointer";    
    }
    else{
       canvas.style.cursor="default";
    }
}

testBtn1.onload=function(){}
testBtn2.onload=function(){}
testBtn3.onload=function(){}
testOutBtn.onload=function(){}
testOutBtn2.onload=function(){}
nextBtn.onload=function(){}
rightBtn.onload=function(){}
wrongBtn.onload=function(){}*/
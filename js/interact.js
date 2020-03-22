var ans1=document.getElementById('ans1'),
ans2=document.getElementById('ans2'),
ans3=document.getElementById('ans3');
interactBackground=new Image();
LiQingzhao=new Image();
QinGuan=new Image();
SuShi=new Image();
XinQiji=new Image();
resetBtn=new Image();
answerBtn=new Image();
representative1=new Image();
representative2=new Image();
representative3=new Image();
qinPageBtn=new Image();
sureBtn=new Image();
danceBtn=new Image();
interactBackground.src="img/knowledgeExpand/interactBackground.png";
LiQingzhao.src="img/knowledgeExpand/LiQingzhao.png";
QinGuan.src="img/knowledgeExpand/QinGuan.png";
SuShi.src="img/knowledgeExpand/SuShi.png";
XinQiji.src="img/knowledgeExpand/XinQiji.png";
resetBtn.src="img/knowledgeExpand/resetBtn.png";
answerBtn.src="img/knowledgeExpand/answerBtn.png";
representative1.src="img/knowledgeExpand/representative1.jpg";
representative2.src="img/knowledgeExpand/representative2.jpg";
representative3.src="img/knowledgeExpand/representative3.jpg";
qinPageBtn.src="img/knowledgeExpand/qinPageBtn.png";
sureBtn.src="img/knowledgeExpand/sureBtn.png";
danceBtn.src="img/knowledgeExpand/danceBtn.png"
var positionSu={x0:320,y0:265};
var animateFlag=true,workFlag=false;
var qinFlag=[false,false,false],ans=[-1,-1,-1];
function circleInInteractPage(){  // 进入交互界面动画
	ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
	ctx.drawImage(interactBackground,0,0,iCanvasWidth,iCanvasHeight);
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
       setTimeout(circleInInteractPage,20);
	}
	else{	
      canvas.addEventListener("mousedown",onInteractPageDown);
      canvas.addEventListener("mousemove",onInteractPageMove); 
      window.addEventListener("keydown",onInteractKeyDown);      
      animate(); 
	}
}
function animate(){  //交互界面动画函数
	drawInteractPage();
	if((positionSu.x0+SuShi.width>=530)&&(positionSu.x0+SuShi.width<=635)
		&&(positionSu.y0+SuShi.height>=230&&positionSu.y0+SuShi.height<=320)){  //进入辛弃疾
		enterXin();
	    window.removeEventListener("keydown",onInteractKeyDown);
	    canvas.removeEventListener("mousedown",onInteractPageDown);
	    canvas.removeEventListener("mousemove",onInteractPageMove);
	    canvas.addEventListener("mousedown",onXinMouseDown);
	    canvas.addEventListener("mousemove",onXinMouseMove);
	    cancelAnimationFrame(animate);
	    animateFlag=false;
	}
	else if((positionSu.x0>=300)&&(positionSu.x0<=335)
		&&(positionSu.y0+SuShi.height>=665&&positionSu.y0+SuShi.height<=695)){ //进入秦观
        enterQin();
        window.removeEventListener("keydown",onInteractKeyDown);
        canvas.removeEventListener("mousedown",onInteractPageDown);
	    canvas.removeEventListener("mousemove",onInteractPageMove);
	    canvas.addEventListener("mousedown",onQinMouseDown);
	    canvas.addEventListener("mousemove",onQinMouseMove);
	    cancelAnimationFrame(animate);
	    animateFlag=false;
	}
	else if((positionSu.x0+SuShi.width>=770)&&(positionSu.x0+SuShi.width<=800)
		&&(positionSu.y0+SuShi.height>=635&&positionSu.y0+SuShi.height<=670)){ //进李清照
        window.removeEventListener("keydown",onInteractKeyDown);
        canvas.removeEventListener("mousedown",onInteractPageDown);
	    canvas.removeEventListener("mousemove",onInteractPageMove);        
	    enterLi();
	    canvas.addEventListener("mousedown",onLiMouseDown);
	    canvas.addEventListener("mousemove",onLiMouseMove);
	    cancelAnimationFrame(animate);
	    animateFlag=false;
	}
	if(animateFlag)
	  requestAnimationFrame(animate);
}
///////////以上为动画函数
function drawInteractPage(){  //绘制交互界面
	 ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
     ctx.drawImage(interactBackground,0,0,iCanvasWidth,iCanvasHeight);
     ctx.drawImage(SuShi,positionSu.x0,positionSu.y0);
     ctx.drawImage(LiQingzhao,760,465);
     ctx.drawImage(QinGuan,60,445);
     ctx.drawImage(XinQiji,605,98);
     ctx.drawImage(knowledgeExpOutBtn,920,35,150,50);
}
function enterLi(){  //进入李清照页面
	  ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
      ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
      ctx.drawImage(textAppreciateFrame1,iCanvasWidth/2-textAppreciateFrame1.width/1.5,iCanvasHeight/2-textAppreciateFrame1.height/2,800,textAppreciateFrame1.height);
      ctx.drawImage(knowledgeExpOutBtn,720,120,150,50);
      ctx.drawImage(resetBtn,610,300,100,80);
      ctx.drawImage(answerBtn,720,300,100,80);
      text.text="李清照";
      text.x=230;text.y=120;
      style.fontFamily="微软雅黑";
      style.fillColor="black";
      style.fontSize="50";
      drawText(ctx,text,style,true);
      var texts="号易安居士，汉族，齐州济南（今山东省济南市章丘区）人。宋代女词人，婉约词派代表，有“千古第一才女”之称。所作词，前期多写其悠闲生活，后期多悲叹身世，情调感伤。形式上善用白描手法，自辟途径，语言清丽。论词强调协律，崇尚典雅，提出词“别是一家”之说，反对以作诗文之法作词。";
      text.text="";text.x=235;text.y=180;
      style.fontSize="20";
      for(var i=0;i<texts.length;i++){
      	if((i%30==0&&i!=0)||i==texts.length-1){
      		text.text+=texts[i];
      		drawText(ctx,text,style,true);
      		text.text="";
      		text.y+=30;
      	}
      	else{
      		text.text+=texts[i];
      	}
      }
      style.fontSize="30";
      text.text="少女时代";
      text.x=230;text.y=350; 
      drawText(ctx,text,style,true);    
      text.text="沉郁凄婉";
      text.x=480;text.y=350;
      drawText(ctx,text,style,true);
      text.text="少妇年华";
      text.x=230;text.y=450;
      drawText(ctx,text,style,true);
      text.text="纯真质朴";
      text.x=480;text.y=450;
      drawText(ctx,text,style,true);
      text.text="夕阳岁月";
      text.x=230;text.y=550;
      drawText(ctx,text,style,true);
      text.text="飘逸婉约";
      text.x=480;text.y=550;
      drawText(ctx,text,style,true);
      ////////////////////绘制连线题
      ctx.beginPath();//第一行
      circle.x=365;circle.y=360;circle.r=5;
      style.lineWidth=1;style.fillColor="red";
      drawCircle(ctx,circle,style,false);
      ctx.beginPath();  
      circle.x=470;
      drawCircle(ctx,circle,style,false);
      ctx.beginPath();///第二行
      circle.x=365;circle.y=460;circle.r=5;
      drawCircle(ctx,circle,style,false);
      ctx.beginPath();
      circle.x=470;
      drawCircle(ctx,circle,style,false);
      ctx.beginPath(); //第三行
      circle.x=365;circle.y=560;circle.r=5;
      drawCircle(ctx,circle,style,false);
      ctx.beginPath();
      circle.x=470;
      drawCircle(ctx,circle,style,false);
       line.x0=365;line.y0=360;
      line.x1=470;line.y1=360;
      ctx.closePath();
}
function drawRepresentativeWork(a){  //绘制李清照代表作界面
    ctx.save();
    rect.x=175;
    rect.y=88;
    rect.width=750;
    rect.height=550;
    style.fillColor="rgba(255,255,255,0.9)";
    drawRect(ctx,rect,style,true);
    style.fontFamily="微软雅黑";
    style.fillColor="black";
    style.fontSize="25";
    var texts="";
    if(a==1){
       text.text="常记溪亭日暮，沉醉不知归路。";
       text.x=350;
       text.y=150;
       drawText(ctx,text,style,true);
       text.text="兴尽晚回舟，误入藕花深处。";
       text.y+=30;
       drawText(ctx,text,style,true);
       text.text="争渡，争渡，惊起一滩鸥鹭。";
       text.y+=30;
       drawText(ctx,text,style,true);
       text.text="       ——《如梦令·常记溪亭日暮》";
       text.y+=30;
       drawText(ctx,text,style,true);
       ctx.drawImage(representative1,200,400,500,200);
    }
    else if(a==2){
       texts="红藕香残玉簟秋。轻解罗裳，独上兰舟。云中谁寄锦书来，雁字回时，月满西楼。花自飘零水自流。一种相思，两处闲愁。此情无计可消除，才下眉头，却上心头。";
       text.x=350;
       text.y=150;
       text.text="";
       for(var i=0;i<texts.length;i++){
       	   if((i%18==0&&i!=0)||(i==texts.length-1)){
       	   	  text.text+=texts[i];
       	   	  drawText(ctx,text,style,true);  
       	   	  text.text="";
       	   	  text.y+=35;
       	   }
       	   else{
       	   	  text.text+=texts[i];
       	   }
       }
       text.text="       ——《一剪梅·红藕香残玉簟秋》";
       drawText(ctx,text,style,true); 	
       ctx.drawImage(representative2,200,400,500,200);
    }
    else{
       texts="风住尘香花已尽，日晚倦梳头。物是人非事事休，欲语泪先流。闻说双溪春尚好，也拟泛轻舟。只恐双溪舴艋舟，载不动许多愁。";
       text.x=350;
       text.y=150;
       text.text="";
       for(var i=0;i<texts.length;i++){
       	   if((i%18==0&&i!=0)||(i==texts.length-1)){
       	   	  text.text+=texts[i];
       	   	  drawText(ctx,text,style,true);  
       	   	  text.text="";
       	   	  text.y+=35;
       	   }
       	   else{
       	   	  text.text+=texts[i];
       	   }
       }
       text.text="       ——《武陵春·风住尘香花已尽》";
       drawText(ctx,text,style,true); 	
       ctx.drawImage(representative3,200,400,500,200);
    }
    ctx.restore();
}

function enterQin(){ //绘制秦观页面
      ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
      ctx.drawImage(textAppreciateFrame1,iCanvasWidth/2-textAppreciateFrame1.width/1.5,iCanvasHeight/2-textAppreciateFrame1.height/2,800,textAppreciateFrame1.height);
      ctx.drawImage(knowledgeExpOutBtn,720,110,150,50);
      ctx.drawImage(resetBtn,610,500,100,50);
      ctx.drawImage(sureBtn,720,500,90,50);
      ctx.drawImage(danceBtn,650,355,100,60);
      text.text="秦观";
      text.x=230;text.y=120;
      style.fontFamily="微软雅黑";
      style.fillColor="black";
      style.fontSize="50";
      drawText(ctx,text,style,true);
      var texts="  字少游，一字太虚，号淮海居士，别号邗沟居士；汉族，扬州高邮（今属江苏）人.北宋中后期著名词人，与黄庭坚、张耒、晁补之合称“苏门四学士”，颇得苏轼赏识。熙宁十一年(1078年)作《黄楼赋》，苏轼赞他“有屈宋之才”。元丰七年(1084年)秦观自编文集十卷后，苏轼为之作书向王安石推荐，王安石称他“有鲍、谢清新之致”。因秦观屡得名师指点，又常与同道切磋，兼之天赋才情，所以他的文学成就灿然可观。";
      text.text="";text.x=235;text.y=180;
      style.fontSize="20";
      for(var i=0;i<texts.length;i++){
      	if((i%30==0&&i!=0)||i==texts.length-1){
      		text.text+=texts[i];
      		drawText(ctx,text,style,true);
      		text.text="";
      		text.y+=30;
      	}
      	else{
      		text.text+=texts[i];
      	}
      }
      text.text="鹊桥仙·纤云弄巧";
      text.x=420;style.fontSize="25";
      drawText(ctx,text,style,true);
      text.text="纤云弄巧,飞星传恨,银汉迢迢暗度.金风玉露一相逢，_________________.";
      text.x=230;text.y+=30;style.fontSize="20";
      drawText(ctx,text,style,true);
      text.text="柔情似水,_______________,忍顾鹊桥归路._________________,又岂在朝朝暮暮.";
      text.y+=30;
      drawText(ctx,text,style,true);
      ctx.drawImage(qinPageBtn,230,470,50,50);
      text.text="佳期如梦";text.y=485;text.x=265;
      drawText(ctx,text,style,true);
      ctx.drawImage(qinPageBtn,230,510,50,50);
      text.text="两情若是久长时";text.y=525;
      drawText(ctx,text,style,true);
      ctx.drawImage(qinPageBtn,230,550,50,50);
      text.text="便胜却人间无数";text.y=565;
      drawText(ctx,text,style,true);
}
function ifWrite(a,texts){  //判断该空是否被填-秦观界面
      ctx.save();
      style.fillColor="red";
      if(a==0){
         text.text=texts;
         text.x=700;text.y=420;
         style.fontSize="20";
         drawText(ctx,text,style,true);
      }
      else if(a==1){
      	 text.text=texts;
         text.x=315;text.y=445;
         style.fontSize="20";
         drawText(ctx,text,style,true);
      }
      else if(a==2){
      	 text.text=texts;
         text.x=590;text.y=445;
         style.fontSize="20";
         drawText(ctx,text,style,true);
      }
      ctx.restore();
}
function qinResetAns(){  //重置-秦观界面
	for(var i=0;i<ans.length;i++){
		ans[i]=-1;
		qinFlag[i]=false;
	}
	enterQin();
}
function ifRight(){  //判断是否答对-秦观界面
    if(ans[0]==3&&ans[1]==1&&ans[2]==2){
    	return true;
    }
    else{
    	return false;
    }
}

function enterXin(){ //绘制辛弃疾界面
      ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
      ctx.drawImage(textAppreciateFrame1,iCanvasWidth/2-textAppreciateFrame1.width/1.5,iCanvasHeight/2-textAppreciateFrame1.height/2,800,textAppreciateFrame1.height);
      ctx.drawImage(knowledgeExpOutBtn,720,110,150,50);
      ctx.drawImage(answerBtn,230,485,90,50);
      ctx.drawImage(answerBtn,230,545,90,50);
      text.text="辛弃疾";
      text.x=230;text.y=120;
      style.fontFamily="微软雅黑";
      style.fillColor="black";
      style.fontSize="50";
      drawText(ctx,text,style,true);
      var texts="  原字坦夫，后改字幼安，号稼轩，山东人。南宋豪放派词人，有“词中之龙”之称。辛弃疾与苏轼合称“苏辛”，与李清照并称“济南二安”。辛弃疾不仅在文学上有所成就，在军事上也及其优秀。辛弃疾虽生于金国，但在少年抗金归宋，曾任江西安抚使、福建安抚使等职。";
      text.text="";text.x=235;text.y=180;      
      style.fontSize="20";
      for(var i=0;i<texts.length;i++){
      	if((i%30==0&&i!=0)||i==texts.length-1){
      		text.text+=texts[i];
      		drawText(ctx,text,style,true);
      		text.text="";
      		text.y+=30;
      	}
      	else{
      		text.text+=texts[i];
      	}
      }
      text.text="破阵子·为陈同甫赋壮词以寄之";
      style.fontSize="30";
      text.x=350;
      drawText(ctx,text,style,true);
      text.text="醉里挑灯看剑,梦回吹角连营.八百里分麾下炙,五十弦翻塞外声,沙场秋点兵.";
      style.fontSize="20";
      text.y+=55;text.x=220;
      drawText(ctx,text,style,true);
      text.text="马作的卢飞快,弓如霹雳弦惊.了却君王天下事,赢得生前身后名.可怜白发生!";
      text.y+=35;
      drawText(ctx,text,style,true);
      text.text="1.写出作者在梦中重回军营,检阅着各路兵马,准备出征的句子是?";
      text.y+=50;
      drawText(ctx,text,style,true);     
      text.text="2.表现作者闲居家中心情苦闷,借酒浇愁,渴望着重上前线,挥师北伐的句子是?";
      text.y+=60;
      drawText(ctx,text,style,true);
}
//////////以上为绘制界面函数
function onLiMouseDown(){  //李清照页面鼠标事件
        point.x=event.clientX;
	    point.y=event.clientY;
	    windowToCanvas(canvas,point);
	    console.log("x:"+point.x+" y:"+point.y);
	    if(workFlag){
	    	enterLi();
	    	workFlag=false;
	    }
	    if(point.x>=355&&point.x<=370&&point.y>=350&&point.y<=370&&workFlag==false){  //少女时代
           canvas.style.cursor="pointer"; 
           ctx.beginPath();
           circle.x=365;circle.y=360;circle.r=5;
		   style.lineWidth=1;style.strokeColor="red";
		   drawCircle(ctx,circle,style,true);
		   line.x0=365;line.y0=360;		   
	    }
	    else if(point.x>=460&&point.x<=480&&point.y>=350&&point.y<=370&&workFlag==false){ //沉郁凄婉
           canvas.style.cursor="pointer";
           ctx.beginPath();//第一行
		       circle.x=470;circle.y=360;circle.r=5;
		       style.lineWidth=1;style.strokeColor="red";
		       drawCircle(ctx,circle,style,true);
		       ctx.closePath();
		       line.x1=470;line.y1=360;
  		     ctx.beginPath();
  		     style.lineWidth="5";
  		     style.fillColor="#666";		 
  	       drawLine(ctx,line,style,true);
	         ctx.closePath();
	    }
	    else if(point.x>=355&&point.x<=375&&point.y>=450&&point.y<=470&&workFlag==false){ //少妇年华
            canvas.style.cursor="pointer";
            ctx.beginPath();
            circle.x=365;circle.y=460;circle.r=5;
		        style.lineWidth=1;style.strokeColor="red";
		        drawCircle(ctx,circle,style,true);
		        line.x0=365;line.y0=460;		   
	    }
	    else if(point.x>=460&&point.x<=480&&point.y>=450&&point.y<=470&&workFlag==false){ //纯真质朴
             canvas.style.cursor="pointer";   
             ctx.beginPath();//第一行
    		     circle.x=470;circle.y=460;circle.r=5;
    		     style.lineWidth=1;style.strokeColor="red";
    		     drawCircle(ctx,circle,style,true);
    		     ctx.closePath();
    		     line.x1=470;line.y1=460;
    		     ctx.beginPath();
    		     style.lineWidth="5";
    		     style.fillColor="#666";		 
	          drawLine(ctx,line,style,true);
	          ctx.closePath();          
	    }
	    else if(point.x>=355&&point.x<=375&&point.y>=550&&point.y<=570&&workFlag==false){ //夕阳岁月
            canvas.style.cursor="pointer";
            ctx.beginPath();
            circle.x=365;circle.y=560;circle.r=5;
    		    style.lineWidth=1;style.strokeColor="red";
    		    drawCircle(ctx,circle,style,true);
    		    line.x0=365;line.y0=560;
	    }
	    else if(point.x>=460&&point.x<=480&&point.y>=550&&point.y<=570&&workFlag==false){ //飘逸婉约
             canvas.style.cursor="pointer";
             ctx.beginPath();//第一行
    		     circle.x=470;circle.y=560;circle.r=5;
    		     style.lineWidth=1;style.strokeColor="red";
    		     drawCircle(ctx,circle,style,true);
    		     ctx.closePath();
    		     line.x1=470;line.y1=560;
    		     ctx.beginPath();
    		     style.lineWidth="5";
    		     style.fillColor="#666";		 
    	       drawLine(ctx,line,style,true);
	           ctx.closePath();   
	    }
	    else if(point.x>=615&&point.x<=705&&point.y>=300&&point.y<=370&&workFlag==false){  //重置按钮
	    	    canvas.style.cursor="pointer";
            enterLi();
	    }
	    else if(point.x>=725&&point.x<=810&&point.y>=300&&point.y<=370&&workFlag==false){  //答案按钮
    	    	canvas.style.cursor="pointer";
    	    	style.fillColor="red";
    	    	style.lineWidth="5";
    	    	ctx.beginPath();
            line.x0=365;line.y0=360;
            line.x1=470;line.y1=460;
            drawLine(ctx,line,style,true);  //少女和纯真质朴连
            ctx.beginPath();
            line.x0=365;line.y0=460;
            line.x1=470;line.y1=560;
            drawLine(ctx,line,style,true); //少妇和飘逸连
            ctx.beginPath();
            line.x0=365;line.y0=560;
            line.x1=470;line.y1=360;
            drawLine(ctx,line,style,true); //夕阳和忧国忧民
	    }
	    else if(point.x>=225&&point.x<=355&&point.y>=340&&point.y<=380&&workFlag==false){  //诗1
            canvas.style.cursor="pointer";
            enterLi();
            drawRepresentativeWork(1);
            workFlag=true;
	    }
	    else if(point.x>=225&&point.x<=355&&point.y>=440&&point.y<=485&&workFlag==false){  //诗2
            canvas.style.cursor="pointer";
            enterLi();
            drawRepresentativeWork(2);
            workFlag=true;
	    }
	    else if(point.x>=225&&point.x<=355&&point.y>=540&&point.y<=580&&workFlag==false){  //诗3
            canvas.style.cursor="pointer";
            enterLi();
            drawRepresentativeWork(3);
            workFlag=true;
	    }
	    else if(point.x>=755&&point.x<=845&&point.y>=110&&point.y<160&&workFlag==false){ //返回按钮
	    	canvas.style.cursor="pointer";
	    	canvas.removeEventListener("mousedown",onLiMouseDown);
            canvas.removeEventListener("mousemove",onLiMouseMove);
            canvas.addEventListener("mousedown",onInteractPageDown);
            canvas.addEventListener("mousemove",onInteractPageMove);
            window.addEventListener("keydown",onInteractKeyDown);
            drawInteractPage();animateFlag=true;
            positionSu.x0-=50;
            positionSu.y0-=50;
            requestAnimationFrame(animate);
            
	    }
	    else{
            canvas.style.cursor="default";
	    }
}
function onLiMouseMove(){
	    point.x=event.clientX;
	    point.y=event.clientY;
	    windowToCanvas(canvas,point);
	    if(point.x>=355&&point.x<=370&&point.y>=350&&point.y<=370){//少女时代
           canvas.style.cursor="pointer";
	    }
	    else if(point.x>=460&&point.x<=480&&point.y>=350&&point.y<=370){ //沉郁凄婉
           canvas.style.cursor="pointer";
	    }
	    else if(point.x>=355&&point.x<=375&&point.y>=450&&point.y<=470){ //少妇年华
            canvas.style.cursor="pointer";
	    }
	    else if(point.x>=460&&point.x<=480&&point.y>=450&&point.y<=470){ //纯真质朴
            canvas.style.cursor="pointer";             
	    }
	    else if(point.x>=355&&point.x<=375&&point.y>=550&&point.y<=570){ //夕阳岁月
            canvas.style.cursor="pointer";
	    }
	    else if(point.x>=460&&point.x<=480&&point.y>=550&&point.y<=570){ //飘逸婉约
            canvas.style.cursor="pointer";
	    }
	    else if(point.x>=615&&point.x<=705&&point.y>=300&&point.y<=370){  //重置按钮
	    	canvas.style.cursor="pointer";
	    }
	    else if(point.x>=725&&point.x<=810&&point.y>=300&&point.y<=370){  //答案按钮
	    	canvas.style.cursor="pointer";
	    }	    
	    else if(point.x>=225&&point.x<=355&&point.y>=340&&point.y<=380){  //诗1
            canvas.style.cursor="pointer";
	    }
	    else if(point.x>=225&&point.x<=355&&point.y>=440&&point.y<=485){  //诗2
            canvas.style.cursor="pointer";
	    }
	    else if(point.x>=225&&point.x<=355&&point.y>=540&&point.y<=580){  //诗3
            canvas.style.cursor="pointer";
	    }
	    else if(point.x>=755&&point.x<=845&&point.y>=110&&point.y<160){  //返回按钮
	    	canvas.style.cursor="pointer";
	    }
	    else{
            canvas.style.cursor="default";
	    }

}

function onQinMouseDown(){ //秦观页面鼠标事件
        point.x=event.clientX;
	    point.y=event.clientY;
	    windowToCanvas(canvas,point);
	    console.log("x:"+point.x+" y:"+point.y);
	    if(point.x>=235&&point.x<=270&&point.y>=475&&point.y<=510){  //佳期如梦
             canvas.style.cursor="pointer";
             for(var i=0;i<qinFlag.length;i++){
             	if(!qinFlag[i]){
                   ifWrite(i,"佳期如梦");
                   qinFlag[i]=true;
                   ans[i]=1;
                   break;
             	}
             }
	    }
	    else if(point.x>=235&&point.x<=270&&point.y>=520&&point.y<=550){ //两情若是久长时
             canvas.style.cursor="pointer";
             for(var i=0;i<qinFlag.length;i++){
             	if(!qinFlag[i]){
                   ifWrite(i,"两情若是久长时");
                   qinFlag[i]=true;
                   ans[i]=2;
                   break;
             	}
             }
	    } 
	    else if(point.x>=235&&point.x<=270&&point.y>=560&&point.y<=590){ //便胜却人间无数
             canvas.style.cursor="pointer";
             for(var i=0;i<qinFlag.length;i++){
             	if(!qinFlag[i]){
                   ifWrite(i,"便胜却人间无数");
                   qinFlag[i]=true;
                   ans[i]=3;
                   break;
             	}
             }
	    } 
	    else if(point.x>=615&&point.x<=700&&point.y>=500&&point.y<=575){ //重置
	    	canvas.style.cursor="pointer";
	    	qinResetAns();
	    }
	    else if(point.x>=725&&point.x<=815&&point.y>=500&&point.y<=570){ //确定
            canvas.style.cursor="pointer";
            if(ifRight()){
               text.text="正确！";
               text.x=435;
               text.y=500;
               style.fontSize="20";style.fillColor="red";
               drawText(ctx,text,style,true);
            }
            else{
               text.text="不对哦,再试试吧！";
               text.x=435;
               text.y=500;
               style.fontSize="20";style.fillColor="red";
               drawText(ctx,text,style,true);
            }
	    }
	    else if(point.x>=655&&point.x<=740&&point.y>=355&&point.y<=410){  //舞蹈欣赏
              canvas.style.cursor="pointer";
              video.style.display="block";
	    }
	    else if(point.x>=745&&point.x<=855&&point.y>=100&&point.y<=150){ //返回
             canvas.style.cursor="pointer";
             canvas.style.cursor="pointer";
	    	 canvas.removeEventListener("mousedown",onQinMouseDown);
             canvas.removeEventListener("mousemove",onQinMouseMove);
             canvas.addEventListener("mousedown",onInteractPageDown);
             canvas.addEventListener("mousemove",onInteractPageMove);
             window.addEventListener("keydown",onInteractKeyDown);
             drawInteractPage();animateFlag=true;
             positionSu.x0+=50;
             positionSu.y0-=50;
             requestAnimationFrame(animate);
	    }
	    else{
             canvas.style.cursor="default";
	    }
}
function onQinMouseMove(){
	    point.x=event.clientX;
	    point.y=event.clientY;
	    windowToCanvas(canvas,point);
	    if(point.x>=235&&point.x<=270&&point.y>=475&&point.y<=510){  //佳期如梦
             canvas.style.cursor="pointer";
	    }
	    else if(point.x>=235&&point.x<=270&&point.y>=520&&point.y<=550){ //两情若是久长时
             canvas.style.cursor="pointer";
	    } 
	    else if(point.x>=235&&point.x<=270&&point.y>=560&&point.y<=590){ //便胜却人间无数
             canvas.style.cursor="pointer";
	    } 
	    else if(point.x>=615&&point.x<=700&&point.y>=500&&point.y<=575){ //重置
	    	canvas.style.cursor="pointer";
	    }
	    else if(point.x>=725&&point.x<=815&&point.y>=500&&point.y<=570){ //确定
            canvas.style.cursor="pointer";
	    }
	    else if(point.x>=655&&point.x<=740&&point.y>=355&&point.y<=410){  //舞蹈欣赏
              canvas.style.cursor="pointer";
	    }
	    else if(point.x>=745&&point.x<=855&&point.y>=100&&point.y<=150){ //返回
             canvas.style.cursor="pointer";
	    }
	    else{
             canvas.style.cursor="default";
	    }
}

function onXinMouseDown(){  //辛弃疾页面鼠标事件
        point.x=event.clientX;
	    point.y=event.clientY;
	    windowToCanvas(canvas,point);
	    console.log("x:"+point.x+" y:"+point.y);
	    if(point.x>=235&&point.x<=315&&point.y>=480&&point.y<=530){  //第一题
           canvas.style.cursor="pointer";

	    }
	    else if(point.x>=235&&point.x<=315&&point.y>=545&&point.y<=590){ //第二题
           canvas.style.cursor="pointer";
	    }
	    else if(point.x>=745&&point.x<=855&&point.y>=100&&point.y<=150){ //返回
             canvas.style.cursor="pointer";
	    	 canvas.removeEventListener("mousedown",onXinMouseDown);
             canvas.removeEventListener("mousemove",onXinMouseMove);
             canvas.addEventListener("mousedown",onInteractPageDown);
             canvas.addEventListener("mousemove",onInteractPageMove);
             window.addEventListener("keydown",onInteractKeyDown);
             drawInteractPage();animateFlag=true;
             positionSu.x0-=50;
             positionSu.y0+=50;
             requestAnimationFrame(animate);
	    }
	    else{
           canvas.style.cursor="default";
	    }
}
function onXinMouseMove(){
	    point.x=event.clientX;
	    point.y=event.clientY;
	    windowToCanvas(canvas,point);
	    if(point.x>=235&&point.x<=315&&point.y>=480&&point.y<=530){  //第一题
           canvas.style.cursor="pointer";
           enterXin();
           text.text="八百里分麾下炙;五十弦翻塞外声;沙场秋点兵;";
           style.fillColor="red";
           text.x=315;text.y=500;
           drawText(ctx,text,style,true);
	    }
	    else if(point.x>=235&&point.x<=315&&point.y>=545&&point.y<=590){ //第二题
           canvas.style.cursor="pointer";
           enterXin();
           text.text="醉里挑灯看剑,梦回吹角连营;";
           text.x=315;text.y=565;
           style.fillColor="red";
           drawText(ctx,text,style,true);
	    }
	    else if(point.x>=745&&point.x<=855&&point.y>=100&&point.y<=150){ //返回
           canvas.style.cursor="pointer";
	    }
	    else{
           canvas.style.cursor="default";
           enterXin();
	    }
}
function onInteractPageDown(event){
	    point.x=event.clientX;
	    point.y=event.clientY;
	    windowToCanvas(canvas,point);
	    console.log("x:"+point.x+" y:"+point.y);
        if(point.x>=950&&point.x<=1060&&point.y>=30&&point.y<=75){  //返回
            canvas.style.cursor="pointer";
            cancelAnimationFrame(animate);
            animateFlag=false;
            window.removeEventListener("keydown",onInteractKeyDown); 
            canvas.removeEventListener("mousedown",onInteractPageDown);
            canvas.removeEventListener("mousemove",onInteractPageMove);
            drawKnowledgeExpandCatalogue();
            canvas.addEventListener("mousedown",onKnowledgeExpandDown);
            canvas.addEventListener("mousemove",onKnowledgeExpandMove);
            
        }
	    else{
           canvas.style.cursor="default";
	    }
}
function onInteractPageMove(event){
        point.x=event.clientX;
	    point.y=event.clientY;
	    windowToCanvas(canvas,point);
        if(point.x>=950&&point.x<=1060&&point.y>=30&&point.y<=75){  //返回
	       canvas.style.cursor="pointer";
	    }
	    else{
           canvas.style.cursor="default";
	    }
}
function onInteractKeyDown(event){
        if(event.keyCode==37){ //向左
           positionSu.x0-=6;
        }
        else if(event.keyCode==38){ //向上
           positionSu.y0-=6;
        }
        else if(event.keyCode==39){  //向右
           positionSu.x0+=6;
        }
        else if(event.keyCode==40){  //向下
           positionSu.y0+=6;
        }
}
function onVideoEnded2(){  //舞蹈视频
    video.style.display="none";
}
interactBackground.onload=function(){}
LiQingzhao.onload=function(){}
SuShi.onload=function(){}
QinGuan.onload=function(){}
XinQiji.onload=function(){}
resetBtn.onload=function(){}
answerBtn.onload=function(){}
representative1.onload=function(){}
representative2.onload=function(){}
representative3.onload=function(){}
qinPageBtn.onload=function(){}
sureBtn.onload=function(){}
danceBtn.onload=function(){}
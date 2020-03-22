var audio1=document.getElementById('audio1'),
audio2=document.getElementById('audio2'),
audio3=document.getElementById('audio3');
knowledgeExpBtn=new Image();
goldenCloud=new Image();
knowledgeExpBtn2=new Image();
bookmark1=new Image();
bookmark2=new Image();
bookmark3=new Image();
bookmark4=new Image();
bookmark5=new Image();
brand1=new Image();
brand2=new Image();
brand3=new Image();
knowledgeExpOutBtn=new Image();
musicBtn=new Image();
purpleBtn=new Image();
knowledgeExpBtn.src="img/knowledgeExpand/knowledgeExpBtn.png";
goldenCloud.src="img/knowledgeExpand/goldenCloud.png";
knowledgeExpBtn2.src="img/knowledgeExpand/knowledgeExpBtn2.png";
bookmark1.src="img/knowledgeExpand/bookmark1.png";
bookmark2.src="img/knowledgeExpand/bookmark2.png";
bookmark3.src="img/knowledgeExpand/bookmark3.png";
bookmark4.src="img/knowledgeExpand/bookmark4.png";
bookmark5.src="img/knowledgeExpand/bookmark5.png";
brand1.src="img/knowledgeExpand/brand1.png";
brand2.src="img/knowledgeExpand/brand2.png";
brand3.src="img/knowledgeExpand/brand3.png";
knowledgeExpOutBtn.src="img/knowledgeExpand/knowledgeExpOutBtn.png";
musicBtn.src="img/knowledgeExpand/musicBtn.png";
purpleBtn.src="img/knowledgeExpand/purpleBtn.png"
var cloudPosition={x:0,y:0},
size={w:0,h:0};
var biggerWidth,biggerHeight;
var brandFlag=false;
var brandText1="又名“上江虹”“满江红慢”“念良游”“伤春曲”“怅怅词”.调名来源说法不一,一说调名咏水草,满江红是一种生长在水田或池塘中的小型浮水植物.秋冬时节,它的叶内含有很多花青素,水上呈现一片红色,所以称为满江红.以柳永《满江红·暮雨初收》为正体,另有多种变体.正体双调九十三字,前段八句四仄韵,后段十句五仄韵.";
var brandText2="又名“一江春水”“玉壶水”“巫山十二峰”等.相传虞美人花与美人虞姬有关.楚汉相争,西楚霸王兵败乌江,四面楚歌,自知难以突出重围,便劝虞姬另寻生路.虞姬执意追随,拔剑自刎,香消玉殒.虞姬血染之地,长出了一种鲜红色的花,后人便把这种花称作“虞美人”.更钦佩美人虞姬节烈可嘉,创制词曲时,便常以“虞美人”三字作为曲名,以诉衷肠.“虞美人”因此逐渐演化为词牌名.虞美人以李煜词和毛文锡词为正体,李词为双调五十六字,前后段各四句,两仄韵、两平韵;毛词为双调五十八字,前后段各五句,两仄韵,三平韵,另有多种变体.";
var brandText3="又名“永遇乐慢”“消息”.《填词名解》记载,这个词牌名的来历有一个忧伤的故事.唐朝有个书生杜秘书，善于填词邻居家有个小女儿叫酥香,特别喜欢杜秘书写的词,因此也十分爱慕杜秘书.郎情妾意,私订终身.后来这件事被酥香家的一个仆人发现,告诉了酥香的父母,酥香的父母极力反对两人,书生因此也被迫害,发配到了遥远的河朔.临行前,他为酥香写了一首《永遇乐》诗,酥香拿着这首词,连唱三遍,声竭而亡.永遇乐以苏轼《永遇乐·彭城夜宿燕子楼梦盼盼因作此词》为正体,双调一百四字,前后段各十一句、四仄韵,另有多种变体.";
var musicFlag1=false,musicFlag2=false,musicFlag3=false;
function circleIn3(){  //进入知识拓展页面
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
       setTimeout(circleIn3,20);
    }  
    else{
    	drawKnowledgeExpandCatalogue();
    	canvas.addEventListener("mousedown",onKnowledgeExpandDown);
        canvas.addEventListener("mousemove",onKnowledgeExpandMove);
    }
}
function circleInBrandPage(){  //进入词牌名介绍界面
	ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
    ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
	ctx.drawImage(textAppreciateFrame1,iCanvasWidth/2-textAppreciateFrame1.width/1.2,iCanvasHeight/2-textAppreciateFrame1.height/2,1000,textAppreciateFrame1.height);
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
       setTimeout(circleInBrandPage,20);
    }  
    else{
    	drawBrandPage();
        canvas.addEventListener("mousedown",onBrandPageDown);
        canvas.addEventListener("mousemove",onBrandPageMove);     
    }
}
function circleInMusicPage(){  //进入韵律欣赏界面
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
	       setTimeout(circleInMusicPage,20);
	    }  
	    else{
	    	drawMusicPage();
	    	canvas.addEventListener("mousedown",onMusicPageDown);
	        canvas.addEventListener("mousemove",onMusucPageMove);
	    }
}
function bookmarkBigger(a,biggerW,biggerH){  //书签变大动画
     drawBrandPage();
     ctx.save();
     if(size.w<biggerW&&size.h<biggerH){
        size.w+=10;
        size.h+=10;
        style.fillColor="rgba(255,255,255,0.6)";
	    ctx.beginPath();
	    rect.x=85;
	    rect.y=90;
	    rect.width=800;
	    rect.height=textAppreciateFrame1.height-100;
	    drawRect(ctx,rect,style,true);
	    ctx.closePath();
	    if(a==1){
	      setTimeout("bookmarkBigger(1,biggerWidth,biggerHeight)",20);
	      ctx.drawImage(bookmark1,50,60,size.w,size.h);
	    }
        else if(a==2){
        	setTimeout("bookmarkBigger(2,biggerWidth,biggerHeight)",20);
            ctx.drawImage(bookmark2,50,60,size.w,size.h);
        }
        else{
            setTimeout("bookmarkBigger(3,biggerWidth,biggerHeight)",20);
            ctx.drawImage(bookmark3,50,60,size.w,size.h);
        }
     }
     else{
 	    style.fillColor="rgba(255,255,255,0.9)";
	    ctx.beginPath();
	    rect.x=85;
	    rect.y=90;
	    rect.width=900;
	    rect.height=textAppreciateFrame1.height-100;
	    drawRect(ctx,rect,style,true);
	    ctx.closePath();
     	if(a==1){
		    ctx.drawImage(bookmark1,50,60,size.w,size.h);
		    var texts="满江红";
		    text.x=215;text.y=265;
		    style.fontSize="45";
		    style.fillColor="black";
		    for(var i=0;i<texts.length;i++){
		    	text.text=texts[i];
		    	drawText(ctx,text,style,true);
		    	text.y+=60;
		    }
		    ///绘制内容
		    text.x=430;
		    text.y=135;
		    style.fontSize="20";
		    text.text="";
		    for(var i=0;i<brandText1.length;i++){
		    	if((i%27==0&&i!=0)||i==brandText1.length-1){
			    	text.text+=brandText1[i];
			    	drawText(ctx,text,style,true);
			    	text.y+=30;
			    	text.text="";
		    	}
		    	else{
		    		text.text+=brandText1[i];
		    	}
		    }
		    ctx.drawImage(brand1,420,310,550,250);
     	}
        else if(a==2){
            ctx.drawImage(bookmark2,50,60,size.w,size.h);
            var texts="虞美人";
		    text.x=215;text.y=265;
		    style.fontSize="45";
		    style.fillColor="black";
		    for(var i=0;i<texts.length;i++){
		    	text.text=texts[i];
		    	drawText(ctx,text,style,true);
		    	text.y+=60;
            }
            ///绘制内容
            text.x=430;
		    text.y=135;
		    style.fontSize="20";
		    text.text="";
		    for(var i=0;i<brandText2.length;i++){
		    	if((i%27==0&&i!=0)||i==brandText2.length-1){
			    	text.text+=brandText2[i];
			    	drawText(ctx,text,style,true);
			    	text.y+=30;
			    	text.text="";
		    	}
		    	else{
		    		text.text+=brandText2[i];
		    	}
		    }
		    ctx.drawImage(brand2,450,425,550,180);
        }
        else{
          ctx.drawImage(bookmark3,50,60,size.w,size.h);
          var texts="永遇乐";
	      text.x=215;text.y=265;
	      style.fontSize="45";
	      style.fillColor="black";
	      for(var i=0;i<texts.length;i++){
	    	text.text=texts[i];
	    	drawText(ctx,text,style,true);
	    	text.y+=60;
	      }
	      text.x=430;
	      text.y=135;
	      style.fontSize="20";
	      text.text="";
	      for(var i=0;i<brandText3.length;i++){
	    	if((i%27==0&&i!=0)||i==brandText3.length-1){
		    	text.text+=brandText3[i];
		    	drawText(ctx,text,style,true);
		    	text.y+=30;
		    	text.text="";
	    	}
	    	else{
	    		text.text+=brandText3[i];
	    	}
	      }
	      ctx.drawImage(brand3,475,400,500,200);
        }
    }
    ctx.restore();
    brandFlag=true;  //鼠标事件变换
}
/////////////////以上为动画函数
function drawKnowledgeExpandCatalogue(){  // 绘制知识拓展初始页面
        ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
        ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
	    ctx.drawImage(textAppreciateFrame1,iCanvasWidth/2-textAppreciateFrame1.width/1.5,iCanvasHeight/2-textAppreciateFrame1.height/2,800,textAppreciateFrame1.height);
        ctx.drawImage(knowledgeExpBtn,250,150,250,100);
        ctx.drawImage(knowledgeExpOutBtn,720,145,150,50);
        text.text="词牌名与音乐";
        text.x=300;
        text.y=130;
        style.fillColor="black";
        style.fontSize="35";
        style.fontFamily="华文行楷";
        drawText(ctx,text,style,true);
        ctx.drawImage(knowledgeExpBtn,400,300,250,100);
        text.text="两大流派";
        text.x=480;
        text.y=285;
        drawText(ctx,text,style,true);
        ctx.drawImage(knowledgeExpBtn,550,450,250,100);
        text.text="与词人互动";
        text.x=610;
        text.y=435;
        drawText(ctx,text,style,true);
}
function drawGoldenCloud(position){ //绘制金色祥云
	 ctx.save();
	 style.fillColor="rgba(255,255,255,0.6)";
     ctx.beginPath();
     rect.x=180;
     rect.y=88;
     rect.width=725;
     rect.height=textAppreciateFrame1.height-100;
     drawRect(ctx,rect,style,true);
     ctx.closePath();
     ctx.drawImage(goldenCloud,position.x,position.y,100,50);
     ctx.restore();
}
function drawBrandAndMusicPage(){  //绘制词牌与音乐界面
	ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
    ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
	ctx.drawImage(textAppreciateFrame1,iCanvasWidth/2-textAppreciateFrame1.width/1.5,iCanvasHeight/2-textAppreciateFrame1.height/2,800,textAppreciateFrame1.height);
    ctx.drawImage(knowledgeExpBtn2,250,250,550,120);
    ctx.drawImage(knowledgeExpOutBtn,700,530,150,50);
    ctx.save();
    ctx.beginPath();
    line.x0=390;line.y0=289;
    line.x1=390;line.y1=369;
    style.fillColor="#ef4926";
    style.lineWidth="5";
    drawLine(ctx,line,style,true);
    ctx.beginPath();
    style.lineWidth="2";
    line.x0=382;line.y0=369;
    line.x1=398;line.y1=369;
    drawLine(ctx,line,style,true);
    line.x1=390;line.y1=375;
    drawLine(ctx,line,style,true);
    line.x0=398;line.y0=369;
    drawLine(ctx,line,style,true);
    ctx.closePath();
    ///////第一个箭头
    ctx.beginPath();
    line.x0=640;line.y0=325;
    line.x1=640;line.y1=245;
    style.lineWidth="5";
    drawLine(ctx,line,style,true);
    ctx.beginPath();
    style.lineWidth="2";
    line.x0=648;line.y0=245;
    line.x1=632;line.y1=245;
    drawLine(ctx,line,style,true);
    line.x1=640;line.y1=239;
    drawLine(ctx,line,style,true);
    line.x0=632;line.y0=245;
    drawLine(ctx,line,style,true);
    ctx.closePath();
    ///////////第二个箭头
    var texts="词牌名介绍";
    text.x=380;
    text.y=385;
    style.fontSize="20";
    style.fontFamily="微软雅黑";
    style.fillColor="black";
    for(var i=0;i<texts.length;i++){
       text.text=texts[i];
       drawText(ctx,text,style,true);
       text.y+=25;
    }
    texts="韵律欣赏";
    text.x=630;
    text.y=135;
    style.fontSize="20";
    style.fontFamily="微软雅黑";
    style.fillColor="black";
    for(var i=0;i<texts.length;i++){
       text.text=texts[i];
       drawText(ctx,text,style,true);
       text.y+=25;
    }
    ctx.restore();
}
function drawBrandPage(){
    ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
    ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
	ctx.drawImage(textAppreciateFrame1,iCanvasWidth/2-textAppreciateFrame1.width/1.2,iCanvasHeight/2-textAppreciateFrame1.height/2,1000,textAppreciateFrame1.height);
    ctx.drawImage(bookmark1,100,100);
    ctx.drawImage(bookmark2,390,100);
    ctx.drawImage(bookmark3,680,100);
    ctx.drawImage(knowledgeExpOutBtn,125,530,150,50);
    ctx.save();
    var texts="满江红";
    text.x=215;text.y=265;
    style.fontSize="45";
    style.fillColor="black";
    for(var i=0;i<texts.length;i++){
    	text.text=texts[i];
    	drawText(ctx,text,style,true);
    	text.y+=60;
    }
    texts="虞美人";
    text.x=505;text.y=265;
    for(var i=0;i<texts.length;i++){
    	text.text=texts[i];
    	drawText(ctx,text,style,true);
    	text.y+=60;
    }
    texts="永遇乐";
    text.x=790;text.y=265;
    for(var i=0;i<texts.length;i++){
    	text.text=texts[i];
    	drawText(ctx,text,style,true);
    	text.y+=60;
    }
    ctx.restore();
}
function drawMusicPage(){  //绘制韵律欣赏页面
        ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
	    ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
		ctx.drawImage(textAppreciateFrame1,iCanvasWidth/2-textAppreciateFrame1.width/1.5,iCanvasHeight/2-textAppreciateFrame1.height/2,800,textAppreciateFrame1.height);
        ctx.drawImage(musicBtn,590,140,50,50);
        ctx.drawImage(musicBtn,590,300,50,50);
        ctx.drawImage(musicBtn,590,460,50,50);
        ctx.drawImage(bookmark4,195,100,350,120);
        ctx.drawImage(bookmark5,195,250,350,120);
        ctx.drawImage(bookmark4,195,400,350,120);
        ctx.drawImage(knowledgeExpOutBtn,715,535,150,50);
        text.text="念奴娇·赤壁怀古";
        text.x=280;
        text.y=150;
        style.fontSize="30";
        style.fillColor="black";
        drawText(ctx,text,style,true);
        text.text="知否知否";
        text.x=320;
        text.y=300;
        style.fontSize="30";
        style.fillColor="black";
        drawText(ctx,text,style,true);
        text.text="但愿人长久";
        text.x=300;
        text.y=450;
        style.fontSize="30";
        style.fillColor="black";
        drawText(ctx,text,style,true);
}
/////////////////以上为页面绘制函数

function onMusicPageDown(event){  //韵律欣赏页面鼠标事件
        point.x=event.clientX;
	    point.y=event.clientY;
	    windowToCanvas(canvas,point);
	    console.log("x:"+point.x+" y:"+point.y);
	    if(point.x>=595&&point.x<=630&&point.y>=140&&point.y<=188){  //念奴娇
	    	canvas.style.cursor="pointer";
	    	if(musicFlag1==false){
	    		audio1.play();
	    		musicFlag1=true;
	    	}
	    	else{
	    		audio1.pause();
	    		musicFlag1=false;
	    	} 	
	    }
	    else if(point.x>=595&&point.x<=630&&point.y>=300&&point.y<=345){  //知否
	    	canvas.style.cursor="pointer";
	    	if(musicFlag2==false){
	    		audio2.play();
	    		musicFlag2=true;
	    	}
	    	else{
	    		audio2.pause();
	    		musicFlag2=false;
	    	}
	    }
	    else if(point.x>=595&&point.x<=630&&point.y>=460&&point.y<=505){ //但愿人长久
            canvas.style.cursor="pointer";
            if(musicFlag3==false){
	    		audio3.play();
	    		musicFlag3=true;
	    	}
	    	else{
	    		audio3.pause();
	    		musicFlag3=false;
	    	}
	    }
	    else if(point.x>=730&&point.x<=860&&point.y>=530&&point.y<=570){  //返回
            canvas.style.cursor="pointer";
            audio1.pause();
            audio2.pause();
            audio3.pause();
            musicFlag1=false;
            musicFlag2=false;
            musicFlag3=false;
            audio1.currentTime=0;
            audio2.currentTime=0;
            audio3.currentTime=0;
            canvas.removeEventListener("mousedown",onMusicPageDown);
            canvas.removeEventListener("mousemove",onMusucPageMove);
            drawBrandAndMusicPage();
            canvas.addEventListener("mousedown",onBrandAndMusicPageDown);
            canvas.addEventListener("mousemove",onBrandAndMusicPageMove);
	    } 
	    else{
             canvas.style.cursor="default";
	    }
}
function onMusucPageMove(event){ //韵律欣赏页面鼠标事件
        point.x=event.clientX;
	    point.y=event.clientY;
	    windowToCanvas(canvas,point);
	  //  console.log("x:"+point.x+" y:"+point.y);
	   if(point.x>=595&&point.x<=630&&point.y>=140&&point.y<=188){  //念奴娇
	    	canvas.style.cursor="pointer";
	    	//audio1.play();
	    }
	    else if(point.x>=595&&point.x<=630&&point.y>=300&&point.y<=345){  //知否
	    	canvas.style.cursor="pointer";
	    }
	    else if(point.x>=595&&point.x<=630&&point.y>=460&&point.y<=505){ //但愿人长久
            canvas.style.cursor="pointer";
	    }
	    else if(point.x>=730&&point.x<=860&&point.y>=530&&point.y<=570){  //返回
	    	canvas.style.cursor="pointer";
	    }
	    else{
             canvas.style.cursor="default";
	    }
}
function onBrandPageDown(event){  //词牌名介绍界面
       point.x=event.clientX;
	   point.y=event.clientY;
	   windowToCanvas(canvas,point);
	   console.log("x:"+point.x+" y:"+point.y);
	   if(brandFlag==true){
	   	  drawBrandPage();
	   	  brandFlag=false;
	   }
	   if(point.x>=190&&point.x<=285&&point.y>=215&&point.y<=470&&brandFlag==false){  //满江红
           canvas.style.cursor="pointer";
           size.w=bookmark1.width;
           size.h=bookmark1.height;
           biggerWidth=size.w+100;
           biggerHeight=size.h+100;
           bookmarkBigger(1,biggerWidth,biggerHeight);
	   }
	   else if(point.x>=490&&point.x<=565&&point.y>=215&&point.y<=470&&brandFlag==false){  //虞美人
           canvas.style.cursor="pointer";
           size.w=bookmark2.width;
           size.h=bookmark2.height;
           biggerWidth=size.w+100;
           biggerHeight=size.h+100;
           bookmarkBigger(2,biggerWidth,biggerHeight);
	   }
	   else if(point.x>=775&&point.x<=850&&point.y>=215&&point.y<=470&&brandFlag==false){  //永遇乐
           canvas.style.cursor="pointer";
           size.w=bookmark3.width;
           size.h=bookmark3.height;
           biggerWidth=size.w+100;
           biggerHeight=size.h+100;
           bookmarkBigger(3,biggerWidth,biggerHeight);
	   }
	   else if(point.x>=165&&point.x<=240&&point.y>=528&&point.y<=566&&brandFlag==false){  //退出
           canvas.style.cursor="pointer";
           canvas.removeEventListener("mousedown",onBrandPageDown);
           canvas.removeEventListener("mousemove",onBrandPageMove);
           drawBrandAndMusicPage();
           canvas.addEventListener("mousedown",onBrandAndMusicPageDown);
           canvas.addEventListener("mousemove",onBrandAndMusicPageMove);
	   }
	   else{
           canvas.style.cursor="default";
	   }
}
function onBrandPageMove(event){
        point.x=event.clientX;
	    point.y=event.clientY;
	    windowToCanvas(canvas,point);
	    if(point.x>=190&&point.x<=285&&point.y>=215&&point.y<=470){ //满江红
           canvas.style.cursor="pointer";
	   }
	    else if(point.x>=490&&point.x<=565&&point.y>=215&&point.y<=470){ //虞美人
           canvas.style.cursor="pointer";
	    }
	    else if(point.x>=775&&point.x<=850&&point.y>=215&&point.y<=470){ //永遇乐
           canvas.style.cursor="pointer";
	    }
	    else if(point.x>=165&&point.x<=240&&point.y>=528&&point.y<=566&&brandFlag==false){  //退出
           canvas.style.cursor="pointer";
	   }
	    else{
           canvas.style.cursor="default";
	    }
}
function onBrandAndMusicPageDown(){ //词牌与音乐界面目录鼠标事件1
        point.x=event.clientX;
	    point.y=event.clientY;
	    windowToCanvas(canvas,point);
	    console.log("x:"+point.x+" y:"+point.y);
	    if(point.x>=375&&point.x<=405&&point.y>=380&&point.y<=505){  //词牌名介绍
           canvas.style.cursor="pointer";
           canvas.removeEventListener("mousedown",onBrandAndMusicPageDown);
           canvas.removeEventListener("mousemove",onBrandAndMusicPageMove);
           r=600;
           circleInBrandPage();
	    }
	    else if(point.x>=625&&point.x<=655&&point.y>=125&&point.y<=232){ //韵律欣赏
           canvas.style.cursor="pointer";
           canvas.removeEventListener("mousedown",onBrandAndMusicPageDown);
           canvas.removeEventListener("mousemove",onBrandAndMusicPageMove);
           r=600;
           circleInMusicPage();
	    }
	    else if(point.x>=720&&point.x<=840&&point.y>=520&&point.y<=570){  //返回
           canvas.style.cursor="pointer";
           canvas.removeEventListener("mousedown",onBrandAndMusicPageDown);
           canvas.removeEventListener("mousemove",onBrandAndMusicPageMove);
           drawKnowledgeExpandCatalogue();
           canvas.addEventListener("mousedown",onKnowledgeExpandDown);
           canvas.addEventListener("mousemove",onKnowledgeExpandMove);
	    }
	    else{
           canvas.style.cursor="default";
	    }
}
function onBrandAndMusicPageMove(){ //词牌与音乐界面目录鼠标事件1
        point.x=event.clientX;
	    point.y=event.clientY;
	    windowToCanvas(canvas,point);
	    if(point.x>=375&&point.x<=405&&point.y>=380&&point.y<=505){  //词牌名介绍
            canvas.style.cursor="pointer";
	    }
	    else if(point.x>=625&&point.x<=655&&point.y>=125&&point.y<=232){  //韵律欣赏
            canvas.style.cursor="pointer";  
	    }
	    else if(point.x>=720&&point.x<=840&&point.y>=520&&point.y<=570){  //返回
	    	canvas.style.cursor="pointer";
	    }
	    else{
	    	canvas.style.cursor="default";
	    }
}
function onKnowledgeExpandDown(){  //知识拓展第一个界面的鼠标事件
        point.x=event.clientX;
	    point.y=event.clientY;
	    windowToCanvas(canvas,point);
	    console.log("x:"+point.x+" y:"+point.y);
	    if(point.x>=310&&point.x<=495&&point.y>=130&&point.y<=175){ //词牌名与音乐 
            canvas.style.cursor="pointer";
            canvas.removeEventListener("mousedown",onKnowledgeExpandDown);
            canvas.removeEventListener("mousemove",onKnowledgeExpandMove);
            drawBrandAndMusicPage();
            canvas.addEventListener("mousedown",onBrandAndMusicPageDown);
            canvas.addEventListener("mousemove",onBrandAndMusicPageMove);  
        }
        else if(point.x>=470&&point.x<=595&&point.y>=280&&point.y<=325){ //两大流派
            canvas.style.cursor="pointer";
            canvas.removeEventListener("mousedown",onKnowledgeExpandDown);
            canvas.removeEventListener("mousemove",onKnowledgeExpandMove);
            drawTwoFactionPage();
            canvas.addEventListener("mousedown",onTwoFactionDown);
            canvas.addEventListener("mousemove",onTwoFactionMove);
        } 
        else if(point.x>=623&&point.x<=763&&point.y>=432&&point.y<=475){ //与词人互动
            canvas.style.cursor="pointer";
            canvas.removeEventListener("mousedown",onKnowledgeExpandDown);
            canvas.removeEventListener("mousemove",onKnowledgeExpandMove);
            r=600;
            animateFlag=true;
            positionSu={x0:320,y0:265};
            circleInInteractPage();
        }
        else if(point.x>=745&&point.x<=850&&point.y>=135&&point.y<=180){  //返回
            canvas.style.cursor="pointer";
            canvas.removeEventListener("mousedown",onKnowledgeExpandDown);
            canvas.removeEventListener("mousemove",onKnowledgeExpandMove);
            drawCatalogue();
            canvas.addEventListener("mousedown",onCatalogueMouseDown);
            canvas.addEventListener("mousemove",onCatalogueMouseMove);  
        }
        else{
        	canvas.style.cursor="default";
        }
}
function onKnowledgeExpandMove(){
		point.x=event.clientX;
	    point.y=event.clientY;
	    windowToCanvas(canvas,point);
        if(point.x>=310&&point.x<=495&&point.y>=130&&point.y<=175){  //词牌名与音乐 
            canvas.style.cursor="pointer";
            ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
            drawKnowledgeExpandCatalogue();
            cloudPosition.x=520;
            cloudPosition.y=120;
            drawGoldenCloud(cloudPosition);
            text.text="词牌名与音乐";
	        text.x=300;
	        text.y=130;
	        style.fillColor="black";
	        style.fontSize="35";
	        style.fontFamily="华文行楷";
	        drawText(ctx,text,style,true); 
	        ctx.drawImage(knowledgeExpBtn,250,150,250,100);
        }
        else if(point.x>=470&&point.x<=595&&point.y>=280&&point.y<=325){  //两大流派
            canvas.style.cursor="pointer";
            ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
            drawKnowledgeExpandCatalogue();
            cloudPosition.x=630;
            cloudPosition.y=260;
            drawGoldenCloud(cloudPosition);
            ctx.drawImage(knowledgeExpBtn,400,300,250,100);
            text.text="两大流派";
	        text.x=480;
	        text.y=285;
	        style.fillColor="black";
	        style.fontSize="35";
	        style.fontFamily="华文行楷";
	        drawText(ctx,text,style,true);        
        }
        else if(point.x>=623&&point.x<=763&&point.y>=432&&point.y<=475){ //与词人互动
            canvas.style.cursor="pointer";
            canvas.style.cursor="pointer";
            ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
            drawKnowledgeExpandCatalogue();
            cloudPosition.x=795;
            cloudPosition.y=415;
            drawGoldenCloud(cloudPosition);
            ctx.drawImage(knowledgeExpBtn,550,450,250,100);
	        text.text="与词人互动";
	        text.x=610;
	        text.y=435;
	        style.fillColor="black";
	        style.fontSize="35";
	        style.fontFamily="华文行楷";
	        drawText(ctx,text,style,true);
        }
        else if(point.x>=745&&point.x<=850&&point.y>=135&&point.y<=180){  //返回
            canvas.style.cursor="pointer";
        }
        else{
        	canvas.style.cursor="default";
        	ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
            drawKnowledgeExpandCatalogue();
        }
}
knowledgeExpBtn.onload=function(){}
goldenCloud.onload=function(){}
knowledgeExpBtn2.onload=function(){}
bookmark1.onload=function(){}
bookmark2.onload=function(){}
bookmark3.onload=function(){}
bookmark4.onload=function(){}
bookmark5.onload=function(){}
brand1.onload=function(){}
brand2.onload=function(){}
brand3.onload=function(){}
knowledgeExpOutBtn.onload=function(){}
musicBtn.onload=function(){}
purpleBtn.onload=function(){}
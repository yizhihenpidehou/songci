var audio4=document.getElementById("audio4");
wordExplainBtn=new Image();
translateBtn=new Image();
emotionBtn=new Image();
textAppreciateFrame1=new Image();
textAppreciateFrame2=new Image();
returnBtn=new Image();
wordExplainBtn.src="img/textAppreciate/wordExplainBtn.png";
translateBtn.src="img/textAppreciate/translateBtn.png";
emotionBtn.src="img/textAppreciate/emotionBtn.png";
textAppreciateFrame1.src="img/textAppreciate/textAppreciateFrame1.png";
textAppreciateFrame2.src="img/textAppreciate/textAppreciateFrame2.png";
returnBtn.src="img/textAppreciate/returnBtn.png";
text1="大江东去,浪淘尽,千古风流人物.故垒西边,人道是,三国周郎赤壁.乱石穿空,惊涛拍岸,卷起千堆雪.江山如画,一时多少豪杰.";
text2="遥想公瑾当年,小乔初嫁了,雄姿英发.羽扇纶巾,谈笑间,樯橹灰飞烟灭.故国神游,多情应笑我,早生华发.人生如梦,一尊还酹江月.";
var alpha2=0,r=0,g=0,b=0;
var countRen=0;
var musicFlag4 = false;
function circleIn(){  //页面进入动画
    ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
    ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
	ctx.drawImage(catalogueFrame,iCanvasWidth/2-textAppreciateFrame1.width/1.5,iCanvasHeight/2-textAppreciateFrame1.height/2,800,textAppreciateFrame1.height);
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
       setTimeout(circleIn,20);
    }  
    else{
    	drawTextAppreciatePage();
    	canvas.addEventListener("mousedown",onTextAppreciatePageDown);
        canvas.addEventListener("mousemove",onTextAppreciatePageMove);
    }
}
function ifNeed1(a){
    var flag=false;//判断第一部分哪些字需要标红
	switch(a){
		case '淘':flag=true;break;
		case '风':flag=true;break;
		case '流':flag=true;break;
		case '人':flag=true;break;
		case '物':flag=true;break;
		case '故':flag=true;break;
		case '垒':flag=true;break;
		case '周':flag=true;break;
		case '郎':flag=true;break;
		case '雪':flag=true;break;
		default:flag=false;break;
	}
	if(a=='人'){
		countRen++;
	}
	if(countRen==2&&a=='人'){
		flag=false;
	//	console.log(flag+" cr2"+a);
		countRen=0;
	}
	return flag;
}
function ifNeed2(a){
    var flag=false;//判断第二部分哪些字需要标红
	switch(a){
		case '遥':flag=true;break;
		case '想':flag=true;break;
		case '雄':flag=true;break;
		case '姿':flag=true;break;
		case '英':flag=true;break;
		case '发':flag=true;break;
		case '羽':flag=true;break;
		case '扇':flag=true;break;
		case '纶':flag=true;break;
		case '巾':flag=true;break;
		case '樯':flag=true;break;
		case '橹':flag=true;break;
		case '故':flag=true;break;
		case '国':flag=true;break;
		case '神':flag=true;break;
		case '游':flag=true;break;
		case '华':flag=true;break;
		case '一':flag=true;break;
		case '尊':flag=true;break;
		case '还':flag=true;break;
		case '酹':flag=true;break;
		case '江':flag=true;break;
		case '月':flag=true;break;
		default:flag=false;break;
	}
	return flag;
}
function textFadeIn(){  //文字淡入
	if(alpha2<1){
	   ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
       ctx.globalAlpha=1;
       ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
	   ctx.drawImage(textAppreciateFrame1,iCanvasWidth/2-textAppreciateFrame1.width/1.5,iCanvasHeight/2-textAppreciateFrame1.height/2,800,textAppreciateFrame1.height);
       ctx.drawImage(returnBtn,210,120,150,50);
       ctx.globalAlpha=alpha2;
       drawWordExplainText();
       alpha2+=0.2;
        setTimeout(textFadeIn,100);
	}
	else{
	   ctx.globalAlpha=1;
	   ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
       ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
	   ctx.drawImage(textAppreciateFrame1,iCanvasWidth/2-textAppreciateFrame1.width/1.5,iCanvasHeight/2-textAppreciateFrame1.height/2,800,textAppreciateFrame1.height);
       ctx.drawImage(returnBtn,210,120,150,50);
       drawWordExplainText();
       canvas.addEventListener("mousedown",onTextAppreciatePageDown2);
       canvas.addEventListener("mousemove",onTextAppreciatePageMove2);
    }
}
function onTextAppreciatePageMove2(){ //字词释义点击事件
    point.x=event.clientX;
    point.y=event.clientY;
    windowToCanvas(canvas,point);
    if(point.x>=548&&point.x<=628&&point.y>=136&&point.y<=176){ //赤壁
        canvas.style.cursor="pointer";
    }
    else if(point.x>=428&&point.x<=458&&point.y>=212&&point.y<=242){ //淘
        canvas.style.cursor="pointer";
    }
    else if(point.x>=570&&point.x<=685&&point.y>=210&&point.y<=242){  //风流人物
        canvas.style.cursor="pointer";
    }
    else if(point.x>=703&&point.x<=763&&point.y>=212&&point.y<=242){  //故垒
    	canvas.style.cursor="pointer";
    }
    else if(point.x>=400&&point.x<=455&&point.y>=252&&point.y<=288){  //周郎
    	canvas.style.cursor="pointer";
    }
    else if(point.x>=370&&point.x<=400&&point.y>=290&&point.y<=325){  //雪
    	canvas.style.cursor="pointer";
    }
    else if(point.x>=255&&point.x<=320&&point.y>=330&&point.y<=365){  //遥想
    	canvas.style.cursor="pointer";
    }
    else if(point.x>=620&&point.x<=740&&point.y>=330&&point.y<=365){  //雄姿英发
    	canvas.style.cursor="pointer";
    }
    else if(point.x>=765&&point.x<=855&&point.y>=330&&point.y<=365){  //羽扇纶巾
    	canvas.style.cursor="pointer";
    }
    else if(point.x>=232&&point.x<=256&&point.y>=372&&point.y<=410){ //巾
        canvas.style.cursor="pointer";
    }
    else if(point.x>=395&&point.x<=460&&point.y>=372&&point.y<=410){  //樯橹
    	canvas.style.cursor="pointer";
    }
    else if(point.x>=590&&point.x<=710&&point.y>=372&&point.y<=410){  //故国神游
    	canvas.style.cursor="pointer";
    }
    else if(point.x>=395&&point.x<=460&&point.y>=413&&point.y<=446){  //华发
    	canvas.style.cursor="pointer";
    }
    else if(point.x>=610&&point.x<=795&&point.y>=413&&point.y<=446){  //一尊还酹江月
    	canvas.style.cursor="pointer";
    }
    else if(point.x>=225&&point.x<=355&&point.y>=120&&point.y<=165){  //退出
        canvas.style.cursor="pointer";
    }
    else if(point.x>=730&&point.x<=760&&point.y>=150&&point.y<=195){  //播放音频
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
    else{
    	canvas.style.cursor="default";
    }
}
function onTextAppreciatePageDown2(){
    point.x=event.clientX;
    point.y=event.clientY;
    windowToCanvas(canvas,point);
    console.log("x:"+point.x+" y:"+point.y);
    if(point.x>=548&&point.x<=628&&point.y>=136&&point.y<=176){ //赤壁
        canvas.style.cursor="pointer";
        drawExplainRect("此指黄州赤壁,在今湖北黄冈西。");
    }
    else if(point.x>=428&&point.x<=458&&point.y>=212&&point.y<=242){ //淘
        canvas.style.cursor="pointer";
        drawExplainRect("冲洗，冲刷。");
    }
    else if(point.x>=570&&point.x<=685&&point.y>=210&&point.y<=242){  //风流人物
        canvas.style.cursor="pointer";
        drawExplainRect("指杰出的历史名人。");
    }
    else if(point.x>=703&&point.x<=763&&point.y>=212&&point.y<=242){  //故垒
    	canvas.style.cursor="pointer";
    	drawExplainRect("过去遗留下来的营垒。");
    }
    else if(point.x>=400&&point.x<=455&&point.y>=252&&point.y<=288){  //周郎
    	canvas.style.cursor="pointer";
    	drawExplainRect("指三国时吴国名将周瑜.字公瑾.吴中皆呼为周郎.");
    }
    else if(point.x>=370&&point.x<=400&&point.y>=290&&point.y<=325){  //雪
    	canvas.style.cursor="pointer";
    	drawExplainRect("比喻浪花.");
    }
    else if(point.x>=255&&point.x<=372&&point.y>=330&&point.y<=365){  //遥想
    	canvas.style.cursor="pointer";
    	drawExplainRect("形容想得很远;回忆. 公瑾即周瑜.");
    }
    else if(point.x>=620&&point.x<=740&&point.y>=330&&point.y<=365){  //雄姿英发
    	canvas.style.cursor="pointer";
    	drawExplainRect("谓周瑜体貌不凡,言谈卓绝.");
    }
    else if(point.x>=765&&point.x<=855&&point.y>=330&&point.y<=365){  //羽扇纶巾
    	canvas.style.cursor="pointer";
    	drawExplainRect("古代儒将的便装打扮,指羽毛做的扇子,青丝制成的头巾.");
    }
    else if(point.x>=232&&point.x<=256&&point.y>=372&&point.y<=410){ //巾
        canvas.style.cursor="pointer";
    	drawExplainRect("古代儒将的便装打扮,指羽毛做的扇子,青丝制成的头巾.");
    }
    else if(point.x>=395&&point.x<=460&&point.y>=372&&point.y<=410){  //樯橹
    	canvas.style.cursor="pointer";
    	drawExplainRect("强大之敌,指曹军.");
    }
    else if(point.x>=590&&point.x<=710&&point.y>=372&&point.y<=410){  //故国神游
    	canvas.style.cursor="pointer";
    	drawExplainRect("这里代指曹操的水军战船.");
    }
    else if(point.x>=395&&point.x<=460&&point.y>=413&&point.y<=446){  //华发
    	canvas.style.cursor="pointer";
    	drawExplainRect("故国:这里指旧地,当年的赤壁战场.神游:于梦境中游历.");
    }
    else if(point.x>=610&&point.x<=795&&point.y>=413&&point.y<=446){  //一尊还酹江月
    	canvas.style.cursor="pointer";
    	drawExplainRect("这里指洒酒酬月,寄托自己的感情.尊通“樽”,酒杯.");
    }
    else if(point.x>=225&&point.x<=355&&point.y>=120&&point.y<=165){  //退出
        canvas.style.cursor="pointer";
        drawTextAppreciatePage();
        canvas.removeEventListener("mousedown",onTextAppreciatePageDown2);
        canvas.removeEventListener("mousemove",onTextAppreciatePageMove2);
        canvas.addEventListener("mousedown",onTextAppreciatePageDown);
        canvas.addEventListener("mousemove",onTextAppreciatePageMove);
    }
    else if(point.x>=730&&point.x<=760&&point.y>=150&&point.y<=195){  //音频播放
        canvas.style.cursor="pointer";
    }
    else{
    	canvas.style.cursor="default";
    }
}
function drawExplainRect(textt){
	ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
	ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
	ctx.drawImage(textAppreciateFrame1,iCanvasWidth/2-textAppreciateFrame1.width/1.5,iCanvasHeight/2-textAppreciateFrame1.height/2,800,textAppreciateFrame1.height);
    ctx.drawImage(returnBtn,210,120,150,50);
	drawWordExplainText();
    ctx.save();
    var len=0
    if(textt.length<=10){
       len=ctx.measureText(textt).width*3+30;
    }
    else{
       len=ctx.measureText(textt).width*3-30;
    }
    rect.width=len;
    rect.height=50;
    rect.x=iCanvasWidth/2-rect.width/2;
    rect.y=485;
    style.fillColor="#f3e4c2";
    style.fontFamily="楷体";
    style.lineWidth=5;
    text.text=textt;
    text.x=rect.x+20;
    text.y=rect.y+5;
    ctx.beginPath();
    drawRect(ctx,rect,style,true);
    ctx.closePath();
    style.fontSize="25";
    style.fillColor="black";
    drawText(ctx,text,style,true);
    ctx.restore();
}
function drawTextAppreciatePage(){  //绘制基本要素
	ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
	ctx.drawImage(catalogueFrame,iCanvasWidth/2-textAppreciateFrame1.width/1.5,iCanvasHeight/2-textAppreciateFrame1.height/2,800,textAppreciateFrame1.height);
	ctx.drawImage(wordExplainBtn,210,160,200,150);
	ctx.drawImage(translateBtn,210,300,200,150);
	ctx.drawImage(emotionBtn,210,440,200,150);
	ctx.drawImage(returnBtn,710,128,150,50);
}
function drawWordExplainText(){  //绘制课文内容
	var count=0;
    ctx.drawImage(musicBtn,720,150,50,50);
	ctx.save();
	style.fillColor="rgba("+r+","+g+","+b+","+alpha2+")";
	textt="念奴娇·赤壁怀古"
	text.x=390;
	text.y=135;
	style.fontFamily="华文行楷";
	style.fontSize="40";	
    for(var i=0;i<textt.length;i++){  
    	if(textt[i]=='赤'||textt[i]=='壁'){
    		r=255;
    		style.fillColor="rgba("+r+","+g+","+b+","+alpha2+")";
    	}
    	else{
    		r=0;
    		style.fillColor="rgba("+r+","+g+","+b+","+alpha2+")";
    	}
    	text.text=textt[i];
    	drawText(ctx,text,style,true);
    	text.x+=40;
    }
	////////////////////词题
	text.text="宋  苏轼"
	text.x=500;
	text.y=185;
	style.fontFamily="华文行楷";
	style.fontSize="25";
//	style.fillColor="rgba("+r+","+g+","+b+","+alph2+")";
	drawText(ctx,text,style,true);
	//////////////////////////////////作者和朝代
	text.text="    ";
	text.x=260;
	text.y=215;
	style.fontFamily="华文行楷";
	style.fontSize="30";
	for(var i=0;i<text1.length;i++){
		if(ifNeed1(text1[i])){
			//console.log("text1 true "+text1[i]);
			r=255;
			style.fillColor="rgba("+r+","+g+","+b+","+alpha2+")";
		}
		else{
			r=0;
		//	console.log(text1[i]+" r=0");
			style.fillColor="rgba("+r+","+g+","+b+","+alpha2+")";
		}
		if((i%20==0&&i!=0)||i==text1.length-1){	
			text.text=text1[i];
			drawText(ctx,text,style,true);
			//text.x+=30;
			text.x=230;
		    text.y+=40;
		}
		else{
            text.text=text1[i];
            drawText(ctx,text,style,true);
            text.x+=28;
            
		}
	}
	/////////////////词第一片
	text.text="";
	text.x=260;
	for(var i=0;i<text2.length;i++){
		if(ifNeed2(text2[i])){
			r=255;
			style.fillColor="rgba("+r+","+g+","+b+","+alpha2+")";
		}
		else{
			r=0;
			style.fillColor="rgba("+r+","+g+","+b+","+alpha2+")";
		}
		if((i%20==0&&i!=0)||i==text2.length-1){
			text.text=text2[i];
			drawText(ctx,text,style,true);
			text.x=230;
		    text.y+=40;
		}
		else{
            text.text=text2[i];
            drawText(ctx,text,style,true);
            text.x+=28;
            
		}
	}
	//词的第二片
	ctx.restore();
}

function onTextAppreciatePageMove(){
	point.x=event.clientX;
    point.y=event.clientY;
    windowToCanvas(canvas,point);
    if(point.x>=250&&point.x<=370&&point.y>=215&&point.y<=250){
         canvas.style.cursor="pointer";
    }
    else if(point.x>=250&&point.x<=370&&point.y>=355&&point.y<=390){
         canvas.style.cursor="pointer";
    }
    else if(point.x>=250&&point.x<=370&&point.y>=490&&point.y<=530){
         canvas.style.cursor="pointer";
    }
    else if(point.x>=710&&point.x<=860&&point.y>=130&&point.y<=175){
         canvas.style.cursor="pointer";
    }
    else{
         canvas.style.cursor="default";
    }
}
function onTextAppreciatePageDown(){
	point.x=event.clientX;
    point.y=event.clientY;
    windowToCanvas(canvas,point);
    console.log("x:"+point.x+" y:"+point.y);
    if(point.x>=250&&point.x<=370&&point.y>=215&&point.y<=250){  //字词解释
         canvas.style.cursor="pointer";        
         canvas.removeEventListener("mousedown",onTextAppreciatePageDown);
         canvas.removeEventListener("mousemove",onTextAppreciatePageMove);
         textFadeIn();

    }
    else if(point.x>=250&&point.x<=370&&point.y>=355&&point.y<=390){  //译文分析
         canvas.style.cursor="pointer";         
         canvas.removeEventListener("mousedown",onTextAppreciatePageDown);
         canvas.removeEventListener("mousemove",onTextAppreciatePageMove);
         leftIn();
    }
    else if(point.x>=250&&point.x<=370&&point.y>=490&&point.y<=530){  //情感赏析
         canvas.style.cursor="pointer";
         canvas.removeEventListener("mousedown",onTextAppreciatePageDown);
         canvas.removeEventListener("mousemove",onTextAppreciatePageMove);
         alpha2=0;
         textsFadeIn2();
         canvas.addEventListener("mousedown",onEmotionDown);
         canvas.addEventListener("mousemove",onEmotionMove);
    }
    else if(point.x>=710&&point.x<=860&&point.y>=130&&point.y<=175){  //返回
         canvas.style.cursor="pointer";
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
wordExplainBtn.onload=function(){}
translateBtn.onload=function(){}
emotionBtn.onload=function(){}
textAppreciateFrame1.onload=function(){}
textAppreciateFrame2.onload=function(){}
returnBtn.onload=function(){}
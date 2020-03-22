function textsFadeIn2(){
     ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
     if(alpha2<1){
        ctx.globalAlpha=1;
        ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
        ctx.drawImage(textAppreciateFrame1,iCanvasWidth/2-textAppreciateFrame1.width/1.5,iCanvasHeight/2-textAppreciateFrame1.height/2,800,textAppreciateFrame1.height);
        ctx.drawImage(returnBtn,210,120,150,50);
        ctx.globalAlpha=alpha2;
        drawEmotionText();
        alpha2+=0.2;
        setTimeout(textsFadeIn2,50);
     }
     else{
         alpha2=1;
         ctx.globalAlpha=1;
         ctx.drawImage(mainBackground,0,0,iCanvasWidth,iCanvasHeight);
         ctx.drawImage(textAppreciateFrame1,iCanvasWidth/2-textAppreciateFrame1.width/1.5,iCanvasHeight/2-textAppreciateFrame1.height/2,800,textAppreciateFrame1.height);
         ctx.drawImage(returnBtn,210,120,150,50);
         drawEmotionText();
     } 
}
function drawEmotionText(){
     var texts="    本词表现了苏轼复杂矛盾的思想。苏轼深受儒、道、佛三家思想影响，他一方面仰慕屈原、诸葛亮、陆贽等经世济时的人物，希望尊主忧国，渴望建功立业；一方面又酷爱陶潜，追慕老庄，在险恶的政治逆境中希望能够保持超然物外的旷达态度。并且又跟佛家亲密往来，精通禅学。这首词中壮丽江山、英雄业绩，既激起了他豪迈奋发之情，也加深了他的思想矛盾，使他产生“人生如梦”的感慨。这首词具有感奋和感伤的双重色彩。苏轼的感伤是由于建功立业的激切热望不能实现而萌发的，我们应当更多地体会他对事业对人生的激情和思索，而不是伤感。“人生如梦”反过来也可以激发我们对人生的追求，这也正是这首词的理趣所在。从语言上体会这首词，也是“奋”压倒了“伤”。意境壮阔，风格豪放，反映了苏轼的宽阔胸襟。";
     text.text="";
     text.x=230;
     text.y=180;
     style.fontSize=25;
     style.fontFamily="楷体";
     style.fillColor="black";
  //   console.log("emo"+style.fillColor);
     for(var i=0;i<texts.length;i++){
         if((i%25==0&&i!=0)||i==texts.length-1){
         	text.text+=texts[i];
          console.log("text: ",text.text);
         	drawText(ctx,text,style,true);
         	text.y+=30;
         	text.text="";
         }
         else{
         	text.text+=texts[i];
         }
     }
}
function onEmotionMove(event){
	  point.x=event.clientX;
    point.y=event.clientY;
    windowToCanvas(canvas,point);
    if(point.x>=210&&point.x<=360&&point.y>=120&&point.y<=165){  //返回
    	canvas.style.cursor="pointer";
    }
    else {
    	canvas.style.cursor="default";
    }
}
function onEmotionDown(event){
	point.x=event.clientX;
    point.y=event.clientY;
    windowToCanvas(canvas,point);
    console.log("x:"+point.x+" y:"+point.y);
    if(point.x>=210&&point.x<=360&&point.y>=120&&point.y<=165){
    	 canvas.style.cursor="pointer";
       canvas.removeEventListener("mousedown",onEmotionDown);
       canvas.removeEventListener("mousemove",onEmotionMove);
       drawTextAppreciatePage();
       canvas.addEventListener("mousedown",onTextAppreciatePageDown);
       canvas.addEventListener("mousemove",onTextAppreciatePageMove);
    }
    else {
    	canvas.style.cursor="default";
    }
}
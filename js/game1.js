/*第一关：对课文进行填词
第二关：对李清照的一剪梅·红藕香残玉簟秋
第三关：出现乱序框，然后排成正序*/
var ansSpriteArr=[];//存放的飘落答案精灵的数组
var ansArr=[];//存放答案的数组
var round=1; //记录进入第几关
var round1Que=['大江___','千古__人物','故垒___','三国__赤壁','__千堆雪','江山__','__公瑾当年','__纶巾','__神游','人生__'],
round1Ans1=['西去','东去','南去','北去'],
round1Ans2=['风流','风骚','风云'],
round1Ans3=['东边','西边','南边','北边'],
round1Ans4=['诸葛','周郎','曹操','周瑜'],
round1Ans5=['拍起','卷起','激起','吹起'],
round1Ans6=['如春','如画'，'如花','如景'],
round1Ans7=['遥望','遥想','遥看'],
round1Ans8=['羽衣','羽扇','羽帽'],
round1Ans9=['故地','故国','故乡'],
round1Ans10=['如歌','如梦','如画'];
var round2Que=['_藕香残玉簟秋','轻_罗裳','独上_舟','_中谁寄锦书来','_字回时','月满_楼','花自飘零_自流','_处闲愁','此_无计可消除','才下_头'],
round2Ans1=['绿','红','青','黄'],
round2Ans2=['拍','解','摸','触'],
round2Ans3=['蓝','兰','轻','小'],
round2Ans4=['关','云','战','园'],
round2Ans5=['燕','雁','鸟','雀'],
round2Ans6=['北','西','南','东'],
round2Ans7=['江','水','流'],
round2Ans8=['三','两','一'],
round2Ans9=['意','情','感'],
round2Ans10=['心','眉','情'];
var round3Que=["人间如梦","多情应笑我","谈笑间,","争渡,争渡","多情自古伤离别"],
round3Ans=["一尊还酹江月","早生华发","樯橹灰飞烟灭","惊起一滩鸥鹭","更那堪冷落清秋节"];
var score=0;
var roundQueNumber=[0,10,10,5]; //记录每关的题目数量
var queFlag=1; //记录当前关卡到达第几题了
var ansPainter={  //答案绘制器
	paint:function (sprite,ctx) {
		/*绘制边框*/
    text.text=sprite.name;
		/*绘制答案*/
	}
},
goUp={  //答案向上飘行为
	angle:Math.PI/5,
    execute:function(sprite,ctx){
    	this.angle=Math.random()*Math.PI;
    	sprite.top-=sprite.velocityY*Math.cos(this.angle);
    	sprite.left+=sprite.velocityX*Math.sin(this.angle);
    }
};
mouseDown={  //被点击到的行为,答案图标会变大一点
	execute:function(sprite,ctx){
		sprite.width+=20;
		sprite.height+=10;
    ans=eval("round"+round+"Ans"+queFlag);//获取当前关卡及对应题目答案数组;
    if(round==1){
        if(queFlag==10){
          round++;       
          cancelAnimationFrame(game1);//暂时停止游戏
          drawNextRound(); //绘制出现下一关的
        }
        else{
          queFlag++;
        }
      }
      else if(round==2){
        if(queFlag==10){
          round++;
          cancelAnimationFrame(game1);
          drawNextRound();
        }
        else{
          queFlag++;
        }
      }
      else if(round==3){
        if(queFlag==5){
          cancelAnimationFrame(game1);
          endGame();
        }
        else{
          queFlag++;
        }
      }
    if(sprite.name==ans[1]){
       /*选对答案，积分加5，若题目全出现了，则进入下一关，若已经是最后一关则出现累计积分；*/
       score+=5;
       queFlag=1;
    }
	}
}
function drawNextRound(){  //两关之间的过渡
   /*绘制边框*/
   /*显示积分*/
}
function endGame(){  //绘制结束游戏的界面

}
function drawGameDescriptionPage(){ //绘制游戏1说明界面
     /*绘制背景、开始游戏按钮、退出按钮*/
     /*说明边框和文字从小到大动画出现*/
}
function drawReadyGo(readyFlag,goFlag){  //绘制Ready Go动画
   if(readyFlag){
      /*先横向出现Ready?*/
      if(readyPosition.x>0){
      	readyPosition.x-=20;
      	/*绘制Ready字样与游戏1背景*/
      }
      else{
      	 readyFlag=false;
      	 goFlag=true;
      	 goPosition.x=1080;
      }
      requestNextAnimiationFrame(drawReadyGo);
   }   
      
   else if(goFlag){
     	/*出现Go!*/
      if(goPosition.x>0){
      	goPosition.x-=20;
      	drawGameDescriptionPage();
      	/*绘制Go!字样与游戏1背景*/
      }
      else{
      	 readyFlag=false;
      	 goFlag=true;
      }
      requestNextAnimiationFrame(drawReadyGo);
   }
   
   else{  
   	/*drawGameBasciElement()*/
   	 game1();//进入游戏模式
   }
   
}
function game1(){  //进入游戏1

   /*drawGameBasciElement()*/
   /*遍历精灵数组,若答案精灵已经飘出canvas范围，则从数组里删除*/
   /*制造精灵*/
   /*如果是1-3关，则绘制不同的答案精灵*/

   requestNextAnimiationFrame(game1);
}
function makeAnsSprites(){ //绘制答案精灵
     ans=eval("round"+round+"Ans1");  
     for(var i=0;i<ans.length;i++){
         var texts=ans[i];
         ansSprite =new Sprite(texts,ansPainter,[goUp,mouseDown]);
         ansSprite.velocityX=10;
         ansSprite.velocityY=parseInt(Math.PI*5)+1;
         ansSprite.left=Math.random()*canvas.width;
         ansSprite.top=0;
         ansSprite.width=60;
         ansSprite.height=50;
         ansSprite.paint(ansSprite,ctx);
         ansArr.push(ansSprite);
     }
}
function drawGameBasciElement(){ //绘制游戏1的场景基本要素
    /*绘制背景、题面边框、苏轼击鼓形象*/
    /*绘制积分条*/
}

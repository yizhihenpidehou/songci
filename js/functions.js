/*
	Functions：图形绘制方法
	buildDate：2019-10-8
	Author：zjvivi
	version：1.0
*/



// 1、变量定义
 //var canvas=document.getElementById("canvas");
 //var ctx=canvas.getContext("2d");

//图形对象定义
var circle={x:canvas.width/2,y:canvas.height/2,r:canvas.width/4,
			sAngle:0,eAngle:Math.PI*2,clockWise:false};
var style={fillColor:"blue",strokeColor:"white",fontSize:40,lineWidth:1,
		   fontFamily:"Arial",hAlign:"left",vAlign:"top"
		  };
var line={x0:canvas/2,y0:canvas/2,x1:0,y1:0};
var text={text:"hello world!",x:canvas.width/2,y:canvas.height/2};
var rect={x:0,y:0,width:100,height:100};
var curve={x0:0,y0:0,x1:100,y1:100};

//2、图形方法定义


/*
	Function：drawCircle（画圆/扇形/圆弧）
	Params：ctx对象（绘图环境对象）
			circle对象（圆心、半径、起始弧度、绘制方向）
			style对象（线宽、线条描边或填充色）
			isFill（是否填充）
	Returns：none
	Author：xxx
	version：0
*/
function drawCircle(ctx,circle,style,isFill){
  //  console.log("cir");
	ctx.save();
	ctx.arc(circle.x, circle.y, circle.r, circle.sAngle,circle.eAngle,circle.clockWise);
	ctx.lineWidth = style.lineWidth;
	if(!isFill){
		ctx.strokeStyle = style.strokeColor;
		ctx.stroke();
	}		
	else{
		ctx.fillStyle = style.fillColor;
		ctx.fill();
	}
	ctx.restore();
}

/*
	Function：drawLine（画线）
	Params：ctx对象（绘图环境对象）
			line对象（起始点坐标、终止点坐标）
			style对象（线宽、线条描边或填充色）
			isFill（是否填充）
	Returns：none
	Author：xxx
	version：0
*/
function drawLine(ctx,line,style,isFill){
	ctx.save();

	ctx.moveTo(line.x0, line.y0);
	ctx.lineTo(line.x1, line.y1);
	ctx.lineWidth = style.lineWidth;
	if(isFill){
		ctx.strokeStyle = style.fillColor;
		ctx.stroke();
	}
	ctx.restore();
}

/*
	Function：drawText（绘制文本）
	Params：ctx对象（绘图环境对象）
			text对象（文本内容、起始点坐标）
			style对象（字体大小、字体、线宽、文本描边或填充色、文本起始点位置、文本起始点坐标）
			isFill（是否填充）
	Returns：文本大小对象（宽度、高度）
	Author：xxx
	version：0
*/
function drawText(ctx,text,style,isFill){
	var textSize={};
	ctx.save();
	ctx.font = style.fontSize + "px " + style.fontFamily ;
	ctx.textAlign = style.hAlign;
	ctx.textBaseline = style.vAlign;
	ctx.lineWidth = style.lineWidth;
	ctx.translate(text.x, text.y);
	
	textSize.width=ctx.measureText(text.text).width;
	textSize.height=style.fontSize;
	
	if(isFill){
		ctx.fillStyle = style.fillColor;
		ctx.fillText(text.text, 0, 0);
	}
	else{
		ctx.strokeStyle = style.strokeColor;
		ctx.strokeText(text.text, 0, 0);
	}
	ctx.restore();

	return textSize;
}

/*
	Function：drawRect（绘制矩形）
	Params：ctx对象（绘图环境对象）
			rect对象（起始点坐标、矩形宽度、高度）
			style对象（线宽、描边或填充色）
			isFill（是否填充）
	Returns：none
	Author：xxx
	version：0
*/
function drawRect(ctx,rect,style,isFill){
	ctx.save();
	ctx.lineWidth = style.lineWidth;
	ctx.rect(rect.x, rect.y, rect.width, rect.height);
	if(isFill){
		ctx.fillStyle = style.fillColor;
	//	console.log(style.fillColor);
		ctx.fill();
	}
	else{
		ctx.strokeStyle = style.strokeColor;
		ctx.stroke();
	}
	
	ctx.restore();

}
/*
	Function：drawCurve（绘制曲线）
	Params：ctx对象（绘图环境对象）
			curve曲线对象（起始点坐标、终止点坐标）
			style对象（线宽、描边色）
			isFill（是否填充）
	Returns：none
	Author：xxx
	version：0
*/
function drawCurve(ctx,curve,style,isFill){    //绘制曲线
	
	ctx.quadraticCurveTo(curve.x0, curve.y0, curve.x1, curve.y1);
	if(isFill){
		ctx.save();
		ctx.strokeStyle=style.fillColor	;
		ctx.lineWidth=style.lineWidth;
		ctx.stroke();
		ctx.restore();
		
	}

}

/*
	Function：windowToCanvas（坐标转换）
	Params：canvas对象（canvas标记对象）
			point对象（当前鼠标点坐标x和y）
	Returns：point对象（处理后的当前鼠标点坐标）
	Author：xxx
	version：0
*/
function windowToCanvas(canvas,point){
	// 获取canvas元素的所有样式属性
	var canvasStyle=window.getComputedStyle(canvas);
	// point.x-=parseFloat(canvasStyle["margin-left"]);
	// point.y-=parseFloat(canvasStyle["margin-top"]);
	
	// 获取元素的位置属性
	var bbox=canvas.getBoundingClientRect();
	// 除去canvas在文档坐标系的左边和顶部距离
	point.x-=bbox.left;
	point.y-=bbox.top;
	
	// 除去canvas的边框宽度
	point.x-=parseFloat(canvasStyle["border-left-width"]);
	point.y-=parseFloat(canvasStyle["border-top-width"]);
	
	// 除去canvas的内边距宽度
	point.x-=parseFloat(canvasStyle["padding-left"]);
	point.y-=parseFloat(canvasStyle["padding-top"]);

	// 绘图环境和canvas的大小比例调整 
	var xRatio=canvas.width/parseFloat(canvasStyle["width"]);
	var yRatio=canvas.height/parseFloat(canvasStyle["height"]);
	
	// 从文档坐标系调整到canvas坐标系
	point.x*=xRatio;
	point.y*=yRatio;

	// 返回调整后的坐标值
	return point;

}

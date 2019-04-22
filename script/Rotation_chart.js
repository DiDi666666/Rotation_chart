// JavaScript Document
var runbox = document.getElementById('photo');
var btn1  = document.getElementById('point1');
var btn2  = document.getElementById('point2');
var btn3  = document.getElementById('point3');
var btn4  = document.getElementById('point4');
var runspeed = 1;          //轮播速度
var photowidth = 1440;
var photoheight = 720; 
runbox.scrollLeft = 0;     //向左滑动距离
function photoMove(){
	runbox.scrollLeft+=8;  //一次滑动8个像素，该值必须为图片宽的因子
	photorun = setInterval("runLeft()",runspeed);  //设置定时器，每过runspeed秒，执行一次runLeft（）
}
function runLeft(){
	if(Math.floor(runbox.scrollLeft)%photowidth==0){           //如果播完一张图片
		clearInterval(photorun);
		setTimeout("photoMove()",4000);            //停留4s
	}else{
		runbox.scrollLeft+=8;
     	if(runbox.scrollLeft >= photowidth*4){     //如果播完全部图片
	    	runbox.scrollLeft = 0;                 //跳到第一张图片，重新轮播
	    }
	}
	judgeColor();                                  //用于设置进度小圆点颜色与图片相符
}
function judgeColor(){
	var sl = Math.floor(runbox.scrollLeft);        //浏览器页面缩放后，获取的scrollLeft精度改变，可能会产生小数，使用floor转成整数
	if(sl>0 && sl<=photowidth){  
		btn2.style.backgroundColor = "#F00";       //第二张图片时，第二个小圆点变红色，其他为灰色
		btn1.style.backgroundColor = "#CCC";
		btn3.style.backgroundColor = "#CCC";
		btn4.style.backgroundColor = "#CCC";
	}else if(sl>photowidth && sl<=photowidth*2){
		btn3.style.backgroundColor = "#F00";       //第三张图片时，第三个小圆点变红色，其他为灰色
		btn2.style.backgroundColor = "#CCC";
		btn1.style.backgroundColor = "#CCC";
		btn4.style.backgroundColor = "#CCC";
	}else if(sl>photowidth*2 && sl<=photowidth*3){ 
		btn4.style.backgroundColor = "#F00";       //第四张图片时，第四个小圆点变红色，其他为灰色
		btn2.style.backgroundColor = "#CCC";
		btn3.style.backgroundColor = "#CCC";
		btn1.style.backgroundColor = "#CCC";
	}else{                                         //其他情况，第一个小圆点为红色，其他为灰色
		btn1.style.backgroundColor = "#F00";
		btn2.style.backgroundColor = "#CCC";
		btn3.style.backgroundColor = "#CCC";
		btn4.style.backgroundColor = "#CCC";
	}
}
var photorun = setInterval("runLeft()",runspeed);                 //开启计时器
btn1.onclick = function(){runbox.scrollLeft = 0;judgeColor()};    //设置点击按钮，显示相应图片
btn2.onclick = function(){runbox.scrollLeft = photowidth;judgeColor()};
btn3.onclick = function(){runbox.scrollLeft = photowidth*2;judgeColor()};
btn4.onclick = function(){runbox.scrollLeft = photowidth*3;judgeColor()};
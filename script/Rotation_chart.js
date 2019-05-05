// JavaScript Document

var runbox = document.getElementById('photo');
var btn1  = document.getElementById('point1');
var btn2  = document.getElementById('point2');
var btn3  = document.getElementById('point3');
var btn4  = document.getElementById('point4');
var runtime = 1;  //轮播速度
var photowidth = 1440;
var photoheight = 720; 
runbox.scrollLeft = 0;  //向左滑动距离
var photorun;
function photoMove(){
	runbox.scrollLeft+=8;
	photorun = setInterval("runLeft()",runtime); 
}
function runLeft(){
	if(Math.floor(runbox.scrollLeft)%photowidth==0){  //如果播完一张图片
		clearInterval(photorun);
		setTimeout("photoMove()",4000);   //停留4.5s
	}else{
		runbox.scrollLeft+=8;
     	if(runbox.scrollLeft >= photowidth*4){   //如果播完全部图片
	    	runbox.scrollLeft = 0;       //跳到第一张图片，重新轮播
	    }
	}
	judgeColor();
}
function judgeColor(){
	var sl = Math.floor(runbox.scrollLeft);
	if(sl>0 && sl<=photowidth){
		btn2.style.backgroundColor = "#F00";
		btn1.style.backgroundColor = "#CCC";
		btn3.style.backgroundColor = "#CCC";
		btn4.style.backgroundColor = "#CCC";
	}else if(sl>photowidth && sl<=photowidth*2){
		btn3.style.backgroundColor = "#F00";
		btn2.style.backgroundColor = "#CCC";
		btn1.style.backgroundColor = "#CCC";
		btn4.style.backgroundColor = "#CCC";
	}else if(sl>photowidth*2 && sl<=photowidth*3){
		btn4.style.backgroundColor = "#F00";
		btn2.style.backgroundColor = "#CCC";
		btn3.style.backgroundColor = "#CCC";
		btn1.style.backgroundColor = "#CCC";
	}else{
		btn1.style.backgroundColor = "#F00";
		btn2.style.backgroundColor = "#CCC";
		btn3.style.backgroundColor = "#CCC";
		btn4.style.backgroundColor = "#CCC";
	}
}
window.onload = function(){
btn1.style.backgroundColor = "#F00";
setTimeout(photoMove,4000); //开启计时器
btn1.onclick = function(){runbox.scrollLeft = 0;judgeColor()};
btn2.onclick = function(){runbox.scrollLeft = photowidth;judgeColor()};
btn3.onclick = function(){runbox.scrollLeft = photowidth*2;judgeColor()};
btn4.onclick = function(){runbox.scrollLeft = photowidth*3;judgeColor()};
}
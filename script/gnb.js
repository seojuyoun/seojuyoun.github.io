$(function(){
   
   var gnbA=$('#gnb>li');
   var sub=$('#gnb>li>ul');

   var headerMin=$('#headerBox').height();
   var headerMax=sub.innerHeight()+headerMin;

   var state=false;
   var speed=150;

   gnbA.mouseenter(function(){
     if(!state){
		   $('#headerBox').stop().animate({height:headerMax},speed,function(){
			  sub.stop().fadeIn(speed);
		   });
		   state=true;
	 }
    $(this).address('on');
	$(this).find(sub).addClass('on');
   });  //mouseenter end

   //마우스 아웃
   gnbA.mouseleave(function(){
    $(this).removeClass('on');
    $(this).find(sub).removeClass('on');  
   });
  //마우스 아웃 주메뉴 벗어날 때 페이드효과와 높이제어
  $('#gheader').mouseleave(function(){
    sub.stop().fadeOut(speed,function(){
	   $('#headerBox').stop().animate({height:headerMin},speed);
	});
	state=false;
  });



});
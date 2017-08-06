//预加载
$(function(){
	$('#mark').css({
		width: $(window).width(),
		height: $(window).height(),
		zIndex:10000
	});
	$(document).on('touchstart', function(e) {
		e.preventDefault();
	});
	var arr = [
		'img/P5/m1.png',
		'img/P5/m2.png',
		'img/P5/m3.png',
		'img/P5/m4.png',
		'img/P5/m5.png',
		'img/P5/m6.png',
		'img/P5/m7.png',
		'img/P5/m8.png',
		'img/P5/m9.png',
		'img/P5/m10.png',
		'img/P5/men1.png',
		'img/P5/men2.png',
		'img/P5/men3.png',
		'img/P5/men4.png',
		'img/P5/men5.png',
		'img/P5/men6.png',
		'img/P5/men7.png',
		'img/P5/men8.png',
		'img/P5/men9.png',
		'img/P5/men10.png',
		'img/v1.png',
		'img/v2.png',
		'img/v3.png',
		'img/v4.png',
		'img/v5.png',
		'img/v6.png',
		'img/v7.png',
		'img/v8.png',
		'img/Assistor1.png',
		'img/Assistor2.png',
		'img/Assistor3.png',
		'img/Assistor4.png',
		'img/Assistor5.png',
		'img/Assistor6.png',
		'img/Assistor7.png',
		'img/Assistor8.png',
		'img/Assistor9.png',
		'img/Assistor10.png',
		'img/Assistor11.png',
		'img/Assistor12.png',
		'img/Assistor13.png',
		'img/Assistor14.png',
		'img/Assistor15.png',
		'img/Assistor16.png',
		'img/Assistor17.png',
		'img/diqiu/1.jpg',
		'img/diqiu/2.jpg',
		'img/diqiu/3.jpg',
		'img/diqiu/4.jpg',
		'img/diqiu/5.jpg',
		'img/diqiu/6.jpg',
		'img/diqiu/7.jpg',
		'img/diqiu/8.jpg',
		'img/diqiu/9.jpg',
		'img/diqiu/10.jpg',
		'img/diqiu/11.jpg',
		'img/diqiu/12.jpg',
		'img/diqiu/13.jpg',
		'img/diqiu/14.jpg',
		'img/diqiu/15.jpg',
		'img/diqiu/16.jpg',
		'img/diqiu/17.jpg',
		'img/diqiu/18.jpg',
		'img/diqiu/19.jpg',
		'img/diqiu/20.jpg',
		'img/diqiu/21.jpg',
		'img/diqiu/22.jpg',
		'img/diqiu/23.jpg',
		'img/diqiu/24.jpg',
		'img/diqiu/25.jpg',
		'img/diqiu/26.jpg',
		'img/diqiu/27.jpg',
		'img/diqiu/28.jpg',
		'img/diqiu/29.jpg',
		'img/diqiu/30.jpg',
		'img/diqiu/31.jpg',
		'img/diqiu/32.jpg',
		'img/diqiu/33.jpg',
		'img/diqiu/34.jpg',
		'img/diqiu/35.jpg',
		'img/diqiu/36.jpg',
		'img/diqiu/37.jpg',
		'img/diqiu/38.jpg',
		'img/diqiu/39.jpg',
		'img/diqiu/40.jpg',
		'img/diqiu/41.jpg',
		'img/diqiu/42.jpg',
		'img/diqiu/43.jpg',
		'img/diqiu/44.jpg',
		'img/diqiu/45.jpg',
		'img/diqiu/46.jpg',
		'img/diqiu/47.jpg'
	];
	var imgLength = 0;
	var imgs = [];
	var time = null;
	var loadfont=['Loading...','Loading..','Loading.','Loading'];
	var ld =3;
	time = setInterval(function(){
		ld--;
		if(ld<-1){
			ld = 3;
		}
		$("#Ld").html(loadfont[ld]);
	},500);
	setTimeout(function(){
		for(var i=0;i<arr.length;i++){
			var makeImg = new Image();
			makeImg.src = arr[i];
			makeImg.onload = function(){
				imgs.push(this);
				$('#jdtNum').html(parseInt(imgs.length * 100 / arr.length) + '%');
				if(imgs.length==arr.length){
					$("#jdtNum").html('100%');
					setTimeout(function(){
						$("#mark").remove();
						clearInterval(time);
//						$("#swiper-container").css('display',"block");
						alls();
					},300)
				}
			}
		}
	},500)
})

function alls(){
	$(".swiper-wrapper").css({
		width:$(window).width(),
		height:$(window).height()
	});
	//音乐
	$(".music").on("click",function(){
		if($(".icon-music").attr("num")==1){
			$(".icon-music").removeClass("open");
			$(".icon-music").css("display","none");
			$(".icon-music").attr("num","2");
			$(".clo").css("display","block");
			document.getElementById("aud").pause();
		}else{
			$(".icon-music").attr("num","1");
			$(".icon-music").addClass("open");
			$(".icon-music").css("display","block");
			$(".clo").css("display","none");
			document.getElementById("aud").play();
		}
	});
	var mySwiper = new Swiper('.swiper-container-v',{
	  	onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	   	 	swiperAnimateCache(swiper); //隐藏动画元素 
	    	swiperAnimate(swiper); //初始化完成开始动画
	  }, 
	  	onSlideChangeEnd: function(swiper){ 
	    	swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	    	if(swiper.activeIndex==1){
	    		var time1 = null;
				var time2 = 50;
				var x = 0;
				function Animate(){
					$("#box img").css("display","none");
					$("#box img").eq(x).css("display","block");
					if(x>=47){
						x=0;
					}
					x++;
				}
				time1 = setInterval(Animate,time2);
	    	}
	    	$(".f img").css({width:"1.54rem",height:"1.54rem"});
	    	$(".f1").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".f2").css({left:"3.75rem",top:"6rem",width:"0.02rem",height:"0.02rem"});
	    	$(".f3").css({right:"3.75rem",bottom:"7.75rem",width:"0.05rem",height:"0.05rem"});
	    	$(".f4").css({left:"3.75rem",bottom:"7.75rem",width:"0.03rem",height:"0.03rem"});
	    	$(".f5").css({right:"3.75rem",top:"6rem",width:"0.04rem",height:"0.04rem"});
	    	$(".f6").css({left:"3.75rem",top:"6rem",width:"0.1rem",height:"0.1rem"});
	    	$(".f7").css({left:"3.75rem",bottom:"7.75rem",width:"0.015rem",height:"0.015rem"});
	    	$(".f8").css({right:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	
	    	$(".ass1 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass2 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass3 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass4 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass5 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass6 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass7 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass8 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass9 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass10 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass11 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass12 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass13 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass14 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass15 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass16 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass17 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
		
	    	if(swiper.activeIndex==3){
	    		$(".f1").animate({left:"0.4rem",top:"2.57rem",width:"1.54rem",height:"1.54rem"},2000);
		    	$(".f2").animate({left:"2.55rem",top:"1.21rem",width:"1.54rem",height:"1.54rem"},2000);
		    	$(".f3").animate({right:"0.8rem",bottom:"4.7rem",width:"1.54rem",height:"1.54rem"},2000);
		    	$(".f4").animate({left:"0.8rem",bottom:"4.5rem",width:"1.54rem",height:"1.54rem"},2000);
		    	$(".f5").animate({right:"0.6rem",top:"2.23rem",width:"1.54rem",height:"1.54rem"},2000);
		    	$(".f6").animate({left:"0.95rem",top:"5.25rem",width:"1.54rem",height:"1.54rem"},2000);
		    	$(".f7").animate({left:"2.88rem",bottom:"3.4rem",width:"1.54rem",height:"1.54rem"},2000);
		    	$(".f8").animate({right:"0.4rem",top:"5.05rem",width:"1.54rem",height:"1.54rem"},2000);
	    		
	    		$(".ass1 img").animate({left:"0.3rem",top:"-0.25rem",width:"0.74rem",height:"0.74rem"},2000);
	    		$(".ass2 img").animate({left:"6rem",top:"0.1rem",width:"1.22rem",height:"1.22rem"},2000);
	    		$(".ass3 img").animate({left:"2rem",top:"4.5rem",width:"0.36rem",height:"0.36rem"},2000);
	    		$(".ass4 img").animate({left:"7.2rem",top:"2.6rem",width:"0.78rem",height:"0.78rem"},2000);
	    		$(".ass5 img").animate({left:"4rem",top:"3.2rem",width:"0.7rem",height:"0.7rem"},2000);
	    		$(".ass6 img").animate({left:"4.45rem",top:"0.7rem",width:"0.42rem",height:"0.42rem"},2000);
	    		$(".ass7 img").animate({left:"0.4rem",top:"10.3rem",width:"2.38rem",height:"2.22rem"},2000);
	    		$(".ass8 img").animate({left:"-1.2rem",top:"5.8rem",width:"2.16rem",height:"2.4rem"},2000);
	    		$(".ass9 img").animate({left:"5.28rem",top:"4.85rem",width:"0.2rem",height:"0.2rem"},2000);
	    		$(".ass10 img").animate({left:"0.45rem",top:"4.52rem",width:"0.13rem",height:"0.13rem"},2000);
	    		$(".ass11 img").animate({left:"3.08rem",top:"3.72rem",width:"0.13rem",height:"0.13rem"},2000);
	    		$(".ass12 img").animate({left:"4.77rem",top:"5.75rem",width:"0.08rem",height:"0.08rem"},2000);
	    		$(".ass13 img").animate({left:"3.02rem",top:"6.58rem",width:"0.13rem",height:"0.13rem"},2000);
	    		$(".ass14 img").animate({left:"3.82rem",top:"7.19rem",width:"0.03rem",height:"0.03rem"},2000);
	    		$(".ass15 img").animate({left:"4.71rem",top:"8.88rem",width:"0.74rem",height:"0.74rem"},2000);
	    		$(".ass16 img").animate({left:"5.28rem",top:"5.99rem",width:"0.49rem",height:"0.49rem"},2000);
	    		$(".ass17 img").animate({left:"6.53rem",top:"10.03rem",width:"0.28rem",height:"0.28rem"},2000);
	    		$(".hand1 img").addClass("xianshi");
	    		$(".f img").css("display","block");
				$(".f img").on("click",function(){
					$(".swiper-container-h").css("display","block")
					$(".v img").css("display","block");
					$(".f").fadeOut(500);
					$(".close1").css("display","block");
					$(".rig").css("display","block");
					$(".lef").css("display","block");
					$(".x").css("display","none");
					$(".hand1").css("display","none");
					var t = $(this).index();
					var mySwiper1 = new Swiper(".swiper-container-h",{
						direction: 'horizontal',
						loop: true,
						initialSlide:t,
						nested:true,
						resistanceRatio: 0,
						nextButton: '.swiper-button-next',
						prevButton: '.swiper-button-prev',
					})
				});
				$(".close1").on("click",function(){
					$(".f").fadeIn(500);
					$(".swiper-container-h").css("display","none");
					$(".close1").css("display","none");
					$(".rig").css("display","none");
					$(".lef").css("display","none");
				})
	    	}
	    	if(swiper.activeIndex==4){
	    		var i=0;
	    		var time = setInterval(function(){
	    			$(".P").children().eq(i).slideDown(1000).css("animation","pianyi 1s 1s linear normal forwards");
	    			$(".men").children().eq(i).css({
	    				animation:"yingzi 1s 1s linear normal forwards"
	    			});
	    			i++;
	    		},800)
	    		$(".men1 img").show();
	    		$(".close2 img").hide();
	    		$(".P p").on("click",function(){
	    			var index = $(this).index();
	    			$(".men1 img").hide();
	    			$(".close2 img").show();
	    			$(".yincang img").eq(index).css({
	    				animation:"show"+(index+1)+" 1s 0s linear normal forwards",
	    			});
	    			$(".close2 img").on("click",function(){
	    				$(".yincang img").eq(index).css({
	    					animation:"hide"+(index+1)+" 1s 0s linear normal forwards",
	    				});
	    				$(".close2 img").hide();
	    			});
	    		})
	    		
	    	}else{
	    		$(".P").children().slideUp(1000).css("transform","translate(0,0)");
	    		$(".men").children().css({
	    			animation:"yingzi1 1s linear normal forwards"
	    		})
	    		for(var k=0;k<=9;k++){
					$(".yincang img").eq(k).css({
						animation:"hide"+(k)+" 1s 0s linear normal forwards",
					})
				}
	    	}
	    	if(swiper.activeIndex==5){
				$(".slide_6_sanjiaoti").children().css("display","block");
				$(".slide_6_s1").css("animation","ss1 1.5s linear both");
				$(".slide_6_s2").css("animation","ss2 1.5s linear both");
				$(".slide_6_s3").css("animation","ss3 1.5s linear both");
				$(".slide_6_s4").css("animation","ss4 1.5s linear both");
				$(".slide_6_s5").css("animation","ss5 1.5s linear both");
			}else{
				$(".slide_6_sanjiaoti").children().css("display","none");
			}
			if(swiper.activeIndex==6){
				$(".slide_7_S").slideDown(1000);
			}else{
				$(".slide_7_S").css("display","none")
			}
			if(swiper.activeIndex==7){
				$('.p8-1').animate({
					top: '1.68rem',left: '2.24rem'
				},400)
				$('.p8-2').animate({
					left: '0.74rem',top:"1.53rem"
				},400)
				$('.p8-3').animate({
					left: '0rem',top:"1.61rem"
				},400)
				$('.p8-4').animate({
					right: '0.05rem',top:"0.3rem"
				},400)
				$('.p8-5').animate({
					top: '3.26rem',right: '0.7rem'
				},400)
				$('.p8-6').animate({
					top: '1.47rem',left: '4.47rem'
				},400)
				if(swiper.activeIndex!=7){
					$('.p8-1').animate({
					top: '3rem',left: '7rem'
				},1)
					$('.p8-2').animate({
					top: '0.28rem',left: '7rem'
				},1)
					$('.p8-3').animate({
					top: '0.3rem',left: '-1rem'
				},1)
					$('.p8-4').animate({
					top: '-0.5rem',right: '-1rem'
				},1)
					$('.p8-5').animate({
					top: '2rem',right: '-0.68rem'
				},1)
					$('.p8-6').animate({
					top: '3rem',left: '-2.5rem'
				},1)
				}
			}
	
	  	},
	  	direction: 'vertical',
	})
}

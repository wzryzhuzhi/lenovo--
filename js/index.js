/*footer切换*/
$("#main>div").hide();
$("#main>div").eq(0).show();
$("#footer li").tap(function () {
    var index=$(this).index()
    $("#main>div").hide();
    $("#main>div").eq(index).show();
    $("#footer li").find("p").css("color","#B8B8B8");
    $(this).find("p").css("color","#FB35B6");
    if(index==0){
    	mySwiper.startAutoplay();
    }else if(index!=0){
    	mySwiper.stopAutoplay();
    }
})

/*回归顶部*/
$("#warn").css({"display":"none"});
$(".box1").scroll(function(){
	var scrollHeight = $(".box1").scrollTop();
	var maxHeight=document.documentElement.offsetHeight
	console.log(scrollHeight)
	if(scrollHeight>maxHeight){
		$("#warn").css({"display":"block"})
	}else if(scrollHeight<=maxHeight){
		$("#warn").css({"display":"none"})
	}

})
/*轮播图部分*/
var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
     autoplayDisableOnInteraction:false,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    autoplay:700
})
/*广告部分*/
$(".header .closeicon").on("tap",function () {
    $(this).parent().css({display:"none"})
})

/*首页-menu*/
var menu1="json/indexHeadMenu.json";
var menu2="json/xiadannew.json";
var menu3="json/indexHeadMenu2.json";
$.getJSON(menu1,function(res){
	addMenu1(res.data);
})
function addMenu1(arr){
	for(var i=0;i<arr.length;i++){
		var liObj=$('<li><a href=""><img><h3></h3></a></li>');
		liObj.find("img").attr("src",arr[i].img);
		liObj.find("h3").text(arr[i].name);
		$("#banmenu ul").append(liObj)
	}
}

/*首页-lazy*/
$.getJSON(menu3,function(res){
	addMenu3(res.data[0].data1)
	addMoMenu3(res.data[1].data2)
})
function addMenu3(arr){
	for(var i=0;i<arr.length;i++){
		var liObj=$('<li><a href=""><img></a></li>');
		liObj.find("img").attr("src",arr[i].img);
		$(".lazy>ul").append(liObj)
	}
}
function addMoMenu3(arr){
	var liObj=$('<a href=""><img></a>');
	liObj.find("img").attr("src",arr[0].img);
	$(".nowscale").append(liObj)
}

/*首页-推荐更多*/
$.getJSON(menu2,function(res){
	addDowndan(res.data[0].xiadan)
	addTuijian(res.data[1].tuijian)
	addMore(res.data[2].more)
})
function addDowndan(arr){
	for(var i=0;i<arr.length;i++){
		var liObj=$('<li><a href=""><div class="imgDiv"><img></div><h5></h5><p><strong></strong><span>减<em></em></span></p></a></li>');
		liObj.find("img").attr("src",arr[i].img);
		liObj.find("h5").text(arr[i].name);
		liObj.find("strong").text("￥"+arr[i].price);
		liObj.find("em").text(arr[i].newprice+"元")
		$(".piece .ul1").eq(0).append(liObj)
	}
}
function addTuijian(arr){
	for(var i=0;i<arr.length;i++){
		var liObj=$('<li><img><h5></h5><p><strong></strong></p></li>');
		liObj.find("img").attr("src",arr[i].img);
		liObj.find("h5").text(arr[i].name);
		liObj.find("strong").text("￥"+arr[i].price);
		$(".piece .ul2").eq(0).append(liObj)
	}
}
function addMore(arr){
	for(var i=0;i<arr.length;i++){
		var liObj=$('<li><img><h5></h5><p><strong></strong></p></li>');
		liObj.find("img").attr("src",arr[i].img);
		liObj.find("h5").text(arr[i].name);
		liObj.find("strong").text("￥"+arr[i].price);
		$(".piece .ul2").eq(1).append(liObj)
	}
}

/*首页-回顶框*/
//$("#warn").tap(function(){
//	$(this).css("z-index","0")
//})
//
//(function () {
//	
//      var el = document.querySelector('#warn');
//      var startPosition, endPosition, deltaX, deltaY, moveLength;
//
//      el.addEventListener('touchstart', function (e) {
//          var touch = e.touches[0];
//          startPosition = {
//              x: touch.pageX,
//              y: touch.pageY
//          }
//      });
//
//      el.addEventListener('touchmove', function (e) {
//          var touch = e.touches[0];
//          endPosition = {
//              x: touch.pageX,
//              y: touch.pageY
//          }
//
//          deltaX = endPosition.x - startPosition.x;
//          deltaY = endPosition.y - startPosition.y;
//          moveLength = Math.sqrt(Math.pow(Math.abs(deltaX), 2) + Math.pow(Math.abs(deltaY), 2));
//          console.log(moveLength);
//      });
//  })();

/*分类页面*/
var classes="json/fenlei.json";
$.getJSON(classes,function(res){
	addSort(res);
})
function addSort(arr){
	for(var i=0;i<arr.length;i++){
		var liObj=$('<li><a href=""><img><h3></h3></a></li>');
		liObj.find("img").attr("src",arr[i].img);
		liObj.find("a").attr("href",arr[i].address);
		liObj.find("h3").text(arr[i].name)
		$(".box2 ul").append(liObj)
	}
}

/*box_fix*/

var num=0;
$("#wrap>div .head").find("a").tap(function(){
	if(num==0){
		$(this).parent().prev().animate({"top":"2.5rem"},500,function(){
			num=1
		})
	}else if(num!=0){
		$(this).parent().prev().animate({"top":"0"},500,function(){
			num=0
		})
	}
})


/*商城登录*/
$(".denglu>a").tap(function(){
	$(this).css({"borderBottom":"1px solid red","color":"red"})
	$(this).siblings().css({"borderBottom":"none","color":"#797979"})
	var index=$(this).index();
	console.log($(".tellDiv input"))
//	if(index==0){
//		$(".tellDiv input").prop({"placeholder","请输入手机号"})
//		$(".passDiv input").prop({"placeholder","动态密码"})
//	}else if(index==1){
//		$(".tellDiv input").attr({"placeholder","请输入手机号或邮箱"})
//		$(".passDiv input").attr({"placeholder","密码"})
//	}
	
})

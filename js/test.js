/**
 * Created by win10 on 2018/7/29.
 */
//左侧
$(".header .menu").on("click",function(){
    $(".overlay").addClass("active");
})

$(".o-header .o-btn").on("click",function(){
    $(".overlay").removeClass("active")

})

//右侧轮播图

var nowIndex=0;
var isRun=true;
if($(document.body).width()>1025){
    var newWidth=0.7*$(document.body).width();
    var secWidth=4*newWidth;
}
else if($(document.body).width()<1025){
     newWidth=$(document.body).width();
    secWidth=4*newWidth;
}
$(".slick-list").add($(".slick-slide img")).add($(".slick-slide")).css("width",newWidth);
$(".slick-track").css("width",secWidth);
if(isRun){
    $(".ch-btn").on("click",function(){
        change(++nowIndex)
        isRun=true;
    })
}
if(isRun){
    setInterval(function(){
        change(++nowIndex)
    },3000)
}
$(window).resize(function(){
    if($(document.body).width()>1025){
        newWidth=0.7*$(document.body).width();
        secWidth=4*newWidth;
        $(".hero .slick-list").add($(".hero .slick-slide img")).add($(".hero .slick-slide")).css("width",newWidth);
        $(".hero .slick-track").css("width",secWidth);
    }
    else if($(document.body).width()<1025){
        newWidth=$(document.body).width();
        secWidth=4*newWidth;
        $(".hero .slick-list").add($(".hero .slick-slide img")).add($(".hero .slick-slide")).css("width",newWidth);
        $(".hero .slick-track").css("width",secWidth);
    }
})
function change(index){
    isRun=false;
   var runLeft=nowIndex * newWidth;
    $(".slick-track").css({
        transform:'transLateX('+(-runLeft)+'px)',
        transition:'all 1s ease'
    })
    setTimeout(function(){
        if(index==3){
          nowIndex=index=0  ;
            $(".slick-track").css({
                transition:'unset',
                transform:'transLateX(0)'
            })
        }
    },1000)

}


//点击向上移动
$(".grid a").add($(".scroll-items a")).on("mouseover",function(){
        $(this).css("top",-5);
    }
)
$('.grid a').add($(".scroll-items a")).on("mouseout",function(){
    $(this).css("top",5);
})

//末端滑动


$('.scroll-arrow-left').on('click',function(){
    run("right");
})
$('.scroll-arrow-right').on('click',function(){
    run("left");

})

function run(dir){
    if(dir=='left'){
       var left=$('.scroll')[0].scrollWidth-$('.scroll')[0].clientWidth;;

    }else{
       var left=$('.scroll')[0].clientWidth-$('.scroll')[0].scrollWidth;
    }
    $('.scroll').animate({
        scrollLeft:left,
    },500,function(){
        showArrow()

    })
}
function showArrow(){
    var $s=$('.scroll')[0];
    var $left=$('.scroll-arrow-left');
    var $right=$('.scroll-arrow-right');
    if($s.scrollLeft>=$s.scrollWidth-$s.clientWidth-1){
        $right.hide();
        $left.show();
    }
    if($s.scrollLeft<=0){
        $right.show();
        $left.hide();
    }
}


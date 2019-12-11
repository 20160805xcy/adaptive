$(function(){
    $('a').mouseover(function(e){
        $(this).siblings().stop().fadeTo(500,0.3)
    })
     $('a').mouseout(function(e){
         $(this).siblings().stop().fadeTo(500,1)
     })
 })
 

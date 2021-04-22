//$(window).scroll(function(){
   // if($(this).scrollTop()>=500){
    //    $("#navBar").addClass("small-nav");
   // }
   // else{
   //     $("#navBar").removeClass("small-nav");
    //}
//});


$(document).ready(function(){


$("a.scroll").on("click", function(event){
    var hash = this.hash;
    $("html, body").animate({scrollTop: $(hash) .offset() .top - 100}, 800, function(){});
});
});
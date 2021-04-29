$(document).ready(function(){

    $(function(){
        $('.project').hover(function(){
            $(this).find('.thumbnail').hide();
            $(this).find('.project-content').slideDown(600);
        },
        function(){
            $(this).find('.project-content').slideUp(600);
            $(this).find('.thumbnail').show();
        }
        );
    });

  


$("a.scroll").on("click", function(event){
    var hash = this.hash;
    $("html, body").animate({scrollTop: $(hash) .offset() .top - 100}, 800, function(){});
});

function checkVisible( elm, eval ) {
    eval = eval || "visible";
    var vpH = $(window).height(),
        st = $(window).scrollTop(),
        y = $(elm).offset().top,
        elementHeight = $(elm).height();
    
    if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
    if (eval == "above") return ((y < (vpH + st)));
}
var isLoaded = false;

$(window).scroll(function() {
  if(!isLoaded){
    
    if (checkVisible($('#statistics'))) {
      
      
         
      $('.circle').circleProgress({
          startAngle: -Math.PI / 2,
          fill: "#01B4D9",
      }).on('circle-animation-progress', function(event, progress, stepValue) {
          $(this).find('span').html(Math.round(stepValue * 100) + '%');
      });
      

      isLoaded = true;
      
    }
    
}
});

    var wow = new WOW({ mobile:false });
    wow.init();


    $(function(){
        $("#commentform").validate();
    });

    var date = new Date();
    var year = date.getFullYear();
    document.getElementById('date').innerHTML = year;

});


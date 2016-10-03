$(document).ready(function(){
       $(".scam").click(function () {

        //$(".linkbox").append(" <br>Hello</h1> ");
        //$(".hello").css('font-size', '40px');


//click for dancing man

var image = $(".image");
image.animate({height: '300px', opacity: '0.4'}, "fast");
    image.animate({width: '300px', opacity: '0.8'}, "fast");
    image.animate({height: '100px', opacity: '0.4'}, "fast");
    image.animate({width: '100px', opacity: '0.8'}, "fast");
image.animate({ left: '300px',right: '300px',left: '300px',right: '300px',right: '300px',left: '300px', left:'300px', top:"1200px", right:"5600px", height:  '+=150px', width:  '+=150px',left: '300px',right: '300px',left: '300px',right: '300px',right: '300px',left: '300px',left:'300px', top:"1200px", right:"5600px", height:  '+=560px',width:  '+=400px'});


$(".box").hide();
$("i").css("color", "red");
// $("h1").click(function () {($("useful_links").hide());
// });
// $("h1").click(function () {$(".useful_links".show());
// });
$(".useful_links").click(function(){$("h1").hide(1000);});
$(".useful_links").click(function(){$("h1").hide(1000);});



    $(".menu").click(function() {

          $(".menudropdown").slideToggle();

    });

    $(".menu").click(function () {

      $(".menudropdown").fadeToggle();

    });
  });
  
})

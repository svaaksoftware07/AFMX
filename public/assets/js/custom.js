

    $(document).ready(function(){
   $(".serv1").mouseenter(function(){
       $(".srvc1").show();
   })
    $(".serv1").mouseout(function(){
       $(".srvc1").hide();
   })
        
         $(".serv2").mouseenter(function(){
       $(".srvc2").show();
   })
    $(".serv2").mouseout(function(){
       $(".srvc2").hide();
   })
        
         $(".serv3").mouseenter(function(){
       $(".srvc3").show();
   })
    $(".serv3").mouseout(function(){
       $(".srvc3").hide();
   })
        
         $(".serv4").mouseenter(function(){
       $(".srvc4").show();
   })
    $(".serv4").mouseout(function(){
       $(".srvc4").hide();
   })
        
         $(".serv5").mouseenter(function(){
       $(".srvc5").show();
   })
    $(".serv5").mouseout(function(){
       $(".srvc5").hide();
   })
        
         $(".serv6").mouseenter(function(){
       $(".srvc6").show();
   })
    $(".serv6").mouseout(function(){
       $(".srvc6").hide();
   })
        
         $(".serv7").mouseenter(function(){
       $(".srvc7").show();
   })
    $(".serv7").mouseout(function(){
       $(".srvc7").hide();
   })
        
         $(".serv8").mouseenter(function(){
       $(".srvc8").show();
   })
    $(".serv8").mouseout(function(){
       $(".srvc8").hide();
   })
        
         $(".serv9").mouseenter(function(){
       $(".srvc9").show();
   })
    $(".serv9").mouseout(function(){
       $(".srvc9").hide();
   })
        
         $(".serv10").mouseenter(function(){
       $(".srvc10").show();
   })
    $(".serv10").mouseout(function(){
       $(".srvc10").hide();
   })
        
         $(".serv11").mouseenter(function(){
       $(".srvc11").show();
   })
    $(".serv11").mouseout(function(){
       $(".srvc11").hide();
   })
        
         $(".serv12").mouseenter(function(){
       $(".srvc12").show();
   })
    $(".serv12").mouseout(function(){
       $(".srvc12").hide();
   });
        
     
        
        $(".contactus button img").click(function(){
            $(".contactus input").fadeIn();
            $(".contactus button").css({"background-color":"#007cfb",});
        })
        
       
//   



});

$(document).mouseup(function(e) 
{
    var container = $(".contactus input");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
         $(".contactus button").css({"background-color":"transparent",});
    }
});





 $(".circle-item2").mouseover(function() {
        $("#pointer").addClass("rotate2");
      });
      $(".circle-item2 img").mouseout(function() {
        $("#pointer").removeClass("rotate2");
      });
      $(".circle-item3 img").mouseenter(function() {
        $("#pointer").addClass("rotate3");
      });
      $(".circle-item3 img").mouseout(function() {
        $("#pointer").removeClass("rotate3");
      });
      $(".circle-item4 img").mouseenter(function() {
        $("#pointer").addClass("rotate4");
      });
      $(".circle-item4 img").mouseout(function() {
        $("#pointer").removeClass("rotate4");
      });
      $(".circle-item5 img").mouseenter(function() {
        $("#pointer").addClass("rotate5");
      });
      $(".circle-item5 img").mouseout(function() {
        $("#pointer").removeClass("rotate5");
      });
      $(".circle-item6 img").mouseenter(function() {
        $("#pointer").addClass("rotate6");
      });
      $(".circle-item6 img").mouseout(function() {
        $("#pointer").removeClass("rotate6");
      });
      $(".circle-item7 img").mouseenter(function() {
        $("#pointer").addClass("rotate7");
      });
      $(".circle-item7 img").mouseout(function() {
        $("#pointer").removeClass("rotate7");
      });
      $(".circle-item8 img").mouseenter(function() {
        $("#pointer").addClass("rotate8");
      });
      $(".circle-item8 img").mouseout(function() {
        $("#pointer").removeClass("rotate8");
      });
      $(".circle-item9 img").mouseenter(function() {
        $("#pointer").addClass("rotate9");
      });
      $(".circle-item9 img").mouseout(function() {
        $("#pointer").removeClass("rotate9");
      });
      $(".circle-item10 img").mouseenter(function() {
        $("#pointer").addClass("rotate10");
      });
      $(".circle-item10 img").mouseout(function() {
        $("#pointer").removeClass("rotate10");
      });
      $(".circle-item11 img").mouseenter(function() {
        $("#pointer").addClass("rotate11");
      });
      $(".circle-item11 img").mouseout(function() {
        $("#pointer").removeClass("rotate11");
      });
      $(".circle-item12 img").mouseenter(function() {
        $("#pointer").addClass("rotate12");
      });
      $(".circle-item12 img").mouseout(function() {
        $("#pointer").removeClass("rotate12");
      });
    


    $("#features").hide();
    $("#pricing").hide();
   $("#fl").hide();
    $("#f2").hide();
    



  $("#tobi").on("click",function(){
    $("#features").toggle("slow","swing");
    $("#features");
    
  });
  $("#cow").on("click",function(){
    $("#pricing").toggle("slow","swing");
    $("#pricing");
    
  });
  $("#goat").on("click",function(){
    $("#testimonials");
    $("#press").show();
    
  });


  $("#tip").on("click",function(){
    $("#fl, #f2").toggle("slow","swing");
    $("#fl, #f2");
  });

  // $("features").slow();

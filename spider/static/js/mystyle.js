 $(document).ready(function(){
 	var length=11;
  	for ( var i=1;i<length;i++)
  	{
  		 $('#show-hide'+i).click(function(){
  		 	  var content=$(this).parent().next();
  		 		content.show("slow");
  		 		if(content.show()){
  		 			content.prev().css({"color":"#1f6692"});
  		 			content.mouseleave(function(){content.slideUp("slow"); 
  		 				if(content.slideUp()){
  		 					var height=$(this).prev().offset().top;
  		 					$('body,html').animate({scrollTop:height-60},"slow");
  		 				}
  		 		});
  		 	   }
       	
       });
  	}
  	$('.scroll-top').click(function(){
       $('body,html').animate({scrollTop:0},1000);}) 	
   
    if($(window).width()<768){
      if($('nav').mouseleave(function(){
        $('[data-toggle="collapse"]').click();
    }));
   }

      /* smooth scrolling sections */
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 65
        }, 1000);
        return false;
      }
    }
});    
  })
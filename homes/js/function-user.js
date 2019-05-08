$(function(){
  $('.kenburnss').css('height','100vh!important');
  
  $(".callMe__input-tel").mask("+38 (999) 999-99-99");


  $(".callMe__input-tel").on("blur", function() {
      var last = $(this).val().substr( $(this).val().indexOf("-") + 1 );

      if( last.length == 5 ) {
          var move = $(this).val().substr( $(this).val().indexOf("-") + 1, 1 );

          var lastfour = last.substr(1,4);


          $(this).val( first + move + '-' + lastfour );
      }
  });
}); 


$(document).ready(function() {
	$(".owl-carousel").owlCarousel({
		loop:true,
		items: 2,
		margin: 90,
		stagePadding: 90,
		dots: true,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		navContainer: '#customNav',
		responsive: {
	   // > 0
	    0 : {
		  items: 1,
	      dots: false,
	      margin:15,
	      stagePadding: 15,
	    },
	    // > 768
	    768 : {
	    	margin:90,
	    	stagePadding: 90,
        dots: true,
	    }
		}
	});
	
});


$(".lines-button").click(function() {
  $("#header-wrap").toggleClass("header__mobile-active");
  $("#header-wrap.header__mobile-active").css("background","rgba(16, 16, 16, 0.9)!important;");
});
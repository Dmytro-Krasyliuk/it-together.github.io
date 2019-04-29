jQuery(document).ready(function($) {


$(".ajax-contact-form").submit(function() {

if($("#modalOrder-name").val().length >= 3 && $("#modalOrder-tel").val().length > 15) {
var str = $(this).serialize();

$.ajax({
type: "POST",
url: "../contact.php",
data: str,
success: function(msg) {
if(msg == 'OK') {
result = '<p class="text-color-defaultMark text-center">Ваша заявка принята</p>';
$(".fields").hide();
} else {
result = msg;
}
$('.note').html(result);
}
});
return false;
}
else if($("#modalOrder-tel").val().length < 12 && $("#modalOrder-name").val().length < 2) {
  $("#modalOrder-name").css('border-color','#FF4930');
  $("#modalOrder__small-name").css('display','block');
  $("#modalOrder-tel").css('border-color','#FF4930');
  $("#modalOrder__small-tel").css('display','block');
	return false;
}
	
else if($("#modalOrder-name").val().length < 2) {
  $("#modalOrder-name").css('border-color','#FF4930');
  $("#modalOrder__small-name").css('display','block');
	return false;
}
else if($("#modalOrder-tel").val().length < 12) {
  $("#modalOrder-tel").css('border-color','#FF4930');
  $("#modalOrder__small-tel").css('display','block');
	return false;
}
});

	$( "#modalOrder-name" ).focus(function(){ // задаем функцию при получении фокуса 
  $("#modalOrder-name").css('border-color','#E7E7E7');
  $("#modalOrder__small-name").css('display','none');
	return false;
	  });
	$( "#modalOrder-tel" ).focus(function(){ // задаем функцию при получении фокуса 
  $("#modalOrder-tel").css('border-color','#E7E7E7');
  $("#modalOrder__small-tel").css('display','none');
	return false;
	  });
});
$(document).ready(function(){
    $('.nav-link, .scroll-link').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top-60 }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});

        $('a[href^="#"]').on('click', function () {
            $('.navbar-collapse').collapse('hide');
            $a = $($(this).attr('href'));  
            return false;
        });

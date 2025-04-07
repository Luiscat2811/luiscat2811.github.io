$(document).ready(function() {
    // Efecto smooth scroll para los enlaces
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 70
        }, 800);
    });

    // Animación para las cards de proyectos
    $('.card').hover(
        function() {
            $(this).addClass('shadow');
        },
        function() {
            $(this).removeClass('shadow');
        }
    );
});
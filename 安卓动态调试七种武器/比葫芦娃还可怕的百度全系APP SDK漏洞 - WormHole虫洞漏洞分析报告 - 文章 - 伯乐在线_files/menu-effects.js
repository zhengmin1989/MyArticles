jQuery(document).ready(function($) {

	// Main nav - Desktop
	$('.menu-nav ul').superfish({
        delay: 200,
        animation: {
            opacity: 'show'
        },
        autoArrows: false,
        dropShadows: false,
        speed: 'fast'
    });

    $('.menu-nav ul ul a').hover(function() {
        $(this).stop().animate({ paddingLeft: '20px' }, 'fast');
    }, function() {
        $(this).stop().animate({ paddingLeft: '10px' }, 'fast');
    });

    // Top Bar
    $('#top-open').click(function(e) {
        if ($(this).hasClass('active') == true) {
            $(this).removeClass('active');
            $('#top-closed').removeClass('active');
            $(this).prev('#top').slideUp('fast');
        } else {
            $(this).addClass('active');
            $('#top-closed').addClass('active');
            $(this).prev('#top').slideDown('fast')
        }
        e.preventDefault();
    });
    $('#top-closed').click(function(e) {
        if ($(this).hasClass('active') == true) {
            $(this).removeClass('active');
            $('#top-open').removeClass('active');
            $(this).prev().prev('#top').slideUp('fast');
        } else {
            $(this).addClass('active');
            $('#top-open').addClass('active');
            $(this).prev().prev('#top').slideDown('fast')
        }
        e.preventDefault();
    });
});
jQuery(document).ready(function($) {

	// Slider
	$('.slider-wrap').animate({ opacity: 1 }, 'fast');
    
   	// Comment form
    $('#comment-form-submit').click(function() { $('#comment-form').submit(); });
    $('#comment-form').validate();
    
    // Contact form
    $('#contact-form-submit').click(function() { $('#contact-form').submit(); });
    $('#contact-form').validate();
    
    // Videos
    $('.entry-video').fitVids();
    
    // Shortcode - Tabs
    var b = $('.tabs .tab');
    b.hide().filter(':first').show();
    $('.tabs .nav a').click(function() {
        b.hide();
        b.filter(this.hash).show();
        $('.tabs .nav li').removeClass('active');
        $(this).parent().addClass('active');
        return false
    }).filter(':first').click();

	// Shortcode - Toggle
	$('.toggle.open').addClass('active');
	$('.toggle').click(function() {
		if ($(this).hasClass('active') == true) {
			$(this).removeClass('active');
			$(this).find('.toggle-content').hide();
		} else {
			$(this).addClass('active');
			$(this).find('.toggle-content').show();
		}
	});
	$('.toggle').mouseover(function() {
		$(this).addClass('hover')
	}).mouseout(function() {
		$(this).removeClass('hover') });
	
	// Shortcode - Tooltip
	$('.tooltip').hover(function() {
        $(this).find('.tooltip-box').stop().animate({ opacity: 'show' }, 'fast');
    }, function() {
        $(this).find('.tooltip-box').stop().animate({ opacity: 'hide' }, 'fast');
    });
	
});


// Scroll top
/*window.addEventListener("load",function() {
    setTimeout(function() {
        document.body.scrollTop || window.scrollTo(0, 1);
    }, 0);
});*/
$('#company-mobile').click(function(){
    let navDopMobile = $('#company-dop-mobile');
    let triangle = $('#company-mobile svg');
    let active = $('.nav-dop-mobile.mobile-active');
    let triangleActive = $('#' + active.prev().attr('id') + ' svg');
    if(navDopMobile.css('height') === '0px') {
        active.animate({
            'height': '0',
            'font-size': '0'
        });
        triangleActive.css({
            'transform': 'rotate(0deg)'
        });
        active.toggleClass('mobile-active');
        navDopMobile.animate({
            'height': '120px',
            'font-size': '20px'
        });
        triangle.css({
           'transform': 'rotate(180deg)'
        });
    }
    else {
        navDopMobile.animate({
            'height': '0',
            'font-size': '0'
        });
        triangle.css({
            'transform': 'rotate(0deg)'
        });
    }
    navDopMobile.toggleClass('mobile-active');
});
$('#projects-mobile').click(function(){
    let navDopMobile = $('#projects-dop-mobile');
    let triangle = $('#projects-mobile svg');
    let active = $('.nav-dop-mobile.mobile-active');
    let triangleActive = $('#' + active.prev().attr('id') + ' svg');
    if(navDopMobile.css('height') === '0px') {
        active.animate({
            'height': '0',
            'font-size': '0'
        });
        triangleActive.css({
            'transform': 'rotate(0deg)'
        });
        active.toggleClass('mobile-active');
        navDopMobile.animate({
            'height': '120px',
            'font-size': '20px'
        });
        triangle.css({
            'transform': 'rotate(180deg)'
        });
    }
    else {
        navDopMobile.animate({
            'height': '0',
            'font-size': '0'
        });
        triangle.css({
            'transform': 'rotate(0deg)'
        });
    }
    navDopMobile.toggleClass('mobile-active');
});

$('#projects').click(function(){
    let menuActive = $('.menu-active');
    let navDopMenu = $('#projects .nav-dop-menu');
    let triangle = $('#projects svg');
    $('.nav-menu-point svg').css({'transform' : 'rotate(0deg)'});
    if(menuActive.attr('class') === navDopMenu.attr('class')){
        navDopMenu.animate({'opacity': '0'});
        navDopMenu.toggleClass('menu-active');

    }
    else{
        menuActive.animate({'opacity': '0'});
        menuActive.removeClass('menu-active');
        navDopMenu.animate({'opacity': '1'});
        navDopMenu.toggleClass('menu-active');
        triangle.css({
            'transform' : 'rotate(180deg)'
        });

    }
});
$('#company').click(function(){
    let menuActive = $('.menu-active');
    let navDopMenu = $('#company .nav-dop-menu');
    let triangle = $('#company svg');
    let menuActiveSvg = $('.menu-active svg');
    $('.nav-menu-point svg').css({'transform' : 'rotate(0deg)'});
    if(menuActive.attr('class') === navDopMenu.attr('class')){
        navDopMenu.animate({'opacity': '0'});
        navDopMenu.toggleClass('menu-active');
    }
    else{
        menuActive.animate({'opacity': '0'});
        menuActive.removeClass('menu-active');
        navDopMenu.animate({'opacity': '1'});
        navDopMenu.toggleClass('menu-active');
        triangle.css({
            'transform' : 'rotate(180deg)'
        });
    }

});
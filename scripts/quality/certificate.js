$('#paragraph-1 img').click(function(){
   $('.fullscreen-certificate').css({
       'display': 'flex'
   });
});
$(document).mouseup(function (e){ // событие клика по веб-документу
    const div = $(".image-certificate"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $('.fullscreen-certificate').css({
            'display': 'none'
        });
    }
});
$(document).on('touchend',function (e){ // событие клика по веб-документу
    const div = $(".image-certificate"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $('.fullscreen-certificate').css({
            'display': 'none'
        });
    }
});
import './header.scss';

window.onload = function () {
    var el = document.getElementsByClassName("container");
    // for(var i=0; i < el.length; i++ ){
    //     $(el[i]).mouseover(function(){
    //         //$(this).children('ul').css('display','block')
    //         $(this).children('ul').slideToggle();
    //
    //         //event.stopPropagation();
    //         console.log('ddd')
    //     });
    // }

    for (var i = 0; i < el.length; i++)
    {
            // Для современных браузеров
            if (document.addEventListener) {
                el[i].addEventListener('click', mouseOverHandler, false);
            }
    }

    // Обработчики событий
    function mouseOverHandler(e)
    {
        var cont_width =  $(this).css('width')
        var cont_width_float = parseFloat(cont_width.slice(0, cont_width.length - 2)) + 20;
        cont_width = cont_width_float + 'px'
        $(this).children('ul').slideToggle();
        $(this).children('ul').css('width', cont_width);
        // e = e || window.event;
        // var target = e.target || e.srcElement;
        // target.style.cssText = "opacity:0.5";
        console.log($(this).css('width'));
         console.log(cont_width_float);
    }

    function mouseOutHandler(e)
    {
        e = e || window.event;
        var target = e.target || e.srcElement;
        target.style.cssText = "opacity:1";
        console.log('Вы убрали мышь с элемента <img src="' + target.src + '">');
    }



}

import './header.scss';

export function header() {
    let el = document.getElementsByClassName("container");


    for (let i = 0; i < el.length; i++)
    {

            if (document.addEventListener) {
                el[i].addEventListener('click', mouseOverHandler, false);
            }
    }


    function mouseOverHandler(e)
    {
        let cont_width =  $(this).css('width')
        let cont_width_float = parseFloat(cont_width.slice(0, cont_width.length - 2)) + 20;
        cont_width = cont_width_float + 'px'
        $(this).children('ul').slideToggle();
        $(this).children('ul').css('width', cont_width);
        // e = e || window.event;
        // var target = e.target || e.srcElement;
        // target.style.cssText = "opacity:0.5";
        console.log($(this).css('width'));
         console.log(cont_width_float);
    }
}

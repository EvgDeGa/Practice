import './searchroom.scss';

export function searchroom() {
    let el = document.getElementsByClassName("confirm");

    if (document.addEventListener) {
        el[0].addEventListener('click', () => mouseOverHandler(el), false);
    }

    function mouseOverHandler(el){
        $(el[0]).css('opacity: 0.5;')
        console.log('ss')
    }
}

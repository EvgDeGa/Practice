import './range_slider.scss';
export function range_slider() {
    let thumb = document.getElementById('thumb');
    let thumb2 = document.getElementById('thumb2');
    let slider = document.getElementById('slider');
    let range = document.getElementById('range');
    let first_price = document.getElementById('first_price');
    let second_price = document.getElementById('second_price');
    let coor = {Val1: thumb.getBoundingClientRect().left, Val2: thumb2.getBoundingClientRect().left}
    let marg = thumb.getBoundingClientRect().left
    let price = parseInt($(second_price).html())
    console.log(price)
    console.log(coor.Val1,coor.Val2)
    price = price / (250 - thumb.offsetWidth + 1)


    thumb.onmousedown = function(event) {
        event.preventDefault(); // предотвратить запуск выделения (действие браузера)

        let shiftX = event.clientX - thumb.getBoundingClientRect().left;
        console.log(event.clientX)
        console.log(shiftX)
        // shiftY здесь не нужен, слайдер двигается только по горизонтали

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        function onMouseMove(event) {
            let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

            // курсор вышел из слайдера => оставить бегунок в его границах.
            if (newLeft < -1) {
                newLeft = -1;
            }

            let edge = coor.Val2 - thumb.offsetWidth - marg;
            console.log("edge",edge)
            if(newLeft > edge){
                newLeft = edge
            }
            console.log("newLeft",newLeft)
            thumb.style.left = newLeft + 'px';
            coor.Val1 =  thumb.getBoundingClientRect().left
            coor.Val2 =  thumb2.getBoundingClientRect().left
            let range_width = coor.Val2 - newLeft  - marg

            range.style.width = range_width + 'px'
            range.style.left = newLeft + 6 + 'px';
            $(first_price).html(Math.round((newLeft + 1)*price))


        }

        function onMouseUp() {
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
        }

        console.log(coor.Val1,coor.Val2)
    };

    thumb.ondragstart = function() {
        return false;
    };

    thumb2.onmousedown = function(event) {

        event.preventDefault(); // предотвратить запуск выделения (действие браузера)

        let shiftX = event.clientX - thumb2.getBoundingClientRect().left;
        // shiftY здесь не нужен, слайдер двигается только по горизонтали

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        function onMouseMove(event) {
            let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;


            let rightEdge = slider.offsetWidth - thumb2.offsetWidth;
            if (newLeft > rightEdge -1) {
                newLeft = rightEdge -1;
            }

            let edge = coor.Val1 - thumb2.offsetWidth - marg + 30
            if(newLeft < edge){
                newLeft = edge
            }
            thumb2.style.left = newLeft + 'px';
            coor.Val1 =  thumb.getBoundingClientRect().left
            coor.Val2 =  thumb2.getBoundingClientRect().left

            let range_width = newLeft - coor.Val1 + marg
            console.log(range_width)
            range.style.width = range_width + 'px'
            //range.style.left = newLeft + 6 + 'px';
            $(second_price).html(Math.round((newLeft-14)*price))


        }

        function onMouseUp() {
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
        }

    };

    thumb2.ondragstart = function() {
        return false;
    };
}
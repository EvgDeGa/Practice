import './room_preview.scss';

window.onload = function () {
    let img = document.getElementsByClassName('circle')
    let left = document.getElementsByClassName('left')
    let right = document.getElementsByClassName('right')
    let i = {Value: 0}

    left[0].addEventListener("click", () => clicked(-1, img), false)
    right[0].addEventListener("click", () => clicked(1, img), false)


    $(img[0]).children('g').html('<ellipse cx="5" cy="5" rx="3.75" ry="3.74693" fill="white"/>\n')

    function clicked(buf, img) {

        i.Value += buf
        if(i.Value > 3) i.Value = 0
        if(i.Value < 0) i.Value = 3

        for(let j = 0; j < 4; j++){
            $(img[j]).children('g').html('<ellipse cx="5" cy="5" rx="3.25" ry="3.24693" stroke-width="1" stroke="white"/>');
        }

        $(img[i.Value]).children('g').html('<ellipse cx="5" cy="5" rx="3.75" ry="3.74693" fill="white"/>\n')
    }


}

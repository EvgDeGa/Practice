import './room_preview.scss';
import {rate_button} from '../rate_button/rate_button';

function room_preview() {
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

    let review = document.getElementsByClassName('review')

    //let rev_len = $(review[0]).children('p').html().length
    let rev = parseInt($(review[0]).children('p').html()) % 10
    console.log(rev)


    if((0 === rev)||((4 < rev)&&(rev < 10))){
        $(review[0]).children(".rev").html("Отзывов")
    }else {
        if((1 < rev)&&(rev < 5)){
            $(review[0]).children(".rev").html("Отзыва")}
        else{
            if(1 === rev) {
                $(review[0]).children(".rev").html("Отзыв")
            }
        }
    }

}


window.onload = function () {
    let room= document.getElementsByClassName('rate_button')
    for(let i = 0; i< room.length; i++){
        //room[0].addEventListener("click", () => cliked(room, i), false)
        //console.log(i)
        rate_button(room, i)
    }
     // function cliked(room, i){
     //     console.log(i)
     //    rate_button(room, i)
     // }
    room_preview()


}

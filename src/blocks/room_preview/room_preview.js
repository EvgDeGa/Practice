import './room_preview.scss';
import {rate_button} from '../rate_button/rate_button';

export function room_preview_local(room,k) {
    let img = document.getElementsByClassName('circle')
    let left = document.getElementsByClassName('left')
    let right = document.getElementsByClassName('right')

    let room_flag = k*4
    let i = {Value: room_flag}

    $(img[room_flag]).children('g').html('<ellipse cx="5" cy="5" rx="3.75" ry="3.74693" fill="white"/>\n')

    left[k].addEventListener("click", () => clicked(-1, img,room_flag), false)
    right[k].addEventListener("click", () => clicked(1, img,room_flag), false)

    function clicked(buf, img) {
        i.Value += buf
        if(i.Value > room_flag+3) i.Value = room_flag
        if(i.Value < room_flag) i.Value = room_flag+3

        for(let j = room_flag; j < room_flag+4; j++){
            $(img[j]).children('g').html('<ellipse cx="5" cy="5" rx="3.25" ry="3.24693" stroke-width="1" stroke="white"/>');
        }

        $(img[i.Value]).children('g').html('<ellipse cx="5" cy="5" rx="3.75" ry="3.74693" fill="white"/>\n')
    }

    let review = document.getElementsByClassName('review')

    //let rev_len = $(review[0]).children('p').html().length
    let rev = parseInt($(review[k]).children('p').html()) % 10
    console.log(rev)


    if((0 === rev)||((4 < rev)&&(rev < 10))){
        $(review[k]).children(".rev").html("Отзывов")
    }else {
        if((1 < rev)&&(rev < 5)){
            $(review[k]).children(".rev").html("Отзыва")}
        else{
            if(1 === rev) {
                $(review[k]).children(".rev").html("Отзыв")
            }
        }
    }

}


export function room_preview() {
    let room = document.getElementsByClassName('rating')
    for(let i = 0; i< room.length; i++){
        //room[0].addEventListener("click", () => cliked(room, i), false)
        //console.log(i)
        rate_button(room, i)
        room_preview_local(room,i)
    }
     // function cliked(room, i){
     //     console.log(i)
     //    rate_button(room, i)
     // }


}

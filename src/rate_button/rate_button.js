import './rate_button.scss';

export  function rate_button(room, j) {

    let img = $(room[j]).children()


    for(let i = 0; i < img.length; i++){
        img[i].addEventListener("click", () => clicked(i, img), false)
        //console.log(i)
    }

    function clicked(i, img) {
        console.log('ss')
        console.log(i)
        for(let j = 0; j < i + 1; j++){
            $(img[j]).children('path').attr('d', 'M10.2637 15.749L4.07617 19.499L5.7168 12.4678L0.279297 7.7334L7.45117 7.12402L10.2637 0.514648L13.0762 7.12402L20.248 7.7334L14.8105 12.4678L16.4512 19.499L10.2637 15.749Z');
            console.log('s12s')
        }
        for(let j = 4; j > i; j--){
            $(img[j]).children('path').attr('d', 'M10.2637 13.9209L14.0137 16.1709L13.0293 11.9053L16.3574 8.99902L11.9512 8.62402L10.2637 4.59277L8.57617 8.62402L4.16992 8.99902L7.49805 11.9053L6.51367 16.1709L10.2637 13.9209ZM20.248 7.7334L14.8105 12.4678L16.4512 19.499L10.2637 15.749L4.07617 19.499L5.7168 12.4678L0.279297 7.7334L7.45117 7.12402L10.2637 0.514648L13.0762 7.12402L20.248 7.7334Z" fill="url(#paint0_linear)');
            $(img[j]).children('path').attr('d', 'M10.2637 13.9209L14.0137 16.1709L13.0293 11.9053L16.3574 8.99902L11.9512 8.62402L10.2637 4.59277L8.57617 8.62402L4.16992 8.99902L7.49805 11.9053L6.51367 16.1709L10.2637 13.9209ZM20.248 7.7334L14.8105 12.4678L16.4512 19.499L10.2637 15.749L4.07617 19.499L5.7168 12.4678L0.279297 7.7334L7.45117 7.12402L10.2637 0.514648L13.0762 7.12402L20.248 7.7334Z" fill="url(#paint0_linear)');
            console.log('s12s')
        }
    }


}

// window.onload = function () {}
import './filling_room.scss';

export function filling_room() {
    let flag = {Value: true}
    let filling_room = document.getElementById("filling_room")
    let minus = document.getElementsByClassName("room_minus")
    let plus = document.getElementsByClassName("room_plus")
    let number = document.getElementsByClassName("room_number")
    //let enter = document.getElementsByClassName("enter")

    function num_room() {
        if(($(".room").html()) != "Выбирите"){
            $(".room").css({"color":"rgba(31, 32, 65, 0.75)"})
        }
        else{
            $('.room').css({"border": "1px solid rgba(31, 32, 65, 0.25)"})

            $(".room").css({"color":"rgba(31, 32, 65, 0.25)"})
        }
    }

    num_room()

    for(let i = 0; i < minus.length; i++){
        console.log(parseInt($(number[i]).children('p').html()))
        if (parseInt($(number[i]).children('p').html()) === 0) {
            $(minus[i]).css({"opacity": "0.38"})
        }

        minus[i].addEventListener("click", () => minused(number,i), false)
    }
    for(let i = 0; i < plus.length; i++){
        plus[i].addEventListener("click", () => plused(number,i), false)
    }



    function minused(number,i){
        let num = parseInt($(number[i]).children('p').html())
        if(num > 0){
            $(number[i]).children('p').html(num-1)
        }


        if (parseInt($(number[i]).children('p').html()) === 0) {
            $(minus[i]).css({"opacity": "0.38"})
        }else{
            $(minus[i]).css({"opacity": "1"})
        }
    }

    function plused(number,i){

        let num = parseInt($(number[i]).children('p').html())

        $(number[i]).children('p').html(num+1)


        if (parseInt($(number[i]).children('p').html()) === 0) {
            $(minus[i]).css({"opacity": "0.38"})
        }else{
            $(minus[i]).css({"opacity": "1"})
        }
    }

    filling_room.addEventListener("click", () => clicked(), false)
    //enter[0].addEventListener("click", () => clicked(), false)

    console.log('dd')

    function clicked() {
        $('.room_list').toggle();
        if(flag.Value) {
            $('.room').css({"border-bottom-left-radius": "0", "border-bottom-right-radius": "0", "border": "1px solid rgba(31, 32, 65, 0.5)"})
        }else{
            let flag_1 = 0
            let comma = ''
            let buf = ''

            let arr = [[" спальня"," спальни"," спален"],
                       [" крвать"," кровати"," кроватей"],
                       [" ванная комната"," ванные комнаты"," ванных комнат"]]

            $('.room').css({"border-bottom-left-radius": "4px", "border-bottom-right-radius": "4px"})

            for(let i = 0; i < number.length; i++){
                console.log(parseInt($(number[i]).children('p').html()))
                let now = parseInt($(number[i]).children('p').html())
                if(flag_1 > 0){
                    comma = ', '
                }
                if( now != 0) {

                    if((4 < now % 10)&&(now % 10 < 10)){
                        flag_1++
                        buf += comma + now + arr[i][2]
                        console.log("buf ", buf)
                    }else {
                        if((1 < now % 10)&&(now % 10 < 5)){
                            flag_1++
                            buf += comma + now + arr[i][1]
                            console.log("buf ", buf)
                        }else{
                            if(1 === now % 10) {
                                flag_1++
                                buf += comma + now + arr[i][0]
                                console.log("buf ", buf)
                            }
                        }
                    }
                }
            }
            console.log(buf)
            if (buf != ''){
                $('.room').html(buf)
            }else{
                $('.room').html("Выбирите")
            }



            num_room()
        }
        flag.Value = !flag.Value
        console.log('dd')
    }
}

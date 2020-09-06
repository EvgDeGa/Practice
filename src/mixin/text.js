
export function guest() {
    let flag = {Value: true}
    let guest = document.getElementsByClassName("guest")
    let minus = document.getElementsByClassName("minus")
    let plus = document.getElementsByClassName("plus")
    let number = document.getElementsByClassName("number")
    let enter = document.getElementsByClassName("enter")

    function num_guest() {
        if(($(".gosti").html()) != "Сколько гостей"){
            $(".gosti").css({"color":"rgba(31, 32, 65, 0.75)"})
        }
        else{
            $('.gosti').css({"border": "1px solid rgba(31, 32, 65, 0.25)"})

            $(".gosti").css({"color":"rgba(31, 32, 65, 0.25)"})
        }
    }

    num_guest()

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

    guest[0].addEventListener("click", () => clicked(), false)
    enter[0].addEventListener("click", () => clicked(), false)

    console.log('dd')

    function clicked() {
        $('.guest_list').toggle();
        if(flag.Value) {
            $('.gosti').css({"border-bottom-left-radius": "0", "border-bottom-right-radius": "0", "border": "1px solid rgba(31, 32, 65, 0.5)"})
        }else{
            let buf = 0
            $('.gosti').css({"border-bottom-left-radius": "4px", "border-bottom-right-radius": "4px"})

            for(let i = 0; i < number.length; i++){
                buf += parseInt($(number[i]).children('p').html())
            }

            if((4 < buf % 10)&&(buf % 10 < 10)){
                $('.gosti').html(buf  + " Гостей")
            }else {
                if((1 < buf % 10)&&(buf % 10 < 5)){
                    $('.gosti').html(buf  +" Гостя")}
                else{
                    if(1 === buf % 10) {
                        $('.gosti').html(buf + " гость")
                    }else{
                        $('.gosti').html("Сколько гостей")
                    }
                }
            }
            num_guest()
        }
        flag.Value = !flag.Value
        console.log('dd')
    }
}


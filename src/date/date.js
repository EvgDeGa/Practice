import './date.scss';

window.onload = function () {
    let date_day = new Date()
    let month_1 = {Value: date_day.getMonth()};
    let left_month = {Value: month_1.Value}
    let day_1 = {Value: date_day.getDay()}
    let year_1 = {Value: date_day.getFullYear()}
    let left_year = {Value: year_1.Value}
    if (day_1.Value === 0) day_1.Value = 7
    let now_day = {Value: NaN}
    let prev_day = {Value: NaN}
    let start = {Value: -1}
    let stop = {Value: -1}


    let choose = document.getElementsByClassName('day')

    console.log('date_day.getDay() ',date_day.getDay())

    let month
    switch(year_1.Value % 4 === 0){
        case 0:
            month = ['Январь31', 'Февраль29', 'Март31', 'Апрель30', 'Май31', 'Июнь30', 'Июль31', 'Август31', 'Сентябрь30', 'Октябрь31', 'Ноябрь30', 'Декабрь31']
            break
        default:
            month = ['Январь31', 'Февраль28', 'Март31', 'Апрель30', 'Май31', 'Июнь30', 'Июль31', 'Август31', 'Сентябрь30', 'Октябрь31', 'Ноябрь30', 'Декабрь31']
            break
    }

    let day_of_week = Math.floor(date_day.getDate() / 7)
    day_1.Value -= date_day.getDate() - day_of_week*7 - 1
    if( day_1.Value < 0)  day_1.Value += 7


    let previous_month_day = parseInt(month[(month_1.Value - 1)].slice(month[(month_1.Value - 1)].length - 2, month[(month_1.Value - 1)].length))
    let month_day = parseInt(month[month_1.Value].slice(month[month_1.Value].length - 2, month[month_1.Value].length))
    now_day.Value = month_day
    prev_day.Value = previous_month_day

    let week = {Value: Math.ceil((parseFloat(month[month_1.Value].slice(month[month_1.Value].length - 2, month[month_1.Value].length)) + day_1.Value - 1) / 7)}
    let day = {Value: previous_month_day -day_1.Value + 2}
    function build_calendar(previous_month_day, month_day, week, day) {
        let buf = ''
        let flag = 0

        for (let i = 0; i < week; i++) {
            if(day === previous_month_day + 1) {
                day = 1
                flag++
                previous_month_day = month_day
            }
            buf += '<ul class="week">'
            for (let j = 0; j < 7; j++) {
                if(flag === 0) {
                    buf += '<li class="day previous_m"><div></div><p>' + day + '</p></li>'
                }
                if(flag === 1) {
                    buf += '<li class="day "><div></div><p>' + day + '</p></li>'
                }
                if(flag === 2) {
                    buf += '<li class="day next_m"><div></div><p>' + day + '</p></li>'
                }
                day++
                if(day === previous_month_day + 1){
                    day = 1
                    flag++
                    previous_month_day = month_day
                }

            }
            buf += '</ul>'
        }
        return buf
    }

    $('.number').html(build_calendar(previous_month_day, month_day, week.Value, day.Value))
    $('.month_year').children('p').html(month[month_1.Value].slice(0,month[month_1.Value].length - 2))


    let el = document.getElementsByTagName('img')

    for (let i = 0; i < el.length; i++)
    {
        // Для современных браузеров
        if (document.addEventListener && (i === 0)) {
            el[i].addEventListener('click', () => {
                if ((((month_1.Value > left_month.Value) && (year_1.Value === left_year.Value)) || (year_1.Value > left_year.Value))) {
                    mouseOverHandler(month_1, day_1, year_1, 1, choose)
                }
            }, false);
        }
        if (document.addEventListener && (i === 1)) {
            el[i].addEventListener('click', () => mouseOverHandler(month_1, day_1, year_1, -1,choose), false);
        }
    }

    function mouseOverHandler(month_1, day_1, year_1, direction)
    {
        let prev_month = month_1.Value - 1*direction
        let prev_month_12
        let prev_month_0

        if (prev_month > 11) {
            year_1.Value++
            prev_month = 0
        }
        if (prev_month < 0) {
            year_1.Value--
            prev_month = 11
        }

        if ((prev_month + 1) > 11) prev_month_12 = 0
        else prev_month_12 = prev_month + 1

        if ((prev_month - 1) < 0) prev_month_0 = 11
        else prev_month_0 = prev_month - 1




        let month
        if(year_1.Value % 4 === 0){
            month = ['Январь31', 'Февраль29', 'Март31', 'Апрель30', 'Май31', 'Июнь30', 'Июль31', 'Август31', 'Сентябрь30', 'Октябрь31', 'Ноябрь30', 'Декабрь31']
        }
        else{
            month = ['Январь31', 'Февраль28', 'Март31', 'Апрель30', 'Май31', 'Июнь30', 'Июль31', 'Август31', 'Сентябрь30', 'Октябрь31', 'Ноябрь30', 'Декабрь31']
        }


        let month_day_B = parseInt(month[prev_month_0].slice(month[prev_month_0].length - 2, month[prev_month_0].length))
        let month_day_N = parseInt(month[prev_month].slice(month[prev_month].length - 2, month[prev_month].length))
        now_day.Value = month_day_N
        prev_day.Value = month_day_B


        let n

        if(direction === -1) {
            n = month_day_B
        }else {
            n = month_day_N
        }

        switch (n) {
            case 29:
                day_1.Value -= 1*direction
                break
            case 30:
                day_1.Value -= 2*direction
                break
            case 31:
                day_1.Value -= 3*direction
                break
            default:
                break
        }


        if(day_1.Value > 7){
            day_1.Value -= 7
        }

        if(day_1.Value <= 0){
            day_1.Value += 7
        }

        day.Value = month_day_B - day_1.Value + 2
        week.Value = Math.ceil((parseFloat(month[prev_month].slice(month[prev_month].length - 2, month[prev_month].length)) +  day_1.Value - 1) / 7)

        $('.number').html(build_calendar(month_day_B, month_day_N, week.Value, day.Value))
        $('.month_year').children('p').html(month[prev_month].slice(0,month[prev_month].length - 2))

        let choose = document.getElementsByClassName('day')
        for (let i = 0; i < choose.length; i++)
        {
            if (document.addEventListener) {
                choose[i].addEventListener('click', () =>  ChooseCLickHandler(choose, i), false);
            }
        }

        month_1.Value = prev_month

        color(choose)
    }



    let first_date = {date: NaN, month: NaN, year: NaN, status: false}
    let second_date = {date: NaN, month: NaN, year: NaN, status: false}
    let number_of_choose = { value: 0}
    for (let i = 0; i < choose.length; i++)
    {
        if (document.addEventListener) {
            choose[i].addEventListener('click', () =>  ChooseCLickHandler(choose, i), false);
        }
    }

    function ChooseCLickHandler(choose, i) {
        console.log('ddfd')
        console.log(first_date.status)

        console.log(second_date.status)
        if( (first_date.status === true) && (second_date.status === true) ){
            ClearCLickHandler(choose)
            ChooseCLickHandler(choose, i)
        }

        if( first_date.status && !second_date.status ){
            second_date.date = parseInt($(choose[i]).children('p').html())
            second_date.year = year_1.Value
            console.log("8")
            if($(choose[i]).hasClass('next_m')){
                second_date.month = month_1.Value + 1
                if(second_date.month > 11){
                    second_date.month = 0
                    second_date.year++
                }
                console.log("7")
            }
            else{
                second_date.month = month_1.Value
                console.log("6")
            }
            if($(choose[i]).hasClass('previous_m')){
                second_date.month = month_1.Value - 1
                if(second_date.month < 0){
                    second_date.month = 11
                    second_date.year--
                }
                console.log("5")
            }

            if(second_date.month > first_date.month){
                //second_date.month++
                second_date.status = true
                $(choose[i]).addClass("second")
                console.log("4")
            }

            console.log(first_date.month)
            console.log(second_date.month)
            console.log(first_date.date)
            console.log(second_date.date)


            if((second_date.month === first_date.month) && (second_date.date > first_date.date)){
                second_date.status = true
                $(choose[i]).addClass("second")

                console.log("3")
            }
        }

        if(first_date.status === false){
            first_date.status = true
            first_date.date = parseInt($(choose[i]).children('p').html())
            first_date.year = year_1.Value

            if($(choose[i]).hasClass('next_m')){
                first_date.month = month_1.Value + 1
                if(first_date.month > 11){
                    first_date.month = 0
                    first_date.year++
                }
            }
            else{
                first_date.month = month_1.Value
            }
            if($(choose[i]).hasClass('previous_m')){
                first_date.month = month_1.Value - 1
                if(first_date.month < 0){
                    first_date.month = 11
                    first_date.year--
                }
            }
            $(choose[i]).addClass("first")
        }


        color(choose)

    }

    let clear = document.getElementsByClassName('clear')

    for (let i = 0; i < clear.length; i++)
    {
        if (document.addEventListener) {
            clear[i].addEventListener('click', () =>  ClearCLickHandler(choose), false);
        }
    }

    function ClearCLickHandler(choose){
        if((start.Value !== -1)&&(stop.Value !== -1)){
            for( let i = parseInt(start.Value); i < parseInt(stop.Value) + 1; i++){
                $(choose[i]).removeClass('color')
            }

        }


        if(first_date.status === true) $(choose[day_1.Value - (prev_day.Value - first_date.date) - 2]).removeClass("first")
        if(first_date.status === true) $(choose[first_date.date + day_1.Value - 2]).removeClass("first")
        if(first_date.status === true) $(choose[first_date.date + day_1.Value - 2 + now_day.Value]).removeClass("first")

        if(first_date.status === true) $(choose[day_1.Value - (prev_day.Value - first_date.date) - 2]).removeClass("first_one")
        if(first_date.status === true) $(choose[first_date.date + day_1.Value - 2]).removeClass("first_one")
        if(first_date.status === true) $(choose[first_date.date + day_1.Value - 2 + now_day.Value]).removeClass("first_one")

        if(second_date.status === true) $(choose[day_1.Value - (prev_day.Value - second_date.date) - 2]).removeClass("second")
        //console.log(day_1.Value - (prev_day.Value - first_date.date) - 1)
        if(second_date.status === true) $(choose[second_date.date + day_1.Value - 2]).removeClass("second")
        if(second_date.status === true) $(choose[second_date.date + day_1.Value - 2 + now_day.Value]).removeClass("second")

        second_date.status = false
        second_date.date = NaN
        second_date.month = NaN
        second_date.year = NaN

        first_date.status = false
        first_date.date = NaN
        first_date.month = NaN
        first_date.year = NaN

    }

    function color(choose) {
        if(first_date.status && second_date.status){

             start.Value = -1
             stop.Value = -1

            if ((month_1.Value - first_date.month) > 0) {
                if (first_date.date <= parseInt($(choose[0]).html())) start.Value = 0
                else start.Value = day_1.Value - (prev_day.Value - first_date.date) - 2
            }

            if (first_date.month === month_1.Value) {
                start.Value = day_1.Value + first_date.date - 2
            }

            if ((month_1.Value - first_date.month) < 0) {
                if (first_date.date < parseInt($(choose[(week.Value * 7 - 1)]).html())) {
                    start.Value = day_1.Value + now_day.Value + first_date.date - 2
                } else {
                    start.Value = -1
                }
            }



            if ((month_1.Value - second_date.month) > 0) {
                if (second_date.date > parseInt($(choose[0]).html())) stop.Value = day_1.Value - (prev_day.Value - second_date.date) - 2
                else stop.Value = -1
            }
            if (month_1.Value === second_date.month) {
                stop.Value = day_1.Value + second_date.date - 2
            }
            if ((month_1.Value - second_date.month) < 0) {
                if (second_date.date > parseInt($(choose[(week.Value * 7 - 1)]).html())) {
                    stop.Value = week.Value * 7 - 1
                } else {
                    stop.Value = day_1.Value + now_day.Value + second_date.date - 2
                }
            }



            if((start.Value !== -1)&&(stop.Value !== -1)){

                $(choose[start.Value]).removeClass('first')
                $(choose[start.Value]).addClass('first_one')

                for( let i = start.Value; i < stop.Value + 1; i++){
                    $(choose[i]).addClass('color')
                }

            }
            console.log('')
            console.log('')
            //if(first_date.month)
            // if(second_date.month === first_date.month){
            //     if(first_date.month === month_1.Value){
            //         for( let i = day_1.Value + first_date.date - 2; i < day_1.Value + second_date.date - 1; i ++){
            //             console.log(i)
            //         }
            //     }
            //
            //     if(first_date.date < parseInt($(choose[0]).html())){
            //         if(first_date.date === month_1.Value){
            //             for( let i = day_1.Value + first_date.date - 2; i < day_1.Value + second_date.date - 1; i ++){
            //                 console.log(i)
            //             }
            //         }
            //     }
            //
            //     if(first_date.date < parseInt($(choose[0]).html())){
            //         if(first_date.date === month_1.Value){
            //             for( let i = day_1.Value + first_date.date - 2; i < day_1.Value + second_date.date - 1; i ++){
            //                 console.log(i)
            //             }
            //         }
            //     }
            // }

            if((second_date.month - first_date.month) > 0){
                    for(let i = 0; i < second_date.date; i++){
                        //console.log('ddd3')
                }
            }

        }
    }

    color(choose)
}

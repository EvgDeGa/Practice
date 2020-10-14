import './room.scss';



export function room() {


    let first = document.getElementsByClassName('first_c')
    let second = document.getElementsByClassName('second_c')
    let third = document.getElementsByClassName('third_c')
    let total = document.getElementsByClassName('total_c')


    let total_c = parseInt($(first[0]).html().slice(0,-1))
    total_c += parseInt($(second[0]).html().slice(0,-1))
    total_c += parseInt($(third[0]).html().slice(0,-1))

    $(total[0]).html(total_c + '₽')


    console.log(total_c)




}

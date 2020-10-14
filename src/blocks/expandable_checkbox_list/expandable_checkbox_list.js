import './expandable_checkbox_list.scss';


export function expandable_checkbox_list() {
    let flag = {Value: true}
    // let drop = document.getElementsByClassName("expandable_checkbox_list")
    // drop[0].addEventListener("click", () => clicked(), false)

    function clicked() {

        $('.drop').toggle()
        if(flag.Value) {
            $('.drop_down').css({"transform": "rotate(180deg)"})
        }else{
            $('.drop_down').css({"transform": "rotate(0deg)"})
        }
        flag.Value = !flag.Value
    }
}


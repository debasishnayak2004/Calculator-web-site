// let btn = document.querySelectorAll(".button");
// let input = document.querySelector("input");
// let string = "";

// Array.from(btn).forEach(button => {
//     button.addEventListener("click", (e) => {
//         if(e.target.innerText == "="){
//             string = eval(string)
//             input.value = string
//         } else if(e.target.innerText == "AC"){
//             string = ""
//             input.value = string
        
//         }else if(e.target.innerText == "DC"){
//             string = string.toString().slice(0, -1);
//             input.value = string
        
//         }
//         else{
//             string = string + e.target.innerText;
//             input.value = string;
//         }
//     })
// })

let btn = document.querySelectorAll(".button");
let input = document.querySelector("input");
let string = "";

Array.from(btn).forEach(button => {
    button.addEventListener("click", (e) => {
        if(e.target.innerText == "="){
            string = eval(string)
            input.value = string
        }else if(e.target.innerText == "AC"){
            string = ""
            input.value = string
        }else if (e.target.innerText == "DC"){
            string = string.toString().slice(0, -1);
            input.value = string
        }else if(e.target.innerText == "x"){
            string = string + "*"
            input.value = string
        }else{
            string = string + e.target.innerText;
            input.value = string;
        }
    })
})
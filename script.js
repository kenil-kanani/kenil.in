let sun = document.querySelector(".sun")
let moon = document.querySelector(".moon")

sun.addEventListener("click" , () => {
    sun.classList.toggle("fa-sun")
    sun.classList.toggle("fa-moon")
    if (sun.classList.contains("fa-sun")) {
        document.body.style.backgroundColor = "#11111b"
        document.body.style.color = "White"
    }
    else{
        document.body.style.backgroundColor = "White"
        document.body.style.color = "#11111b"

    }
})

// Button Animation

const btn_arrow = document.querySelector(".arrow");
const btn = document.querySelector("#see-my-eork-btn");
btn.addEventListener("onmouseenter",()=>{
    btn_arrow.style.right = "10px";
})





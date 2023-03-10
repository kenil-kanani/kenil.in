// Theam JS

let sun = document.querySelector(".sun")
let moon = document.querySelector(".moon")
let lang = document.querySelectorAll(".lang")
let project = document.querySelectorAll(".project")
let a_nav = document.body.querySelectorAll(".menu-list a");

sun.addEventListener("click" , () => {
    sun.classList.toggle("fa-sun")
    sun.classList.toggle("fa-moon")
        lang.forEach(element => {
            element.classList.toggle("theam")     
        });
        project.forEach(element => {
            element.classList.toggle("theam")     
        });
    if (sun.classList.contains("fa-sun")) {
        document.body.style.backgroundColor = "#11111b"
        document.body.style.color = "White"
        a_nav.forEach((el) => {
            el.style.color = "White";
        })
    }
    else{
        document.body.style.backgroundColor = "White"
        document.body.style.color = "#11111b"
        a_nav.forEach((el) => {
            el.style.color = "Black";
        })

    }
})

// toggle class
function reuse() {
    document.body.querySelector(".nav_menu").classList.toggle("hig");
    document.body.querySelector(".change-fa").classList.toggle("fa-bars");
    document.body.querySelector(".change-fa").classList.toggle("fa-xmark");
}
document.body.querySelector(".bars").addEventListener("click" , reuse)

let a = document.body.querySelectorAll(".nav_menu a");

    a[0].addEventListener("click",reuse);
    a[1].addEventListener("click",reuse);
    a[2].addEventListener("click",reuse);
    a[3].addEventListener("click",reuse);




let next = document.getElementById("next");
let prev = document.getElementById("prev");

next.addEventListener("click",function(){
    let item = document.querySelectorAll(".item");
    document.querySelector(".slide").appendChild(item[0]);
})

prev.addEventListener("click",function(){
    let item = document.querySelectorAll(".item");
    document.querySelector(".slide").prepend(item[item.length -1]);
})
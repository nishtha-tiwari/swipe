var btn = document.querySelector("button");
var box = document.querySelector(".box");

btn.addEventListener("click",function(){
box.style.top = 0

setTimeout (function(){
    box.style.top = "-50%"
},3000)


})

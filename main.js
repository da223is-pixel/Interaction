const pizzas= document.querySelectorAll(".pizza")
let index=0;
const leftBtn= document.getElementById("leftBtn")
const rightBtn= document.getElementById("rightBtn")

if (rightBtn&&pizzas.length>0){
rightBtn.onclick= function(){
    pizzas[index].classList.remove("active")
    index++
    if(index>=pizzas.length){
        index=0
    }
    pizzas[index].classList.add("active")
}

leftBtn.onclick= function(){
    pizzas[index].classList.remove("active")
    index--
    if(index<0){
        index= pizzas.length-1
    }
    pizzas[index].classList.add("active")
}}
const currentPage= window.location.pathname.split("/").pop();
const links= document.querySelectorAll("nav a")

links.forEach(link=> {
    const linkPages= link.getAttribute("href").split("/").pop();
    if(linkPages=== currentPage){
        link.classList.add("active")
    }
});

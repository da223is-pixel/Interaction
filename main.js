const pizzas= document.querySelectorAll(".pizza")
let index=0;
const leftBtn= document.getElementById("leftBtn")
const rightBtn= document.getElementById("rightBtn")

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
}


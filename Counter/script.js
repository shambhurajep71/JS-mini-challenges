let counter=document.querySelector("#counter");
let add= document.querySelector("#add");
let sub = document.querySelector("#sub");
let reset= document.querySelector("#reset");
let incrementOrDecrementBy= document.querySelector("#increment_decrement");

add.addEventListener("click", (event)=> {
    let currentNum= parseInt(counter.innerText);
    let changeBy= parseInt(incrementOrDecrementBy.value);
    counter.innerText=changeBy+currentNum;
});
sub.addEventListener("click", (event)=> {
    let currentNum=parseInt(counter.innerText);
    let changeBy = parseInt(incrementOrDecrementBy.value);
    if((currentNum-changeBy)<=0){
        counter.innerText=0;
    }else {
        counter.innerText=currentNum-changeBy;
    }
});

reset.addEventListener("click",()=> {
    counter.innerText=0;
    incrementOrDecrementBy.value=1;
})
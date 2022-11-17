let count=0;
const value= document.querySelector("#value");
function decrease(){
    count--;
    value.innerText=count;
    value.style.color="red";
}
function reset(){
    count=0;
    value.innerText=count;
    value.style.color="black"
}
function increase(){
    count++;
    value.innerText=count;
    value.style.color="green";
}
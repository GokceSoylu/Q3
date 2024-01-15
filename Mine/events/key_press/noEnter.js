const right=document.querySelector("#right");
const left=document.querySelector("#left");

right.addEventListener("keydown",event=>
{
    alert("it is forbidden to send the form");
    event.preventDefault();
})
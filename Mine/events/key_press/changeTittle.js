const txt=document.querySelector("#txt");
const title=document.querySelector("#the_title");

txt.addEventListener("keyup",event=>
{
    title.textContent=event.target.value;
})
const lastButton=document.querySelector("#last_button");
lastButton.addEventListener("click",event=>
{
    const lastDiv=document.querySelector("#last_div");
    const img_new=document.createElement("img");
    img_new.src="/Users/necmiyesoyla/Q3/Mine/events/img/fuck_off.jpeg";
    img_new.width=200;
    img_new.alt="hell";
    lastDiv.appendChild(img_new);
})    
const right_txt=document.querySelector("#right");
const left_txt=document.querySelector("#left");

right_txt.addEventListener("keydown",run);
left_txt.addEventListener("keyup",run);

function run(e)
{
    console.log(e.key);
}
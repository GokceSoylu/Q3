const txt1=document.querySelector("#text_1");
const txt2=document.querySelector("#text_2");

txt1.addEventListener("copy",run);
txt2.addEventListener("paste",run);

function run(e)
{
    console.log(e.type);
}
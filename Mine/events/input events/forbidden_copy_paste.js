const forbidden_text=document.querySelector("#forbidden_copy_paste");

forbidden_text.addEventListener("copy",fun);
forbidden_text.addEventListener("paste",fun);

function fun(e)
{
    alert("it's forbidden to copy and paste");
    e.preventDefault();
}
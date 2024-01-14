const buttonMore=document.querySelector("#button_more");

buttonMore.addEventListener("click",theFunc);

function theFunc(e)
{
    alert("beni beni bihterini");
    console.log("type "+e.type);
    console.log("target "+e.target);
    console.log("textContent "+e.target.textContent);
    console.log("class name "+e.className);
}
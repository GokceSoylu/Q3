const area=document.querySelector("#theArea");

area.addEventListener("mouseover",run);

function run(e)
{
    console.log("meydan "+e.type);
}



const area_small1=document.querySelector("#small1");
area_small1.addEventListener("mouseover",run_small1);

function run_small1(e)
{
    console.log("sol "+e.type);
}


const area_small2=document.querySelector("#small2");
area_small2.addEventListener("mouseover",run_small2);
function run_small2(e)
{
    console.log("sağ "+e.type);
}
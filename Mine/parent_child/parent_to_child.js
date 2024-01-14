let val=document.querySelector(".mom1");
console.log(val.children[val.children.length-1]);

let val_arr=Array.from(val.children);
console.log("bfr\n");


function chl(obj)
{
    console.log(obj.textContent)
}
val_arr.forEach(chl);
console.log("\naftr");


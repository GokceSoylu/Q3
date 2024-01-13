//!searche yazılan değeri butonun adı yapalım
let value_=document.getElementById("the_button");
console.log(value_.textContent)

value_.addEventListener("click",event=>
{
    let search_box=document.getElementById("new_name");
    let search_box_text=search_box.value;
    console.log(search_box);
    value_.textContent=search_box_text;
})
//! Selectors
//classname, id, tag bilgilerine ulaşabılırıiz
//getEleemntById ile id ile eleemneti yakalar
//getElementByClassName class ismiyle seçme
//getElementByTagName tagına göer işete seçiyorsun

//ama kral bu üçünün yaptığını tek başına yapan tüm yükleri sırtlanan bir babayiğit var querySelector :)))

let value;
let value_text=document.getElementById("new_name");
value=document.getElementById("the_button");

console.log(value);

console.log(value.id);
console.log("second ",value.getAttribute("id"));

console.log(value.className);
console.log("second",value.getAttribute("class"));

// const value_classList=value.classList;
// console.log(value_classList);

// value.textContent="tıkla gelsin";
// value.innerHTML="<b>Tıkla gelsin</b>";






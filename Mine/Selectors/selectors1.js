//! Selectors
//classname, id, tag bilgilerine ulaşabılırıiz
//getEleemntById ile id ile eleemneti yakalar

let value;
value=document.getElementById("the_button");
console.log(value);
console.log(value.id);
console.log("second ",value.getAttribute("id"));
console.log(value.className);
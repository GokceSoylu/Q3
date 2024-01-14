const button_new=document.createElement("button");
button_new.id="taze_kan";
button_new.innerHTML="tıklama";
button_new.className="btn btn-dark btn-sm mt-3";

let card=document.querySelector(".card");
card.appendChild(button_new);

console.log("run");
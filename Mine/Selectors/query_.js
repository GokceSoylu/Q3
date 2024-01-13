//hocam burada anlatmak istediğimiz şey byid byclasssname de falan direkt arkadaşın adını yazarız tırmünak içinde ama querySelector da
//hangi attribute'u kullancağımız  bilmediği için id kullanacapımız zamaan anlaşılması için # koyarız naşa :))
const tik=document.querySelector("#tıkla");

tik.addEventListener("click",event=>
{
   alert("niye tıklıyon birader");
});
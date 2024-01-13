//hocam burada anlatmak istediğimiz şey byid byclasssname de falan direkt arkadaşın adını yazarız tırmünak içinde ama querySelector da
//hangi attribute'u kullancağımız  bilmediği için id kullanacapımız zamaan anlaşılması için # koyarız naşa :))
const tik=document.querySelector("#tıkla");

tik.addEventListener("click",event=>
{
   alert("niye tıklıyon birader");
});


//stle objesi ile js kullanarak css özellikleri ekleme
tik.style.margin="50px";
tik.style.padding="10px";
tik.style.borderRadius="10px";
tik.style.backgroundColor="red";
tik.style.color="white";
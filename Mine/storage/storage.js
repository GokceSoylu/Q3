//hocam öncelikle hem session hem local storage window objesinin elemanları bu yüzden hiç window yazmadan da ulaşabiliriz

sessionStorage.setItem(1,"kemal");
sessionStorage.setItem(2,"hasan sabbah");
sessionStorage.setItem(3,"fendiye");
sessionStorage.setItem(4,"halil");
sessionStorage.setItem(5,555);

sessionStorage.removeItem(4);
let value=sessionStorage.getItem(5);

console.log("type of the 5th "+typeof value);


let arr=["neco","hasan sabbah","murat","juancho"];
sessionStorage.setItem("names",JSON.stringify(arr));
console.log("ucalım ",JSON.parse(sessionStorage.getItem("names")));


//sessionStorage.clear(); //hepsini siler
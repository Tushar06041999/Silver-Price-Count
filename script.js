let goldRate=document.getElementById("rate");
let perAna=document.getElementById("ana");
let perRoti=document.getElementById("roti");
let perPoint=document.getElementById("point");

let totalBuy=document.getElementById("buy");
let totalPrice=document.getElementById("total");

let subBtn=document.getElementById("btn1");
let clean=document.getElementById("btn2");
let resultBtn=document.getElementById("btn3");


subBtn.addEventListener("click",function(){
    let price=goldRate.value;
    let price1=parseInt(price);
    let peranaP=price1/16;


    let rotiprice=peranaP/6;

    let pointprice=rotiprice/10;
    perAna.value=peranaP;
    perRoti.value=rotiprice;
    perPoint.value=pointprice;
})


resultBtn.addEventListener("click",function(){
    let update=perAna.value*totalBuy.value;
    totalPrice.value=update;
})


clean.addEventListener("click",function(){
    goldRate.value="";
    perAna.value="";
    perRoti.value="";
    perPoint.value="";
    totalBuy.value="";
    totalPrice.value="";

})
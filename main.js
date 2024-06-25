var dollar = 12.500;
var euro = 13.500;

var ticket = 500;
var hotel = 250;
var museum = 120;

var myMoney = Number(prompt("Iltimos pulingizni qiymatini kiriting"));


if((dollar.toFixed(3)*(ticket+hotel)+euro.toFixed(3)*museum)*1000 <= myMoney){
  console.log("Sayohat uchun oq yol janob");
}
else {
  console.log("Yana ozroq pul topishiz kerak");
}

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
var today = d.getHours();

$(document).ready(function(){
  setInterval(callme,1500);
})

function callme(){
  $("#status").animate({opacity:0.5}).animate({opacity:1.5});
}

if(day!="Sunday")
{
  if (today >= 10 && today <= 22) {
   $("#status").text("OPEN");
   // alert(today);
  } else {
    $("#status").text("CLOSED");
  }
}
else
{
  if (today >= 11 && today <= 16) {
   $("#status").text("OPEN");
  } else {
    $("#status").text("CLOSED");
  }
}

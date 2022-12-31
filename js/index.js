const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
var today = d.getHours();

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

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
if(day!="Sunday")
{
  var today = new Date().getHours();
  if (today >= 10 && today <= 22) {
   $(#status).text("OPEN");
  } else {
    $(#status).text("CLOSED");
  }
}
else
{
  var today = new Date().getHours();
  if (today >= 11 && today <= 16) {
   $(#status).text("OPEN");
  } else {
    $(#status).text("CLOSED");
  }
}

var d = '20/02/1990';
var d = new Date();
var n = d.getDay();

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
function calculating day(){
  year = document.getElementById ('year').value;
  CC = parseInt(year.substring(0,2));
  d = (((CC/4) -2*CC-1) + ((5*YY/4)) + ((26 * (MM+1)/10)) DD )mod 7
  return (math.floor(d));
}
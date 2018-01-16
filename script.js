function displayTime(){
  var date = new Date();
  var year= date.getYear();
  if(year < 1000){
    year +=1900
  }
  var day = date.getDay();
  var month = date.getMonth();
  var monthDay = date.getDate();
  var dayArray = new Array("Sunday","Monday","Tuesday","WeWednesday","Thursday","Friday","Saturday");
  var monthArray = new Array("January","Febuary","March","April","May","June","July","August","September","October","November","December")

  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  if(hours == 24){
  hours = 0;
} else if(hours > 12){
  hours = hours - 0;
}

if(hours < 10){
  hours = "0" + hours;
}
if(minutes < 10){
  minutes = "0" + minutes;
}

if(seconds < 10){
  seconds = "0" + seconds;
}


var time = dayArray[day]+ ","+ " " +monthArray[month]+ " " +monthDay+ ","+ " " +year+ " | " +hours+ " : " +minutes+ " : " +seconds;
document.getElementById("showDate").innerHTML = time;

setTimeout("displayTime()",500)

}


//https://www.youtube.com/watch?v=HyhVjHGb19k&t=1108s

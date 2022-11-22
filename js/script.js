
var input = document.getElementById("location_name_field");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    input.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  usrlocation = position.coords.latitude + "," + position.coords.longitude;
  console.log(usrlocation);
  document.getElementById('location_name_field').value = usrlocation;
}






function returnLocation(){
  var input = document.getElementById("location_name_field").value;

  alert(input)
  
  var myRequest = new XMLHttpRequest();
  myRequest.onreadystatechange = function(){
  if (myRequest.readyState === 4) {
  if (myRequest.status === 200)
  var myArray = JSON.parse(myRequest.responseText);
  parseData(myArray);
  }
  }



  let site = myRequest.open('GET', 'https://weatherdbi.herokuapp.com/data/weather/' + input, true);
  
  
  myRequest.send();

  function parseData(arr) {

  console.log(arr);

  usrRegion = arr.region;
  usrDayHr = arr.currentConditions.dayhour;
  usrTempCel = arr.currentConditions.temp.c;
  usrTempFah = arr.currentConditions.temp.f;
  usrPrecip = arr.currentConditions.precip;
  usrHumidity = arr.currentConditions.humidity;
  usrWindKM = arr.currentConditions.wind.km;
  usrWindMile = arr.currentConditions.wind.mile;
  usrComment = arr.currentConditions.comment;
  usrIcon = arr.currentConditions.iconURL;

  console.log(arr.region);
  console.log(arr.currentConditions);
  console.log(arr.currentConditions.dayhour);
  console.log(arr.currentConditions.temp);
  console.log(arr.currentConditions.precip);
  console.log(arr.currentConditions.humidity);
  console.log(arr.currentConditions.wind);
  console.log(arr.currentConditions.comment);



  
  const icon = document.querySelector("#weather-icon");

  document.getElementById('Region').innerHTML = 'Region: ' + usrRegion;
  document.getElementById('DayHour').innerHTML = 'Time: ' + usrDayHr;
  document.getElementById('Temp').innerHTML = 'Temperature: ' + usrTempCel + "\u2103/" + usrTempFah + 	"\u2109";
  document.getElementById('Precip').innerHTML = 'Precipitation: ' + usrPrecip;
  document.getElementById('Humidity').innerHTML = 'Humidity: ' + usrHumidity;
  document.getElementById('Wind').innerHTML = 'Wind: ' + usrWindKM + "km/" + usrWindMile + "mi";
  document.getElementById('Comment').innerHTML = 'Comment: ' + usrComment;
  icon.src = usrIcon;


  }

}

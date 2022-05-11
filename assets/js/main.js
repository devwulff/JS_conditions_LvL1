let age = document.getElementById("age");
let output = document.getElementById("output");
let weather = document.getElementById("weather");
let output2 = document.getElementById("output2");

function adult() {
  event.preventDefault();
  if (age.value >= 18) {
    console.log("true");
    output.innerHTML = "Ja du kannst Shisha rauchen";
    return true;
  } else {
    console.log("false");
    output.innerHTML = "Du darfst noch nicht Shisha rauchen";
    return false;
  }
}

function getweather() {
  if (weather.value >= 8 && weather.value <= 10) {
    output2.innerHTML = "super";
  } else if (weather.value >= 6 && weather.value <= 7) {
    output2.innerHTML = "gut";
  } else if (weather.value >= 3 && weather.value <= 5) {
    output2.innerHTML = "okay";
  } else if (weather.value >= 0 && weather.value <= 2) {
    output2.innerHTML = "schlecht";
  }
}

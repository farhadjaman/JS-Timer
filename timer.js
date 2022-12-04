
function currentTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  document.getElementById("clock").innerText = hour + " : " + min + " : " + sec;
  setTimeout(function () { currentTime() }, 1000);
}
currentTime();
const intervalID = setInterval(myCallback, 1000);

function myCallback() {
  console.log(Date.now());
}
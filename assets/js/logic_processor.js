import { sistemState } from "./kernel_clock.js";
export function processLogic(currentTime) {
  const s = currentTime;
  let color = "";

  // 🔥 PRIORIDAD: amarillo > rojo > verde
  if (s % 5 === 0) {
    color = "yellow";
    document.getElementById(color).classList.add("active");
    document.getElementById("red").classList.remove("active");
    document.getElementById("green").classList.remove("active");
    // log
    var calculatedTime = new Date(null);
    calculatedTime.setSeconds(currentTime); // setting value in seconds
    var newTime = calculatedTime.toISOString().substr(11, 8);
    const msg = "[" + newTime + "] Change to " + color.toUpperCase();

    sistemState.logs.push(msg);

    const log = document.getElementById("system-log");
    log.innerHTML += msg + "<br>";
    log.scrollTop = log.scrollHeight;
  } else if (isPrime(s)) {
    color = "red";
    document.getElementById(color).classList.add("active");
    document.getElementById("yellow").classList.remove("active");
    document.getElementById("green").classList.remove("active");
    // log
    var calculatedTime = new Date(null);
    calculatedTime.setSeconds(currentTime); // setting value in seconds
    var newTime = calculatedTime.toISOString().substr(11, 8);
    const msg = "[" + newTime + "] Change to " + color.toUpperCase();

    sistemState.logs.push(msg);

    const log = document.getElementById("system-log");
    log.innerHTML += msg + "<br>";
    log.scrollTop = log.scrollHeight;
  } else if (s % 3 === 0) {
    color = "green";
    document.getElementById(color).classList.add("active");
    document.getElementById("red").classList.remove("active");
    document.getElementById("yellow").classList.remove("active");
    // log
    var calculatedTime = new Date(null);
    calculatedTime.setSeconds(currentTime); // setting value in seconds
    var newTime = calculatedTime.toISOString().substr(11, 8);
    const msg = "[" + newTime + "] Change to " + color.toUpperCase();

    sistemState.logs.push(msg);

    const log = document.getElementById("system-log");
    log.innerHTML += msg + "<br>";
    log.scrollTop = log.scrollHeight;
  } else {
    document.getElementById("red").classList.remove("active");
    document.getElementById("yellow").classList.remove("active");
    document.getElementById("green").classList.remove("active");
    // log
    var calculatedTime = new Date(null);
    calculatedTime.setSeconds(currentTime); // setting value in seconds
    var newTime = calculatedTime.toISOString().substr(11, 8);
    const msg = "[" + newTime + "] Turn off ";

    sistemState.logs.push(msg);

    const log = document.getElementById("system-log");
    log.innerHTML += msg + "<br>";
    log.scrollTop = log.scrollHeight;
  }
}

// función simple primo
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

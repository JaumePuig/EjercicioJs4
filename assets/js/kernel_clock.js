import { processLogic } from "./logic_processor.js";
export let sistemState = { time: 0, status: "BOOTING", logs: [] };
const timer = document.getElementById("timer");

setInterval(update, 1000);
console.log(sistemState.time);
function update() {
  sistemState.time = sistemState.time + 1;
  processLogic(sistemState.time);
  timer.textContent = sistemState.time;
  if (
    sistemState.time >= 60 &&
    sistemState.status != "MAINTENANCE"
  ) {
    alert("SYSTEM CRITICAL FAILURE");
    sistemState.time = 0;
    processLogic(sistemState.time);
    timer.textContent = sistemState.time;
  }
}

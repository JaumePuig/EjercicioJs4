function processLogic(currentTime) {
    const s = currentTime.getSeconds();
    let color = "";

    // 🔥 PRIORIDAD: amarillo > rojo > verde
    if (s % 5 === 0) {
        color = "yellow";
    } else if (isPrime(s)) {
        color = "red";
    } else if (s % 3 === 0) {
        color = "green";
    }

    if (color !== window.systemState.currentLight) {
        window.systemState.currentLight = color;

        // apagar todas
        document.getElementById("red").classList.remove("active");
        document.getElementById("yellow").classList.remove("active");
        document.getElementById("green").classList.remove("active");

        // encender una
        document.getElementById(color).classList.add("active");

        // log
        const time = currentTime.toLocaleTimeString("es-ES", { hour12: false });
        const msg = "[" + time + "] Change to " + color.toUpperCase();

        window.systemState.logs.push(msg);

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
// Función para escribir el texto
function escribirTexto() {
    const texto = '¡Feliz Cumpleaños mi amor 🎂!';
    let i = 0;
    const elementoTexto = document.querySelector(".textLove");

    const intervaloEscribir = setInterval(() => {
        elementoTexto.textContent += texto[i];
        i++;

        if (i === texto.length) {
            clearInterval(intervaloEscribir);
        }
    }, 100);
}

window.addEventListener("load", () => {
    const duracionAlarma = 10;
    const milisegundosPorSegundo = 1000;

    const elementoTimer = document.querySelector(".timer");

    let ahora = Date.now();
    let tiempoAlarma = ahora + (duracionAlarma * milisegundosPorSegundo);

    const intervaloCuentaAtras = setInterval(() => {
        ahora = Date.now();
        const milisegundosRestantes = tiempoAlarma - ahora;

        const segundosRestantes = `0${Math.floor(milisegundosRestantes / 1000)}`;
        const milisegundos = (`00${milisegundosRestantes % 1000}`).slice(-3);

        const textoCuentaAtras = `${segundosRestantes}:${milisegundos}`;

        elementoTimer.innerHTML = textoCuentaAtras;

        if (milisegundosRestantes <= 0) {
            clearInterval(intervaloCuentaAtras);
            elementoTimer.style.display = "none";
            escribirTexto();
        }
    }, 1);
});

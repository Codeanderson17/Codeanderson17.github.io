const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
const botonAdivinar = document.getElementById("adivinar");
const inputNumero = document.getElementById("numero");
const resultado = document.getElementById("resultado");
let intentos = 0;

botonAdivinar.addEventListener("click", function() {
  const numeroIngresado = parseInt(inputNumero.value);
  
  if (numeroIngresado === 7) {
    intentos++;
    resultado.textContent = `¡Correcto porque 7 y 7 da 14 y tu y yo la vamos a pasar juntos esa fecha! Adivinaste el número en ${intentos} intentos.`;
    botonAdivinar.disabled = true;
  } else if (numeroIngresado < 7) {
    intentos++;
    resultado.textContent = "El número es mayor. Intenta de nuevo.";
  } else {
    intentos++;
    resultado.textContent = "El número es menor. Intenta de nuevo.";
  }
});

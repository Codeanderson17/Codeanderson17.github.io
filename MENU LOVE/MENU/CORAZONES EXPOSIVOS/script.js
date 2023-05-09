function createHeart() {
    // Crea un elemento <div> para el corazón
    var heart = document.createElement("div");
    heart.classList.add("heart");
  
    // Calcula una posición aleatoria en la pantalla
    var x = Math.random() * (window.innerWidth - 50);
    var y = Math.random() * (window.innerHeight - 50);
    heart.style.left = x + "px";
    heart.style.top = y + "px";
  
    // Agrega el corazón al cuerpo del documento
    document.body.appendChild(heart);
  
    // Agrega un evento "click" al corazón
    heart.addEventListener("click", function() {
      // Reproduce una frase de amor al explotar el corazón
      var phrases = ["Eres el amor de mi vida", "Te amo más que a nada en este mundo", "Mi corazón late por ti", "Eres mi razón de ser","De nadie seré, sólo de ti. Hasta que mis huesos se vuelvan cenizas y mi corazón deje de latir","Andábamos sin buscarnos, pero sabiendo que andábamos para encontrarnos","Cuando mi voz calle con la muerte, mi corazón te seguirá amando","Miro las estrellas y ahí estas tu, cierro los ojos y ahí estas tú, siento con el corazón y ahí estas tú."," No sé hacia dónde vamos, solo sé que quiero ir contigo."," Ayer eras mi capricho. Hoy eres mi amor. Mañana serás mi vida.","Dime dónde y nos perdemos juntos.","Tu sonrisa es el paraíso.","Eres un pedazo del cielo en esta tierra."];
      var randomIndex = Math.floor(Math.random() * phrases.length);
      var audio = new Audio("amor.mp3");
      audio.play();
      alert(phrases[randomIndex]);
  
      // Elimina el corazón de la pantalla
      heart.parentNode.removeChild(heart);
    });
  
    // Elimina el corazón después de 5 segundos
    setTimeout(function() {
      heart.parentNode.removeChild(heart);
    }, 5000);
  }
  setInterval(createHeart, 1000);

  
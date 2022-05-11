var aleatorio = Math.floor(Math.random() * 10) + 1;
var intentos = 0;
var correcto = false;

document.getElementById("myButton").onclick = function () {
  location.href = "nivel1.html";
}

function niv1(){
  alert("Dificultad Fácil. No hay límite de intentos.");
  
  while(correcto == false){
    var entrada = prompt("Introduzca un número del 1 al 10: ");
    if (entrada == null){
      return;
    }
    intentos ++;
    if(entrada == aleatorio){
      alert("Correcto! Usaste " + intentos + " intentos.");
      correcto = true;
      document.getElementById('resul').innerHTML = intentos;
      document.getElementById('num').innerHTML = aleatorio;
    }else
      {
        alert(entrada + " no es el número correcto, intentos usados: " + intentos);
      }
  }
}

function niv2(){
  alert("Dificultad Intermedia. 10 intentos.");

  while (correcto == false && intentos < 10) {
    var entrada = prompt("Introduzca un número del 1 al 10: ");
    if (entrada == null){
      return;
    }
    intentos++;
    if (entrada == aleatorio) {
      alert("Correcto! Usaste " + intentos + " intentos.");
      correcto = true;
      document.getElementById('resul').innerHTML = intentos;
      document.getElementById('num').innerHTML = aleatorio;
    } else
    {
      alert(entrada + " no es el número correcto, intentos usados: " + intentos);
    }
  }
  if (intentos == 10){
    alert("Game Over, no acertaste al número correcto.")
    document.getElementById('fallo').innerHTML = "El número correcto era: " + aleatorio2;
    
  }
}

function niv3(){
  alert("Dificultad Difícil. 3 intentos.");

  while (correcto == false && intentos < 5) {
    var entrada = prompt("Introduzca un número del 1 al 10: ");
    if (entrada == null){
      return;
    }
    intentos++;
    if (entrada == aleatorio) {
      alert("Correcto! Usaste " + intentos + " intentos.");
      correcto = true;
      document.getElementById('resul').innerHTML = intentos;
      document.getElementById('num').innerHTML = aleatorio;
    } else
    {
      alert(entrada + " no es el número correcto, intentos usados: " + intentos);
    }
  }
  if (intentos == 5) {
    alert("Game Over, no acertaste al número correcto.")
    document.getElementById('fallo').innerHTML = "El número correcto era: " + aleatorio2;
    }
  }
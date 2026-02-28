const input = document.getElementById("inputText");
const button = document.getElementById("reverseBtn");
const output = document.getElementById("output");

function reverseString(str) {
  return Array.from(str).reverse().join("");
}

function update() {
  const value = input.value || "";

  // Mostrar botón solo si > 3 caracteres
  if (value.length > 3) {
    button.hidden = false;
  } else {
    button.hidden = true;
  }

  // resultado en tiempo real
  output.textContent = reverseString(value);
}

// realtime
input.addEventListener("input", update);

// fallback por si alguien pulsa el botón
button.addEventListener("click", update);

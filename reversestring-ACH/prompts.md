
# chat gpt 5.2

## prompt

Crea una página web con lógica en javascript que invierta el orden de una cadena de texto. necesitare el codigo javascript en un script.js y crea la interfaz en el archivo index.html que t eacabo de adjuntar Ejemplo: si introduzco AI4Devs devuelve sveD4IA. no hagas codigo de mas, hazlo simple. usa css simple y html simple no hace faltra ninguna libreria externa. añade una caja de texto donde escribir y debajo , por ejemplo invierta el nombre  
  

## prompt 2
  
ahora quiero añadir una nueva funcionalidd 1.El botón debe aparecer cuando haya texto suficiente, más de 3 letras 2. Que te de la cadena en tiempo real, que no dependa del botón.

## correción de coderabbit
Verify each finding against the current code and only fix it if needed.

In `@reversestring-ACH/index.html` at line 26, Create a new script.js in
reversestring-ACH that implements the button visibility logic: query the DOM for
the input element and the button by id ("reverseBtn"), add an input event
listener that shows the button only when the input length > 3 and hides it
otherwise, and attach any reverse-string click handler there as needed; ensure
the file is referenced by the existing <script src="script.js"></script> in
index.html. As a progressive-enhancement fallback, add the hidden attribute to
the <button id="reverseBtn"> element so it starts hidden if the script fails to
load.
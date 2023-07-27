const convertButton = document.getElementById('convertButton');
const textInput = document.getElementById('textInput');
const resultDiv = document.getElementById('result');
const routeText = document.getElementById('routeText');

const apiRoute = 'https://kotoneapi.dorikyh.repl.co/api/text-to-binary/convert';

convertButton.addEventListener('click', () => {
  const text = textInput.value;
  if (!text) {
    resultDiv.textContent = 'Please enter some text';
    return;
  }

  // Actualizar la URL de la API con el valor del cuadro de entrada
  const apiURL = `${apiRoute}?text=${encodeURIComponent(text)}`;

  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      resultDiv.textContent = `Result in binary: ${data.binary}`;
    })
    .catch((error) => {
      resultDiv.textContent = 'Error converting text';
      console.error(error);
    });
  routeText.textContent = `API Route: ${apiURL}`;
});

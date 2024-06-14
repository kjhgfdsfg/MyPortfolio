function calculate() {
  var height = parseFloat(document.getElementById('height').value);
  var width = parseFloat(document.getElementById('width').value);
  var length = parseFloat(document.getElementById('length').value);

  var finalVelocity = height * width * length;
  var distance = 2*(height*width)*length;

  document.getElementById('result').innerHTML = `
    <p>Объем: ${finalVelocity.toFixed(2)} м^2</p>
    <p>Площадь: ${distance.toFixed(2)} м</p>
  `;
}
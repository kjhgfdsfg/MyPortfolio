function calculate() {
  var height = parseFloat(document.getElementById('height').value);


  var finalVelocity = Math.pow(height, 3);
  var distance = 6*Math.pow(height,2);

  document.getElementById('result').innerHTML = `
    <p>Объем: ${finalVelocity.toFixed(2)} м^2</p>
    <p>Площадь: ${distance.toFixed(2)} м</p>
  `;
}
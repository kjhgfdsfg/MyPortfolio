function calculate() {
  var radius = parseFloat(document.getElementById('radius').value);
  var length = parseFloat(document.getElementById('length').value);

  var distance = 2*3.14*radius*length;
  var finalVelocity = 3.14*Math.pow(radius, 2)*length;

  document.getElementById('result').innerHTML = `
    <p>Объем: ${finalVelocity.toFixed(2)} м^3</p>
    <p>Площадь: ${distance.toFixed(2)} м^2</p>
  `;
}
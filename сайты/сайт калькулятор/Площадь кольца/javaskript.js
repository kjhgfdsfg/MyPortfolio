function calculate() {
  var Radius = parseFloat(document.getElementById('Radius').value);
  var Radiusvn = parseFloat(document.getElementById('Radiusvn').value);

  var finalVelocity = 3.14*(Math.pow(Radius, 2)-Math.pow(Radiusvn, 2));

  document.getElementById('result').innerHTML = `
    <p>Площадь: ${finalVelocity.toFixed(2)} м^2</p>
  `;
}
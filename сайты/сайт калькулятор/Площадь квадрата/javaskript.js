function calculate() {
  var base = parseFloat(document.getElementById('base').value);

  var finalVelocity = Math.pow(base, 2);
  var distance = 4 * base;

  document.getElementById('result').innerHTML = `
    <p>Площадь: ${finalVelocity.toFixed(2)} м^2</p>
    <p>Периметр ${distance.toFixed(2)} м</p>
  `;
}
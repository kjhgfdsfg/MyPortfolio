function calculate() {
  var height = parseFloat(document.getElementById('height').value);
  var width = parseFloat(document.getElementById('width').value);
  var length = parseFloat(document.getElementById('length').value);

  var finalVelocity = width+length+height;
  var distance = (height*width)/2;

  document.getElementById('result').innerHTML = `
    <p>Периметр: ${finalVelocity.toFixed(2)} м^2</p>
    <p>Площадь: ${distance.toFixed(2)} м</p>
  `;
}
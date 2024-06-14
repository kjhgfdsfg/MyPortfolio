function calculate() {
  var acceleration = parseFloat(document.getElementById('acceleration').value);
  var time = parseFloat(document.getElementById('time').value);

  var finalVelocity = acceleration * time;
  var distance = (acceleration * Math.pow(time, 2))/2;

  document.getElementById('result').innerHTML = `
    <p>Скорость в конце пути: ${finalVelocity.toFixed(2)} м/c</p>
    <p>Путь, пройденный за время ${time} с: ${distance.toFixed(2)} м</p>
  `;
}
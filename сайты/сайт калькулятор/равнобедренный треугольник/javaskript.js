function calculate() {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (!isNaN(base) && !isNaN(height)) {
      const area =(base * height) /2;
      const angle = Math.atan(height / (base / 2)) * (180 / Math.PI);
      
      document.getElementById('result').innerHTML = `
        <p>Площадь треугольника: ${area.toFixed(2)}</p>
        <p>Угол при основании (в градусах): ${angle.toFixed(2)}</p>
      `;
    } else {
      document.getElementById('result').innerHTML = '<p>Пожалуйста, введите числовые значения.</p>';
    }
  }
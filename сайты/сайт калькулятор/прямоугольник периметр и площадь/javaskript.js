function calculate() {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (!isNaN(base) && !isNaN(height)) {
      const area = base * height;
      const angle = 2*(base + height);
      
      document.getElementById('result').innerHTML = `
        <p>Площадь прямоугольника: ${area.toFixed(2)}</p>
        <p>Периметр прямоугольника: ${angle.toFixed(2)}</p>
      `;
    } else {
      document.getElementById('result').innerHTML = '<p>Пожалуйста, введите числовые значения.</p>';
    }
  }
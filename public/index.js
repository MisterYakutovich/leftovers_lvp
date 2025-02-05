
function calculateAntifakeBarrier() {
    const select = document.getElementById('density-barrier');
    const selectOption = parseFloat(select.value);
    const radius = document.getElementById('radius-barrier').value;
    if (radius == 0) {
      document.getElementById('result-barrier').innerHTML = `Остаток антификального барьера: 0 кг`;
    }
    else if (radius > 0 && radius <= 360){
        const diameter = radius * 2 + 91.8    
        const volume = Math.PI * (Math.pow(diameter, 2) - 8464); //mm
        const length = volume / 0.31852;
        const result = length / 1000 //m
        const weight = result * 0.12 * selectOption / 1000;
        document.getElementById('result-barrier').innerHTML = `Остаток антификального барьера: ${weight.toFixed(3)} кг`;
    }
    else if (radius > 360){
        document.getElementById('result-barrier').innerHTML = `Значение не может превышать 360 мм`;
    }
    else {
        document.getElementById('result-barrier').innerHTML = `Пожалуйста, введите корректное значение в миллиметрах`;
    }
}

function calculateSpanbond() {
    const selectSpanbond = document.getElementById('density-spanbond');
    const selectWidthSpanbond = document.getElementById('width-spanbond').value;
    const selectSpanbondOption = parseFloat(selectSpanbond.value);
    const radius = document.getElementById('radius-spanbond').value;
    if (radius == 0) {
        document.getElementById('result-spanbond').innerHTML = `Остаток спанбонда: 0 кг`;
      }
    else if (radius > 0 && radius <= 370){
        const diameter = radius * 2 + 91.5
        const volume = Math.PI * (Math.pow(diameter, 2) - 8372.25); //mm
        const length = volume / 0.3064;
        const result = length / 1000 //m
        const weight = (result * (+selectWidthSpanbond/1000) * +selectSpanbondOption) / 1000;
        document.getElementById('result-spanbond').innerHTML = `Остаток спанбонд ${selectSpanbondOption}/${selectWidthSpanbond} мм: ${weight.toFixed(3)} кг`;
    }
    else if (radius > 370){
        document.getElementById('result-spanbond').innerHTML = `Значение не может превышать 370 мм`;
    }
    else {
        document.getElementById('result-spanbond').innerHTML = `Пожалуйста, введите корректное значение в миллиметрах`;
    }
}

function calculateAntifakeBarrier() {
    const select = document.getElementById('density-barrier');
    const selectWidthAntifakeBarrier = document.getElementById('width-antifakeBarrier').value;
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
        const weight = result * (+selectWidthAntifakeBarrier/1000) * selectOption / 1000;
        document.getElementById('result-barrier').innerHTML = `Остаток антификального барьера: ${weight.toFixed(3)} кг`;
    }
    else if (radius > 360){
        document.getElementById('result-barrier').innerHTML = `Значение не может превышать 360 мм`;
    }
    else {
        document.getElementById('result-barrier').innerHTML = `Пожалуйста, введите корректное значение в миллиметрах`;
    }
}

function calculateSpanbond_16() {
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
        console.log(volume)
        const length = volume / 0.3016;//0.3064 0.3016 0.2824
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
function calculateSpanbond_16_150() {
    const selectSpanbond = document.getElementById('density-spanbond_16_150');
    const selectWidthSpanbond = document.getElementById('width-spanbond_16_150').value;
    const selectSpanbondOption = parseFloat(selectSpanbond.value);
    const radius = document.getElementById('radius-spanbond_16_150').value;
    if (radius == 0) {
        document.getElementById('result-spanbond_16_150').innerHTML = `Остаток спанбонда: 0 кг`;
      }
    else if (radius > 0 && radius <= 370){
        const diameter = radius * 2 + 95
        const volume = Math.PI * (Math.pow(diameter, 2) - 9025); //8372.25 mm
        const length = volume / 0.2824;// 0.273
        const result = length / 1000 //m
        const weight = (result * (+selectWidthSpanbond/1000) * +selectSpanbondOption) / 1000;
        document.getElementById('result-spanbond_16_150').innerHTML = `Остаток спанбонд ${selectSpanbondOption}/${selectWidthSpanbond} мм: ${weight.toFixed(3)} кг`;
    }
    else if (radius > 370){
        document.getElementById('result-spanbond_16_150').innerHTML = `Значение не может превышать 370 мм`;
    }
    else {
        document.getElementById('result-spanbond_16_150').innerHTML = `Пожалуйста, введите корректное значение в миллиметрах`;
    }
}
function calculateElasticWaistBand() {
    const selectSpanbond = document.getElementById('density-elastic');
    const selectWidthSpanbond = document.getElementById('width-elastic').value;
    const selectSpanbondOption = parseFloat(selectSpanbond.value);
    const radius = document.getElementById('radius-elastic').value;
    if (radius == 0) {
        document.getElementById('result-elastic').innerHTML = `Остаток спанбонда: 0 кг`;
      }
    else if (radius > 0 && radius <= 370){
        const diameter = radius * 2 + 92//d втулки 92мм
        const volume = Math.PI * (Math.pow(diameter, 2) - 8464); //8464 mm
        const length = volume / 0.5976;//0.5976
        const result = length / 1000 //m
        const weight = (result * (+selectWidthSpanbond/1000) * +selectSpanbondOption) / 1000;
        document.getElementById('result-elastic').innerHTML = `Остаток эластичного пояса ${selectSpanbondOption}/${selectWidthSpanbond} мм: ${weight.toFixed(3)} кг`;
    }
    else if (radius > 370){
        document.getElementById('result-elastic').innerHTML = `Значение не может превышать 370 мм`;
    }
    else {
        document.getElementById('result-elastic').innerHTML = `Пожалуйста, введите корректное значение в миллиметрах`;
    }
}
function calculateCellulose() {
    const selectSpanbond = document.getElementById('density-cellulose');
    const selectWidthSpanbond = document.getElementById('width-cellulose').value;
    const selectSpanbondOption = parseFloat(selectSpanbond.value);
    const radius = document.getElementById('radius-cellulose').value;
    if (radius == 0) {
        document.getElementById('result-cellulose').innerHTML = `Остаток целлюлозы: 0 кг`;
      }
    else if (radius > 0 && radius <= 600){
        const diameter = radius * 2 + 97
        const volume = Math.PI * (Math.pow(diameter, 2) - 9409); //8464 mm
        const length = volume / 4;//0.5976
        const result = length / 1000 //m
        const weight = (result * (+selectWidthSpanbond/1000) * +selectSpanbondOption) / 1000;
        document.getElementById('result-cellulose').innerHTML = `Остаток целлюлозы ${selectSpanbondOption}/${selectWidthSpanbond} мм: ${weight.toFixed(3)} кг`;
    }
    else if (radius > 600){
        document.getElementById('result-cellulose').innerHTML = `Значение не может превышать 600 мм`;
    }
    else {
        document.getElementById('result-cellulose').innerHTML = `Пожалуйста, введите корректное значение в миллиметрах`;
    }
}
function calculateSpanbond_26() {
    const selectSpanbond = document.getElementById('density-spanbond_26');
    const selectWidthSpanbond = document.getElementById('width-spanbond_26').value;
    const selectSpanbondOption = parseFloat(selectSpanbond.value);
    const radius = document.getElementById('radius-spanbond_26').value;
    if (radius == 0) {
        document.getElementById('result-spanbond_26').innerHTML = `Остаток спанбонда: 0 кг`;
      }
    else if (radius > 0 && radius <= 370){
        const diameter = radius * 2 + 92
        const volume = Math.PI * (Math.pow(diameter, 2) - 8464); //96 mm втулка
        const length = volume / 0.2932;//0.072 * 4 0.2956 0.288
        const result = length / 1000 //m
        const weight = (result * (+selectWidthSpanbond/1000) * +selectSpanbondOption) / 1000;
        document.getElementById('result-spanbond_26').innerHTML = `Остаток спанбонд ${selectSpanbondOption}/${selectWidthSpanbond} мм: ${weight.toFixed(3)} кг`;
    }
    else if (radius > 370){
        document.getElementById('result-spanbond_26').innerHTML = `Значение не может превышать 370 мм`;
    }
    else {
        document.getElementById('result-spanbond_26').innerHTML = `Пожалуйста, введите корректное значение в миллиметрах`;
    }
}
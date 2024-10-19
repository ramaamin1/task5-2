function convert() {
    const value = parseFloat(document.getElementById('value').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    let result;


    switch (fromUnit) {
        case 'meter':
            result = value;
            break;
        case 'kilometer':
            result = value * 1000;
            break;
        case 'centimeter':
            result = value / 100;
            break;
    }

    switch (toUnit) {
        case 'meter':
            break;
        case 'kilometer':
            result /= 1000;
            break;
        case 'centimeter':
            result *= 100;
            break;
    }

    document.getElementById('result').innerText = `result: ${result} ${toUnit}`;
}

document.getElementById('calculate').addEventListener('click', function () {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const result = document.getElementById('result');

    const height = parseFloat(heightInput.value) / 100; // 将厘米转换为米
    const weight = parseFloat(weightInput.value);

    if (!isNaN(height) && !isNaN(weight)) {
        const bmi = weight / (height * height);
        result.textContent = `BMI: ${bmi.toFixed(2)}`;
    } else {
        result.textContent = 'Please enter valid height and weight values.';
    }
});

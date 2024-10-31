function bmi(peso, altura) {
    const bmiValue = peso / (altura ** 2);

    if (bmiValue < 18.5) {
        return "Bajo de peso";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        return "Normal";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        return "Sobrepeso";
    } else {
        return "Obeso";
    }
}
console.log(bmi(65, 1.8)); // "Normal"
console.log(bmi(72, 1.6)); // "Sobrepeso"
console.log(bmi(52, 1.75)); // "Bajo de peso"
console.log(bmi(135, 1.7)); // "Obeso"

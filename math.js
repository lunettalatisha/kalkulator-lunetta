function calculate() {
    const input = document.getElementById('input').value;
    let result;

    try {
        // Mengganti '^' dengan '**' untuk perpangkatan
        const expression = input.replace(/\^/g, '**');

        // Menangani fungsi trigonometri dan logaritma
        if (expression.includes('sin')) {
            const angle = parseFloat(expression.match(/sin\(([^)]+)\)/)[1]);
            result = Math.sin(angle * (Math.PI / 180)); // Konversi derajat ke radian
        } else if (expression.includes('cos')) {
            const angle = parseFloat(expression.match(/cos\(([^)]+)\)/)[1]);
            result = Math.cos(angle * (Math.PI / 180)); // Konversi derajat ke radian
        } else if (expression.includes('tan')) {
            const angle = parseFloat(expression.match(/tan\(([^)]+)\)/)[1]);
            result = Math.tan(angle * (Math.PI / 180)); // Konversi derajat ke radian
        } else if (expression.includes('log')) {
            const value = parseFloat(expression.match(/log\(([^)]+)\)/)[1]);
            result = Math.log(value); // Logaritma natural
        } else {
            // Menghitung hasil ekspresi
            result = eval(expression);
        }

        document.getElementById('result').innerText = 'Hasil: ' + result;
    } catch (error) {
        document.getElementById('result').innerText = 'Error: ' + error.message;
    }
}
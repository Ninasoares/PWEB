function maiorDeTres(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

function mostrarMaior() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById('resultadoMaior').innerText = 'Por favor, insira valores válidos.';
        return;
    }

    const maior = maiorDeTres(num1, num2, num3);
    document.getElementById('resultadoMaior').innerText = 'O maior número é: ' + maior;
}

function ordenarTres(num1, num2, num3) {
    let numeros = [num1, num2, num3];
    numeros.sort((a, b) => a - b);
    return numeros;
}

function mostrarOrdem() {
    const num4 = parseFloat(document.getElementById('num4').value);
    const num5 = parseFloat(document.getElementById('num5').value);
    const num6 = parseFloat(document.getElementById('num6').value);

    if (isNaN(num4) || isNaN(num5) || isNaN(num6)) {
        document.getElementById('resultadoOrdem').innerText = 'Por favor, insira valores válidos.';
        return;
    }

    const ordenados = ordenarTres(num4, num5, num6);
    document.getElementById('resultadoOrdem').innerText = 'Números em ordem: ' + ordenados.join(', ');
}

function verificarPalindromo(str) {
    let strUpper = str.toUpperCase();
    let strReversa = strUpper.split('').reverse().join('');
    return strUpper === strReversa;
}

function verificarSePalindromo() {
    const palavra = document.getElementById('palavra').value;

    if (palavra.trim() === '') {
        document.getElementById('resultadoPalindromo').innerText = 'Por favor, insira uma palavra.';
        return;
    }

    const ehPalindromo = verificarPalindromo(palavra);
    document.getElementById('resultadoPalindromo').innerText = ehPalindromo ? 'É um palíndromo' : 'Não é um palíndromo';
}

function tipoDeTriangulo(lado1, lado2, lado3) {
    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        if (lado1 === lado2 && lado2 === lado3) {
            return "Triângulo Equilátero: Todos os lados são iguais.";
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            return "Triângulo Isósceles: Dois lados são iguais.";
        } else {
            return "Triângulo Escaleno: Todos os lados são diferentes.";
        }
    } else {
        return "Os valores não formam um triângulo.";
    }
}

function mostrarTriangulo() {
    const lado1 = parseFloat(document.getElementById('lado1').value);
    const lado2 = parseFloat(document.getElementById('lado2').value);
    const lado3 = parseFloat(document.getElementById('lado3').value);

    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
        document.getElementById('resultadoTriangulo').innerText = 'Por favor, insira valores válidos para todos os lados.';
        return;
    }

    const confirmacao = confirm(`Deseja verificar se os lados ${lado1}, ${lado2}, ${lado3} formam um triângulo?`);

    if (confirmacao) {
        const tipo = tipoDeTriangulo(lado1, lado2, lado3);
        document.getElementById('resultadoTriangulo').innerText = tipo;
    } else {
        document.getElementById('resultadoTriangulo').innerText = 'Verificação cancelada.';
    }
}
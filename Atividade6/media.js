
var nome = prompt("Digite o nome do aluno:");

let nota1 = parseFloat(prompt("Digite a sua primeira nota:"));
let nota2 = parseFloat(prompt("Digite a sua segunda nota:"));
let nota3 = parseFloat(prompt("Digite a sua terceira nota:"));
let nota4 = parseFloat(prompt("Digite a sua quarta nota:"));

let media = (nota1 + nota2 + nota3 + nota4) / 4;

alert(`A média de ${nome} é: ${media}`);
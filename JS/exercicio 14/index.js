let value = 0;
let value2 = 0;

function res(){
 let result = value * value2;
 document.getElementById('res').innerHTML=`A area do triangulo é = ${result}`;
}

function lado(){
  value = parseFloat(prompt('Digite o lado do triangulo'));
  document.getElementById('lado').innerHTML='Lado do triangulo = '+ value;
}

function base(){
  value2 = parseFloat(prompt('Digite a base do triangulo'));
  document.getElementById('base').innerHTML='Base do triangulo = '+ value2;
}


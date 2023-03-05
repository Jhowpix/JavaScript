let value = 0;
let value2 = 0;

function res(){
 let result = value * value2;
 if(isNaN(result)==true){
 throw new Error('caracter invalido!');
 }
 document.getElementById('res').innerHTML=`A area do triangulo é = ${result}`;
}

function lado(){
  value = parseFloat(prompt('Digite o lado do triangulo'));
   if(isNaN(value)==true){
  throw new Error('caracter invalido!');
 }
  document.getElementById('lado')
  .innerHTML='Lado do triangulo = '+ value;
  
}

function base(){
  value2 = parseFloat(prompt('Digite a base do triangulo'));
      if(isNaN(value2)==true){
  throw new Error('caracter invalido!');
}
  document.getElementById('base')
  .innerHTML='Base do triangulo = '+ value2;

}

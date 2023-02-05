const jogadores = [ 'birobiro', 'ronaldo', 'vampeta','jhonatan'];
document.getElementById('teste').innerHTML = jogadores;

//em ordem alfabetica. //
jogadores.sort();
document.getElementById('teste2').innerHTML = jogadores;

//em ordem alfabetica da direita para esquerda. //
jogadores.reverse();
document.getElementById('teste1').innerHTML = jogadores;

// array numerica.

const numeros = [ 40, 30, 50, 80, 100, 5, 3, 10 ,15 ,20];

numeros.sort(); // desta forma fica desordenado.//
document.getElementById('teste3').innerHTML = numeros;


// desta forma abaixo ele vai fazer uma comparacao do menor pro maior. //
numeros.sort(function(a,b){ return a - b });
document.getElementById('teste4').innerHTML = numeros;

//criando uma funcao para achar o maior numero da array //
function MaiorNumero(array){
  return Math.max.apply(null,array);
}
document.getElementById('teste5').innerHTML = MaiorNumero(numeros);


// funcao para achar menor numero //
function MenorNumero(array){
  return Math.min.apply(null,array);
}
document.getElementById('teste6').innerHTML = MenorNumero(numeros);

//filtrar valores//

const maior20 = numeros.filter(filtragem);

function filtragem(value, index, array){
  return value > 20;
}
document.getElementById('teste7').innerHTML = maior20;

//exestem muitas formas de trabalhar com array e formas mais complexas. //

// declaracoes condicionais//

//if e else//

/*  

var interruptor = 'on';

if (interruptor == 'on')
{
  alert('a lampada esta ligada');
} 
else 
{
  alert ('a lampada esta desligada');
} 

*/

var hora = new Date().getHours();

if(hora<12){
  alert('bom dia');
}
else if (hora<18)
{
  alert('boa tarde'); 
} 
else{
  alert('boa noite');
}

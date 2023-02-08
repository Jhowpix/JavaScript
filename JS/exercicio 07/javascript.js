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

/*
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
*/

// continuacao 8/02/2023

/* switch e usadi paea realizar diferentes acoes com base em diferenter condicoes no mesmo bloco de verificacao. caso a condicao nao seja campativel nao sera executada e o valor padrai sera acionado */

/*
switch (expressao) {
  case a:
    // o que acontece
    break;
  case b:
    // o que acontece  
    break;
  case c:
    // o que acontece
    break;  
  default:
    //o que acontece
}
*/

// laco de repeticao

/*
for (let i=0; i<10001; i++){
  console.log(i);
}
*/


/*
var ano = new Date().getFullYear();

for (let i = ano; i => 1900; i--) {
  document.getElementById("ano").innerHTML += "<option value=' "+ i + " '>" + i + "</option>"
}

*/

// setTimeout() 

/*

function ativarContagem(){ //<-- entre ligado com button onclick
  document.getElementById("teste").innerHTML = "comecou a contar!";

   //ATIVA A FUNCAO APENAS 1 VEZ QUANDO DER O TEMPO DETERMINADO
   setTimeout(function () {
    document.body.style.backgroundColor = "red";
   }, 5000);  // <-- determina o tempo em milissegundos =5segundos 

}

*/ 

// clearTimeout (); usado para parar contagens

/* setInterval();
 ele executa uma acao no intevalo 
 de tempo determinado repetidas vezes*/

 //clearInterval(); usado para parar a acao do setInterval();



 //classes em JavaScript

 // classes sao como fabricas para criar objetos 

 //contructor();


 const Carros ={ marca: "fiat", modelo: "uno", ano:2001 }


class Carro {
  constructor(valor1, valor2, valor3){
  this.marca = valor1;
  this.modelo = valor2;
  this.ano = valor3;
  }
  buzina(){
    return this.modelo + " " +"biiiiii";

  }
}

const uno = new Carro("fiat","uno", 2001);
const gol = new Carro("volks", "gol", 2000);
console.log(gol.buzina());
console.log(uno.buzina());

//obs declare suas classes antes dos objetos//


//datas com JavaScript

//pausa para praticar itens vistos acima //
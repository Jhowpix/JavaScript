// saidas Js //

document.getElementById('text').innerHTML = "texto no <b>JS!<br>";

 // alert('caixa de alerta'); //
 // alert(10+5); //

 document.write('escrito com document.write<br>');

 document.write( 5 + 5 );

// console.log('isto e um console.log'); //

// DECLARACOES //

/* let a,b,c;
a=5;
b=6;
c=7;
ou 
let a=5; b=6; c=7; 

let pessoa="Jhonatan"; 
ou 
let pessoa = "  Jhonatan  "; 

document.getElementById('text').innerHTML = "texto no <b>JS!<br>";
ou
document.getElementById('text').innerHTML = 
"texto no <b>JS!<br>";

*/

// SINTAXE //

console.log( 5 + 5 ); //number
console.log('5 + 5'); //string
console.log("1"); //string

var a=1; b=5; c=a+b;
console.log(c);

var a=5; b=5; c=a*b;
console.log(c);

var a=5; b=5; c=a/b;
console.log(c);

// case sensitive //

var Pessoa = "Jhonatan";
var pessoa = "Oliveira";
console.log(pessoa); // Oliveira

var primeiroNome;

//VARIAVEIS//

var a, b, c;

a=5; b=10; c=a+b;

var a=2;

console.log(c);
console.log(a);

//concatenacao//

var nome, sobrenome, nomeCompleto, idade;

nome = "Jhonatan";
sobrenome = "de Oliveira";
idade = 30;
nomeCompleto = nome + " " + sobrenome;
document.getElementById("text1").innerHTML = nomeCompleto + " " + idade;

// ja vimos a diferenca entre var let e const //

var pessoa = "Jhonatan";
var pessoa = "Oliveira"
console.log(pessoa);

/*let car = "fusca";
let car = "uno"; */ //podemos ver que la sublinhou em vermelho vai dar erro //

 // console.log(car); //

  var numero = 267;
  {
  var numero = 1; // reatribuiu o valor de var //
  }

  console.log(numero);

  let x = 2;
  {
  let x = 10; // nao reatribui valor //
  }

  console.log(x);

 // const nao muda em nenhuma das maneiras ele nao muda //

 // ja vimos sobre operadores//

 // + - / * % ++ -- += -= && etc.. //

  var valor1, valor2, total;
 valor1 = 5; valor2 = 10; total = valor1 * valor2;
  console.log(total);

  console.log(++total); 
  console.log(--valor1);

  console.log(valor1 += valor2);

  console.log(valor1 == valor2);
  console.log(valor1 == valor1);
 

   var valor3, valor4;
  valor3 = 5; valor4 = "5"; // mesmo os valores entre aspas ele da como true
  console.log(valor3 == valor4); // verifica valor //

  valor3 = 5; valor5 = "5"; // neste caso false
  console.log(valor3 === valor5); // verifica valor e tipo //

  //!= nao igual ele verifica o valor nao o tipo//
  //!== verifica tipo e valor //

  // < menor > maior <= menor igual >= maior igual//

  var idade, eleitor;
  idade = 18;
  eleitor = (idade<18) ? "nao eleitor": "sim eleitor";
  console.log(eleitor);

  // operador ternario //

  var idade, eleitor;  
  idade = 12; 
            //condicao    // true        // false //
  eleitor = (idade<18) ? "nao eleitor": "sim eleitor";
  console.log(eleitor);

  //operador logico //
  var idade, eleitor, resultado;
  idade = 65;

    resultado = (idade > 60 && idade < 70 ); 
    console.log(resultado);

    // ---------------------------//
    var idade, eleitor, resultado;
  idade = 55;

    resultado = (idade > 60 && idade < 70 ); 
    console.log(resultado);

    var idade, eleitor, resultado;
    idade = 55;
  
      resultado = ! (idade === 60); 
      console.log(resultado);

  // funcoes //

//funcao  //nome  //valor de entrada, nao e obrigatorio declara valor//
    function soma(val1, val2) {
    return val1 + val2;
  }
  document.getElementById('text3').innerHTML = soma(15, 10);

  var total = soma(10,23);
  console.log(total);

  function RealParaDolar(Real, cotacaoDolar) {
    return Real * cotacaoDolar;
  }
  var total = RealParaDolar(10 , 5.08);
  console.log(total);

  function alertHello(){
    alert("Hello");
  }

  // alertHello();

  function paraCelsius(valorFahrenheit){
    return (5/9) * (valorFahrenheit-32);
  }

  var temp = paraCelsius(77);
  console.log(temp);

  //objetos sao variaveis com valores dentro e funcoes //
  //objetos literais//

  let carro = { marca: "ford", modelo: "ka", ano: "2015", placa: "abc-1234", buzina: function (){alert ("bii")},
  completo: function(){ return "Marca e "+ this.marca + " e modelo e "+ this.modelo; }};


  // metodo e uma funcao colocada dentro de um objeto //
  // metodo e uma propriedade que tem uma funcao dentro dela//

  console.log(carro);
  console.log(carro.ano);
  console.log(carro["marca"]);
 // carro.buzina();  // chamada da funcao //
  console.log(carro.completo());

  //eventos os mais utilizados pesquise mais sobre//

  /* 
  onclick -quando recebe um click
  dblclick - click duplo
  onmouseover - quando o mouse esta sobre  
  onmouseout - quando o mouse e movido para fora do elemento
  onmousemove - quaqndo o mouse e movido no elemento
  onmousedown - quando o click do BOTAO for pressionado
  onmouseup - quando o cllique do botao e liberado
  onfocus -  quando o elemento recebe um foco. valido para input,
  onchange - quando exeste ima mudanca no conteudo. Ao mudar. input
  onblur - dispara quando perde o foco. input
  onkeydown - quando a tecla e pressionada
  onkeyup - 
  onload - 
  onresize -
  */

  function eventoClick(){
    document.body.style.backgroundColor = "red";
  }

  function dblClick(){
    alert("Evento de click duplo");
  }


     // analise da sintaxe abaixo//
  function color() {  /* dada a funcao com o nome 
  declarado em onmouseover dentro do html 
  ex: <div id="teste" onmouseover="color()" */
    let div =  document.getElementById("teste"); // criado a variavel let //
    div.style.backgroundColor = "red"; // chamando a div e trocando o stylo da cor dela//
  }

  function color1() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
  }

   //obs: conseguimos colocar mais de uma funcao para um unico elemento dentro do html. //

   function text(){
    let p = document.getElementById("text5");
    p.append('k');
   }

   function text6(){
    let p = document.getElementById("text6");
    p.append( " clicou no bloco roxo ");
   }

    function box(){
      document.getElementById("textbox").value = "";
    }

    function box1(){
      document.getElementById("textbox1").value = "";
      console.log("mudou");
    }
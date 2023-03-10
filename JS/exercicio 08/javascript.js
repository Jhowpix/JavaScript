let data = new Date();
// console.log(data);


//pefar ano atual com 4 digitos
let ano = data.getFullYear();
console.log(ano);

//pegar o mes

let mes = data.getMonth();
// console.log(mes);


// mes no formato escrito
const mesesDoAno = ["Janeiro","Fevereiro","Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ];

let mesEscrito = mesesDoAno[data.getMonth()];
console.log(mesEscrito);


// pegar dia do mes 1 a 31.

let diaMes = data.getDate();
console.log(diaMes);

// pegar dia da semana

let diasDaSemana = data.getDay();
 console.log(diasDaSemana);   // ele mostra com numeros como se fosse uma array

const diaDaSemana = ["Domingo", "Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sabado"];
let diasDaSemanaEscrito = diaDaSemana[data.getDay()];
console.log(diasDaSemanaEscrito);


// pegar hora de 0 ate 23

let hora = data.getHours();
console.log(hora);

let minuto = data.getMinutes();
console.log(minuto);


let segundos = data.getSeconds();
console.log(segundos);

// de 0 a 999

let milesegundos = data.getMilliseconds();
console.log(milesegundos);


// data padrao Brasileiro dia mes ano

let dataBR = data.toLocaleString("pt-br");
console.log(dataBR);    // mostra data e hora

let dataBR1 = data.toLocaleString("pt-br",{dateStyle:"short"}); 
// mostra somente a data
console.log(dataBR1);

let dataBR2 = data.toLocaleString("pt-br",{timeStyle:"short"});
console.log(dataBR2); 

// pegar valores separados e juntar eles

d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1; // iniciando meses com valor 1 
ano = d.getFullYear();

function addZero(x) { return x<10 ? "0" + x: '' + x; }; // ajustando o zero antes do 1,2,3,4,5,6,7,8,9.

let dataPadraoBR = addZero(diaMes) + "/" + addZero(mes) + "/" + ano; 
console.log(dataPadraoBR);

// comparar datas- maior ou menor. ex vencimentos

var hoje = new Date();
var vencimento = new Date(2024, 0, 15);

if (hoje > vencimento){

  console.log("Sua conta esta vencida!");

} else {

  console.log("Ainda nao venceu, tudo certo!")
}

//diferenca entre duas datas em dias 

// pausa para pratica//





const d = new Date();
 // new Date cria um objeto de data com a data e hora atuais
document.getElementById("demo").innerHTML = d;



//Quando voc?? exibe um objeto de data em HTML, ele ?? convertido automaticamente em uma string, com o toString() m??todo.

const d1 = new Date();
document.getElementById("demo1").innerHTML = d1.toString();

// O toDateString() m??todo converte uma data em um formato mais leg??vel.

const d2 = new Date();
document.getElementById("demo2").innerHTML = d2.toString();

//O toUTCString() m??todo converte uma data em uma string usando o padr??o UTC.

const d3 = new Date();
document.getElementById("demo3").innerHTML = d3.toUTCString();

//O toISOString() m??todo converte uma data em uma string usando o padr??o ISO.

const d4 = new Date();
document.getElementById("demo4").innerHTML = d4.toISOString();

/*          Type	Example
        ISO Date	"2015-03-25" (The International Standard)
        Short Date	"03/25/2015"
        Long Date	"Mar 25 2015" or "25 Mar 2015" 

        Sa??da de Data do JavaScript
Independente do formato de entrada, o JavaScript (por padr??o) produzir?? datas no formato de string de texto completo:

Exemplo: Thu Feb 09 2023 14:15:30 GMT+0900 (Hor??rio Padr??o do Jap??o)

                Datas ISO do JavaScript
ISO 8601 ?? o padr??o internacional para a representa????o de datas e horas.
A sintaxe ISO 8601 (AAAA-MM-DD) tamb??m ?? o formato de data JavaScript preferido:
*/
const d5 = new Date("2015-03-25");
document.getElementById("demo5").innerHTML = d5;

/*
        Datas ISO (Apenas Ano)
As datas ISO podem ser escritas sem m??s e dia (AAAA): 
*/
const d6 = new Date("2015");
document.getElementById("demo6").innerHTML = d6;


/*
Datas ISO (Data-Hora)
As datas ISO podem ser escritas com horas, minutos e segundos adicionados (AAAA-MM-DDTHH:MM:SSZ):
*/

const d7 = new Date("2015-03-25T12:00:00Z");
document.getElementById("demo7").innerHTML = d7;

/*   
A data e a hora s??o separadas por um T mai??sculo.
A hora UTC ?? definida com uma letra mai??scula Z.
Se voc?? quiser modificar a hora relativa ao UTC, remova o Z e adicione +HH:MM ou -HH:MM:
*/

document.getElementById("demo").innerHTML =
new Date("2015-03-25T12:00:00-06:00");

// UTC (Universal Time Coordinated) ?? o mesmo que GMT (Greenwich Mean Time).

/*
Datas abreviadas do JavaScript.
Datas abreviadas s??o escritas com uma sintaxe "MM/DD/AAAA" como esta:
*/
const d8 = new Date("03/25/2015");
document.getElementById("demo8").innerHTML = d8;

/*                          AVISOS!
Em alguns navegadores, meses ou dias sem zeros ?? esquerda podem produzir um erro:
Exemplo: const d = new Date("2015-3-25");

O comportamento de "AAAA/MM/DD" ?? indefinido.
Alguns navegadores tentar??o adivinhar o formato. Alguns retornar??o NaN.
O comportamento de "DD-MM-AAAA" tamb??m ?? indefinido.
Alguns navegadores tentar??o adivinhar o formato. Alguns retornar??o NaN.
As v??rgulas s??o ignoradas. Os nomes n??o diferenciam mai??sculas de min??sculas:
*/
const d9 = new Date("JANUARY, 25, 2015");
document.getElementById("demo9").innerHTML = d9;


//Date.parse()retorna o n??mero de milissegundos entre a data e 1?? de janeiro de 1970:
const msec = Date.parse("March 21, 2012");
document.getElementById("demo10").innerHTML = msec;

/*                     Aviso !
O c??digo JavaScript antigo pode usar o m??todo n??o padr??o getYear().
getYear() deve retornar um ano de 2 d??gitos.
getYear() est?? obsoleto. N??o use isso!
*/

/*
                    O m??todo getTime()
O getTime()m??todo retorna o n??mero de milissegundos desde 1?? de janeiro de 1970:
*/

/*
Os m??todos Set Date permitem definir valores de data (anos, meses, dias, horas, minutos, segundos, milissegundos) para um objeto Date.

                          O m??todo setFullYear()
O setFullYear() m??todo define o ano de um objeto de data. Neste exemplo para 2020:
*/
const d11 = new Date();
d.setFullYear(2020);
document.getElementById("demo11").innerHTML = d11;
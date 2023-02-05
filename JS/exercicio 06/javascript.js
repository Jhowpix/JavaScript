/* ARRAYS

Sao usados para armazenar barios valores em uma variavel. Os arrys nao possuem propriedades. O ite, dentro dele e econtrado pela posicao.
Imagina uma array como uma lista de itens, com controle por ordem de posicao dentro dele. 
Ex: const lista = ["arroz", "feijao","macarrao", "leite"];

A lista [0] (na posicao 0 da lista vai conter o valor "arroz").
        [1] (na posicao 1 da lista vai conter o valor "feijao").

        e assim por diante.
*/

//obs: com objetos trabalhamos com { } chaves nas matrizes trabalhamos com [ ] colchetes. //

const lista = ["arroz", "feijao","macarrao", "leite"];

console.log(lista[0]); console.log(lista[2]); console.log(lista[3]);
//observe o resultado no console //

const lista1 = [ // outra forma de contruir uma matriz //
  "arroz",
  "feijao",
  "macarrao", 
  "leite"
];

const lista2 = [];  // outra forma de contruir uma matriz //
lista2[0] = "arroz";
lista2[1] = "feijao";
lista2[2] = "macarrao";
lista2[3] = "leite";
console.log(lista2[1]);

const lista3 = new Array( "arroz", "feijao", "macarrao", "leite"); // outra forma//
console.log(lista3[0]);
let x = lista3 [3];  // pegando o valor com variavel //
console.log(x);

const lista4 = new Array( "arroz", "feijao", "macarrao", "leite"); 
lista4[0] = "cafe";  // troca o valor da possicao 0 da lista //
console.log(lista4[0]);

console.log(lista4); // desta forma ele mostra todos os itens da matriz(lista). //

// podemos por um arry dentro do outro podemos por funcaoes e objetos dentro de um array //

const pessoa = [ "Claudio", "Pedro", 30]; //array
const pessoa1 = { name:"Claudio", sobrenome:"Pedro", idade:30}; //objeto

pessoa1.nome; //forma de pegar o valor dentro de um objeto //
pessoa[0]; // forma de pegar o valor dentro de um array //

const pessoa2 = ["Ricardo", "Pregador", "Teixeira"]; // array

console.log(pessoa2.length); // mostra quantos itens tem dentro de uma array //

pessoa2.push("Brasileiro"); // acracenta um valor ao final da lista //

console.log(pessoa2[pessoa2.length -1]); // para pegar o ultimo iten da array //

pessoa2.push("35 anos"); //mesmo acrecentando o valor abaixo ele nao aparece por ultimo no codigo descrito acima teria que chamar o codigo novamente //

console.log(Array.isArray(pessoa2)); // para mostrar se o valor e realmente uma array // 
 const a = "Jhonatan";
 console.log(Array.isArray(a)); // resultado sera false 

 // metodos de arrays  
 // funcoes ja prontas do JS 

 //metodo join 

 // document.getElementById("teste").innerHTML = pessoa2.join(" - ");

  pessoa2.pop();// remover o ultimo item da array
  document.getElementById("teste").innerHTML = pessoa2.join(" - ");

   // para adicionar seria o push()

    // shift(); para remover o primeiro item do array  modificando a locacao dos itens para -1 //

    pessoa2.shift();
    document.getElementById("teste").innerHTML = pessoa2.join(" - ");

    delete[0]; // ele deleta mais nao altera as posicoes deixando o item deletado como indefinido //

     //splice(); ele adicona elementos e remove podendo fazer substituicao de itens //

      const pessoa3 = ["Ricardo", "Pregador", "Teixeira"];
      pessoa3.splice(1, 0, "item adicionado 1,", "item adicionado 2,");
      /* primeiro voce seleciona a posicao que seja adicionado o item, segundo voce marca a quantidade de itens que quer substituir neste caso a cima 0 nenhum item sera substituido*/

        document.getElementById("teste1").innerHTML = pessoa3.join(" ");

        const lista5 = ["bolo", "beijinho", "brigadeiro"];
        const lista6 = [ "bexiga", "palhado", "decoracao"];

        const superlista = lista1.concat(lista3, lista2, lista5,lista6);
        document.getElementById("teste2").innerHTML = superlista. join(" ");

        const jogadores = ["Birobiro", "Ribamar", "Pele", "Maradona"];
        const craques = jogadores.slice(2); // este metodo esconte todos os itens que estiverem antes da posicao delecionada, mais nao exclui nenhum item //

        document.getElementById("teste3").innerHTML = craques.join(" ");
        console.log(jogadores.length);

        const jogadores1 = ["Birobiro", "Ribamar", "Pele", "Maradona", "Neymar", "Jhonatan", "Roger"];

        const craques1 = jogadores1.slice(2,5);
        document.getElementById("teste4").innerHTML = craques1.join(" "); 
        // CONTINUA NO PROXIMO EXERCICIO //
       











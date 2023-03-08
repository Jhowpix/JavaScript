let pessoa = { nome: 'Jhonatan', idade: 33 }
console.log(pessoa)

//colocar uma funcao dentro do objeto

//criar metodo

let pessoa1 = { 
    nome: 'Jhonatan', 
    idade: 33, 
    ola(){
        console.log('ola mundo! meu nome  é ' + this.nome )
       // console.log(this.idade)
    }
}

// nao conseguimos chamar um objeto dentro do metodo 
// temos que usar a propriedade this para puxar o valor do objeto
console.log(pessoa1)
pessoa1.ola()

// funcoes recursivas 
// funcao que chama ela mesma 
// ela se executa de novo e de novo chamamos isso de recursao

function dividir(num){

  console.log(num)

  if(num % 2 === 0){
   dividir(num/2)
  } else {
    return num
  }

}

dividir(40)

// neste caso ele faz um loop na propria funcao buscando o resultado
// boorleano true para poder sair da funcao

//fatoria de 5: !5 === 5 * 4 * 3 * 2 * 1 === 5 * !4 
function fatorial(num){
  console.log('numero: '+ num);
  if(num === 0){
    return 1
  }else if( num === 1 ){
   return num * ( num -1 )
  }else{
    console.log(num + ' * ! ' + ( num -1 ));
    return num * fatorial( num -1 )
  }
}
console.log(fatorial(5))

//funcoes anonimas

function somar(a, b){
    return a + b
}

const opercao = somar; // este exemplo atribui a variavel a funcao somar 
console.log(opercao(4,8))

// se fixarmos 
const opercao1 = somar();// atribuimos o valor da funcao somar 
// se tentarmos atribuir valor gera um erro
console.log(opercao1)//NaN



//funcao anonima
const sub = function (a, b){
    return a - b
}
console.log(sub(13, 3))

const mult = function ( a, b){
    return a * b
}
console.log(mult(4, 5))

olaMundo()
//oiMundo()

function olaMundo(){
    console.log('ola mundo!')
}


// aqui gera um erro 
// porque as funcoes anonimas so podemos acessadas somente depois
// de serem declaradas

const oiMundo = function(){
    console.log('oi mundo!')
}
oiMundo() // chama a funcao para nao ficar com erro no console

//High-Order Function

function calcular(a, b, operacao){
  const soma = a + b;
  const resultado = operacao(a, b)

  return  soma, resultado;
  
}

// console.log(calcular(3, 6))

function somar(x, y){
  console.log('realizando soma')
  return x + y
}

console.log(calcular(3, 5, somar))

console.log(calcular(9, 5, function (s, f){
  console.log('realizando uma subtracao.');
  return s - f
}))

// Essas funções que são passadas como parâmetros geralmente são chamadas de callbacks
// Um exemplo comum de high-order function no javascript é a função .forEach() dos arrays
function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  })
}

const lista = ["Maçã", "Banana", "Laranja", "Limão", "Uva"]
// Forma tradicional
for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista)
}

console.log('------------------------------------------------')
// Forma funcional
lista.forEach(exibirElemento)

console.log('------------------------------------------------')
// Também poderia ser feito:
lista.forEach(function (elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  })
})
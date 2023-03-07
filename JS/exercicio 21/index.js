function calcularMedia(a,b){
    let media = (a + b) /2
    console.log(media)
}

calcularMedia(9,5);

// se tentarmos dar um console.log(media)
// gera um erro por que a media so esta declarada 
// dentro do bloco

// como resolver isso?
// vamos criar uma variavel junto com o return
// return joga o valor para fora do bloco

function calcularMedia2(a,b){
    let media2 = (a + b) /2;
    console.log('dentro do bloco ' + media2);
    return media2 
}

const resultado = calcularMedia2(8,7);
console.log(`fora do bloco ${resultado}`);

function criarProduto(nome, preco){
    const produto = {
        nome,
        preco,
        estoque: 1
    }
    return produto
}

const book = criarProduto('O pequeno principe ', 24.90 );
console.log(book);

// tambem podemos usar a variavel dentro do console.log

console.log(criarProduto('O pequeno principe ', 24.90 ));
//funciona igual o exemplo acima

//outros exemplos

function areaRetangulo(base, altura){
    const area = base * altura;
    return area
}

console.log(areaRetangulo(3, 5));

//tambem funciona somente usando return

function areaRetangulo2(base, altura){
    return  base * altura;
}

console.log(areaRetangulo2(4, 5));

//outro exemplo

function quadrado(lado){
    //neste caso chamaremos a funcao areaRetangulo que ja tem dois 
    // parametros e faremos a multiplicacao dos lados 
    return areaRetangulo2(lado, lado)
}

console.log(areaRetangulo2(6, 9));



function quadrado(lado, lado){
    return lado * lado
}

console.log(quadrado(6, 9));

//a funcao so pode retornar uma unica vez 

function ola(){
    let texto = '...';
    return texto;//ele faz o retorno do valor da funcao e desativa ela 
    // oque vier abaixo do return fica inativo
    texto = 'ola mundo'
    console.log(texto)
}

console.log(ola())


//agora ele ira mostrar ola mundo duas vezes 
//porque a variavel texto vai ser atribuida o valor Ola mundo
// que esta dentro do bloco e sera mostrada no console
// e mostrara no console.log que esta fora do bloco 
// que conseguil ter acesso ao valor por causa do return
function ola2(){
    let texto = '...';
    
    texto = 'ola mundo'
    console.log(texto)

    return texto;
}

console.log(ola2())


//temos casos que precisamos de mais de um return na mesma funcao

function maiorIdade(idade){
  if(idade >= 18){
    return 'maior idade'
  }else{
    return 'menor idade'
  }
}

console.log(maiorIdade(33));
console.log(maiorIdade(15));
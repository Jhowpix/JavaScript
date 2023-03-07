let anim = 'dog' // criada variavel

function reca(){
    anim = 'labrador' // reatribuindo valor a variavel
}

console.log(anim);
// antes de chamar a funcao ele responde 
// ao valor declarado na variavel


reca(); // chamada a funcao
console.log(anim);
// agora ele responde ao valor declarado dentro da funcao
// neste caso conseguimos ver a variavel reatribuida 
// por que ela ja estava declarada fora do escopo da funcao

/* ----

// observe que o return serve para jogar
// valores de variaveis para fora da funcao
// desde que a variavel esteja declarada fora da funcao

function criarAnimal(){
    let animal = 'gat'
    // aqui ja avisa que este valor nao esta sendo lido
}

criarAnimal();
console.log(animal) 
// aqui gera um erro de not defined

-----*/

let animal = '';
function criarAnimal(){
    animal = 'gat'
}

criarAnimal();
console.log(animal)

// o exemplo a baixo e muito importante aprender
// por que ele mostra como as diferencas de variaveis como var e let 
// se comportam dentro e fora de blocos moco If WHILE FOR etc...
// IMPORTANTE perceber que o var tambem
// nao joga sues valores para fora da funcao

function Media(nota){
    if(nota > 60){
        var aprovado = true // a var joga seu valor para fora do escopo If 
        let situacao = 'Aprovado' // o let nao seu valor fica preso dentro do escopo
    }else{
        var aprovado = false
        let situacao = 'Reprovado'
    }

    console.log(nota);
    console.log(aprovado);
    //console.log(situacao);
}

Media(80);
Media(50);

// no caso acima mesmo o var estando declarado dentro de 
// uma funcao, nos conseguimos acessar seus valores 
// por ele estar dentro de um if isso acontece tambem com ele estando
// dentro de blocos menores com while for etc...

function ola(){
    var text = 'ola mundo'
}

// console.log(text)

console.log(nome)
//pegou valor vazio da variavel nome que foi levada para o inicio do arquivo
// resultando em undefined
var nome ='Jhonatan'
console.log(nome)

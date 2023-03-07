function dobro(x){
    console.log('O dobro de ' + x + ' é ' + ( x * 2 ) )
}

dobro(); // chamada funcao sem declarar valor
// retonara... O dobro de undefined é NaN  (NaN = not a number)

dobro(5); //chamada funcao com valor 
// retornara... O dobro de 5 é 10 

dobro(7); // O dobro de 7 é 14

function escrever(nome){
    console.log('Ola, ' + nome + '!');
}

escrever('Jhonatan');
// retorna... Ola, Jhonatan!

escrever();
// retorna... Ola, undefined!

//podemos evitar o undefined declarando um valor padrao
// segue exemplo abaixo

function escrever2( nome = 'Nao foi declarado nenhum nome'){
    console.log('Ola,' + nome + ' !');
}

escrever2('Jhonatan2');
// retorna... Ola, Jhonatan2 !

escrever2();
//retornara... Ola, Nao foi declarado nenhum nome !



//funcao com mais de um parametro
function soma (a, b){
    console.log('O resultado da soma é ' + (a + b))
}

soma(2, 8);//O resultado da soma é 10
soma(3, 7);//O resultado da soma é 10
soma(5, 9);//O resultado da soma é 14
soma(1, 2);//O resultado da soma é 3

soma();//O resultado da soma é NaN

function soma2 (a, b, c, d){
    console.log('O resultado da soma é ' + (a + b + c + d ))
}

soma2(2, 2, 2, 2);//O resultado da soma é 8
soma2(290, 455, 390, 345);//O resultado da soma é 1480

function criarUsuario(nome, email, senha, tipo = "admin"){
    const usuario ={
        nome,
        email,
        senha,
        tipo
    }
    console.log(usuario);
}

criarUsuario('Jhonatan', 'jhonatandevbr@gmail.com', '123deOliveira4');

//nao podemos trocar as ordens dos parametros 
// para aqueles paramentros que tenham valores padrao 
//sempre declarar no final

//funcoes com muitos paramentro 
// transformar em objeto

function muitosParametros(nome, dataDeNasc, telefone, email, senha, endereco){
    console.log(muitosParametros)
}

muitosParametros('nome', 'dataDeNasc',' telefone', 'email', 'senha', 'endereco')
//exemplo de chamada da funcao

// a seguir exemplo do mesmo codigo a cima porem  mais legivel

function objetoComParametros(usuario){
    usuario.name 
    usuario.dataDeNasc
    usuario.telefone
    usuario.email
    usuario.senha
    usuario.endereco
}

const dadosDoUsuario = {
    nome: '',
    dataDeNasc: '',
    telefone: '',
    email: '',
    senha: '',
    endereco: ''

}

objetoComParametros(dadosDoUsuario)
// chamada da funcao
console.log(dadosDoUsuario)
let array = [];

array = ['gato', 'cachorro', 'urso', 'camelo', 'peixe'];
console.log(array);

let pessoas = [];
pessoas[0] = 'Jo';
pessoas[1] = 'Mau';
pessoas[2] = 'Helo';
pessoas[3] = 'Vi';
pessoas[4] = 'Te';

console.log(pessoas);

let pessoa = [];
//adicione pessoas neste array pelo dev Tools console
//adicionado segue exemplo
// pessoa[0] = 'Maria' ...press enter 

let produtos = [];
produtos.push('lapis');
produtos.push('caneta');
produtos.push('borracha');
produtos.push('caderno');
produtos.push('regua');
produtos.push('mochila');
produtos.push('estojo');
produtos.push('folhas-A4');

console.log(produtos);

//mostre caderno com um console.log
console.log(produtos[3]);
//mostre lapis 
console.log(produtos[0]);
//mostre folhas-A4
console.log(produtos[7]);

//adicione ao fim da lista tinta

produtos.push('tinta')
console.log(produtos);

// acrescente mais de um elemento de uma vez 
produtos.push('canetinhas', 'pincel', 'livro de portugues')
console.log(produtos)


// retirando primeiro elemento da array
produtos.shift( )
console.log(produtos)

let produto = new Array ('lapis', 'caneta', 'tesoura', 'papel', 'fita');


let loja = document.querySelector('#outPut');
loja.innerHTML= produto

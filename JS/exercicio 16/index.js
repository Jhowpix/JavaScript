let produtos = ['caneta', 'lapis', 
'borracha', 'caderno', 'estojo', 'livros' ];

// let outPut = document.getElementById('out');

// outPut.innerHTML = produtos; .....nao responde notifica como null

let msg = '';


//poderiamos usar... produtos.lenght  ... ex: for(let i = 0; i < produtos.length ; i ++)
for(let i = 0; i < 6; i++){

  msg +='Produto ' + (i + 1) + ':' + produtos[i]; // erro
}

document.getElementById('out').innerHTML= msg ; //errp
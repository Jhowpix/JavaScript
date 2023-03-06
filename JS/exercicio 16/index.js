let produtos = ['caneta', 'lapis', 
'borracha', 'caderno', 'estojo', 'livros' ];

// let outPut = document.getElementById('out');

// outPut.innerHTML = produtos; .....nao responde notifica como null

let msg = '';

for(let i = 0; 1 < 6; i++){

  msg +='Produto ' + (i + 1) + ':' + produtos[i]; // erro
}

document.getElementById('out').innerHTML= msg ;
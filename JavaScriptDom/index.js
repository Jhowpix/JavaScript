console.log('Obrigado pelas aulas de DOM.');


document.getElementById('titulo').innerText='Aulas com João Ribeiro.';

document.getElementsByClassName('titulo_h2').innerText='Reformulando título h2';


document.getElementsByTagName('p')[1].innerText='Aluno Jhonatan de Oliveira Silva.';

document.getElementsByTagName('p')[2].innerText='Aluno Jhonatan.';

document.getElementsByTagName('p')[3].innerText='Aluno Silva.';

let a = document.querySelector('p');
console.log(a);

let b = document.querySelectorAll('p');
console.log(b);

let c = document.querySelector('.divTest');
console.log(c);

// innerHTMl
// outerHTML
// innerText

// atributos 
// operacoes no console

let elemento = document.querySelector('#titulo2');
console.log(elemento);

let divClass = document.querySelector('.divTest');
console.log(divClass);

let h3TestDom = document.querySelector('.testH3 > i > u');
h3TestDom.style.color = "red";
// h3TestDom.style.backgroundColor = "red";
console.log(h3TestDom);

let textH1 = document.querySelector('h1');
console.log(textH1.outerHTML);
textH1.innerHTML = "Novo <u>texto</u>"


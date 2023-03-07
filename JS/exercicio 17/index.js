let dias = new Array('domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabádo');
let hoje = new Date();

let diaSemana = hoje.getDay()  //retona dia da semana

//exercicio mostrar dia da semana
alert('bem vindo hoje é ' + dias[diaSemana]);

//exercicio resolvido

// a variavel diaSemana retorna um number 
// entao se colocar dentro do array dias
// ele irar retornar o que estiver na quele indice numerado
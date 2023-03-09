exibirTipo(10);

function exibirTipo(limite){
    console.log('valor declarado => '+ limite)
    for(let i = 0; i <= limite; i++){
        if(i % 2 === 0)
        console.log(i + '...Par...');
        else 
        console.log(i + '...IMPAR...');
    }
}


exibirTipo1(5);

function exibirTipo1(limite){
    console.log('--------------------------------------')
    console.log('valor declarado => '+ limite)
    for(let i = 0; i <= limite; i++){
        if(i % 2 === 0)
        console.log('...Par...');
        else 
        console.log('...IMPAR...');
    }
}


exibirTipo2(15);

function exibirTipo2(limite){
    console.log('--------------------------------------')
    console.log('valor declarado => '+ limite)
    for(let i = 0; i <= limite; i++){
        if(i % 2 === 0)
        console.log(i,'Par');
        else 
        console.log(i,'IMPAR');
    }
}

// exibir propriedades de um objeto em string 
console.log('--------------------------------------')

const filme = {
    titulo: 'The Avangers',
    ano: 2012,
    producao: 'Marvel Studios',
    diretor: 'Joss Whedon',
    Orçamento: 'US$ 220 milhões',
    Receita: 'US$ 1,519 bilhão',
    fonte: 'https://pt.wikipedia.org/wiki/The_Avengers_(2012)'
}

exibirPro(filme);

function exibirPro(obj){
   let sobreFilme = 'Titulo: ' + filme.titulo + 
                    '\nAno: ' + filme.ano +
                    '\nProcução: ' + filme.producao +
                    '\nDiretor: ' + filme.diretor +
                    '\nOrçamento: ' + filme.Orçamento +
                    '\nReceita: ' + filme.Receita +
                    '\nFonte: ' + filme.fonte;
   console.log(sobreFilme)
}
console.log('--------------------------------------')

// or

exibirPro1(filme);

function exibirPro1(obj){
    for(prop in obj)
         if(typeof prop === 'string')
            console.log(prop,obj[prop])
}
console.log('--------------------------------------')

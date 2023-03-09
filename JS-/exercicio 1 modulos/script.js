export const arr = [ 0,1,2,3,4,5,6,7,8,9]

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
export function exibirPro(obj){
   let sobreFilme = 'Titulo: ' + filme.titulo + 
                    '\nAno: ' + filme.ano +
                    '\nProcução: ' + filme.producao +
                    '\nDiretor: ' + filme.diretor +
                    '\nOrçamento: ' + filme.Orçamento +
                    '\nReceita: ' + filme.Receita +
                    '\nFonte: ' + filme.fonte;
    obj = sobreFilme
   return obj
}

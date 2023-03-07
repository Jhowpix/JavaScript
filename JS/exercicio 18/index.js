let arr = new Array( 25, 30, 45, 28, 0, 12, 78, 64);
//mostrar na tela a soma dos numeros pares da array

let soma = 0;

for(let i = 0; i < arr.length; i++){
    console.log('indice : '+ i);
    console.log('valor do indice : '+ arr[i]);

    if( !isNaN(arr[i]) && arr[i] % 2 === 0 ){
        soma += arr[i];
        console.log('soma : '+ soma)
    }
}

alert('a soma dos numeros pares é ' + soma)
//com isso exercicio resolvido


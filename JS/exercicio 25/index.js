let pessoa={               //revisao objeto
    nome: 'Rafael',
    idade: 25,
    estado: 'Aprovado',
    facul: 'vida'
};

 console.log(pessoa)

 // revisao array
// conjunto de dados que podem ser acessador por um indice

let fami = ['jho', 'mau', 'helo', 'te', 'vic']
console.log(fami)
console.log(fami[3])

//revisao funcao
let corSite = '...azul...';
console.log(corSite);

cor()
console.log(corSite);

function cor(){
    corSite = '...laranja...'; 
   
}
console.log(corSite);


// varias formas de fazer a mesma funcao
let valor = max( 10, 20);
console.log(valor);

function max(num1, num2){
    if(num1 > num2){
        return num1
    }else{
        return num2
    }
}
//--------------------------------------
let valor2 = max2( 10, 40);
console.log(valor2);

function max2(num3, num4){
    if(num3 > num4)
        return num3;
        return num4;
    
}
//--------------------------------------
let valor3 = max3( 10, 60);
console.log(valor3);

function max3(num5, num6){
    return num5 > num6 ? num5: num6;
}


//for-in


const pes ={
    nome: 'Jhonatan',
    idade: 33
}

//key-value

for (let chave in pes){
    console.log(chave, pes['nome']);
}

const cores = ['amarelo', 'morrom', 'preto'];

for(let indice in cores){
    console.log(indice, cores[indice])
}

//for-of


//fizzBuzz

// divisivel por 3 => Fizz
// divisivel por 5 => Buzz
// divisivel por 3 e 5 => FizzBuzz
// nao e um numero => 'nao e um numero'

const result = fizzBuzz(15);
console.log(result);

function fizzBuzz(entrada){
    if( typeof entrada !== 'number')
        return 'nao e um numero';
    if( entrada % 3=== 0 && entrada %5 === 0)
        return '...FizzBuzz...'; 
    if( entrada % 3 === 0)
        return '...Fizz...';
    if( entrada % 5 === 0)
        return '...Buzz...';
    
    return entrada;
    
}

const result1 = fizzBuzz(20);
console.log(result1);

function fizzBuzz(entrada){
    if( typeof entrada !== 'number')
        return 'nao e um numero';
    if( entrada % 3=== 0 && entrada %5 === 0)
        return '...FizzBuzz...'; 
    if( entrada % 3 === 0)
        return '...Fizz...';
    if( entrada % 5 === 0)
        return '...Buzz...';
    
    return entrada;
    
}

const result2 = fizzBuzz(11);
console.log(result2);

function fizzBuzz(entrada){
    if( typeof entrada !== 'number')
        return 'nao e um numero';
    if( entrada % 3=== 0 && entrada %5 === 0)
        return '...FizzBuzz...'; 
    if( entrada % 3 === 0)
        return '...Fizz...';
    if( entrada % 5 === 0)
        return '...Buzz...';
    
    return entrada;
    
}

const result3 = fizzBuzz('teste');
console.log(result3);

function fizzBuzz(entrada){
    if( typeof entrada !== 'number')
        return 'nao e um numero';
    if( entrada % 3=== 0 && entrada %5 === 0)
        return '...FizzBuzz...'; 
    if( entrada % 3 === 0)
        return '...Fizz...';
    if( entrada % 5 === 0)
        return '...Buzz...';
    
    return entrada;
    
}
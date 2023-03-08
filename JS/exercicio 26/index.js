vel(120);


function vel(velocidade){
    const velMax = 70;
    const kmPontos = 5;
   if(velocidade <= velMax)
   console.log('esta dentro da velocidade permitida')
   else {
    const pontos = ((velocidade - velMax) / kmPontos);
        if(pontos >= 12)
          console.log('carteira suspensa')
        else
        console.log('voce perdeu: ' + pontos + ' pontos na carteira')
   }  
}

// outra forma de fazer a mesma funcao ------------------------------
vel2(125);
function vel2(velocidade){
   if(velocidade <= 70)
   console.log('esta dentro da velocidade permitida')
   else {
    const pontos = ((velocidade - 70) / 5);
        if(pontos >= 12)
          console.log('carteira suspensa')
        else
        console.log('voce perdeu: ' + pontos + ' pontos na carteira')
   }  
}
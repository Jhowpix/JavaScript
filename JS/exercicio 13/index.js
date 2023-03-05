let value = parseFloat(prompt('digite um valor.'));

if (isNaN(value) == true){
  alert('Digite somente numeros')
}

function cal(simb){

  let value2 = parseFloat(prompt('digite o segundo valor.'));

    if (isNaN(value2) == true){
      //alert('Digite somente numeros')
      throw new Error('digito invalido!')
    }

  switch(simb){
      case '+':
      document.getElementById('res').innerHTML='Resultado = ' + ''+ (value + 
      value2);
      value = (value + value2);
      break;
      case '-':
      document.getElementById('res').innerHTML='Resultado = ' + ''+(value - 
      value2);
      value = (value - value2);
      break;
      case '*':
      document.getElementById('res').innerHTML='Resultado = ' + ''+ (value * 
      value2);
      value = (value * value2);
      break;
      case '/':
      document.getElementById('res').innerHTML='Resultado = ' + ''+ (value / 
      value2);
      value = (value / value2);
      break;
  }
}
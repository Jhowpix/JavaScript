let value = parseFloat(prompt('digite um valor.'));

function cal(simb){

  let value2 = parseFloat(prompt('digite o segundo valor.'));

  switch(simb){
      case '+':
      document.getElementById('res').innerHTML='= '+ (value + value2);
      value = (value + value2);
      break;
      case '-':
      document.getElementById('res').innerHTML='= '+ (value - value2);
      value = (value - value2);
      break;
      case '*':
      document.getElementById('res').innerHTML='= '+ (value * value2);
      value = (value * value2);
      break;
      case '/':
      document.getElementById('res').innerHTML='= '+ (value / value2);
      value = (value / value2);
      break;
  }
}
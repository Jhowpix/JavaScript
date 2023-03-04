
function mostrarAreaAlert(){
  let largura = parseFloat(prompt('digite a largura'));
  let altura = parseFloat(prompt('digite a altura'));
   alert('area total: ' + (largura * altura));
}

function mostrarAreaOutput(){
  let largura = parseFloat(prompt('digite a largura'));
  let altura = parseFloat(prompt('digite a altura'));
  return document.getElementById('area').innerHTML='area total: ' + (altura * largura);
}


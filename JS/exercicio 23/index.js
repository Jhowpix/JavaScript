let menu = 0 ;
do{

    menu = parseInt(prompt('Escolha a opção de calculo: ' + 
                           ' \n1. Área do triângulo. ' +
                           ' \n2. Área do retângulo. ' +
                           ' \n3. Área do quadrado. ' +
                           ' \n4. Área do trapézio. ' +
                           ' \n5. Área do círculo. ' +
                           ' \n6. Sair'));
                           
switch(menu){
  case 1:
    tri()
    function  tri(){
    let trianguloBase = parseFloat(prompt('Qual a base do triângulo?'));
    let trianguloAltura = parseFloat(prompt('Qual a altura do triângulo?'));
    let areaTriangulo = (trianguloBase * trianguloAltura) / 2;
    alert('A área do tringulo é: ' + areaTriangulo);
    }
    break;
    case 2:
        ret()
        function ret(){
        let retanguloBase = parseFloat(prompt('Qual a base do retângulo?'));
        let retanguloAltura = parseFloat(prompt('Qual a base do retângulo?'));
        let areaRetangulo = retanguloBase * retanguloAltura;
        alert('A área do retângulo é: ' + areaRetangulo);
        }
        break;
        case 3:
            quad()
            function quad(){
            let quadradoLado = parseFloat(prompt('Qual o lado do quadrado?'));
            let areaQuadrado = quadradoLado * 2
            alert('A área do quadrado é: ' + areaQuadrado);
            }
            break;
            case 4:
                trap()
                function trap(){
                let trapezioBaseMaior = parseFloat(prompt('Qual a base maior do trapézio?'));
                let trapezioBaseMenor = parseFloat(prompt('Qual a base menor do trapézio?'));
                let trapezioAltura = parseFloat(prompt('Qual a altura do trapézio?'));
                let areaTrapezio = (trapezioBaseMaior + trapezioBaseMenor)* trapezioAltura /2;
                alert('A área do trapézio é: ' + areaTrapezio);
                }
                break;
                case 5:
                    cir()
                    function cir(){
                    let circuloRaio = parseFloat(prompt('Qual o raio do círculo?'));
                    let areaCirculo = 3.14 * circuloRaio;
                    alert('A área do círculoé: '+ areaCirculo);
                    }
                    break;
                    case 6:
                        alert('Encerrando sistema de calculo!');
                        break;
                        default:
                            alert('Opção invalida!');                     
}
}while( menu !== 6)
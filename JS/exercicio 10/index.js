function doClick(){
  var divObj = document.getElementById('userName');
  var value = divObj.value;
  alert(value);
}

function toAdd(){
  let objA = document.getElementById('a');
  let objB = document.getElementById('b');
  let objResult = document.getElementById('result');
  var a = parseInt(objA.value);
  var b = parseInt(objB.value);
  objResult.innerHTML= `= ${a + b}`;
}

function sub(){
  let objA = document.getElementById('a');
  let objB = document.getElementById('b');
  let objResult = document.getElementById('result');
  var a = parseInt(objA.value);
  var b = parseInt(objB.value);
  objResult.innerHTML= `= ${a - b}`;
}

function mult(){
  let objA = document.getElementById('a');
  let objB = document.getElementById('b');
  let objResult = document.getElementById('result');
  var a = parseInt(objA.value);
  var b = parseInt(objB.value);
  objResult.innerHTML= `= ${a * b}`;
}

function divide(){
  let objA = document.getElementById('a');
  let objB = document.getElementById('b');
  let objResult = document.getElementById('result');
  var a = parseInt(objA.value);
  var b = parseInt(objB.value);
  objResult.innerHTML= `= ${a / b}`;
}

//treino incremento

var d = 4;

// incrementa e imprime d = 5
document.write(++d);
document.write("<br>");

// decrementa e imprime d = 4
document.write(--d);
document.write("<br>");

// imprime e decrementa d =4
document.write(d--);
document.write("<br>");

//decrementa e imprime d = 2
document.write(--d);
document.write("<br>");

// imprime e incrementa d = 2
document.write(d++);
document.write("<br>");

// incrementa e imprime d = 4
document.write(++d);
document.write("<br>");
document.write("<br>");

// revisao incremento decremento e soma em geral 
var result = 10;

result = result + 1;
document.write(result);
document.write("<br>");

result  ++ ;
document.write(result);
document.write("<br>");

result  += 1;
document.write(result);
document.write("<br>");

result = result - 1;
document.write(result);
document.write("<br>");

result  -- ;
document.write(result);
document.write("<br>");

result  -= 1;
document.write(result);
document.write("<br>");

result = result * 2;
document.write(result);
document.write("<br>");

result  *= 2;
document.write(result);
document.write("<br>");

result = result / 2;
document.write(result);
document.write("<br>");

result  /= 2;
document.write(result);
document.write("<br>");

function add(){
  var quantityObj = document.getElementById('quantity');
  var value = parseInt(quantityObj.value);
  value ++
  quantityObj.value = value;
}

function sub(){
  var quantityObj = document.getElementById('quantity');
  var value = parseInt(quantityObj.value);
  value --
  quantityObj.value = value;
}


// calculos logicos 

var salary = 10000;
var tax = 0;

if( salary >= 500 && salary < 2000){
  tax = salary * 0.1;
}else if(salary >= 200 && salary < 5000){
  tax = salary * 0.15;
}else if(salary >= 5000 && salary < 20000){
  tax = salary * 0.2;
}else{
  tax = salary * 0.3;
}

document.write('tax amount= ' + tax)


function toTax(){

  var objSalary = document.getElementById('salary');
  var salary = parseInt(objSalary.value);
  var tax = 0 ;

  if( salary >= 500 && salary < 2000){
  tax = salary * 0.1;
}else if(salary >= 200 && salary < 5000){
  tax = salary * 0.15;
}else if(salary >= 5000 && salary < 20000){
  tax = salary * 0.2;
}else{
  tax = salary * 0.3;
}
document.getElementById('tax').innerHTML= tax;
}

function doPay(obj){
  var num = parseInt(obj.value);
  var resultObj = document.getElementById('Card');

  switch(num){

      case 1:
      resultObj.innerHTML= 'Pay by Vasa Card';
      breack;

      case 2:
      resultObj.innerHTML= 'Pay by Master Card';
      breack;

      case 3:
      resultObj.innerHTML= 'Pay by VPay Pal';
      breack;

      default:
        resultObj.innerHTML= 'Pay by face to face';
  }
}


//revisao while

var i = 0;

while(i <= 10 ){
  document.write(i+'|');
  i++
}

// revisao for 

for(var e = 0; e <= 10; e++){
  document.write(e+ "/")
}

// revisao array

var score =[90, 80, 70, 60, 87, 43, 20 ];
document.write(score[0]);
document.write(score[6]);
document.write(score[5]);
document.write(score[4]);

//imprima todos os valores do array

for(let i = 0; i < score.length; i++){
  document.write(score[i]+',')
}

//outra maneira

var score = new Array();
score[ 0] = 90;
score[ 1] = 80;
score[ 2] = 70;
score[ 3] = 60;
score[ 4] = 87;

for(let i = 0; i < score.length; i++){
  document.write(score[i] + ",")
}

function checkAll(obj){
  var bookArray = document.getElementsByName("book");
  for (let i = 0; i < bookArray.length; i++){
    bookArray[i].checked = obj.checked;
  }
}
let count = 0;

function changeCountMax(num){
    num = 0
    count += num + 1
   document.getElementById('count').innerHTML = count;
}

function changeCountMin(num){
    num = 0
    count += num - 1
   document.getElementById('count').innerHTML = count;
}

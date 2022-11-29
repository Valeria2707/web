let arr = [];
let startArr, endArr_B, sortArr_B;
let arr_B = [];
let current;
let max;

function createStartArray(){
    arr.length = prompt("Введіть кількість елементів");
    for(let i = 0; i < arr.length; i++){
        arr[i] = prompt('Введіть елемент');
    }
    startArr = "Вхідний масив: " + arr;
}
function searchMaxElement(){
    for(i = 0; i < arr.length; i++){
        if(arr[i]> max){
            max = arr[i];
        }
    }
}
function createEndArray() {
    for(i = 0; i < arr.length; i++){
        arr_B[i] = max * arr[i];
    }
    endArr_B = "Вихідний масив: " + arr_B;
}
function sortArray(){
    for ( i = 0; i < arr_B.length; i++)
    { 
        var v = arr_B[ i ], j = i-1;
      while (j >= 0 && arr_B[j] < v)
       { 
        arr_B[j+1] =arr_B[j]; 
        j--; }
      arr_B[j+1] = v;
    }  
    sortArr_B = "Сортований масив: " + arr_B;
}
function task1(){
    createStartArray();
    max = arr[0];
    searchMaxElement();
    createEndArray();
    sortArray();
    alert(startArr +"\n" + endArr_B + "\n" +sortArr_B);
}

task1();















let a = ''; // 1 число
let b = ''; //2 число 
let sign = ''; // знак операції
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-','+','x','/', 'x^y', '%'];

const out = document.querySelector('.calc-screen p');

function clearAll(){
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    //натиснута не кнопка
    if(!event.target.classList.contains('btn')) return;
    //натиснут очищувач
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    //отримую натиснуту кнопку
    const key = event.target.textContent;

    //якщо натиснута кнопка 0-9 або ,
    if(digit.includes(key)){
        if(b==='' && sign === ''){
            a += key;
            out.textContent = a;
        }
        else if( a!== '' && b !== ''&& finish){
            b = key;
            finish = false;
            out.textContent = b;
        }
        else{
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }

    // натиснуті знаки
    if(action.includes(key)){
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign);
        return;
    }

    //натиснути дорівнює
    if(key === "="){
        if( b === ''){
            b = a;
        }
        switch(sign){
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "x":
                a = a * b;
                break;
            case "/":
                if( b === "0"){
                    out.textContent = 'Помилка';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
            case "x^y":
                a = Math.pow(a, b);
                break;
            case "%":
                 a = a/100;
            break;
        }
         finish = true;
         out.textContent = a;
         console.log(a, b, sign);
    }
}
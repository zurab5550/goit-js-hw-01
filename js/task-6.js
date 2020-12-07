
let input;
let total = 0;

while (true){
    input = prompt("enter a number");
    let number = Number(input);
    total+=number;

    if(input === null){
        console.log(total);
        alert (`Общая сумма чисел равна ${total}`);
        break;
    }else if(Number.isNaN(number) === true){
        alert("Было введено не число, попробуйте еще раз");
    }
}







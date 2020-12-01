// let total = 0;

// while (true){
//     let input = prompt("Enter a number");

//     if (input === null){
//         input = Number(input);
//     total += input;
//         break;
//     }

    
// }
// console.log(`Общая сумма чисел равна ${total}`);


let input; 
let total = 0;
let number;

while (true) {
    input = prompt('Введите чило');
    number = Number(input);
    total += number;
    
       
    if (input === null) {
        
        console.log('Отменено пользователем');
        console.log(total);
        alert(`Общая сумма чисел равна ${total}`);
        break;
    }
}
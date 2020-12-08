let credits = 23580;
let pricePerDroid = 3000;
let numberOfDroids = prompt("Количество дроидов которые Вы хотите купить?")

let totalPrice = numberOfDroids * pricePerDroid;


if (numberOfDroids === null){
    console.log("Отменено пользователем!");
}

else if(totalPrice <= credits){
numberOfDroids = Number(numberOfDroids);
credits = credits - totalPrice;
console.log (`Вы купили ${numberOfDroids} дроидов, на счету осталось ${credits} кредитов.`);  
}

else if(Number.isNaN=numberOfDroids){
    alert("What are You typing???");

}

else {

    console.log ("Недостаточно средств на счету!");
}






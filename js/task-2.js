const total = 90;
let ordered = 30;

if (total>=ordered){
    console.log("Заказ оформлен, с вами свяжется менеджер")
}

ordered = 110;
if (total<ordered){
    console.log("На складе недостаточно товаров!")
}

ordered = 80;
if (total>=ordered){
    console.log("Заказ оформлен, с вами свяжется менеджер")
}
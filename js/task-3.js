let message = prompt("Введите пароль");
const ADMIN_PASSWORD = "jqueryismyjam";

if (message === null){
    console.log("Отменено пользователем!");
    // alert = function(){};
}

else if (ADMIN_PASSWORD === message){
    console.log("Добро пожаловать!");
    
}
else {
    console.log("Доступ запрещен, неверный пароль!")
    alert("Доступ запрещен, неверный пароль!");
}



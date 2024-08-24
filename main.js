let number = +prompt("Введите число:");
let degree = +prompt("Введите степень:");

if (isNaN(number) || number == 0) {
    alert("Число не может быть NaN или 0");
} 
else{
    
if (isNaN(degree) || degree == 0) {
    degree = 2; 
}
    
let result = 1; 
      
for (let i = 0; i < degree; i++) {
    result *= number; 
}

alert("Результат: " + result);
console.log("Результат: " + result);
}



let a = +prompt('Введите число');
let b = +prompt('Введите число степени');

let res = a;

if (isNaN(a)) {
    alert('Ошибка');
}
else if (isNaN(b)) {
    alert('Ошибка');
}

for (let i = 1; i < b; i++) {
    res *= a;
    console.log(res);
}

alert('Ответ - ' + a + '^' + b + ' = ' + res);
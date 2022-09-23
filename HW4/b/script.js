let count = +prompt('Введите кол-во примеров');
let minNum = +prompt('Введите минимальное число');
let maxNum = +prompt('Введите максимальное число');

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

for(let i = 0; i < count; i++) {
    let a = random(minNum, maxNum);
    let b = random(minNum, maxNum);
    let res = +prompt(a + ' + ' + b + ' = ' + ' ?');
    alert((a + b) == res ? 'Ответ верный' : 'Ответ не верный, правильный ответ: ' + (a + b));
}

// let size = +prompt('Введите размер треугольника');

// if (isNaN(size)) {
//     size = 5;
// }

let size = 5;

let symbol = '=';

// do {
//     let symbol = prompt('Введите символ');
// 
// } while (symbol == null) {
//     console.log(symbol);
// }

let last_symbol = prompt('Введите конечный символ');
for (let i = 1; i < size; i++) {
    for (let j = 1; j < i; j++) {
        if (j == i) {
            console.log(last_symbol);
        }

        console.log(symbol);
    }

    console.log('');
}

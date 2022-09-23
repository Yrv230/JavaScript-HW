var x = +prompt('Введите первое число');
var y = +prompt('Введите второе число');
var z = +prompt('Введите третье число');

if (x > y && x < z) {
    alert(x);
} else if (x < y && x > z) {
    alert(x);
}

if (y > x && y < z) {
    alert(y);
} else if (y < x && y > z) {
    alert(y);
}

if (z > y && z < x) {
    alert(z);
} else if (z < y && z > x) {
    alert(z);
}
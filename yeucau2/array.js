var a = [];
var b = Math.floor(Math.random() * 11) + 10;
for (let i = 0; i < b; i++) {
    let number = Math.floor(Math.random() * 91) + 10;
    a.push(number);
}
// tăng dần
for (let i = 0; i < a.length - 1; i++) {
    for (let j = i + 1; j < a.length; j++) {
        if (a[i] > a[j]) {
            let itemp = a[i];
            a[i] = a[j];
            a[j] = itemp;
        }
    }
}
console.log(a);
// giảm dần
for (let i = 0; i < a.length - 1; i++) {
    for (let j = i + 1; j < a.length; j++) {
        if (a[i] < a[j]) {
            let itemp = a[i];
            a[i] = a[j];
            a[j] = itemp;
        }
    }
}
console.log(a);
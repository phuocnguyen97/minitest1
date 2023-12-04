let n = parseInt(prompt("Nhập vào số nguyên dương n: "));
let sum = 0;
for(let i = 1; i < n; i += 2){
    sum = sum + i;
}
alert(`Tổng các số nguyên dương nhỏ hơn ${n} là ${sum}`)
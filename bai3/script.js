let a = prompt("Nhập số tự nhiên: ");

for (i = 0; i < a; i++){
    if( i % Math.sqrt(i) == 0) {
        document.write(i);
    }
}

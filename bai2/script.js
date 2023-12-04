let array = [-3, -2, -1, 1, 2, 3];
for (let i = 0; i < array.length; i++){
    if (array[i] < 0){
        array[i] = array[i] * -1;
    }
}
console.log(array);
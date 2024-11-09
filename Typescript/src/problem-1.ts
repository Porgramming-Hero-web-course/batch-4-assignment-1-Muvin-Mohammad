function sumArray(numbers: number[]): number {
    let num = 0;
    for (let i = 0; i < numbers.length; i++) {
        num += numbers[i];
    }
    return num;
}



console.log(sumArray([1, 2, 3, 4, 5]));



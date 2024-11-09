function removeDuplicates(numbers: number[]): number[] {
    const uniNumbers: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        if (uniNumbers.indexOf(numbers[i]) === -1) {
            uniNumbers.push(numbers[i]);
        }
    }
    return uniNumbers;
}



console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

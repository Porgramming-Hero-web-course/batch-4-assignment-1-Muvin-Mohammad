function countWordOccurrences(sentence: string, word: string): number {
   
    const Sentence = sentence.toLowerCase();
    const Word = word.toLowerCase();

    
    const words = Sentence.split(" ");

    
    return words.filter(w => w === Word).length;
}


console.log(countWordOccurrences("I love typescript", "typescript")); // Output: 1

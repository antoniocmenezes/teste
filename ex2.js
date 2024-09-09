function countLetterA(str) {
    let count = 0;
    
    for (let char of str) {
        if (char === 'a' || char === 'A') {
            count++;
        }
    }

    //Verificar se a letra 'a' está presente
    if (count > 0) {
        return `A letra 'a' ocorre ${count} vezes na string.`;
    } else {
        return "A letra 'a' não está presente na string.";
    }
}

//String a ser verificada
const stringToCheck = "Dado a sequência de Fibonacci, onde se inicia por";
console.log(countLetterA(stringToCheck));

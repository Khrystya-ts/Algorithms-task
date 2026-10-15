//1. Від 1 до n
//Дано натуральне число n. Виведіть всі числа від 1 до n.
function printNumbers(n) {
    if (n === 0) {
        return;
    }
    printNumbers(n - 1);
    process.stdout.write(n + " ");
}
printNumbers(5);
console.log();

//2. Від A до B
//Дано два цілих числа A і В. Виведіть всі числа від A до B включно, в порядку зростання, якщо A < B, або в порядку спадання в іншому випадку.
function printNumbersInRange(A, B) {
    process.stdout.write(A + " ");
    if (A === B) {
        return;
    }
    if (A < B) {
        printNumbersInRange(A + 1, B);
    } else {
        printNumbersInRange(A - 1, B);
    }
}
printNumbersInRange(5, 1);
console.log();

//3.Точна степінь двійки
//Дано натуральне число N. Виведіть слово YES, якщо число N є точним степенем двійки, або слово NO в іншому випадку.
function isPowerOfTwo(N) {
    if (N === 1) {
        return "YES";
    }
    if (N < 1 || N % 2 !== 0) {
        return "NO";
    }
    return isPowerOfTwo(N / 2);
}
console.log(isPowerOfTwo(8)); 
console.log(isPowerOfTwo(3)); 
//4: Сума цифр числа
//Дано натуральне число N. Обчисліть суму його цифр.
function sumOfDigits(N) {
    if (N === 0) {
        return 0;
    }
    return (N % 10) + sumOfDigits(Math.floor(N / 10));
}
console.log(sumOfDigits(179));

//5: Цифри числа справа наліво
//Дано натуральне число N. Виведіть всі його цифри по одній, у зворотному порядку, розділюючи їх пробілами або новим рядком.
function printDigitsReverse(N) {
    if (N === 0) {
        return;
    }
    process.stdout.write((N % 10) + " ");
    printDigitsReverse(Math.floor(N / 10));
}
printDigitsReverse(179); 
console.log();

// 6. Цифри числа зліва направо
// Дано натуральне число N. Виведіть всі його цифри по одній, у звичному порядку, розділюючи їх пробілами або новими рядками.
function printDigits(N) {
    if (N === 0) {
        return;
    }
    printDigits(Math.floor(N / 10));
    process.stdout.write((N % 10) + " ");
}
printDigits(179);
console.log(); 

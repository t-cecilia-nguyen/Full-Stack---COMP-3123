// Write a JavaScript program to capitalize the first letter of each word of a given string.

function capitalizeWords(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

console.log(capitalizeWords('the quick brown fox')); // The Quick Brown Fox
console.log(capitalizeWords('hello world')); // Hello World

// Write a JavaScript program to find the largest of three given integers.

function findLargest(a, b, c) {
    return Math.max(a, b, c);
}

console.log(findLargest (1,0,1));
console.log(findLargest (0,-10,-20));
console.log(findLargest (1000,510,440));

// Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.

function moveLastThree(str) {
    if (str.length < 3) {
        return str;
    }
    return str.slice(-3) + str.slice(0, -3);
}

console.log(moveLastThree("Python"));
console.log(moveLastThree("JavaScript"));
console.log(moveLastThree("Hi"));

// Write a JavaScript program to find the types of a given angle.

function findAngleType(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else {
        return "Invalid angle";
    }
}

console.log(findAngleType(47))
console.log(findAngleType(90))
console.log(findAngleType(145))
console.log(findAngleType(180))

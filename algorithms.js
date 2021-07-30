function factorial(a) {
    let result = 1;
    for (let i = 2; i <= a; i++) {
        result = result * i;
    }
    return result;
}

function factorialRec(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function bubbleSort(arr) {
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length - 1 - j; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1]
                arr[i + 1] = temp;
            }
        }
    }
}

function filter(arr, myFun) {
    let resArray = [];
    for (let cur of arr) {
        if (myFun(cur)) {
            resArray.push(cur);
        }
    }
    return resArray;
}

function reversArray(arr) {

    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}

function fibonacci(n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function palidrom(str) {
    str = str.toLowerCase();
    return str == str.split('').reverse().join('');
}

function maxInArray(array) {

    let max = array[0];
    for (let cur of array) {
        if (cur > max) {
            max = cur
        }
    }
    return max;
}

module.exports = {
    factorial: factorial,
    factorialRec: factorialRec,
    bubbleSort: bubbleSort,
    filter: filter,
    reversArray: reversArray,
    fibonacci: fibonacci,
    palindrome: palindrome,
    maxInArray : maxInArray
};

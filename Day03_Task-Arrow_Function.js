//a. Print odd numbers in an array
console.log("\n Arrow functions. \na. Print odd numbers in an array");

let arrowFunc1 = (n) => {
    let array = [];
    
    for(i=1;i<=n;i++){
        if(i%2===1){
            array.push(i);
        }
    }

    console.log("Odd numbers: ", array);
}
arrowFunc1(10);

// b. Convert all the strings to title caps in a string array
console.log("\nb. Convert all the strings to title caps in a string array");
let arrTitleCaps = (string) =>{
    
    let stringArr=[];

    for(i=0;i<string.length;i++){

        stringArr[i] = string[i];
    
        if(i === 0 && string[i] !== " "){
            stringArr[i] = string[i].toUpperCase();
        }

        if(string[i-1] === " " && string[i] !== " "){
            stringArr[i] = string[i].toUpperCase();
        }
    }

    console.log(stringArr.join(""));
}

arrTitleCaps("i am kumaravel");

//c. Sum of all numbers in an array
console.log("\nc. Sum of all numbers in an array");

let arraySum = (inputArray) => {
    let arrayTotal = 0;
    for(i=0;i<inputArray.length;i++){
        arrayTotal = arrayTotal+inputArray[i];
    }
    console.log("Array Total: ",arrayTotal);
}

arraySum([10,20,30]);

//d. Return all the prime numbers in an array
console.log("\nd. Return all the prime numbers in an array")

let primeNumbers = (n) =>{
    let c;
    let primeNumArray = [];
    for(i=2;i<=n;i++){
        c = 0;
        for(j=2;j<=i/2;j++){
            if(i%j === 0){
                c = 1;
            }
        }
        if(c === 0){
            primeNumArray.push(i);
        }
    }
    console.log("Prime number array: ", primeNumArray);
}

primeNumbers(15);

//e. Return all the palindromes in an array
console.log("\ne. Return all the palindromes in an array")

let palindromArray = (n) =>{
    let reversedArray = palindromArray = [];
    let c = d = 1;

    for(x = 1; x<=n; x++){
        reversedArray = [];
        number = x;
        c = d = 1;
        while(c === 1){
            if(number / 10 < 1){
                c = 0;
                reversedArray.push(number);
            }else{
                reversedArray.push(number%10);
                number = (number-(number%10))/10;            
            }
        }
    
        let j = reversedArray.length-1;
        for(i=0;i<reversedArray.length/2;i++){
            if(reversedArray[i] != reversedArray[j]){
                d = 0;
            }
            j = j-1;
        }

        if(d === 1){
            palindromArray.push(x);
        }
    }
    console.log("Palindrome Array: ", palindromArray);
}

palindromArray(100);
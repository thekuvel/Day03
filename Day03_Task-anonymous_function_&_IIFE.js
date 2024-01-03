// Programs in anonymous function & IIFE

// a. Print odd numbers in an array
console.log("\na. Print odd numbers in an array");

//Anonymous function
let anonymousFunctionA = function(n){
    let array = [];
    
    for(i=1;i<=n;i++){
        if(i%2===1){
            array.push(i);
        }
    }

    console.log("Anonymus Function result: ", array);
}
anonymousFunctionA(10);

//IIFE
(function(n){
    let array = [];
    
    for(i=1;i<=n;i++){
        if(i%2===1){
            array.push(i);
        }
    }

    console.log("IIFE Function result: ", array);
})(5);

// b. Convert all the strings to title caps in a string array
console.log("\nb. Convert all the strings to title caps in a string array");

//Anonymous Function
let anonymousFunctionB = function (string){
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

    console.log("Anonymous Function result: ",stringArr.join(""));
}
anonymousFunctionB("title lower case toupper case");

//IIFE
(function (string){
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

    console.log("IIFE Function result: ",stringArr.join(""));
})("title lower case toupper case");

//c. Sum of all numbers in an array
console.log("\nc. Sum of all numbers in an array");

//Anonymous Function
let anonymousFunctionC = function (inputArray){
    let arrayTotal = 0;
    for(i=0;i<inputArray.length;i++){
        arrayTotal = arrayTotal+inputArray[i];
    }
    console.log("Anonymous Function result: ",arrayTotal);
}
anonymousFunctionC([10,15,80]);

//IIFE
(function (inputArray){
    let arrayTotal = 0;
    for(i=0;i<inputArray.length;i++){
        arrayTotal = arrayTotal+inputArray[i];
    }
    console.log("IIFE Function result: ",arrayTotal);
})([1,2,3]);

//d. Return all the prime numbers in an array
console.log("\nd. Return all the prime numbers in an array")
//Anonymous Function
let anonymousFunctionD = function(n){
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
    console.log("Anonymous function Prime number array: ", primeNumArray);
}
anonymousFunctionD(11);

//IIFE
(function(n){
    let primeNumArray = [];
    let c = 0;
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
    console.log("IIFE function prime number array: ", primeNumArray);
})(11);

//e. Return all the palindromes in an array
console.log("\ne. Return all the palindromes in an array")
//Anonymous Function
console.log("Anonymous Function")
let anonymousFunctionE = function(userInput){
    let number;
    let rem, revNumber = 0;
    
    for(i=0;i<userInput.length;i++){
        
        number = userInput[i];
        rem = revNumber = 0;
        
        while(number > 0){
            rem = number % 10;
            number = parseInt(number / 10);
            revNumber = revNumber * 10 + rem;
        }
        
        if(userInput[i] == revNumber){
            console.log(userInput[i], " is Palindrome");
        }else{
            console.log(userInput[i], " is not a Palindrome");
        }        
    }
}

anonymousFunctionE([123,12321]);

(function(n){
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
    console.log("IIFE palindrome", palindromArray);
})(80);

//f. Return median of two sorted arrays of the same size
console.log("f. Return median of two sorted arrays of the same size");

//Anonymous

let anonymousFunctionF = function(array1, array2){
    let array = array1;
    let median, temp;
    
    for(i=0;i<array2.length;i++){ //Merging two given arrays
        array.push(array2[i]);
    }

    for(i=0;i<array.length;i++){ //Sorting arrays
        for(j=i;j<array.length;j++){
            if(array[j]<array[i]){
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }        
    }

    median = (array[array.length/2] + array[(array.length/2)-1])/2;
    console.log("Anonymous function median of 2 sorted array:", array, "Median = ", median);

}

anonymousFunctionF([11,5,11], [22,8,46]);

(function(array1, array2){
    let array = array1;
    let median, temp;
    
    for(i=0;i<array2.length;i++){ //Merging two given arrays
        array.push(array2[i]);
    }

    for(i=0;i<array.length;i++){ //Sorting arrays
        for(j=i;j<array.length;j++){
            if(array[j]<array[i]){
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }        
    }

    median = (array[array.length/2] + array[(array.length/2)-1])/2;
    console.log("IIFE function median of 2 sorted array:", array, "Median = ", median);

})([8,7,3,4], [5,6,10,1]);

//g. Remove duplicates from an array
console.log("\ng. Remove duplicates from an array");

//Anonymous
let anonymousFunctionG = function(array){
    let finalArray = [];
    let c = 0;

    console.log("Ananymous Function \nOriginal array = ", array);
    
    for(i=0;i<array.length;i++){
        c = 0;
        
        if(i===0){
            finalArray.push(array[i]);
            c = 1;
        }
        
        for(j=0;j<finalArray.length;j++){
            if(finalArray[j] === array[i]){
                c = 1;
            }
        }
        
        if(c === 0){
            finalArray.push(array[i]);
        }
    }
    console.log("Array with unique values",finalArray);
}
anonymousFunctionG([10,10,20,10]);

//IIFE
(function(array){
    let finalArray = [];
    let c = 0;

    console.log("\nIIFE Function \nOriginal array = ", array);
    
    for(i=0;i<array.length;i++){
        c = 0;
        
        if(i===0){
            finalArray.push(array[i]);
            c = 1;
        }
        
        for(j=0;j<finalArray.length;j++){
            if(finalArray[j] === array[i]){
                c = 1;
            }
        }
        
        if(c === 0){
            finalArray.push(array[i]);
        }
    }
    console.log("Array with unique values",finalArray);
})([20,50,20,40,20]);


//h. Rotate an array by k times
console.log("h. Rotate an array by k times");
//Anonymous
let anonymousFunctionH = function(array,k){
    let temp;
    for(i=0;i<k;i++){
        temp = array[array.length-1];
        for(j=array.length-1;j>0;j--){
            array[j] = array[j-1];
        }
        array[0]=temp
    }
    console.log("Anonymous function rotated array", array);
}
anonymousFunctionH([1,2,3,4],4);

(function(array,k){
    let temp;
    for(i=0;i<k;i++){
        temp = array[array.length-1];
        for(j=array.length-1;j>0;j--){
            array[j] = array[j-1];
        }
        array[0]=temp
    }
    console.log("IIFE function rotated array ", array);
})([6,7,8,9],1);


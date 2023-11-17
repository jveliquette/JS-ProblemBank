// Welcome to my JavaScript Problem Bank Work Space :)


/*  QUESTION 1 // Write a function called "addArrayProperty".
Given an object, a key, and an array, "addArrayProperty" sets a new property on the object at the given key, with its value set to the given array. */
// const myObj = {};
// const myArray = [1, 3];
// addArrayProperty(myObj, 'myProperty', myArray);
// console.log(myObj.myProperty); // --> [1, 3]

// function addArrayProperty(obj, key, arr) {
//     obj[key] = arr;
//   }

//------------------------------------------------------------------------------------------------------------------

/* QUESTION 2 // Write a function called "addToBackNew".
Given an array and an element, "addToBackNew" returns a clone of the given array, with the given element added to the end.
Important: It should be a NEW array instance, not the original array instance. */
// const input = [1, 2];
// const output = addToBackOfNew(input, 3);
// console.log(input); // --> [1, 2]
// console.log(output); // --> [1, 2, 3]

// function addToBackOfNew(arr, element) {
//   let newArr1 = [];
//   let newArr2 = newArr1.concat(arr) // combining newArr1 [] with arr (array of elements), basically just making a brand new array named newArr2 that has the same variables as arr.
//   newArr2.push(element);
//   return newArr2;
// }

//------------------------------------------------------------------------------------------------------------------

/* QUESTION 3 // Write a function called "addToFrontOfNew".
Given an array and an element, "addToFrontOfNew" returns a new array containing all the elements of the given array, with the given element added to the front.
Important: It should be a NEW array instance, not the original array instance. */
// const input = [1, 2];
// const output = addToFrontOfNew(input, 3);
// console.log(output); // --> [3, 1, 2];
// console.log(input); --> [1, 2]

// function addToFrontOfNew(arr, element) {
//   let newArr1 = [];
//   let newArr2 = newArr1.concat(arr);
//   newArr2.unshift(element);
//   return newArr2;
// }

//------------------------------------------------------------------------------------------------------------------

/* QUESTION 4 // Write a function called "areBothOdd".
Given 2 numbers, "areBothOdd" returns whether or not both of the given numbers are odd. */
// const output = areBothOdd(1, 3);
// console.log(output); // --> true

// function areBothOdd(num1, num2) {
//   return num1 % 2 !== 0 && num2 % 2 !== 0;
// }

//------------------------------------------------------------------------------------------------------------------

/* QUESTION 5 // Write a function called "areValidCredentials".
Given a name and a password, "areValidCredentials", returns true if the name is longer than 3 characters, AND, the password is at least 8 characters long. Otherwise it returns false. */
// const output = areValidCredentials('Ritu', 'mylongpassword')
// console.log(output); // --> true

// function areValidCredentials(name, password) {
//   return name.length >= 3 && password.length >= 8;
// }

//------------------------------------------------------------------------------------------------------------------

/* QUESTION 6 // Write a function called "average".
Given two numbers, "average" returns their average. */
// const output = average(4, 6);
// console.log(output); // --> 5

// function average(num1, num2) {
//   return (num1 + num2) / 2;
// }

//------------------------------------------------------------------------------------------------------------------

/* QUESTION 7 // Write a function called "calculateBillTotal".
Given the pre tax and pre tip amount of a meal, "calculateBillTotal" returns the total amount due after tax and tip.
Notes:
    - Assume that sales tax is 9.5% and tip is 15%.
    - Do NOT tip on the sales tax, only on the pre tip amount. */
// const output = calculateBillTotal(20);
// console.log(output); // --> 24.9

// function calculateBillTotal(preTaxAndTipAmount) {
//   let tip = preTaxAndTipAmount * 0.15;
//   let tax = preTaxAndTipAmount * 0.095;
//   return preTaxAndTipAmount + tip + tax;
// }
// console.log(calculateBillTotal(20))

//------------------------------------------------------------------------------------------------------------------

/* QUESTION 8 // Write a function called "computeAverageLengthOfWords".
Given two words, "computeAverageLengthOfWords" returns the average of their lengths. */
// const output = computeAverageLengthOfWords('code', 'programs');
// console.log(output); // --> 6

// function computeAverageLengthOfWords(word1, word2) {
//   let length1 = word1.length;
//   let length2 = word2.length;
//   return (length1 + length2) / 2;
// }

//------------------------------------------------------------------------------------------------------------------

/* QUESTION 9 // Write a function called "computeCompoundInterest".
Given a principal, an interest rate, a compounding frequency, and a time (in years), "computeCompoundInterest" returns the amount of compound interest generated.
    This shows the formula used to calculate the total compound interest generated.
    Reference: https://en.wikipedia.org/wiki/Compound_interest#Calculation_of_compound_interest */
  // formula = Amount = principal * (1 + (interestRate/compoundingFrequency)^compoundingFREQUENCY * timeinYears) - principal
// const output = computeCompoundInterest(1500, .043, 4, 6);
// console.log(output); // --> 438.8368221341061

// function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
//   return (principal * (1 + (interestRate/compoundingFrequency))**(compoundingFrequency * timeInYears) - principal);
// }

//------------------------------------------------------------------------------------------------------------------

/* QUESTION 10 // Write a function called "computeFactorialOfN".
Given a natural number (a whole number greater than 0), "computeFactorialOfN" returns its factorial. */
// const output = computeFactorialOfN(3);
// console.log(output); // --> 6
// const output = computeFactorialOfN(4);
// console.log(output); // --> 24

// function computeFactorialOfN(n) {
//   let answer = 1;
//     for(let i = n; i >= 1; i--) {
//       answer = answer * i;
//     }
//     return answer
// }

//------------------------------------------------------------------------------------------------------------------

/* QUESTION 11 // Write a function called "computePerimeterOfACircle".
Given the radius of a circle, "computePerimeterOfACircle" returns its perimeter.
Notes:
    - Math.PI can be used for pi.
    - Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI */
// FORMULA = 2 * Math.PI * radius
// const output = computePerimeterOfACircle(4);
// console.log(output); // --> 25.132741228718345

// function computePerimeterOfACircle(radius) {
//   return 2 * Math.PI * radius;
// }

//------------------------------------------------------------------------------------------------------------------

/* QUESTION 12 // Write a function called "computeProductOfAllElements".
Given an array of numbers, "computeProductOfAllElements" returns the products of all the elements in the given array.
Notes:
    - If given array is empty, it should return 0. */
// const output = computeProductOfAllElements([]);
// console.log(output); // --> 60

// function computeProductOfAllElements(arr) {
//   if (arr.length > 0) {
//     let product = 1;
//     for (let i = 0; i < arr.length; i++) {
//       product *= arr[i];
//     }
//   return product;
//   } else {
//     return 0;
//   }
// }

//------------------------------------------------------------------------------------------------------------------

/*  QUESTION 13 // Write a function called "computeSummationToN".
Given a number, "computeSummationToN" returns the sum of sequential numbers leading up to the given number, beginning at 0.
Notes:
    - If n = 4, it should calculate the sum of 1 + 2 + 3 + 4, and return 10. */
// const output = computeSummationToN(6);
// console.log(output); // --> 21

// function computeSummationToN(n) { // if n = 4
//   let sum = 0; // setting our accumulator to 0
//   for (let i = 1; i <= n; i++) { // loop - setting i equal to 1 (where we want to start), as long as i is less than or equal to 4, we will continue; then adding 1
//     sum += i; // first loop = sum = 0+1 = 1, 2ND = 1+2 = 3, 3+3 = 6, 6+4 = 10!
//   }
//   return sum;
// }

//------------------------------------------------------------------------------------------------------------------

/* QUESTION 14 // Write a function called "computeSumOfAllElements".
Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements in the given array. */
// const output = computeSumOfAllElements([1, 2, 3])
// console.log(output); // --> 6

// function computeSumOfAllElements(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

//------------------------------------------------------------------------------------------------------------------

/* QUESTION 15 // Write a function called "computeTripledAreaOfARectangle".
Given a length and width of a rectangle, "computeTripledAreaOfARectangle" returns the rectangle's area, multiplied by 3. */
// const output = computeTripledAreaOfARectangle(2, 4);
// console.log(output); // --> 24

// function computeTripledAreaOfARectangle(length, width) {
//   return (length * width) * 3;
// }

//------------------------------------------------------------------------------------------------------------------

/* QUESTION 16 // Write a function called "convertScoreToGrade".
Given a score, "convertScoreToGrade" returns a string representing the letter grade corresponding to the given score.
Notes:
    - (100 - 90) -->'A'
    - (89 - 80) -->'B'
    - (79 - 70) -->'C'
    - (69 - 60) -->'D'
    - (59 - 0) -->'F'
    - If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'. */
// const output = convertScoreToGrade(103);
// console.log(output); // -->'A'

// function convertScoreToGrade(score) {
//   if(score <= 100 && score >= 90) {
//     return 'A';
//   } else if (score <= 89 && score >= 80) {
//     return 'B';
//   } else if (score <= 79 && score >= 70) {
//     return 'C';
//   } else if (score <= 69 && score >= 60) {
//     return 'D';
//   } else if (score <= 59 && score >= 0) {
//     return 'F';
//   } else {
//     return 'INVALID SCORE';
//   }
// }

//------------------------------------------------------------------------------------------------------------------

/* QUESTION 17 // Write a function called "convertScoreToGradeWithPlusAndMinus".
Given a score, "convertScoreToGradeWithPlusAndMinus" returns a string representing the letter grade corresponding to the given score.
Notes:
    - (100 - 90) -->'A'
    - (89 - 80) -->'B'
    - (79 - 70) -->'C'
    - (69 - 60) -->'D'
    - (59 - 0) -->'F'
    - If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
    - If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a '-'
    - If the score is be the 8 and 9 (inclusive) of a given range, return the letter with a '+'
    - There are is no F+ and there is no F-. */
// const output = convertScoreToGradeWithPlusAndMinus(91);
// console.log(output); // -->'A-'

// function convertScoreToGradeWithPlusAndMinus(score) {
//   if(score <= 100 && score >= 90) {
//     if (score <= 92) {
//       return 'A-';
//     } else if (score >= 98) {
//       return 'A+';
//     } else {
//       return 'A';
//     }
//   } else if (score <= 89 && score >= 80) {
//     if (score <= 82) {
//       return 'B-';
//     } else if (score >= 88) {
//       return 'B+';
//     } else {
//       return 'B';
//     }
//   } else if (score <= 79 && score >= 70) {
//     if (score <= 72) {
//       return 'C-';
//     } else if (score >= 78) {
//       return 'C+';
//     } else {
//       return 'C';
//     }
//   } else if (score <= 69 && score >= 60) {
//     if (score <= 62) {
//       return 'D-';
//     } else if (score >= 68) {
//       return 'D+';
//     } else {
//       return 'D';
//     }
//   } else if (score <= 59 && score >= 0) {
//     return 'F';
//   } else {
//     return 'INVALID SCORE';
//   }
// }

//------------------------------------------------------------------------------------------------------------------

/* QUESTION 18 // Write a function called "countAllCharacters".
Given a string, "countAllCharacters" returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.
Notes:
    - If given an empty string, countAllCharacters should return an empty object. */
// const output = countAllCharacters('banana');
// console.log(output); // --> {b: 1, a: 3, n: 2}

// function countAllCharacters(str) {
//   let obj = {};
//   if (str === '') return obj;
//   for (let i = 0; i < str.length; i++) {
//     if (typeof obj[str[i]] === 'undefined') {
//       obj[str[i]] = 1;
//     } else obj[str[i]] += 1;
//   }
//   return obj;
// }

//------------------------------------------------------------------------------------------------------------------

/* QUESTION 19 // Write a function called "doubleSquareRootOf". Given a number, "doubleSquareRootOf" returns double its square root. */
// const output = doubleSquareRootOf(121);
// console.log(output); // --> 22

// function doubleSquareRootOf(num) {
//   return Math.sqrt(num) * 2;
// }

//------------------------------------------------------------------------------------------------------------------

/* QUESTION 20 // Write a function called "extend".
Given two objects, "extend" adds properties from the 2nd object to the 1st object.
Notes:
    - Add any keys that are not in the 1st object.
    - If the 1st object already has a given key, ignore it (do not overwrite the property value).
    - Do not modify the 2nd object at all. */
// const obj1 = {
//   a: 1,
//   b: 2
// };
// const obj2 = {
//   b: 4,
//   c: 3
// };

// extend(obj1, obj2);

// console.log(obj1); // --> {a: 1, b: 2, c: 3}
// console.log(obj2); // --> {b: 4, c: 3}

// function extend(obj1, obj2) {
//   for (let i in obj2) {
//     if (!obj1[i]) {
//       obj1[i] = obj2[i];
//     }
//   }
//   return obj1;
// }

//------------------------------------------------------------------------------------------------------------------

/* QUESTION 21 // Write a function called "filterOddElements".
Given an array of numbers, "filterOddElements" returns an array containing only the odd numbers of the given array. */
// const output = filterOddElements([1, 2, 3, 4, 5]);
// console.log(output); // --> [1, 3, 5]

// function filterOddElements(arr) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// }

//------------------------------------------------------------------------------------------------------------------

/* QUESTION 22 // Write a function called "filterOddLengthWords".
Given an array of string, "filterOddLengthWords" returns an array containing only the elements of the given array whose lengths are odd numbers. */
// const output = filterOddLengthWords(['there', 'it', 'is', 'now']);
// console.log(output); // --> ['there', "now']

// function filterOddLengthWords(words) {
//   let newArr = [];
//     for (let i = 0; i < words.length; i++) {
//       if (words[i].length % 2 !== 0) {
//         newArr.push(words[i]);
//       }
//     }
//     return newArr;
// }

//------------------------------------------------------------------------------------------------------------------

/* QUESTION 23 // Write a function called "findMaxLengthOfThreeWords".
Given 3 words, "findMaxLengthOfThreeWords" returns the length of the longest word. */
// const output = findMaxLengthOfThreeWords('a', 'be', 'see');
// console.log(output); // --> 3

// function findMaxLengthOfThreeWords(word1, word2, word3) {
//   return Math.max(word1.length, word2.length, word3.length);
// }

//------------------------------------------------------------------------------------------------------------------

/* QUESTION 24 // Write a function called "findShortestOfThreeWords".
Given 3 strings, "findShortestOfThreeWords" returns the shortest of the given strings.
Notes:
    - If there are ties, it should return the first word in the parameters list. */
// const output = findShortestOfThreeWords('a', 'two', 'three');
// console.log(output); // -->'a'

// function findShortestOfThreeWords(word1, word2, word3) {
//   if (word1.length < word2.length && word1.length < word3.length) {
//     return word1;
//   } else if (word2.length < word3.length && word2.length < word1.length) {
//     return word2;
//   } else if (word3.length < word1.length && word3.length < word2.length) {
//     return word3;
//   } else {
//     return word1;
//   }
// }

//------------------------------------------------------------------------------------------------------------------

/* QUESTION 25 // Write a function called "findSmallestElement".
Given an array of numbers, "findSmallestElement" returns the smallest number within the given array.
Notes:
    - If the given array is empty, it should return 0. */
// const output = findSmallestElement([4, 1, 9, 10]);
// console.log(output); // --> 1

// function findSmallestElement(arr) {
//   if (arr.length === 0) return 0;
//     let smallest = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] < smallest) {
//         smallest = arr[i];
//       }
//     }
//   return smallest;
// }

//------------------------------------------------------------------------------------------------------------------

/* QUESTION 26 // Write a function called "findSmallestNumberAmongMixedElements".
Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.
Notes:
    - If the given array is empty, it should return 0.
    - If the array contains no numbers, it should return 0. */
// const output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
// console.log(output); // --> 4

// function findSmallestNumberAmongMixedElements(arr) {
//   if (arr.length === 0) return 0;
//     let result = 0;
//     let count = 100;
//     let num;
//     for (let i = 0; i < arr.length; i++) {
//       if (typeof (arr[i]) === 'number') {
//         num = arr[i];
//         if (num < count) {
//           count = num;
//           result = num;
//         }
//       }
//     }
//     return result;
// }

//------------------------------------------------------------------------------------------------------------------

/* QUESTION 27 // Write a function called "getAllButLastElementOfProperty".
Given an object and a key, "getAllButLastElementOfProperty" returns an array containing all but the last element of the array located at the given key.
Notes:
    - If the array is empty, it should return an empty array.
    - If the property at the given key is not an array, it return an empty array.
    - If there is no property at the key, it should return an empty array. */
// const obj = {
//   key: [1, 2, 3]
// };
// const output = getAllButLastElementOfProperty(obj, 'key');
// console.log(output); // --> [1,2]

// function getAllButLastElementOfProperty(obj, key) {
//   let arr = [];
//   let objectAtKey = obj[key];
//   if (Array.isArray(objectAtKey)) {
//     arr = objectAtKey.slice(0, objectAtKey.length - 1);
//   }
//   return arr;
// }

//------------------------------------------------------------------------------------------------------------------

/* QUESTION 28 // Write a function called "getAllElementsButFirst".
Given an array, "getAllElementsButFirst" returns an array with all the elements but the first. */
// const input = [1, 2, 3, 4];
// const output = getAllElementsButFirst(input);
// console.log(output); // --> [2, 3, 4]

// function getAllElementsButFirst(array) {
//   return array.slice(1, array.length);
// }

//------------------------------------------------------------------------------------------------------------------

/* QUESTION 29 // Write a function called "getAllElementsButLast".
Given an array, "getAllElementsButLast" returns an array with all the elements but the last. */
// const input = [1, 2, 3, 4];
// const output = getAllElementsButLast(input);
// console.log(output); // --> [1, 2 , 3]

// function getAllElementsButLast(array) {
//   return array.slice(0, array.length - 1);
// }

//------------------------------------------------------------------------------------------------------------------

/* QUESTION 30 // Write a function called "getAllElementsButNth".
Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth. */
// const output = getAllElementsButNth(['a', 'b', 'c'], 1);
// console.log(output); // --> ['a', 'c']

// function getAllElementsButNth(array, n) {
//   array.splice(n, 1);
//   return array;
// }

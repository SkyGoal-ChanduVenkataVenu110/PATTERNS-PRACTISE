import { useState } from "react";

const initialData = [];

export default function TodoUI() {

    const [applications, setApplications] = useState(initialData);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobileNumber: "",
    });
    const [editBtn, setEditBtn] = useState(false);
    const [editRecordId, setEditRecordId] = useState(null);

    // const handleAdd = () => {
    //     if (value.trim() === "") return;
    //     addTodo(value);
    //     setValue("");
    // };

    // FIND EVEN NUM COUNT;

    // const arr = [5, 12, 7, 10, 5, 8, 9, 4, 13, 2, 8, 10];

    // const findEvenNum = (a) => {
    //     let count = 0;
    //     if (!a) {
    //         return;
    //     };
    //     for (let i = 0; i < a?.length; i++) {
    //         if (a[i] % 2 === 0) {
    //             count++;
    //         };
    //     };
    //     return count;
    // };

    // console.log("Even Num Count", findEvenNum(arr));

    // const reverseArr = (a) => {
    //     let revArr = [];
    //     for (let i = a?.length - 1; i >= 0; i--) {
    //         revArr.push(a[i]);
    //     };
    //     return revArr;
    // };

    // // REVERSE AN ARRAY
    // console.log("Reversed Arr", reverseArr(arr));

    // const sumArr = (a) => {
    //     let s = 0;
    //     for (const v of a) {
    //         s += v;
    //     };
    //     return s;
    // };

    // console.log("Array Sum", sumArr(arr));

    // const findSecondLar = (a) => {
    //     let firLar = a[0];
    //     let secLar = "";
    //     for (let i = 1; i < a?.length; i++) {
    //         if (a[i] > firLar) {
    //             secLar = firLar;
    //             firLar = a[i];
    //         } else if (a[i] < firLar && a[i] > secLar) {
    //             secLar = a[i];
    //         }
    //     };

    //     return secLar;
    // };

    // console.log("Second Largest Num in Arr", findSecondLar(arr));


    // const countFrequency = (a) => {
    //     const map = {};

    //     for (const num of a) {
    //         map[num] = (map[num] || 0) + 1;
    //     }

    //     return map;
    // };

    // console.log("Frequency Count", countFrequency(arr));

    // console.log("Prototype", String.prototype)

    // for (let i = 0; i < 3; i++) {
    //     setTimeout(() => {
    //         console.log("I", i);
    //     }, 3000);
    // };

    // function outer() {
    //     let x = 10;

    //     function inner() {
    //         console.log(x);
    //     }

    //     return inner;
    // }

    // const fn = outer();
    // fn();

    // function outer() {
    //     let count = 0;
    //     return function () {
    //         count++;
    //         console.log("Count", count);
    //     };
    // };

    // const out = outer();
    // out();
    // out();

    // greet();

    // function greet() {
    //     console.log("YDw");
    // };

    // function reverseStr(str) {
    //     let result = "";
    //     for (let i = str?.length - 1; i >= 0; i--) {
    //         result += str[i];
    //     };
    //     return result;
    // };

    // console.log("String Reverse", reverseStr("venu"));

    // function firstOccurrence(a) {
    //     console.log("A", a);
    //     const target = 10;
    //     let result = "";
    //     for (let i = 0; i < a?.length; i++) {
    //         if (target === a[i]) {
    //             result = i;
    //             break;
    //         }
    //     };
    //     return result;
    // };

    // console.log("First Occurrence", firstOccurrence(arr));

    // function sortArray(a) {
    //     for (let i = 1; i < a.length; i++) {
    //         if (a[i] < a[i - 1]) {
    //             return false;
    //         };
    //     };
    //     return true;
    // };

    // console.log("Is Array Sorted", sortArray(arr));

    // const nestedArr = [1, [2, [3, [4]], [7, 8]]];

    // function flatArr(a) {
    //     let result = [];
    //     for (const ele of a) {
    //         if (Array.isArray(ele)) {
    //             const val = flatArr(ele);
    //             result.push(...val);
    //         } else {
    //             result.push(ele);
    //         }
    //     };
    //     return result;
    // };

    // console.log("Flattened Array", flatArr(nestedArr));

    // const duplicateArr = [1, 2, 4, 1, 3, 5, 6, 4];

    // function removeDuplicateFromArr(a) {
    //     a.sort((a, b) => a - b)
    //     let result = [];
    //     let firEle = a[0];
    //     for (let i = 1; i < a?.length; i++) {
    //         if (a[i] !== firEle) {
    //             firEle = a[i];
    //             result.push(a[i]);
    //         }
    //     }
    //     return result;
    // };

    // console.log("Unique Elements", removeDuplicateFromArr(duplicateArr));

    // function factorialOutput(n) {
    //     let result = 1;
    //     for (let i = n; i >= 1; i--) {
    //         result = result * i;
    //     };
    //     return result;
    // };

    // console.log("Factorial Number", factorialOutput(10));

    // const obj = {
    //     name: "Chandu",
    //     greet() {
    //         console.log(this.name)
    //     },
    // };

    // const fn = obj.greet.bind(obj);
    // console.log(fn())

    // const person = {
    //     name: "Chandu",

    //     greet() {
    //         return this.name;
    //     }
    // };

    // const another = {
    //     name: "React"
    // };

    // another.greet = person.greet;

    // console.log(person.greet());
    // console.log(another.greet());

    // function greet() {
    //     console.log("this", this);
    // };

    // greet();


    // Two Pointer Pattern

    // function reverseArr(a) {
    //     let l = 0;
    //     let r = a.length - 1;
    //     while (l < r) {
    //         let temp = a[l];
    //         a[l] = a[r];
    //         a[r] = temp;
    //         // [a[l], a[r]] = [a[r], a[l]];
    //         l++;
    //         r--;
    //     };
    //     return a;
    // };

    // Output = [10,8,2,13,...,10,7,12,5] etc..

    // console.log("Reverse An Array", reverseArr(arr));

    // const str = "Madam";

    // function isPalindrome(s) {

    //     let l = 0;
    //     let r = s.length - 1;

    //     while (l < r) {
    //         if (s[l] !== s[r]) {
    //             return false;
    //         };
    //         l++;
    //         r--;
    //     };

    //     return true;

    //     // if (s === duplicateStr) return true;
    //     // return false;
    // };

    // console.log("Is Palindrome", isPalindrome(str.toLowerCase()));

    // Give every employee a 10% salary hike, keep the original array unchanged, add a new field:updatedSalary

    // const employeeData = [
    //     { id: 1, name: "Amit", salary: 50000 },
    //     { id: 2, name: "Neha", salary: 40000 },
    //     { id: 3, name: "Ravi", salary: 10000 },
    // ];

    // const updatedEmpSalary = employeeData.map((item) => ({
    //     ...item,
    //     updatedEmpSalary: item?.salary + ((10 / 100) * item?.salary),
    // }));

    // const updatedEmpSalary = employeeData.map((item) => ({
    //     ...item,
    //     ...(item?.salary > 10000 && { updatedEmpSalary: item?.salary + ((10 / 100) * item?.salary) })
    // }));

    // console.log("Updated Employee Salary", updatedEmpSalary);

    // Find Longest Word in a sentence.

    // const sen = "I love javascript programming language.";

    // function longestWord(s) {
    //     s.replace(/[^\w\s]/g, "");
    //     const splitStr = s.split(" ");
    //     let result = splitStr[0];
    //     for (let i = 1; i < splitStr.length; i++) {
    //         if (splitStr[i].length > result.length) {
    //             result = splitStr[i];
    //         };
    //     };
    //     return result;
    // };

    // console.log("Longest word", longestWord(sen));

    // const unsortedArr = [100, 1, 500, 6];

    // console.log(unsortedArr.sort())

    // console.log("arr", arr);

    // function removeDuplicateFromArr(a) {
    //     a.sort((a, b) => a - b);
    //     let l = 0;
    //     for (let i = 1; i < a.length; i++) {
    //         if (a[l] !== a[i]) {
    //             l++;
    //             a[l] = a[i];
    //         };
    //     };
    //     return a.slice(0, l + 1);
    // };

    // console.log("Remove Duplicates", removeDuplicateFromArr([1, 2, 3, 1, 2]));


    // Print Indexes of two array elements, sum equals to target 17
    // const arr = [7, 15, 9, 10, 6, 1];

    // // Below only works for sorted array
    // function sumOfTwoElementsToTarget(a) {
    //     // a.sort((a, b) => a - b);
    //     const target = 17;
    //     for (let i = 0; i < a.length; i++) {
    //         for (let j = i + 1; j < a.length; j++) {
    //             if ((a[i] + a[j]) === target) {
    //                 return [i, j];
    //             };
    //         };
    //     };
    // };

    // console.log("Sum of Two Elements Which equals to target", sumOfTwoElementsToTarget(arr));

    // const arr = [1, 2, 3, 4, 5, 6];
    // For unsorted arrays if you want to return two indices of elements which equals to target we have to use hashMap
    // function sumOfTwoElementsToTarget(a) {
    //     const map = {};
    //     const target = 10;
    //     for (let i = 0; i < a.length; i++) {
    //         const complement = target - a[i];
    //         if (map[complement] !== undefined) {
    //             return [map[complement], i];
    //         };
    //         map[arr[i]] = i;
    //     };
    // };

    // console.log("Sum of Two Elements Which equals to target", sumOfTwoElementsToTarget(arr));

    // const arr = [1, 2, 3, 4, 1, 2, 0];

    // function removeDuplicateFromArr(a) {
    //     let uniqueItems = [];
    //     for (let i = 0; i < a.length; i++) {
    //         if (a.indexOf(a[i]) === i) {
    //             uniqueItems.push(a[i]);
    //         }
    //     }
    //     return uniqueItems;
    // };

    // console.log("Unique Numbers", removeDuplicateFromArr(arr));

    // const name = "venkatavenuchandu";

    // function firstOccurrenceInString(str) {
    //     let result = "";
    //     let firIndex = str[0];
    //     for (let i = 1; i < str.length; i++) {
    //         if (firIndex === str[i]) {
    //             result = str[i];
    //         }
    //     }
    //     return result;
    // };

    // console.log("First Occurrence In a String", firstOccurrenceInString(name));

    // const name = "venkatavenuchandu";

    // function firstDuplicateChar(str) {
    //     let seen = new Set();

    //     for (let i = 0; i < str.length; i++) {
    //         // If we have already seen this character, it's the first duplicate!
    //         if (seen.has(str[i])) {
    //             return `Character: '${str[i]}' at Index: ${i}`;
    //         }
    //         seen.add(str[i]);
    //     }
    //     return "No duplicate characters found";
    // }

    // console.log(firstDuplicateChar(name));

    // return first verified admin
    // const users = [
    //     { id: 1, name: "Pooja", role: "user", verified: true },
    //     { id: 2, name: "Rohit", role: "Admin", verified: false },
    //     { id: 3, name: "Sneha", role: "Moderator", verified: true },
    //     { id: 4, name: "Amit", role: "Admin", verified: true },
    //     { id: 5, name: "Neha", role: "user", verified: true },
    // ];

    // const verifiedAdmin = users.find((item) =>
    //     item.role === "Admin" && item?.verified
    // );

    // console.log("Verified Admin", verifiedAdmin);

    // let 

    // Find All Duplicates Numbers

    // function duplicateNumbers(a) {
    //     let result = [];
    //     for (let i = 0; i < a.length - 1; i++) {
    //         for (let j = i + 1; j < a.length - 1; j++) {
    //             if (a[i] === a[j]) {
    //                 if (!result.includes(a[i])) {
    //                     result.push(a[i]);
    //                 };
    //                 break
    //             }
    //         }
    //     }
    //     return result;
    // };

    // console.log("Duplicate Numbers", duplicateNumbers(arr));

    // function countFrequency(a) {
    //     let map = {};
    //     for (let i = 0; i < a.length; i++) {
    //         if (map[a[i]] === undefined) {
    //             map[a[i]] = 1
    //         } else {
    //             map[a[i]]++
    //         }
    //         // map[a[i]] = (map[a[i]] || 0) + 1;
    //     };
    //     return map;
    // };

    // console.log("Count Frequency", countFrequency(arr));

    // function longestWord(st) {
    //     let second = "";
    //     for (const s of st) {
    //         if (s.length > second.length) {
    //             second = s;
    //         }
    //     };
    //     return second;
    // };

    // console.log("Longest Word", longestWord(str));

    // function maxElement(a) {
    //     let result = a[0];
    //     for (let i = 1; i < a.length; i++) {
    //         if (a[i] > result) {
    //             result = a[i];
    //         }
    //     };
    //     return result;
    // };

    // console.log("Max Element", maxElement(arr));

    // function sumOfArr(a) {
    //     let result = 0;
    //     for (const ele of a) {
    //         result = result + ele;
    //     };
    //     return result;
    // };

    // console.log("Sum of Array", sumOfArr(arr));
    // const str = ["React", "Javascript", "HTML"];

    // function findSecondLar(a) {
    //     let firLar = -Infinity;
    //     let secondLar = -Infinity;
    //     for (let i = 0; i < a.length; i++) {
    //         if (a[i] > firLar) {
    //             secondLar = firLar
    //             firLar = a[i];
    //         } else if (a[i] <= firLar && a[i] > secondLar) {
    //             secondLar = a[i];
    //         }
    //     }
    //     return secondLar;
    // };

    // console.log("Second Largest Number", findSecondLar([1, 2, 3, 4, 6, 5]));

    // function findAverage(a) {
    //     let sum = 0;
    //     for (const ele of a) {
    //         sum += ele
    //     }
    //     return sum / a.length;
    // };

    // console.log("Average of array", findAverage(arr));

    // const arr = [0, 1, 2, 3, 5];

    // Below function checks for ascending to descending order (smallest to largest)
    // function isArraySorted(a) {
    //     for (let i = 0; i < a.length; i++) {
    //         if (a[i] > a[i + 1]) {
    //             return false;
    //         };
    //     }
    //     return true;
    // };

    // console.log("Is Array Sorted", isArraySorted(arr));

    // Below approach will only work for sorted array's
    // function missingNumberForSortedArr(a) {
    //     for (let i = 0; i < a.length - 1; i++) {
    //         if (a[i] + 1 !== a[i + 1]) {
    //             return a[i] + 1;
    //         }
    //     }
    //     return -1;
    // };

    // console.log("Missing Number", missingNumberForSortedArr(arr));

    // Below works for non-sorted array's
    // const arr = [5, 2, 1, 0, 3];

    // const totSum = arr.reduce((a, b) => a + b, 0);

    // const n = arr.length;

    // const expectedSum = (n * (n + 1) / 2);

    // console.log("Missed Number", expectedSum - totSum);

    // const arr = [1, 2, 0, 4, 5, 6, 2, 0];

    // const nonZeroEle = arr.filter((item) => item !== 0);
    // const zeroEle = arr.filter((item) => item === 0);
    // console.log("Output", [...nonZeroEle, ...zeroEle]);

    // const arr = [1, 2, 0, 3, 0, 4, 5, 0];

    // function moveZeroesToEnd(a) {
    //     let left = 0;
    //     for (let i = 0; i < a.length; i++) {
    //         if (a[i] !== 0) {
    //             let temp = a[left];
    //             a[left] = a[i];
    //             a[i] = temp;
    //             left++; // 
    //         }
    //     }
    //     return a;
    // };

    // console.log("Move Zeroes To End", moveZeroesToEnd(arr));

    // const arr = [1, 2, 3, 4, 5];

    // function rotateAnArrayByOnePosition(a) {
    //     let right = a[a.length - 1];
    //     return [right, ...a.slice(0, a.length - 1)];
    // };

    // console.log("Rotated Array", rotateAnArrayByOnePosition(arr));

    // remove duplicates from sorted array
    // const arr = [0, 1, 1, 2, 3, 5, 5, 6];

    // function removeDuplicateFromSortedArr(a) {
    //     let left = 0;
    //     for (let i = 1; i < a.length; i++) {
    //         if (a[left] !== a[i]) {
    //             left++;
    //             a[left] = a[i];
    //         }
    //     }
    //     return a.slice(0, left + 1);
    // };

    // console.log("Remove Duplicates from Sorted Array", removeDuplicateFromSortedArr(arr));

    // const arr = [1, 2, 4, 5];

    // function reverseArr(a) {
    //     let left = 0;
    //     let right = a.length - 1;
    //     while (left < right) {
    //         let temp = a[left];
    //         a[left] = a[right];
    //         a[right] = temp;
    //         left++;
    //         right--;
    //     };
    //     return a;
    // };

    // console.log("Reversed Array", reverseArr(arr));

    // Shallow Copy
    // const originalCopy = [1, 2, 3, 4];

    // const duplicateCopy = [...originalCopy];
    // duplicateCopy[0] = 10

    // console.log("Duplicate", duplicateCopy);
    // console.log("Original", originalCopy);

    // const originalCopy = [1, 2, 3, 4, [20, 30]];
    // console.log("Original", originalCopy);

    // const duplicateCopy = [...originalCopy];
    // duplicateCopy[4][0] = 80

    // console.log("Duplicate", duplicateCopy);

    // // Deep Copy Example 1
    // const originalCopy = [1, 2, 3, 4, 5, [10, 20, 30]];
    // const duplicateCopy = JSON.parse(JSON.stringify(originalCopy));
    // duplicateCopy[5][0] = 100;
    // console.log("Original Copy from deep", originalCopy);
    // console.log("Duplicate Copy from deep", duplicateCopy);

    // // //  Deep Copy Example 2
    // const originalCopy = [1, 2, 3, 4, 5, [10, 20, 30]];
    // const duplicateCopy = structuredClone(originalCopy);
    // duplicateCopy[5][0] = 100;
    // console.log("Original Copy from deep", originalCopy);
    // console.log("Duplicate Copy from deep", duplicateCopy);

    // const arr = [2, 1, 11, 15]; // Target = 13

    // // Below will works for sorted and unsorted arrays also this is called brute force solution o(n2)
    // function sumOfTwoElementsToTarget(a) {
    //     const target = 13;
    //     for (let i = 0; i < a.length; i++) {
    //         for (let j = i + 1; j < a.length; j++) {
    //             if ((a[i] + a[j]) === target) {
    //                 return [i, j];
    //             }
    //         }
    //     }
    // };

    // console.log("Find Pair", sumOfTwoElementsToTarget(arr));

    // const input = [
    //     { id: 1, name: "Mohit", age: 21 },
    //     { id: 2, name: "Sam", age: 32 },
    //     { id: 3, name: "Ravi", age: 24 },
    //     { id: 4, name: "Rohit", age: 32 },
    //     { id: 5, name: "Amit", age: 21 },
    // ];

    // function groupByObject(inp) {
    //     let obj = {};
    //     inp.forEach((item) => {
    //         obj[item.age] = inp.filter((i) => i.age === item.age);
    //     });
    //     return obj;
    //     // let obj = {};
    //     // for (const i of inp) {
    //     //     if (!obj[i.age]) {
    //     //         obj[i.age] = [];
    //     //     }
    //     //     obj[i.age].push(i)
    //     // }
    //     // return obj;
    // };

    // console.log("Group By Object", groupByObject(input));

    // function reverseStr(str) {
    //     let result = "";
    //     for (let i = str.length - 1; i >= 0; i--) {
    //         result += str[i];
    //     }
    //     return result;
    // };

    // console.log("Reverse a string", reverseStr("chandu"));

    // const nums = [0, 1, 2, 2, 3, 0, 4, 2]; // Remove the val 2 of all occurrences

    // function removeSpecificValFromArr(num) {
    //     let left = 0;
    //     for (let i = 0; i < num.length; i++) {
    //         if (num[i] !== 2) {
    //             num[left] = num[i];
    //             left++;
    //         }
    //     }
    //     return num.slice(0, left);
    // };

    // console.log("Result of arr after removing specific value", removeSpecificValFromArr(nums));

    // Merge Two Sorted Arrays
    // function mergeTwoSortedArr(arr1, arr2) {
    //     let result = [];
    //     let i = 0
    //     let j = 0;

    //     while (i < arr1.length && j < arr2.length) {
    //         if (arr1[i] < arr2[j]) {
    //             result.push(arr1[i]);
    //             i++;
    //         } else {
    //             result.push(arr2[j]);
    //             j++;
    //         }
    //     }

    //     while (j < arr2.length) {
    //         result.push(arr2[j]);
    //         j++;
    //     }

    //     return result;
    // };

    // console.log("Result of sum", mergeTwoSortedArr([1, 3, 5], [2, 4, 6]));

    // const arr = [-7, -3, 2, 3, 11]; // Output = [4,9,9,49,121];

    // function squareOfSortedArr(a) {
    //     let result = [];
    //     for (const ele of a) {
    //         result.push(ele ** 2);
    //     }
    //     return result;
    // };

    // console.log("Squares of sorted array", squareOfSortedArr(arr));

    // function primeNumbers(nums) {
    //     let result = [];
    //     for (const ele of nums) {
    //         if (ele % 2 !== 0) {
    //             result.push(ele);
    //         }
    //     }
    //     return result;
    // };

    // console.log("Prime Numbers", primeNumbers([1, 2, 4, 5, 6, 9, 13, 14, 16]));

    // function checkTwoStringsAreReverseOfEachOther(str1, str2) {
    //     let left = 0;
    //     let updatedStr2 = str2.split("");
    //     let right = updatedStr2.length - 1;
    //     while (left < right) {
    //         let temp = updatedStr2[left];
    //         updatedStr2[left] = updatedStr2[right];
    //         updatedStr2[right] = temp;
    //         left++;
    //         right--;
    //     }
    //     return str1 === updatedStr2.join("");
    // };

    // console.log("Two strings are reverse of each other", checkTwoStringsAreReverseOfEachOther("hello", "olleh"));

    // Closures
    // function createCounter() {
    //     let count = 0;
    //     return function () {
    //         count++;
    //         return count;
    //     };
    // };

    // const counter1 = createCounter();
    // const counter2 = createCounter();

    // console.log("Counter 1 ------------>", counter1());
    // console.log("Counter 1", counter1());
    // console.log("Counter 2", counter2());

    // function findSecondSmallest(arr) {
    //     let firSmall = Infinity;
    //     let secSmall = Infinity;
    //     for (let i = 0; i < arr.length; i++) {
    //         if (arr[i] < firSmall) {
    //             secSmall = firSmall;
    //             firSmall = arr[i];
    //         } else if (arr[i] < secSmall && firSmall !== arr[i]) {
    //             secSmall = arr[i];
    //         }
    //     }
    //     return secSmall;
    // };

    // console.log("Second Smallest number", findSecondSmallest([1, 2, 4, 3, 5]));


    // const asyncFunction = async () => {
    //     const res = await 2 + 4;
    //     return res;
    // };

    // useEffect(() => {
    //     (async () => {
    //         const result = await asyncFunction();
    //         console.log("Result", result);
    //     })();
    //     console.log("Outside async function.");
    // }, []);

    // function Dog(name) {
    //     this.name = name;
    // };

    // const dog = new Dog("Rex");

    // Dog.prototype.speak = () => "woof";

    // console.log(dog.speak());

    // let arr = [10, 20, 30];
    // arr.map((item) => item / 10);
    // console.log(arr); // [10,20,30] map will not mutate original, create new array but new array not assigned to any variable

    // const arr = [5, 6, 7];
    // arr.pop();// Shift removes first element, Unshift adds to first, pop removes last element
    // console.log(arr);

    // const arr = [1, 2, 3];
    // const arr2 = arr.reduce((a, b) => a + b);
    // console.log(arr2);

    // function isPrime(num) {
    //     if (num <= 1) {
    //         return false;
    //     };
    //     for (let i = 2; i < num; i++) {
    //         if (num % i === 0) {
    //             return false;
    //         };
    //     }
    //     return true;
    // };

    // console.log("Is Prime", isPrime(49));

    // function countFrequency(arr) {
    //     let countMap = {};
    //     for (let i = 0; i < arr.length; i++) {
    //         if (countMap[arr[i]]) {
    //             countMap[arr[i]] += 1
    //         } else {
    //             countMap[arr[i]] = 1;
    //         }
    //     }
    //     return countMap;
    // };

    // console.log("Frequency Count", countFrequency([1, 2, 3, 4, 1, 2]));

    // function countChar(str, char) {
    //     let count = 0;
    //     for (const s of str) {
    //         if (s === char) {
    //             count++;
    //         }
    //     }
    //     return count;
    // };

    // console.log("countChar", countChar('GeeksForGeeks', 'e'));

    // function fibonacciNums(n) {
    //     let num1 = 0;
    //     let num2 = 1;
    //     let nextNum;
    //     for (let i = 1; i <= n; i++) {
    //         console.log("Number", num1);
    //         nextNum = num1 + num2;
    //         num1 = num2;
    //         num2 = nextNum;
    //     }
    // };

    // console.log("Fibonacci Numbers", fibonacciNums(10));

    // function sortArrayInAscOrder(arr) {
    //     for (let i = 0; i < arr.length; i++) {
    //         for (let j = i + 1; j < arr.length; j++) {
    //             if (arr[i] > arr[j]) {
    //                 let temp = arr[i];
    //                 arr[i] = arr[j];
    //                 arr[j] = temp;
    //             }
    //         }
    //     }
    //     return arr;
    // };

    // console.log("Ascending Order Array", sortArrayInAscOrder([1, 3, 5, 2, 4]));

    // Separate positive and negative numbers
    // const numbers = [10, -5, 20, -8, 15];

    // const positiveNums = [];
    // const negativeNums = [];

    // for (const val of numbers) {
    //     if (val < 0) {
    //         negativeNums.push(val);
    //     } else {
    //         positiveNums.push(val);
    //     }
    // };

    // console.log("Positive Numbers", positiveNums);
    // console.log("Negative Numbers", negativeNums);

    const handleEdit = (id) => {
        setEditBtn(true);
        const obj = applications.find((item) => item.id === id);
        setFormData({ ...obj });
        setEditRecordId(id);
    };

    const handleDelete = (id) => {
        setApplications((prev) => prev.filter((item) => item.id !== id));
    };

    const handleInputChange = (i, e) => {
        setFormData((prev) => ({
            ...prev,
            [i]: e.target.value,
        }));
    };

    const handleAddNew = (e) => {
        e.preventDefault();
        if (!formData.email.trim() || !formData.name.trim() || !formData.mobileNumber.trim()) {
            return;
        };
        if (editRecordId !== null) {
            setApplications((prev) => prev.map((item) => item.id === editRecordId ? { ...item, ...formData } : item));
            setEditBtn(false);
            setEditRecordId(null);
        } else {
            setApplications((prev) => [...prev, { id: Date.now(), ...formData }]);
        }
        setFormData({
            name: "",
            mobileNumber: "",
            email: ""
        });
    };

    return (

        <div style={styles.container}>
            <h2 style={styles.title}>Task Manager</h2>

            {/* Input Fields */}
            <form style={styles.form} onSubmit={handleAddNew}>
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e)}
                    style={styles.input}
                />
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e)}
                    style={styles.input}
                />
                <input
                    type="tel"
                    placeholder="Enter Mobile Number"
                    value={formData.mobileNumber}
                    onChange={(e) => handleInputChange("mobileNumber", e)}
                    style={styles.input}
                />
                <button
                    type="submit"
                    style={styles.addButton}
                >
                    {editBtn ? "Update" : "Add"}
                </button>
            </form>

            {/* Applications List */}
            <div style={styles.listContainer}>
                {applications.length > 0 ? (
                    applications.map((application) => (
                        <div key={application.id} style={styles.row}>
                            <span style={styles.cell}>{application.name}</span>
                            <span style={styles.cell}>{application.email}</span>
                            <span style={styles.cell}>{application.mobileNumber}</span>

                            <div style={styles.actions}>
                                <button
                                    type="button"
                                    onClick={() => handleEdit(application.id)}
                                    style={styles.editButton}
                                >
                                    Edit
                                </button>

                                <button
                                    type="button"
                                    onClick={() => handleDelete(application.id)}
                                    style={styles.deleteButton}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p style={styles.emptyMessage}>No data available.</p>
                )}
            </div>
        </div>

    );
}


const styles = {
    container: {
        maxWidth: "1100px",
        margin: "30px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
    },
    title: {
        textAlign: "center",
        marginBottom: "24px",
    },
    form: {
        display: "grid",
        gridTemplateColumns: "1fr 1.5fr 1fr auto",
        gap: "12px",
        marginBottom: "20px",
    },
    input: {
        width: "100%",
        minWidth: 0,
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        outline: "none",
        boxSizing: "border-box",
    },
    addButton: {
        padding: "10px 22px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "green",
        color: "white",
        cursor: "pointer",
        whiteSpace: "nowrap",
    },
    listContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    row: {
        display: "grid",
        gridTemplateColumns: "1fr 1.5fr 1fr auto",
        gap: "12px",
        alignItems: "center",
        padding: "12px",
        border: "1px solid #e0e0e0",
        borderRadius: "6px",
        boxSizing: "border-box",
    },
    cell: {
        minWidth: 0,
        overflowWrap: "anywhere",
    },
    actions: {
        display: "flex",
        gap: "8px",
        justifyContent: "flex-end",
    },
    editButton: {
        padding: "8px 14px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "orange",
        color: "white",
        cursor: "pointer",
        whiteSpace: "nowrap",
    },
    deleteButton: {
        padding: "8px 14px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "red",
        color: "white",
        cursor: "pointer",
        whiteSpace: "nowrap",
    },
    emptyMessage: {
        textAlign: "center",
        color: "#777",
        padding: "20px",
    },
};


import { useRef, useState } from "react";
import { useTodoStore } from "../store/useTodoStore";

export default function TodoUI() {

    const [value, setValue] = useState("");

    const { todos, addTodo, deleteTodo } = useTodoStore();

    const isWaiting = useRef(false);

    const add = () => {
        console.log("Add");
    };

    // Throttling
    const handleAdd = () => {
        if (isWaiting.current) return;
        isWaiting.current = true;
        setTimeout(() => {
            add();
            isWaiting.current = false;
        }, 5000);
    };

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
    //     console.log(a)
    //     return l;
    // };

    // console.log("Remove Duplicates", removeDuplicateFromArr(arr));


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
    const arr = [3, 1, 2, 1, 3, 2, 2, 0];

    function duplicateNumbers(a) {
        let result = [];
        for (let i = 0; i < a.length - 1; i++) {
            for (let j = i + 1; j < a.length - 1; j++) {
                if (a[i] === a[j]) {
                    if (!result.includes(a[i])) {
                        result.push(a[i]);
                    }
                    break
                }
            }
        }
        return result;
    };

    console.log("Duplicate Numbers", duplicateNumbers(arr));

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Zustand Task Manager</h2>

            {/* Input */}
            <div style={styles.inputBox}>
                <input
                    style={styles.input}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Enter a task..."
                />
                <button style={styles.addBtn} onClick={handleAdd}>
                    Add
                </button>
            </div>

            {/* Tasks */}
            <ul style={styles.list}>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        style={{
                            ...styles.item,
                            textDecoration: todo.completed ? "line-through" : "none",
                        }}
                    >
                        <span>{todo.title}</span>

                        <button
                            style={styles.deleteBtn}
                            onClick={() => deleteTodo(todo.id)}
                        >
                            ✖
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Inline styles for quick demo
const styles = {
    container: {
        maxWidth: "420px",
        margin: "40px auto",
        padding: "20px",
        borderRadius: "12px",
        background: "#f0f4ff",
        boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
        fontFamily: "sans-serif",
    },
    title: {
        textAlign: "center",
        marginBottom: "15px",
    },
    inputBox: {
        display: "flex",
        gap: "10px",
    },
    input: {
        flex: 1,
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #ccc",
    },
    addBtn: {
        padding: "10px 16px",
        background: "#2563eb",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
    },
    list: {
        marginTop: "20px",
        padding: 0,
        listStyle: "none",
    },
    item: {
        padding: "10px 12px",
        background: "#fff",
        borderRadius: "6px",
        marginBottom: "10px",
        display: "flex",
        justifyContent: "space-between",
        cursor: "pointer",
        border: "1px solid #ddd",
    },
    deleteBtn: {
        background: "transparent",
        border: "none",
        color: "red",
        cursor: "pointer",
    },
};

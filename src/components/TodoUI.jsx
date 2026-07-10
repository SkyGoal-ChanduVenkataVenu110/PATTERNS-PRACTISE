import { useState } from "react";
import { useTodoStore } from "../store/useTodoStore";

export default function TodoUI() {

    const [value, setValue] = useState("");

    const { todos, addTodo, deleteTodo } = useTodoStore();

    const handleAdd = () => {
        if (value.trim() === "") return;
        addTodo(value);
        setValue("");
    };

    // FIND EVEN NUM COUNT;
    const arr = [5, 12, 7, 10, 5, 8, 9, 4, 13, 2, 8, 10];

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

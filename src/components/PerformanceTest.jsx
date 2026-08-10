import React, { useState, useMemo } from 'react';

// A heavy function that takes time to execute
const runExpensiveCalculation = (iterations) => {
    const startTime = performance.now();
    let count = 0;

    // Loop millions of times to artificially create CPU load
    for (let i = 0; i < iterations; i++) {
        count += Math.sqrt(i) * Math.sin(i);
    }

    const endTime = performance.now();
    console.log(`⏱️ Math execution took: ${(endTime - startTime).toFixed(2)} ms`);
    return count;
};

export default function PerformanceTest() {

    const [text, setText] = useState("");
    const [iterations, setIterations] = useState(50000000); // 50 Million loops

    // CHOOSE ONE LINE TO TEST:

    // Line A: WITHOUT useMemo (Will lag on every keystroke)
    // const result = runExpensiveCalculation(iterations);

    // Line B: WITH useMemo (Will only run when iterations change)
    const result = useMemo(() => runExpensiveCalculation(iterations), [iterations]);

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h2>Performance Testing useMemo</h2>

            <div style={{ marginBottom: '20px' }}>
                <label>Type here to force re-renders: </label>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type fast..."
                />
            </div>

            <div>
                <label>Loop Count: </label>
                <input
                    type="number"
                    value={iterations}
                    onChange={(e) => setIterations(Number(e.target.value))}
                />
            </div>

            <h3 style={{ marginTop: '20px' }}>Result: {result.toFixed(2)}</h3>
        </div>
    );
}

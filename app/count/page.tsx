'use client';
import { useState, useEffect } from "react";

export default function CountPage() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("John");

    useEffect(() => {
        console.log("useEffect called");
    }, []);

    console.log("rendered");
    return (
        <div className="flex gap-8 text-2xl items-center justify-center min-h-screen">
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <input className="border-2 p-1" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}
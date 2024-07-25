'use client';
import { useState, useEffect } from "react";

export default function CountPage() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Count has been updated!");
    }, [count]);

    return (
        <div className="flex gap-8 text-2xl items-center justify-center min-h-screen">
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}
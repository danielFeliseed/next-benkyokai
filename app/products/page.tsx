'use client';
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ProductsPage() {

const [count, setCount] = useState(0);

useEffect(() => {
    console.log("useEffect was called");
}
, );
    const dummyData = [
        {
            id: 1,
            name: "Product 1",
            description: "Description 1",
        },
        {
            id: 2,
            name: "Product 2",
            description: "Description 2",
        },
        {
            id: 3,
            name: "Product 3",
            description: "Description 3",
        },
    ];

    return (
        <>
            <div className="flex items-center justify-center">
                <div className="flex flex-col gap-4">
                    {dummyData.map((product) => (
                        <Link href={`/products/${product.id}`}>
                            <div className="p-4 border border-gray-300 rounded-lg cursor-pointer" key={product.id}>
                                <h2>{product.name}</h2>
                                <p>{product.description}</p>
                            </div>
                        </Link>
                    ))}
                    <button onClick={() => setCount(count + 1)}>
                        {count}
                    </button>
                </div>
            </div>
        </>
    )
}
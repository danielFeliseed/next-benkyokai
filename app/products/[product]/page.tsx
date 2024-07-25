'use client';
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function Product() {
    const params = useParams();
    console.log(params);
    return (
        <div className="flex items-center justify-center min-h-screen">
            <h1>Product {params.product}</h1>
        </div>
    )
};
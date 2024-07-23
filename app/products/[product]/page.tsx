'use client';
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function Product() {
    const pathname = usePathname()

    return (
        <div>
            <h1>{pathname}</h1>
        </div>
    )
};
import Link from "next/link"

export default function Navbar() {
    return (
        <nav className=" flex w-full justify-between border-b pt-8 mb-5 px-4 bg-black text-white">
            <Link href="/" className="mb-4">
                Home
            </Link>
            <Link href="/products" className="mb-4">
                Products
            </Link>
        </nav>
    )
}
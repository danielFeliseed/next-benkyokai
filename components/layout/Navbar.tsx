import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 flex w-full justify-between border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <Link href="/" className="mb-4">
                Home
            </Link>
            <Link href="/products" className="mb-4">
                Products
            </Link>
        </nav>
    )
}
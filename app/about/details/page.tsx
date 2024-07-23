import Link from 'next/link'

export default function AboutDetailsPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <h1>Welcome to the about details page</h1>

                <a href="/about">About</a>
                <Link href="/about">About (Link)</Link>
            </div>
        </main>
    )
}
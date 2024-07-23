import Link from "next/link"

// write me an array of 5 people
const people = [
    { name: "John Doe", age: 25 },
    { name: "Jane Doe", age: 24 },
    { name: "John Smith", age: 30 },
    { name: "Jane Smith", age: 29 },
    { name: "John Johnson", age: 35 },
]

export default function AboutPage() {

    const filteredPeople = people.filter( (people) => people.name.includes('John'))

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <h1>Welcome to the about page</h1>

                <a href="/">Home</a>
                <Link href="/">Home (Link)</Link>
                {filteredPeople.map((person) => (
                    <div key={person.name}>
                        <h2>{person.name}</h2>
                        <p>{person.age}</p>
                    </div>
                ))}
            </div>
            <div>
                <Link href="/about/details">About Details</Link>
            </div>
        </main>
    )
}
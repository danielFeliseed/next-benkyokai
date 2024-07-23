
// interface DummyProduct {
//     id: number;
//     name: string;
//     description: string;
// }

// interface ProductsPageProps {
//     dummyProducts: DummyProduct[];
// }

import Link from "next/link";

export default function ProductsPage() {

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
                </div>
            </div>
        </>
    )
}
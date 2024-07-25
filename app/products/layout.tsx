import Link from 'next/link'

interface children {
    children: React.ReactNode;
}

export default function ProductSideBar({ children }: children) {

    return (
        <div className="flex">
            <div className="w-1/4 bg-gray-200 p-4">
                <nav>
                    <ul className="space-y-5 bg-white rounded-lg p-4 overflow-y-auto max-h-[80vh]">
                        <li className="font-bold border-b border-gray-300 pb-2 p-2 rounded-lg hover:bg-black hover:text-white">
                            <Link href="/products/1">
                                Product 1
                            </Link>
                        </li>
                        <li className="font-bold border-b border-gray-300 pb-2 p-2 rounded-lg hover:bg-black hover:text-white">
                            <a href="/products/1">
                                Product 1 (a tag)
                            </a>
                        </li>
                        <li className="font-bold border-b border-gray-300 pb-2 p-2 rounded-lg hover:bg-black hover:text-white">

                            <Link href="/products/2">
                                Product 2
                            </Link>
                        </li>
                        <li className="font-bold border-b border-gray-300 pb-2 p-2 rounded-lg hover:bg-black hover:text-white">

                            <Link href="/products/3">
                                Product 3
                            </Link>
                        </li>
                        <li className="font-bold border-b border-gray-300 pb-2 p-2 rounded-lg hover:bg-black hover:text-white">

                            <Link href="/products/4">
                                Product 4
                            </Link>
                        </li>
                        <li className="font-bold border-b border-gray-300 pb-2 p-2 rounded-lg hover:bg-black hover:text-white">

                            <Link href="/products/5">
                                Product 5
                            </Link>
                        </li>
                        <li className="font-bold border-b border-gray-300 pb-2 p-2 rounded-lg hover:bg-black hover:text-white">

                            <Link href="/products/6">
                                Product 6
                            </Link>
                        </li>
                        <li className="font-bold border-b border-gray-300 pb-2 p-2 rounded-lg hover:bg-black hover:text-white">

                            <Link href="/products/7">
                                Product 7
                            </Link>
                        </li>
                        <li className="font-bold border-b border-gray-300 pb-2 p-2 rounded-lg hover:bg-black hover:text-white">

                            <Link href="/products/8">
                                Product 8
                            </Link>
                        </li>
                        <li className="font-bold border-b border-gray-300 pb-2 p-2 rounded-lg hover:bg-black hover:text-white">

                            <Link href="/products/9">
                                Product 9
                            </Link>
                        </li>
                        <li className="font-bold border-b border-gray-300 pb-2 p-2 rounded-lg hover:bg-black hover:text-white">

                            <Link href="/products/10">
                                Product 10
                            </Link>
                        </li>
                        <li className="font-bold border-b border-gray-300 pb-2 p-2 rounded-lg hover:bg-black hover:text-white">

                            <Link href="/products/11">
                                Product 11
                            </Link>
                        </li>
                        <li className="font-bold border-b border-gray-300 pb-2 p-2 rounded-lg hover:bg-black hover:text-white">

                            <Link href="/products/12">
                                Product 12
                            </Link>
                        </li>
                        <li className="font-bold border-b border-gray-300 pb-2 p-2 rounded-lg hover:bg-black hover:text-white">

                            <Link href="/products/13">
                                Product 13
                            </Link>
                        </li>
                        <li className="font-bold border-b border-gray-300 pb-2 p-2 rounded-lg hover:bg-black hover:text-white">

                            <Link href="/products/14">
                                Product 14
                            </Link>
                        </li>
                        <li className="font-bold border-b border-gray-300 pb-2 p-2 rounded-lg hover:bg-black hover:text-white">

                            <Link href="/products/15">
                                Product 15
                            </Link>
                        </li>
                        <li className="font-bold border-b border-gray-300 pb-2 p-2 rounded-lg hover:bg-black hover:text-white">

                            <Link href="/products/16">
                                Product 16
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="w-3/4">
                {children}
            </div>
        </div>
    )
}
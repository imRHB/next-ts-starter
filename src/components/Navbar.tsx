import Link from "next/link";

export default function Navbar() {
    return (
        <div className="bg-white">
            <nav className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-16 xl:px-24 2xl:px-32">
                <ul className="flex gap-4 py-4 text-sm font-semibold">
                    <li>
                        <Link
                            href="/"
                            className="text-violet-500 hover:text-violet-600"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/auth"
                            className="text-violet-500 hover:text-violet-600"
                        >
                            Auth
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/not-found"
                            className="text-violet-500 hover:text-violet-600"
                        >
                            Not Found
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/error"
                            className="text-violet-500 hover:text-violet-600"
                        >
                            Error
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

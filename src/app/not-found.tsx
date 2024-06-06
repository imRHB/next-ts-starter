import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Not found",
    description:
        "GitHub starter template for building modern web applications using Next.js (TypeScript), React, and Tailwind. It includes all the essential setup and configurations to get you started quickly.",
};

export default function NotFoundPage() {
    return (
        <section className="flex h-screen flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-bold text-zinc-700">Not Found</h1>
            <p className="max-w-md text-center text-zinc-600">
                Could not find requested resource.
            </p>
            <Link
                href="/"
                className="text-violet-500 underline underline-offset-4"
            >
                Return Home
            </Link>
        </section>
    );
}

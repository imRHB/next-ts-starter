"use client";

import { useEffect } from "react";

export default function ErrorPage({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <section className="flex h-screen flex-col items-center justify-center gap-4">
            <h2 className="text-xl font-semibold text-red-400">
                Something went wrong!
            </h2>
            <button onClick={() => reset()}>Try again</button>
        </section>
    );
}

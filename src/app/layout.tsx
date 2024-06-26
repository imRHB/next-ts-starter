import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

import "./globals.css";

import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Next JS (TypeScript) Starter",
    description:
        "GitHub starter template for building modern web applications using Next.js (TypeScript), React, and Tailwind. It includes all the essential setup and configurations to get you started quickly.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(inter.className, "bg-zinc-50")}>
                {children}
            </body>
        </html>
    );
}

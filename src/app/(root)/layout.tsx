import type { Metadata } from "next";
import React from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "Next JS (TypeScript) Starter",
    description:
        "GitHub starter template for building modern web applications using Next.js (TypeScript), React, and Tailwind. It includes all the essential setup and configurations to get you started quickly.",
};

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <React.Fragment>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </React.Fragment>
    );
}

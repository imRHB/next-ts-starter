export default function HomePage() {
    return (
        <section className="container mx-auto h-body-full bg-zinc-50 px-2 py-8 sm:px-4 md:px-6 lg:px-16 xl:px-24 2xl:px-32">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-3xl font-bold text-zinc-700">
                    Next JS (TypeScript) Starter
                </h1>
                <p className="max-w-3xl text-center text-zinc-600">
                    This repository is a GitHub starter template that provides a
                    solid foundation for building modern web applications using
                    Next.js (TypeScript), React, and Tailwind CSS. It includes
                    the essential setup and configurations to get you up and
                    running quickly.
                </p>
                <p className="max-w-3xl text-center text-zinc-600">
                    Additionally, the template includes Prettier and ESLint
                    configurations to ensure code quality and consistency.
                    Prettier is configured to format your code automatically,
                    while ESLint helps you identify and fix potential issues in
                    your TypeScript codebase. This setup ensures that your
                    project adheres to best practices and maintains a clean,
                    readable code style.
                </p>
            </div>
        </section>
    );
}

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen  items-center justify-center bg-background text-foreground text">
      <h1 className="text-4xl font-bold bg-red flex justify-between items-start">
        🚀 Tailwind + Next.js + TypeScript + ESLint is working!
      </h1>
      <Image src="/general/post.jpeg" width="600" height="600" alt="post"/>
    </main>
  );
}

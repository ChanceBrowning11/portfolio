import { PageHeader } from '@/components/atoms'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <PageHeader>Chance Browning</PageHeader>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          This is the starting page of my portfolio website.
        </p>
      </main>
    </div>
  );
}

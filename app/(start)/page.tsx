import { PageHeader } from '@/components/atoms'
import { NavigationHeader } from '@/components/organisms'

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <div className="w-full bg-white dark:bg-black">
        {/* Hero Section */}
        <div className="px-16 pt-32 pb-16">
          <PageHeader>Chance Browning</PageHeader>
        </div>

        {/* Sticky Navigation */}
        <NavigationHeader />

        {/* Content Section - Add more content here to see sticky effect */}
        <div className="px-16 py-16 min-h-screen">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            This is the starting page of my portfolio website.
          </p>
        </div>
      </div>
    </div>
  );
}

import { Title } from '@/components/atoms'
import { NavigationHeader } from '@/components/organisms'

export default function StartLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="order-2 md:order-1 px-16 pt-32 pb-16">
        <Title>Chance Browning</Title>
      </div>
      <NavigationHeader className="order-1 md:order-2" />
      <div className="order-3 px-16 py-16 min-h-screen">
        {children}
      </div>
    </div>
  )
}

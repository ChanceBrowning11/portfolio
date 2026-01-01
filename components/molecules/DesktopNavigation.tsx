import Link from 'next/link'
import { NavigationLink } from '@/components/types'

interface DesktopNavigationProps {
  links: NavigationLink[]
}

export const DesktopNavigation = ({ links }: DesktopNavigationProps) => {
  return (
    <div className="hidden md:flex gap-8">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors font-medium"
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}
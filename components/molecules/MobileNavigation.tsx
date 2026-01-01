import Link from 'next/link'
import { NavigationLink } from '@/components/types'

interface MobileNavigationProps {
  links: NavigationLink[]
  open: boolean
  onClose: () => void
}

export const MobileNavigation = ({ links, open, onClose }: MobileNavigationProps) => {
  if (!open) return null
  
  return (
    <>
      {open && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-800 pt-4">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
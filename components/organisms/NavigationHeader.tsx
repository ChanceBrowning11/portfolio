'use client'

import Link from 'next/link'
import { useState } from 'react'
import { NavigationLink } from '@/components/types'
import { DesktopNavigation, MobileMenuButton, MobileNavigation } from '../molecules'

interface NavigationHeaderProps {
  className?: string
}

const navLinks: NavigationLink[] = [
  { href: '/', label: 'Home' },
  { href: '/project', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
  { href: '/github', label: 'GitHub' },
]

export const NavigationHeader = ({ className }: NavigationHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={`sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-black/80 dark:border-gray-800 ${className}`}>
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <DesktopNavigation links={navLinks} />
          <MobileMenuButton open={isOpen} setIsOpen={setIsOpen} />
        </div>
        <MobileNavigation links={navLinks} open={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </nav>
  )
}
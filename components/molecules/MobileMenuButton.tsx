interface MobileMenuButtonProps {
  open: boolean
  setIsOpen: (open: boolean) => void
}

export const MobileMenuButton = ({ open, setIsOpen }: MobileMenuButtonProps) => {
  return (
    <button
      onClick={() => setIsOpen(!open)}
      className="md:hidden p-2 text-gray-700 dark:text-gray-300"
      aria-label="Toggle menu"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {open ? (
          <path d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  )
}
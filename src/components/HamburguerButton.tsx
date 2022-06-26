import { List, X } from "phosphor-react"

interface HamburguerButtonProps {
  setIsOpen: (isOpen: boolean) => void
  isOpen: boolean
}

export function HamburguerButton ({isOpen, setIsOpen}: HamburguerButtonProps) {
  return (
    <div className="absolute top-5 right-10 z-60 lg:hidden flex items-center gap-2 ">
        <span className="block text-md ">Aulas</span>

        {isOpen ? (
          <X
            size={32}
            className="text-blue-500 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <List
            size={32}
            className="text-blue-500 cursor-pointer "
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </div>
  )
}
import { ReactNode } from "react"

interface ButtonProps {
  title: string
  icon: ReactNode
}

export function Button({ icon, title }: ButtonProps) {
  return (
    <a href="" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase  gap-2 justify-center hover:bg-green-700 transition-colors ">
      {icon}
      {title}
    </a>
  )
}
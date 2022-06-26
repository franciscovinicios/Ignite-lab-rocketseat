import classNames from "classnames"
import { ReactNode } from "react"

interface ButtonProps {
  title: string
  icon: ReactNode
  type: 'community' | 'challenge'
}

export function Button({ icon, title, type }: ButtonProps) {
  return (
    <a href=""
      className={classNames("p-4 text-sm  flex items-center rounded font-bold uppercase gap-2 justify-center bg-green-500 hover:bg-green-700 transition-colors ", {
        'bg-inherit border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-900 transition-colors': type === 'challenge'
      })}
    >
      {icon}
      {title}
    </a>
  )
}
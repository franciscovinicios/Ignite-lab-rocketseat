import { ReactNode } from "react"

interface CardProps {

  firstIcon: ReactNode;
  secondIcon: ReactNode;
  title: string;
  description: string;
}

export function Card({title, description, firstIcon, secondIcon }: CardProps) {
  return (
    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
      <div className="bg-green-700 h-full p-6 flex items-center">
        {firstIcon}
      </div>

      <div className="py-6 leading-relaxed">
        <strong className=" sm:text-[1rem] ">{title}</strong>
        <p className=" text-[0.75rem] md:text-sm text-gray-200 mt-2">
          {description}
        </p>
      </div>

      <div className="h-full p-6 flex items-center">
        {secondIcon}
      </div>
    </a>
  )
}
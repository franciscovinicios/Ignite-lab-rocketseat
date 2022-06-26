import { Logo } from "./Logo";

export function Header() {
  return (
    <header  className="w-full py-5  flex items-center  justify-start pl-7 sm:justify-center sm:pl-0   bg-gray-700 border-b border-gray-600 ">
      <Logo />
    </header>
  )
}
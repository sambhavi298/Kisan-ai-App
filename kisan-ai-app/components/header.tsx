import { Menu, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
      <Button variant="ghost" size="icon" className="text-gray-600">
        <Menu className="h-6 w-6" />
      </Button>

      <div className="flex items-center">
        <Image src="/images/kisan-logo.png" alt="Kisan AI FY" width={120} height={40} className="h-10 w-auto" />
      </div>

      <div className="relative">
        <Button variant="ghost" size="icon" className="text-gray-600">
          <Bell className="h-6 w-6" />
        </Button>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
      </div>
    </header>
  )
}

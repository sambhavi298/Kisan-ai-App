"use client"

import { Home, MessageCircle, Camera, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BottomNavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  const tabs = [
    { id: "home", icon: Home, label: "Home" },
    { id: "chat", icon: MessageCircle, label: "Chat" },
    { id: "scan", icon: Camera, label: "Scan", isCenter: true },
    { id: "schedule", icon: Calendar, label: "Schedule" },
    { id: "myfarm", icon: User, label: "MyFarm" },
  ]

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4">
      <div className="bg-white rounded-full shadow-lg border border-gray-200 px-2 py-2">
        <div className="flex items-center justify-around">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id

            if (tab.isCenter) {
              return (
                <Button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`rounded-full w-14 h-14 ${
                    isActive
                      ? "bg-green-600 hover:bg-green-700 text-white shadow-lg"
                      : "bg-green-600 hover:bg-green-700 text-white"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </Button>
              )
            }

            return (
              <Button
                key={tab.id}
                variant="ghost"
                onClick={() => onTabChange(tab.id)}
                className={`flex flex-col items-center gap-1 px-3 py-2 h-auto ${
                  isActive ? "text-green-600" : "text-gray-500"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs font-medium">{tab.label}</span>
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

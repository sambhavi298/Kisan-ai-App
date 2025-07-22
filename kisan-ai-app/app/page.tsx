"use client"

import { useState } from "react"
import Header from "@/components/header"
import BottomNavigation from "@/components/bottom-navigation"
import HomeScreen from "@/components/screens/home-screen"
import ChatScreen from "@/components/screens/chat-screen"
import ScanScreen from "@/components/screens/scan-screen"
import ScheduleScreen from "@/components/screens/schedule-screen"
import MyFarmScreen from "@/components/screens/my-farm-screen"

export default function KisanAIApp() {
  const [activeTab, setActiveTab] = useState("home")

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <HomeScreen />
      case "chat":
        return <ChatScreen />
      case "scan":
        return <ScanScreen />
      case "schedule":
        return <ScheduleScreen />
      case "myfarm":
        return <MyFarmScreen />
      default:
        return <HomeScreen />
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto relative">
      <Header />
      <main className="flex-1 pb-20">{renderScreen()}</main>
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}

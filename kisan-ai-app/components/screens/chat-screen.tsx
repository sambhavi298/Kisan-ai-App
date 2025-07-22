"use client"

import { useState } from "react"
import { Send, Mic, Keyboard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  id: number
  text: string
  isUser: boolean
  timestamp: Date
}

export default function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Kisan AI, your farming assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputText, setInputText] = useState("")
  const [isVoiceMode, setIsVoiceMode] = useState(false)

  const handleSendMessage = () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputText("")

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: "Thank you for your question! Based on your query, I recommend checking the soil moisture and ensuring proper drainage. Would you like more specific advice for your crop type?",
        isUser: false,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
    }, 1000)
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b bg-green-50">
        <h1 className="text-xl font-bold text-green-700 text-center">Chat with Kisan AI</h1>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] p-3 rounded-2xl ${
                message.isUser ? "bg-white border border-gray-200 text-gray-800" : "bg-green-100 text-gray-800"
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className="text-xs text-gray-500 mt-1">
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Suggestions */}
      <div className="p-4 border-t bg-gray-50">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {["Crop diseases", "Weather advice", "Market prices", "Fertilizer tips"].map((suggestion, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="whitespace-nowrap text-green-600 border-green-600 hover:bg-green-50 bg-transparent"
              onClick={() => setInputText(suggestion)}
            >
              {suggestion}
            </Button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t bg-white">
        <div className="flex items-center gap-2">
          <div className="flex-1 relative">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your question..."
              className="pr-12 rounded-full border-gray-300"
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 transform -translate-y-1/2"
              onClick={() => setIsVoiceMode(!isVoiceMode)}
            >
              {isVoiceMode ? (
                <Keyboard className="h-4 w-4 text-green-600" />
              ) : (
                <Mic className="h-4 w-4 text-green-600" />
              )}
            </Button>
          </div>
          <Button onClick={handleSendMessage} className="bg-green-600 hover:bg-green-700 rounded-full" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

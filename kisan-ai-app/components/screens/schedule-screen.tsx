import { Calendar, Clock, CheckCircle, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ScheduleScreen() {
  const scheduleItems = [
    {
      id: 1,
      title: "Water the tomato plants",
      time: "6:00 AM",
      crop: "Tomatoes",
      status: "pending",
      priority: "high",
    },
    {
      id: 2,
      title: "Apply fertilizer to wheat field",
      time: "8:00 AM",
      crop: "Wheat",
      status: "completed",
      priority: "medium",
    },
    {
      id: 3,
      title: "Check for pests in cotton",
      time: "10:00 AM",
      crop: "Cotton",
      status: "pending",
      priority: "high",
    },
    {
      id: 4,
      title: "Harvest ready vegetables",
      time: "4:00 PM",
      crop: "Mixed Vegetables",
      status: "pending",
      priority: "medium",
    },
  ]

  const upcomingReminders = [
    {
      title: "Seed sowing season for Rabi crops",
      date: "Next week",
      type: "seasonal",
    },
    {
      title: "Fertilizer application due",
      date: "In 3 days",
      type: "maintenance",
    },
  ]

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-green-700 mb-2">Today's Schedule</h1>
        <p className="text-gray-600">
          {new Date().toLocaleDateString("en-IN", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      {/* Today's Tasks */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <Calendar className="h-5 w-5" />
            Today's Tasks
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {scheduleItems.map((item) => (
            <div
              key={item.id}
              className={`p-3 rounded-lg border ${
                item.status === "completed" ? "bg-green-50 border-green-200" : "bg-white border-gray-200"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-600">{item.time}</span>
                    <Badge variant={item.priority === "high" ? "destructive" : "secondary"} className="text-xs">
                      {item.priority}
                    </Badge>
                  </div>
                  <h3
                    className={`font-semibold ${
                      item.status === "completed" ? "text-green-700 line-through" : "text-gray-800"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Crop: {item.crop}</p>
                </div>
                <div className="ml-3">
                  {item.status === "completed" ? (
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-green-600 border-green-600 hover:bg-green-50 bg-transparent"
                    >
                      Mark Done
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Upcoming Reminders */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-700">
            <AlertCircle className="h-5 w-5" />
            Upcoming Reminders
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {upcomingReminders.map((reminder, index) => (
            <div key={index} className="p-3 rounded-lg bg-orange-50 border border-orange-200">
              <h3 className="font-semibold text-gray-800 mb-1">{reminder.title}</h3>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">{reminder.date}</p>
                <Badge variant="outline" className="text-orange-600 border-orange-600">
                  {reminder.type}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Button
          variant="outline"
          className="h-16 flex flex-col gap-1 text-green-600 border-green-600 hover:bg-green-50 bg-transparent"
        >
          <Calendar className="h-5 w-5" />
          <span className="text-sm">Add Task</span>
        </Button>
        <Button
          variant="outline"
          className="h-16 flex flex-col gap-1 text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent"
        >
          <Clock className="h-5 w-5" />
          <span className="text-sm">Set Reminder</span>
        </Button>
      </div>
    </div>
  )
}

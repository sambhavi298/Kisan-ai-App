import { Search, Mic, ArrowRight, TrendingUp, TrendingDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomeScreen() {
  const marketData = [
    {
      crop: "Paddy Coarse",
      location: "Bemetara",
      price: "₹2000/Q",
      change: "+11.12%",
      isPositive: true,
      date: "07 July",
    },
    {
      crop: "Paddy Swarna",
      location: "Munguli",
      price: "₹1701/Q",
      change: "-22.69%",
      isPositive: false,
      date: "05 July",
    },
  ]

  return (
    <div className="p-4 space-y-6">
      {/* Welcome Section */}
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold text-green-700">What Service are you looking for?</h1>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 h-5 w-5" />
          <Input placeholder="Search" className="pl-10 pr-12 py-3 rounded-full border-gray-200 bg-gray-50" />
          <Button
            size="icon"
            variant="ghost"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-600"
          >
            <Mic className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Quick Access Cards */}
      <div className="space-y-4">
        {/* Crop Care Card */}
        <Card className="border-green-200 bg-green-50">
          <CardHeader className="bg-green-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-lg">🌱 Crop Care</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-800 mb-2">Diagnose and treat your crop's pest and disease</h3>
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6">Start</Button>
          </CardContent>
        </Card>

        {/* Crop Plan Card */}
        <Card className="border-green-200">
          <CardHeader className="bg-green-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-lg">📋 Crop Plan</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-800 mb-1">Want more yield from your crops?</h3>
            <p className="text-gray-600 text-sm mb-3">Add your crops in Crop Plan and follow the daily schedule</p>
            <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50 bg-transparent">
              Add Crop <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Market View Card */}
        <Card className="border-green-200">
          <CardHeader className="bg-green-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-lg">📈 Market View</CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            {marketData.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-gray-800">{item.crop}</h4>
                  <p className="text-sm text-gray-600">{item.location}</p>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-800">{item.price}</p>
                  <div
                    className={`flex items-center gap-1 text-sm ${item.isPositive ? "text-green-600" : "text-red-600"}`}
                  >
                    {item.isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                    {item.change}
                  </div>
                </div>
              </div>
            ))}
            <Button
              variant="outline"
              className="w-full text-green-600 border-green-600 hover:bg-green-50 bg-transparent"
            >
              More Rates <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Farm Voice Card */}
        <Card className="border-green-200">
          <CardHeader className="bg-teal-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-lg">👥 Farm Voice</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-800 mb-2">Join the discussion</h3>
            <p className="text-gray-600 text-sm mb-3">Connect with fellow farmers and share experiences</p>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-6">Ask a Question</Button>
          </CardContent>
        </Card>

        {/* Govt Schemes Card */}
        <Card className="border-orange-200 bg-orange-50">
          <CardHeader className="bg-orange-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-lg">🏛️ Govt Schemes</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-800 mb-2">Explore Government Yojanas</h3>
            <p className="text-gray-600 text-sm mb-3">Check eligibility and apply for various schemes</p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6">View Schemes</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

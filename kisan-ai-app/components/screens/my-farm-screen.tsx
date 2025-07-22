import { User, MapPin, Sprout, History, Settings, BookOpen } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function MyFarmScreen() {
  const farmerProfile = {
    name: "Rajesh Kumar",
    location: "Bemetara, Chhattisgarh",
    farmSize: "5 acres",
    experience: "15 years",
  }

  const currentCrops = [
    { name: "Paddy", area: "2 acres", stage: "Flowering", health: "Good" },
    { name: "Wheat", area: "1.5 acres", stage: "Germination", health: "Excellent" },
    { name: "Tomatoes", area: "0.5 acres", stage: "Fruiting", health: "Fair" },
    { name: "Cotton", area: "1 acre", stage: "Vegetative", health: "Good" },
  ]

  const recentScans = [
    { date: "2 days ago", crop: "Tomato", diagnosis: "Rust Fungus", status: "Treated" },
    { date: "1 week ago", crop: "Wheat", diagnosis: "Healthy", status: "No action needed" },
    { date: "2 weeks ago", crop: "Paddy", diagnosis: "Leaf Blight", status: "Under treatment" },
  ]

  const savedSchemes = [
    { name: "PM-KISAN Yojana", status: "Applied", amount: "₹6,000/year" },
    { name: "Crop Insurance Scheme", status: "Active", coverage: "₹50,000" },
    { name: "Soil Health Card", status: "Received", validity: "Valid till 2025" },
  ]

  return (
    <div className="p-4 space-y-6">
      {/* Profile Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 bg-green-600">
              <AvatarFallback className="text-white text-xl font-bold">
                {farmerProfile.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-800">{farmerProfile.name}</h2>
              <div className="flex items-center gap-1 text-gray-600 mt-1">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{farmerProfile.location}</span>
              </div>
              <div className="flex gap-4 mt-2 text-sm text-gray-600">
                <span>Farm: {farmerProfile.farmSize}</span>
                <span>Experience: {farmerProfile.experience}</span>
              </div>
            </div>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Current Crops */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <Sprout className="h-5 w-5" />
            Current Crops
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {currentCrops.map((crop, index) => (
            <div key={index} className="p-3 rounded-lg bg-green-50 border border-green-200">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-800">{crop.name}</h3>
                  <p className="text-sm text-gray-600">Area: {crop.area}</p>
                  <p className="text-sm text-gray-600">Stage: {crop.stage}</p>
                </div>
                <Badge
                  variant={
                    crop.health === "Excellent" ? "default" : crop.health === "Good" ? "secondary" : "destructive"
                  }
                  className={crop.health === "Excellent" ? "bg-green-600" : crop.health === "Good" ? "bg-blue-600" : ""}
                >
                  {crop.health}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recent Scans History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-700">
            <History className="h-5 w-5" />
            Recent Scans
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentScans.map((scan, index) => (
            <div key={index} className="p-3 rounded-lg bg-blue-50 border border-blue-200">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-800">{scan.crop}</h3>
                  <p className="text-sm text-gray-600">Diagnosis: {scan.diagnosis}</p>
                  <p className="text-xs text-gray-500">{scan.date}</p>
                </div>
                <Badge
                  variant={scan.status === "No action needed" ? "default" : "secondary"}
                  className={scan.status === "No action needed" ? "bg-green-600" : ""}
                >
                  {scan.status}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Saved Schemes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-700">
            <BookOpen className="h-5 w-5" />
            Government Schemes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {savedSchemes.map((scheme, index) => (
            <div key={index} className="p-3 rounded-lg bg-orange-50 border border-orange-200">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-800">{scheme.name}</h3>
                  <p className="text-sm text-gray-600">{scheme.amount || scheme.coverage || scheme.validity}</p>
                </div>
                <Badge
                  variant={scheme.status === "Active" || scheme.status === "Received" ? "default" : "secondary"}
                  className={
                    scheme.status === "Active" || scheme.status === "Received" ? "bg-green-600" : "bg-yellow-600"
                  }
                >
                  {scheme.status}
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
          <User className="h-5 w-5" />
          <span className="text-sm">Edit Profile</span>
        </Button>
        <Button
          variant="outline"
          className="h-16 flex flex-col gap-1 text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent"
        >
          <History className="h-5 w-5" />
          <span className="text-sm">View History</span>
        </Button>
      </div>
    </div>
  )
}

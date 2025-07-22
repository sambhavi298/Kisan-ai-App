"use client"

import { useState } from "react"
import { Camera, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function ScanScreen() {
  const [isScanned, setIsScanned] = useState(false)
  const [voiceEnabled, setVoiceEnabled] = useState(false)

  const handleScan = () => {
    setIsScanned(true)
  }

  const diagnosisData = {
    name: "Rust Fungus",
    symptoms: [
      "Red to brown powdery spots on the underside of leaves",
      "Often in rows following veins",
      "Common in warm, humid conditions",
    ],
    actions: ["Remove affected leaves", "Improve air circulation", "Apply fungicide", "Manage watering"],
  }

  return (
    <div className="p-4 space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-green-700 mb-6">Scan your plant</h1>
      </div>

      {!isScanned ? (
        <div className="space-y-6">
          {/* Camera Interface */}
          <Card className="border-2 border-dashed border-green-300 bg-green-50">
            <CardContent className="p-8 text-center">
              <div className="relative mx-auto w-64 h-64 bg-gray-100 rounded-lg overflow-hidden mb-4">
                <div className="absolute inset-4 border-2 border-green-500 rounded-lg"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Camera className="h-12 w-12 text-green-600" />
                </div>
                {/* Corner brackets */}
                <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-green-500"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-green-500"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-green-500"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-green-500"></div>
              </div>
              <p className="text-gray-600 mb-4">Position your plant within the frame</p>
            </CardContent>
          </Card>

          <Button
            onClick={handleScan}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full text-lg font-semibold shadow-lg"
          >
            Analyze Image
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Scanned Image */}
          <Card>
            <CardContent className="p-4">
              <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden mb-4">
                <Image src="/images/scan-screen.png" alt="Scanned plant" fill className="object-cover" />
              </div>
            </CardContent>
          </Card>

          {/* Diagnosis Results */}
          <Card className="border-green-200">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-800">Diagnosis Results:</h2>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setVoiceEnabled(!voiceEnabled)}
                  className={voiceEnabled ? "text-green-600 border-green-600" : "text-gray-400"}
                >
                  {voiceEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                </Button>
              </div>

              <h3 className="text-xl font-bold text-red-600 mb-4">{diagnosisData.name}</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Symptoms:</h4>
                  <ul className="space-y-1">
                    {diagnosisData.symptoms.map((symptom, index) => (
                      <li key={index} className="text-gray-600 text-sm flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Recommended Actions:</h4>
                  <ul className="space-y-1">
                    {diagnosisData.actions.map((action, index) => (
                      <li key={index} className="text-gray-600 text-sm flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button
            onClick={() => setIsScanned(false)}
            variant="outline"
            className="w-full border-green-600 text-green-600 hover:bg-green-50 py-3 rounded-full"
          >
            Scan Another Plant
          </Button>
        </div>
      )}
    </div>
  )
}

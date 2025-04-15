"use client"

import { useState, useRef, useEffect } from "react"
import { Camera, Video, Mic, MicOff, CameraOff, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FaceTimeProps {
  isDarkMode?: boolean
}

export default function FaceTime({ isDarkMode = true }: FaceTimeProps) {
  const [isVideoOn, setIsVideoOn] = useState(false)
  const [isAudioOn, setIsAudioOn] = useState(true)
  const [isCameraAvailable, setIsCameraAvailable] = useState(false)
  const [capturedPhotos, setCapturedPhotos] = useState<string[]>([])
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const bgColor = isDarkMode ? "bg-gray-900" : "bg-white"
  const textColor = isDarkMode ? "text-white" : "text-gray-800"
  const buttonBg = isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"

  useEffect(() => {
    // Check if camera is available
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(() => {
        setIsCameraAvailable(true)
      })
      .catch(() => {
        setIsCameraAvailable(false)
      })
  }, [])

  const toggleVideo = () => {
    if (isVideoOn) {
      // Turn off video
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks()
        tracks.forEach((track) => track.stop())
        videoRef.current.srcObject = null
      }
      setIsVideoOn(false)
    } else {
      // Turn on video
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: isAudioOn })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream
          }
          setIsVideoOn(true)
        })
        .catch((err) => {
          console.error("Error accessing camera:", err)
        })
    }
  }

  const toggleAudio = () => {
    setIsAudioOn(!isAudioOn)

    if (isVideoOn && videoRef.current && videoRef.current.srcObject) {
      const audioTracks = (videoRef.current.srcObject as MediaStream).getAudioTracks()
      audioTracks.forEach((track) => {
        track.enabled = !isAudioOn
      })
    }
  }

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current
      const canvas = canvasRef.current

      // Set canvas dimensions to match video
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight

      // Draw current video frame to canvas
      const ctx = canvas.getContext("2d")
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

        // Convert canvas to data URL and save to state
        const photoUrl = canvas.toDataURL("image/png")
        setCapturedPhotos((prev) => [...prev, photoUrl])
      }
    }
  }

  return (
    <div className={`h-full flex flex-col ${bgColor} ${textColor}`}>
      <div className="flex-1 flex flex-col items-center justify-center p-4 relative">
        {isVideoOn ? (
          <video ref={videoRef} autoPlay playsInline muted className="w-full max-w-2xl h-auto rounded-xl bg-black" />
        ) : (
          <div className="w-full max-w-2xl aspect-video rounded-xl bg-black flex items-center justify-center">
            <Camera className="w-20 h-20 text-gray-600" />
          </div>
        )}

        {/* Hidden canvas for capturing photos */}
        <canvas ref={canvasRef} className="hidden" />

        {/* Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          <Button className={`w-12 h-12 rounded-full ${buttonBg} ${textColor}`} onClick={toggleAudio}>
            {isAudioOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
          </Button>

          <Button
            className={`w-16 h-16 rounded-full ${isVideoOn ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"} text-white`}
            onClick={toggleVideo}
            disabled={!isCameraAvailable}
          >
            {isVideoOn ? <CameraOff className="w-8 h-8" /> : <Video className="w-8 h-8" />}
          </Button>

          {isVideoOn && (
            <Button className={`w-12 h-12 rounded-full ${buttonBg} ${textColor}`} onClick={capturePhoto}>
              <ImageIcon className="w-5 h-5" />
            </Button>
          )}
        </div>
      </div>

      {/* Captured photos */}
      {capturedPhotos.length > 0 && (
        <div className="p-4 border-t border-gray-800">
          <h3 className="text-sm font-medium mb-2">Captured Photos</h3>
          <div className="flex overflow-x-auto space-x-2 pb-2">
            {capturedPhotos.map((photo, index) => (
              <img
                key={index}
                src={photo || "/placeholder.svg"}
                alt={`Captured photo ${index + 1}`}
                className="h-20 w-auto rounded"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

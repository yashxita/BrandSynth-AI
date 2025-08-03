"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, CalendarDays, Clock, Plus, Eye, Edit, Trash2 } from "lucide-react"

export function ContentCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const scheduledContent = [
    {
      id: 1,
      title: "Holiday Campaign Launch",
      type: "Instagram Post",
      date: "2024-12-15",
      time: "09:00",
      status: "scheduled",
      platform: "Instagram",
      engagement: "High",
      preview: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      title: "Product Showcase Video",
      type: "Video",
      date: "2024-12-15",
      time: "14:00",
      status: "draft",
      platform: "TikTok",
      engagement: "Medium",
      preview: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      title: "Behind the Scenes Story",
      type: "Story",
      date: "2024-12-16",
      time: "10:30",
      status: "scheduled",
      platform: "Instagram",
      engagement: "Medium",
      preview: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      title: "Weekly Newsletter",
      type: "Email",
      date: "2024-12-16",
      time: "16:00",
      status: "review",
      platform: "Email",
      engagement: "High",
      preview: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      title: "Customer Testimonial",
      type: "LinkedIn Post",
      date: "2024-12-17",
      time: "11:00",
      status: "scheduled",
      platform: "LinkedIn",
      engagement: "High",
      preview: "/placeholder.svg?height=100&width=100",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "scheduled":
        return <Badge className="bg-green-100 text-green-800">Scheduled</Badge>
      case "draft":
        return <Badge className="bg-gray-100 text-gray-800">Draft</Badge>
      case "review":
        return <Badge className="bg-yellow-100 text-yellow-800">Review</Badge>
      case "published":
        return <Badge className="bg-blue-100 text-blue-800">Published</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "Instagram":
        return "bg-pink-100 text-pink-800"
      case "TikTok":
        return "bg-black text-white"
      case "LinkedIn":
        return "bg-blue-100 text-blue-800"
      case "Email":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Content Calendar</h1>
          <p className="text-muted-foreground">Schedule and manage your brand content across all platforms</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Schedule Content
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <CalendarDays className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Scheduled posts</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
            <Eye className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">Awaiting approval</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Auto-Generated</CardTitle>
            <Clock className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">AI-created content</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
            <Calendar className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2%</div>
            <p className="text-xs text-muted-foreground">Average this month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar View */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Calendar View</CardTitle>
            <CardDescription>Navigate through your content schedule</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium">
                <div className="p-2">Sun</div>
                <div className="p-2">Mon</div>
                <div className="p-2">Tue</div>
                <div className="p-2">Wed</div>
                <div className="p-2">Thu</div>
                <div className="p-2">Fri</div>
                <div className="p-2">Sat</div>
              </div>

              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 35 }, (_, i) => {
                  const day = i - 6 // Start from previous month
                  const isCurrentMonth = day > 0 && day <= 31
                  const hasContent = [15, 16, 17, 20, 22, 24].includes(day)

                  return (
                    <div
                      key={i}
                      className={`
                        p-2 text-center text-sm cursor-pointer rounded-lg
                        ${isCurrentMonth ? "text-gray-900" : "text-gray-400"}
                        ${hasContent ? "bg-blue-100 text-blue-900 font-medium" : "hover:bg-gray-100"}
                        ${day === 15 ? "bg-blue-500 text-white" : ""}
                      `}
                    >
                      {day > 0 ? day : ""}
                      {hasContent && day !== 15 && (
                        <div className="w-1 h-1 bg-blue-500 rounded-full mx-auto mt-1"></div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Scheduled Content */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Content</CardTitle>
            <CardDescription>Content scheduled for the next few days</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {scheduledContent.map((content) => (
              <div key={content.id} className="flex items-center gap-4 p-4 border rounded-lg">
                <img
                  src={content.preview || "/placeholder.svg"}
                  alt={content.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />

                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{content.title}</h3>
                    {getStatusBadge(content.status)}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {content.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {content.time}
                    </div>
                    <Badge variant="outline" className={getPlatformColor(content.platform)}>
                      {content.platform}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{content.type}</span>
                      <Badge variant={content.engagement === "High" ? "default" : "secondary"}>
                        {content.engagement} Engagement
                      </Badge>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common scheduling and management tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col bg-transparent">
              <Plus className="h-6 w-6 mb-2" />
              Schedule Post
            </Button>
            <Button variant="outline" className="h-20 flex-col bg-transparent">
              <Calendar className="h-6 w-6 mb-2" />
              Bulk Schedule
            </Button>
            <Button variant="outline" className="h-20 flex-col bg-transparent">
              <Eye className="h-6 w-6 mb-2" />
              Review Queue
            </Button>
            <Button variant="outline" className="h-20 flex-col bg-transparent">
              <Clock className="h-6 w-6 mb-2" />
              Auto-Schedule
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

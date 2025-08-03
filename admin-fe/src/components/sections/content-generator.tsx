"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import {
  Sparkles,
  ImageIcon,
  Type,
  Video,
  Download,
  RefreshCw,
  Heart,
  MessageCircle,
  Share,
  Eye,
  Wand2,
} from "lucide-react"

export function ContentGenerator() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [creativityLevel, setCreativityLevel] = useState([70])
  const [generatedContent, setGeneratedContent] = useState([
    {
      id: 1,
      type: "image",
      title: "Holiday Campaign Visual",
      description: "Minimalist holiday greeting with brand colors",
      url: "/placeholder.svg?height=300&width=300",
      engagement: { likes: 234, comments: 45, shares: 12 },
      brandScore: 96,
    },
    {
      id: 2,
      type: "caption",
      title: "Product Launch Caption",
      content:
        "✨ Introducing something extraordinary! Our latest innovation combines cutting-edge technology with timeless design. Ready to transform your daily routine? #Innovation #Design #Transform",
      engagement: { likes: 189, comments: 23, shares: 8 },
      brandScore: 94,
    },
    {
      id: 3,
      type: "image",
      title: "Behind the Scenes",
      description: "Team collaboration in modern workspace",
      url: "/placeholder.svg?height=300&width=300",
      engagement: { likes: 156, comments: 31, shares: 15 },
      brandScore: 92,
    },
  ])

  const handleGenerate = async () => {
    setIsGenerating(true)
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false)
    }, 3000)
  }

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Content Generator</h1>
        <p className="text-muted-foreground">AI-powered content creation aligned with your brand aesthetic</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Generation Controls */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wand2 className="h-5 w-5" />
              Generation Settings
            </CardTitle>
            <CardDescription>Configure your content generation parameters</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Content Type</Label>
              <Select defaultValue="mixed">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mixed">Mixed Content</SelectItem>
                  <SelectItem value="images">Images Only</SelectItem>
                  <SelectItem value="captions">Captions Only</SelectItem>
                  <SelectItem value="videos">Video Concepts</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Platform</Label>
              <Select defaultValue="instagram">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="twitter">Twitter</SelectItem>
                  <SelectItem value="facebook">Facebook</SelectItem>
                  <SelectItem value="tiktok">TikTok</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Campaign Theme</Label>
              <Input placeholder="e.g., Holiday season, Product launch" />
            </div>

            <div className="space-y-2">
              <Label>Target Audience</Label>
              <Select defaultValue="general">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Audience</SelectItem>
                  <SelectItem value="professionals">Professionals</SelectItem>
                  <SelectItem value="millennials">Millennials</SelectItem>
                  <SelectItem value="gen-z">Gen Z</SelectItem>
                  <SelectItem value="enterprise">Enterprise</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Creativity Level: {creativityLevel[0]}%</Label>
              <Slider
                value={creativityLevel}
                onValueChange={setCreativityLevel}
                max={100}
                step={10}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Conservative</span>
                <span>Experimental</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Additional Context</Label>
              <Textarea placeholder="Any specific requirements or inspiration..." className="min-h-[80px]" />
            </div>

            <Button onClick={handleGenerate} className="w-full" disabled={isGenerating}>
              {isGenerating ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Generate Content
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Generated Content */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Generated Content</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export All
              </Button>
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Regenerate
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            {generatedContent.map((content) => (
              <Card key={content.id}>
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    {content.type === "image" && (
                      <div className="flex-shrink-0">
                        <img
                          src={content.url || "/placeholder.svg"}
                          alt={content.title}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                      </div>
                    )}

                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{content.title}</h3>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">Brand Score: {content.brandScore}%</Badge>
                          {content.type === "image" && <ImageIcon className="h-4 w-4" />}
                          {content.type === "caption" && <Type className="h-4 w-4" />}
                          {content.type === "video" && <Video className="h-4 w-4" />}
                        </div>
                      </div>

                      {content.description && <p className="text-sm text-muted-foreground">{content.description}</p>}

                      {content.content && <p className="text-sm bg-gray-50 p-3 rounded-lg">{content.content}</p>}

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            {content.engagement.likes}
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            {content.engagement.comments}
                          </div>
                          <div className="flex items-center gap-1">
                            <Share className="h-4 w-4" />
                            {content.engagement.shares}
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            Preview
                          </Button>
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                          <Button size="sm">Approve</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {isGenerating && (
            <Card>
              <CardContent className="p-8 text-center">
                <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4 text-purple-500" />
                <h3 className="font-medium mb-2">Generating Content...</h3>
                <p className="text-sm text-muted-foreground">
                  AI is creating brand-aligned content based on your parameters
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

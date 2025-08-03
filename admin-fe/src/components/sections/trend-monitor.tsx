"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, TrendingDown, Eye, Heart, Share2, AlertCircle, CheckCircle, Clock, Zap } from "lucide-react"

export function TrendMonitor() {
  const trendingTopics = [
    {
      topic: "Minimalist Gradients",
      growth: "+245%",
      platforms: ["Instagram", "Dribbble", "Behance"],
      relevance: 92,
      status: "rising",
      description: "Subtle gradient overlays with minimal color palettes",
    },
    {
      topic: "Sustainable Design",
      growth: "+189%",
      platforms: ["LinkedIn", "Pinterest", "Instagram"],
      relevance: 88,
      status: "hot",
      description: "Eco-friendly messaging and earth-tone aesthetics",
    },
    {
      topic: "3D Typography",
      growth: "+156%",
      platforms: ["Behance", "Instagram", "TikTok"],
      relevance: 75,
      status: "rising",
      description: "Dimensional text effects and isometric designs",
    },
    {
      topic: "Retro Futurism",
      growth: "-23%",
      platforms: ["Instagram", "Twitter"],
      relevance: 45,
      status: "declining",
      description: "80s-inspired neon and cyberpunk aesthetics",
    },
  ]

  const competitorInsights = [
    {
      competitor: "Brand Alpha",
      campaign: "Holiday Collection 2024",
      engagement: 15420,
      reach: 234000,
      sentiment: "positive",
      keyElements: ["Warm colors", "Family themes", "Minimalist layout"],
    },
    {
      competitor: "Brand Beta",
      campaign: "Sustainability Initiative",
      engagement: 8930,
      reach: 156000,
      sentiment: "positive",
      keyElements: ["Green palette", "Nature imagery", "Bold typography"],
    },
    {
      competitor: "Brand Gamma",
      campaign: "Tech Innovation Series",
      engagement: 12340,
      reach: 189000,
      sentiment: "neutral",
      keyElements: ["Blue gradients", "Abstract shapes", "Clean lines"],
    },
  ]

  const seasonalEvents = [
    {
      event: "Holiday Season",
      date: "Dec 1-31",
      relevance: "High",
      suggestions: ["Warm color palettes", "Family-focused content", "Gift guides"],
      status: "active",
    },
    {
      event: "New Year Campaign",
      date: "Jan 1-15",
      relevance: "Medium",
      suggestions: ["Fresh starts", "Goal-oriented content", "Minimalist designs"],
      status: "upcoming",
    },
    {
      event: "Valentine's Day",
      date: "Feb 1-14",
      relevance: "Low",
      suggestions: ["Romantic themes", "Pink/red palettes", "Couple content"],
      status: "planning",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Trend Monitor</h1>
        <p className="text-muted-foreground">Real-time trend analysis and competitive intelligence</p>
      </div>

      <Tabs defaultValue="trends" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="trends">Trending Topics</TabsTrigger>
          <TabsTrigger value="competitors">Competitor Analysis</TabsTrigger>
          <TabsTrigger value="calendar">Seasonal Calendar</TabsTrigger>
        </TabsList>

        <TabsContent value="trends" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Hot Trends
                </CardTitle>
                <CardDescription>Currently trending design elements and themes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {trendingTopics.map((trend, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{trend.topic}</h3>
                      <div className="flex items-center gap-2">
                        {trend.status === "rising" && <TrendingUp className="h-4 w-4 text-green-500" />}
                        {trend.status === "hot" && <Zap className="h-4 w-4 text-orange-500" />}
                        {trend.status === "declining" && <TrendingDown className="h-4 w-4 text-red-500" />}
                        <span
                          className={`text-sm font-medium ${
                            trend.growth.startsWith("+") ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {trend.growth}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-3">{trend.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {trend.platforms.map((platform) => (
                          <Badge key={platform} variant="secondary" className="text-xs">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">{trend.relevance}% relevant</div>
                    </div>

                    <div className="mt-2">
                      <Progress value={trend.relevance} className="h-1" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Trend Insights</CardTitle>
                <CardDescription>AI-powered analysis and recommendations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    <h4 className="font-medium text-blue-900">Brand Alignment</h4>
                  </div>
                  <p className="text-sm text-blue-800">
                    Minimalist gradients align perfectly with your brand aesthetic. Consider incorporating subtle
                    gradients in your next campaign.
                  </p>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="h-4 w-4 text-yellow-500" />
                    <h4 className="font-medium text-yellow-900">Opportunity Alert</h4>
                  </div>
                  <p className="text-sm text-yellow-800">
                    Sustainable design is trending but underutilized in your industry. Early adoption could give you a
                    competitive advantage.
                  </p>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <h4 className="font-medium text-green-900">Recommendation</h4>
                  </div>
                  <p className="text-sm text-green-800">
                    3D typography is gaining momentum. Test it in your social media posts to gauge audience response.
                  </p>
                </div>

                <Button className="w-full">Generate Trend-Based Content</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="competitors" className="space-y-6">
          <div className="grid gap-4">
            {competitorInsights.map((insight, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{insight.competitor}</h3>
                      <p className="text-muted-foreground">{insight.campaign}</p>
                    </div>
                    <Badge variant={insight.sentiment === "positive" ? "default" : "secondary"}>
                      {insight.sentiment} sentiment
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Heart className="h-4 w-4 text-red-500" />
                        <span className="font-semibold">{insight.engagement.toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Engagement</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Eye className="h-4 w-4 text-blue-500" />
                        <span className="font-semibold">{insight.reach.toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Reach</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Share2 className="h-4 w-4 text-green-500" />
                        <span className="font-semibold">
                          {((insight.engagement / insight.reach) * 100).toFixed(1)}%
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">Engagement Rate</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Key Design Elements</h4>
                    <div className="flex gap-2 flex-wrap">
                      {insight.keyElements.map((element) => (
                        <Badge key={element} variant="outline">
                          {element}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-6">
          <div className="grid gap-4">
            {seasonalEvents.map((event, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{event.event}</h3>
                      <p className="text-muted-foreground">{event.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={
                          event.status === "active" ? "default" : event.status === "upcoming" ? "secondary" : "outline"
                        }
                      >
                        {event.status === "active" && <CheckCircle className="h-3 w-3 mr-1" />}
                        {event.status === "upcoming" && <Clock className="h-3 w-3 mr-1" />}
                        {event.status}
                      </Badge>
                      <Badge
                        variant={
                          event.relevance === "High"
                            ? "destructive"
                            : event.relevance === "Medium"
                              ? "default"
                              : "secondary"
                        }
                      >
                        {event.relevance} Priority
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Content Suggestions</h4>
                    <div className="flex gap-2 flex-wrap">
                      {event.suggestions.map((suggestion) => (
                        <Badge key={suggestion} variant="outline">
                          {suggestion}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

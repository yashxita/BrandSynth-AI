"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, TrendingUp, Users, Heart, MessageCircle, Share2, Eye, Target, Zap } from "lucide-react"

export function Analytics() {
  const performanceData = [
    { platform: "Instagram", posts: 45, engagement: 4.2, reach: 125000, growth: "+12%" },
    { platform: "LinkedIn", posts: 23, engagement: 3.8, reach: 89000, growth: "+8%" },
    { platform: "TikTok", posts: 18, engagement: 6.1, reach: 67000, growth: "+25%" },
    { platform: "Twitter", posts: 67, engagement: 2.9, reach: 45000, growth: "-3%" },
  ]

  const topContent = [
    {
      title: "Holiday Campaign Teaser",
      platform: "Instagram",
      engagement: 8.4,
      likes: 2340,
      comments: 156,
      shares: 89,
      reach: 28000,
      brandScore: 96,
    },
    {
      title: "Behind the Scenes Video",
      platform: "TikTok",
      engagement: 7.2,
      likes: 1890,
      comments: 234,
      shares: 145,
      reach: 31000,
      brandScore: 94,
    },
    {
      title: "Product Innovation Story",
      platform: "LinkedIn",
      engagement: 6.8,
      likes: 1456,
      comments: 89,
      shares: 67,
      reach: 21000,
      brandScore: 98,
    },
  ]

  const brandMetrics = [
    { metric: "Brand Consistency", score: 94, trend: "+2%" },
    { metric: "Voice Alignment", score: 96, trend: "+1%" },
    { metric: "Visual Cohesion", score: 91, trend: "+4%" },
    { metric: "Message Clarity", score: 89, trend: "+3%" },
  ]

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <p className="text-muted-foreground">Comprehensive insights into your brand's content performance</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reach</CardTitle>
            <Eye className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">326K</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
            <Heart className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.7%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+0.8%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Brand Score</CardTitle>
            <Target className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">93%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+2%</span> consistency improvement
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Efficiency</CardTitle>
            <Zap className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-muted-foreground">Content auto-approved rate</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="performance" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="content">Top Content</TabsTrigger>
          <TabsTrigger value="brand">Brand Metrics</TabsTrigger>
          <TabsTrigger value="insights">AI Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Platform Performance</CardTitle>
                <CardDescription>Engagement and reach across all platforms</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {performanceData.map((platform) => (
                  <div key={platform.platform} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            platform.platform === "Instagram"
                              ? "bg-pink-500"
                              : platform.platform === "LinkedIn"
                                ? "bg-blue-500"
                                : platform.platform === "TikTok"
                                  ? "bg-black"
                                  : "bg-blue-400"
                          }`}
                        ></div>
                        <span className="font-medium">{platform.platform}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span>{platform.posts} posts</span>
                        <span
                          className={`font-medium ${
                            platform.growth.startsWith("+") ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {platform.growth}
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <div>Engagement: {platform.engagement}%</div>
                      <div>Reach: {platform.reach.toLocaleString()}</div>
                    </div>
                    <Progress value={platform.engagement * 10} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Engagement Breakdown</CardTitle>
                <CardDescription>Types of engagement across all content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span>Likes</span>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">12.4K</div>
                      <div className="text-sm text-green-600">+15%</div>
                    </div>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 text-blue-500" />
                      <span>Comments</span>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">2.1K</div>
                      <div className="text-sm text-green-600">+8%</div>
                    </div>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Share2 className="h-4 w-4 text-green-500" />
                      <span>Shares</span>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">856</div>
                      <div className="text-sm text-green-600">+22%</div>
                    </div>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="content" className="space-y-4">
          {topContent.map((content, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{content.title}</h3>
                    <Badge
                      variant="outline"
                      className={
                        content.platform === "Instagram"
                          ? "border-pink-500 text-pink-700"
                          : content.platform === "TikTok"
                            ? "border-black text-black"
                            : "border-blue-500 text-blue-700"
                      }
                    >
                      {content.platform}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{content.engagement}%</div>
                    <p className="text-sm text-muted-foreground">Engagement Rate</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span className="font-semibold">{content.likes.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Likes</p>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <MessageCircle className="h-4 w-4 text-blue-500" />
                      <span className="font-semibold">{content.comments}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Comments</p>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Share2 className="h-4 w-4 text-green-500" />
                      <span className="font-semibold">{content.shares}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Shares</p>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Eye className="h-4 w-4 text-purple-500" />
                      <span className="font-semibold">{content.reach.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Reach</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Brand Score:</span>
                    <Badge variant="secondary">{content.brandScore}%</Badge>
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium">High Performer</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="brand" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Brand Consistency Metrics</CardTitle>
                <CardDescription>How well your content aligns with brand guidelines</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {brandMetrics.map((metric) => (
                  <div key={metric.metric} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{metric.metric}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold">{metric.score}%</span>
                        <span className="text-sm text-green-600">{metric.trend}</span>
                      </div>
                    </div>
                    <Progress value={metric.score} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Brand Health Score</CardTitle>
                <CardDescription>Overall brand consistency across all content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-6xl font-bold text-green-600 mb-2">93</div>
                  <p className="text-lg font-medium mb-1">Excellent Brand Health</p>
                  <p className="text-sm text-muted-foreground">
                    Your content consistently reflects your brand identity
                  </p>
                </div>

                <div className="space-y-3 mt-6">
                  <div className="flex items-center justify-between text-sm">
                    <span>Color Consistency</span>
                    <span className="font-medium">96%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Typography Alignment</span>
                    <span className="font-medium">91%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Voice & Tone</span>
                    <span className="font-medium">94%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Visual Composition</span>
                    <span className="font-medium">89%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <div className="grid gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Peak Engagement Times</h3>
                    <p className="text-muted-foreground mb-3">
                      Your audience is most active on weekdays between 2-4 PM and 7-9 PM. Consider scheduling more
                      content during these windows for maximum reach.
                    </p>
                    <Badge variant="secondary">Actionable Insight</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Content Performance Trend</h3>
                    <p className="text-muted-foreground mb-3">
                      Video content is performing 40% better than static images. Your behind-the-scenes videos have the
                      highest engagement rates.
                    </p>
                    <Badge variant="secondary">Growth Opportunity</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Target className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Brand Consistency Improvement</h3>
                    <p className="text-muted-foreground mb-3">
                      Your brand consistency has improved by 8% this month. The AI-powered brand checker is helping
                      maintain visual cohesion across platforms.
                    </p>
                    <Badge variant="secondary">Success Metric</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Users className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Audience Insights</h3>
                    <p className="text-muted-foreground mb-3">
                      Your audience responds well to educational content and product demonstrations. Consider creating
                      more tutorial-style posts to boost engagement.
                    </p>
                    <Badge variant="secondary">Content Strategy</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Eye,
  Palette,
  Type,
  MessageSquare,
  ImageIcon,
  RefreshCw,
} from "lucide-react"

export function BrandChecker() {
  const brandChecks = [
    {
      id: 1,
      content: "Holiday Campaign Post",
      type: "image",
      url: "/placeholder.svg?height=200&width=300",
      scores: {
        color: 96,
        typography: 94,
        tone: 98,
        composition: 92,
        overall: 95,
      },
      issues: [
        { type: "warning", message: "Logo placement could be more prominent" },
        { type: "info", message: "Consider using primary brand font for headlines" },
      ],
      status: "approved",
    },
    {
      id: 2,
      content: "Product Launch Caption",
      type: "text",
      text: "🚀 Exciting news! Our latest innovation is here to revolutionize your workflow. Experience the future of productivity with cutting-edge features designed for modern professionals. #Innovation #Productivity #Future",
      scores: {
        color: 100,
        typography: 100,
        tone: 89,
        composition: 95,
        overall: 91,
      },
      issues: [
        { type: "warning", message: "Tone slightly more casual than brand guidelines" },
        { type: "info", message: "Consider adding brand-specific hashtags" },
      ],
      status: "review",
    },
    {
      id: 3,
      content: "Behind the Scenes Video",
      type: "video",
      url: "/placeholder.svg?height=200&width=300",
      scores: {
        color: 78,
        typography: 85,
        tone: 95,
        composition: 88,
        overall: 87,
      },
      issues: [
        { type: "error", message: "Color palette doesn't match brand guidelines" },
        { type: "warning", message: "Font choice inconsistent with brand typography" },
      ],
      status: "rejected",
    },
  ]

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 70) return "text-yellow-600"
    return "text-red-600"
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="h-3 w-3 mr-1" />
            Approved
          </Badge>
        )
      case "review":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            <AlertTriangle className="h-3 w-3 mr-1" />
            Review
          </Badge>
        )
      case "rejected":
        return (
          <Badge className="bg-red-100 text-red-800">
            <XCircle className="h-3 w-3 mr-1" />
            Rejected
          </Badge>
        )
      default:
        return <Badge variant="secondary">Pending</Badge>
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Brand Consistency Checker</h1>
        <p className="text-muted-foreground">AI-powered brand compliance analysis and quality assurance</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Score</CardTitle>
            <Shield className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">91%</div>
            <p className="text-xs text-muted-foreground">Average brand consistency</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approved</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">156</div>
            <p className="text-xs text-muted-foreground">Content pieces this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Under Review</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">23</div>
            <p className="text-xs text-muted-foreground">Pending approval</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rejected</CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">7</div>
            <p className="text-xs text-muted-foreground">Failed brand check</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="recent" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="recent">Recent Checks</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Check Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="recent" className="space-y-4">
          {brandChecks.map((check) => (
            <Card key={check.id}>
              <CardContent className="p-6">
                <div className="flex gap-6">
                  {/* Content Preview */}
                  <div className="flex-shrink-0">
                    {check.type === "image" || check.type === "video" ? (
                      <img
                        src={check.url || "/placeholder.svg"}
                        alt={check.content}
                        className="w-32 h-24 object-cover rounded-lg"
                      />
                    ) : (
                      <div className="w-32 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                        <MessageSquare className="h-8 w-8 text-gray-400" />
                      </div>
                    )}
                  </div>

                  {/* Content Details */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{check.content}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          {check.type === "image" && <ImageIcon className="h-4 w-4 text-gray-500" />}
                          {check.type === "video" && <Eye className="h-4 w-4 text-gray-500" />}
                          {check.type === "text" && <Type className="h-4 w-4 text-gray-500" />}
                          <span className="text-sm text-muted-foreground capitalize">{check.type}</span>
                        </div>
                      </div>
                      {getStatusBadge(check.status)}
                    </div>

                    {check.text && <p className="text-sm bg-gray-50 p-3 rounded-lg">{check.text}</p>}

                    {/* Brand Scores */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Palette className="h-4 w-4 text-purple-500" />
                          <span className={`font-semibold ${getScoreColor(check.scores.color)}`}>
                            {check.scores.color}%
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">Color</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Type className="h-4 w-4 text-blue-500" />
                          <span className={`font-semibold ${getScoreColor(check.scores.typography)}`}>
                            {check.scores.typography}%
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">Typography</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <MessageSquare className="h-4 w-4 text-green-500" />
                          <span className={`font-semibold ${getScoreColor(check.scores.tone)}`}>
                            {check.scores.tone}%
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">Tone</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Eye className="h-4 w-4 text-orange-500" />
                          <span className={`font-semibold ${getScoreColor(check.scores.composition)}`}>
                            {check.scores.composition}%
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">Layout</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Shield className="h-4 w-4 text-indigo-500" />
                          <span className={`font-semibold ${getScoreColor(check.scores.overall)}`}>
                            {check.scores.overall}%
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">Overall</p>
                      </div>
                    </div>

                    {/* Issues */}
                    {check.issues.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Issues & Recommendations</h4>
                        {check.issues.map((issue, index) => (
                          <div
                            key={index}
                            className={`flex items-start gap-2 p-2 rounded-lg ${
                              issue.type === "error"
                                ? "bg-red-50"
                                : issue.type === "warning"
                                  ? "bg-yellow-50"
                                  : "bg-blue-50"
                            }`}
                          >
                            {issue.type === "error" && <XCircle className="h-4 w-4 text-red-500 mt-0.5" />}
                            {issue.type === "warning" && <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5" />}
                            {issue.type === "info" && <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5" />}
                            <p
                              className={`text-sm ${
                                issue.type === "error"
                                  ? "text-red-800"
                                  : issue.type === "warning"
                                    ? "text-yellow-800"
                                    : "text-blue-800"
                              }`}
                            >
                              {issue.message}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline">
                        <RefreshCw className="h-4 w-4 mr-1" />
                        Re-check
                      </Button>
                      {check.status === "review" && (
                        <>
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                          <Button size="sm">Approve</Button>
                        </>
                      )}
                      {check.status === "rejected" && <Button size="sm">Fix Issues</Button>}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Brand Consistency Trends</CardTitle>
                <CardDescription>Monthly brand compliance scores</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Color Consistency</span>
                      <span>94%</span>
                    </div>
                    <Progress value={94} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Typography Alignment</span>
                      <span>91%</span>
                    </div>
                    <Progress value={91} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Tone of Voice</span>
                      <span>96%</span>
                    </div>
                    <Progress value={96} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Visual Composition</span>
                      <span>89%</span>
                    </div>
                    <Progress value={89} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Common Issues</CardTitle>
                <CardDescription>Most frequent brand compliance problems</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    <span className="text-sm font-medium">Color palette mismatch</span>
                  </div>
                  <Badge variant="destructive">23%</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium">Logo placement issues</span>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">18%</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-medium">Typography inconsistency</span>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">15%</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Brand Check Configuration</CardTitle>
              <CardDescription>Customize your brand consistency checking parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Color Checking</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Color tolerance</span>
                        <span>15%</span>
                      </div>
                      <Progress value={15} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Minimum brand color usage</span>
                        <span>60%</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Typography Checking</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Font matching strictness</span>
                        <span>80%</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Hierarchy compliance</span>
                        <span>90%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <Button variant="outline">Reset to Defaults</Button>
                <Button>Save Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

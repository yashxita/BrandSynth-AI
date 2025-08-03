"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Zap, Clock, Settings, Play, Pause, RotateCcw, Target, Sparkles } from "lucide-react"

export function Automation() {
  const [automationRules, setAutomationRules] = useState([
    {
      id: 1,
      name: "Daily Content Generation",
      description: "Generate 3 brand-aligned posts daily based on trending topics",
      status: "active",
      frequency: "Daily",
      lastRun: "2 hours ago",
      success: 94,
      settings: {
        contentTypes: ["Images", "Captions"],
        platforms: ["Instagram", "LinkedIn"],
        brandScore: 85,
      },
    },
    {
      id: 2,
      name: "Competitor Analysis",
      description: "Monitor competitor campaigns and generate insights",
      status: "active",
      frequency: "Weekly",
      lastRun: "1 day ago",
      success: 89,
      settings: {
        competitors: 5,
        platforms: ["Instagram", "LinkedIn", "Twitter"],
        alertThreshold: 75,
      },
    },
    {
      id: 3,
      name: "Brand Consistency Check",
      description: "Automatically review all content for brand compliance",
      status: "paused",
      frequency: "Real-time",
      lastRun: "5 hours ago",
      success: 96,
      settings: {
        autoApprove: true,
        threshold: 90,
        notifications: true,
      },
    },
    {
      id: 4,
      name: "Seasonal Campaign Prep",
      description: "Generate holiday and seasonal content in advance",
      status: "scheduled",
      frequency: "Monthly",
      lastRun: "Never",
      success: 0,
      settings: {
        leadTime: 30,
        contentVolume: "High",
        platforms: ["All"],
      },
    },
  ])

  const [contentGenSettings, setContentGenSettings] = useState({
    dailyVolume: [5],
    brandThreshold: [85],
    autoApprove: true,
    platforms: ["Instagram", "LinkedIn"],
    contentTypes: ["Images", "Captions", "Stories"],
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge className="bg-green-100 text-green-800">
            <Play className="h-3 w-3 mr-1" />
            Active
          </Badge>
        )
      case "paused":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            <Pause className="h-3 w-3 mr-1" />
            Paused
          </Badge>
        )
      case "scheduled":
        return (
          <Badge className="bg-blue-100 text-blue-800">
            <Clock className="h-3 w-3 mr-1" />
            Scheduled
          </Badge>
        )
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Automation Center</h1>
          <p className="text-muted-foreground">Configure and manage AI-powered automation workflows</p>
        </div>
        <Button>
          <Zap className="h-4 w-4 mr-2" />
          Create New Rule
        </Button>
      </div>

      {/* Automation Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Rules</CardTitle>
            <Zap className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Running automation workflows</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <Target className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">Average automation success</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Time Saved</CardTitle>
            <Clock className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47h</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Content Generated</CardTitle>
            <Sparkles className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">Auto-generated pieces</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Automation Rules */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Automation Rules</h2>
          {automationRules.map((rule) => (
            <Card key={rule.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold">{rule.name}</h3>
                    <p className="text-sm text-muted-foreground">{rule.description}</p>
                  </div>
                  {getStatusBadge(rule.status)}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Frequency:</span>
                    <span className="ml-2 font-medium">{rule.frequency}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Last Run:</span>
                    <span className="ml-2 font-medium">{rule.lastRun}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Success Rate:</span>
                    <span className="ml-2 font-medium">{rule.success}%</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Status:</span>
                    <span className="ml-2 font-medium capitalize">{rule.status}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Settings className="h-4 w-4 mr-1" />
                    Configure
                  </Button>
                  {rule.status === "active" ? (
                    <Button size="sm" variant="outline">
                      <Pause className="h-4 w-4 mr-1" />
                      Pause
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline">
                      <Play className="h-4 w-4 mr-1" />
                      Start
                    </Button>
                  )}
                  <Button size="sm" variant="outline">
                    <RotateCcw className="h-4 w-4 mr-1" />
                    Run Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Automation Settings */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Content Generation Settings</CardTitle>
              <CardDescription>Configure automatic content creation parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Daily Content Volume: {contentGenSettings.dailyVolume[0]} posts</Label>
                <Slider
                  value={contentGenSettings.dailyVolume}
                  onValueChange={(value) => setContentGenSettings({ ...contentGenSettings, dailyVolume: value })}
                  max={20}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1 post</span>
                  <span>20 posts</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Brand Score Threshold: {contentGenSettings.brandThreshold[0]}%</Label>
                <Slider
                  value={contentGenSettings.brandThreshold}
                  onValueChange={(value) => setContentGenSettings({ ...contentGenSettings, brandThreshold: value })}
                  max={100}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto-approve high-scoring content</Label>
                  <p className="text-sm text-muted-foreground">Automatically approve content above threshold</p>
                </div>
                <Switch
                  checked={contentGenSettings.autoApprove}
                  onCheckedChange={(checked) => setContentGenSettings({ ...contentGenSettings, autoApprove: checked })}
                />
              </div>

              <div className="space-y-2">
                <Label>Target Platforms</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select platforms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Platforms</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                    <SelectItem value="twitter">Twitter</SelectItem>
                    <SelectItem value="tiktok">TikTok</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Content Types</Label>
                <div className="flex gap-2 flex-wrap">
                  {["Images", "Captions", "Stories", "Videos", "Carousels"].map((type) => (
                    <Badge key={type} variant="secondary" className="cursor-pointer">
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Scheduling Automation</CardTitle>
              <CardDescription>Automatic content scheduling preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Optimal Posting Times</Label>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="p-2 bg-blue-50 rounded">
                    <div className="font-medium">Weekdays</div>
                    <div className="text-muted-foreground">9 AM, 2 PM, 7 PM</div>
                  </div>
                  <div className="p-2 bg-green-50 rounded">
                    <div className="font-medium">Weekends</div>
                    <div className="text-muted-foreground">11 AM, 4 PM</div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Time Zone</Label>
                <Select defaultValue="pst">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pst">Pacific Standard Time</SelectItem>
                    <SelectItem value="est">Eastern Standard Time</SelectItem>
                    <SelectItem value="cst">Central Standard Time</SelectItem>
                    <SelectItem value="mst">Mountain Standard Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Smart Scheduling</Label>
                  <p className="text-sm text-muted-foreground">Use AI to optimize posting times</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure automation alerts and updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Content Generation Alerts</Label>
                  <p className="text-sm text-muted-foreground">Notify when new content is generated</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Brand Compliance Warnings</Label>
                  <p className="text-sm text-muted-foreground">Alert when content fails brand checks</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Performance Reports</Label>
                  <p className="text-sm text-muted-foreground">Weekly automation performance summaries</p>
                </div>
                <Switch />
              </div>

              <div className="space-y-2">
                <Label>Notification Email</Label>
                <Input placeholder="your@email.com" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

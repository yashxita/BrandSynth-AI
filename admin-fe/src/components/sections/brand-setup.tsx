"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, Palette, Type, MessageSquare, ImageIcon, CheckCircle } from "lucide-react"

export function BrandSetup() {
  const [brandColors, setBrandColors] = useState(["#6366f1", "#8b5cf6", "#ec4899"])
  const [uploadedAssets, setUploadedAssets] = useState([
    { name: "logo-primary.svg", type: "Logo", status: "processed" },
    { name: "brand-guidelines.pdf", type: "Guidelines", status: "processed" },
    { name: "sample-posts.zip", type: "Examples", status: "processing" },
  ])

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Brand Setup</h1>
        <p className="text-muted-foreground">Configure your brand identity for AI-powered content curation</p>
      </div>

      <Tabs defaultValue="identity" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="identity">Brand Identity</TabsTrigger>
          <TabsTrigger value="assets">Visual Assets</TabsTrigger>
          <TabsTrigger value="voice">Tone & Voice</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
        </TabsList>

        <TabsContent value="identity" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Color Palette
                </CardTitle>
                <CardDescription>Define your brand's primary and secondary colors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2 mb-4">
                  {brandColors.map((color, index) => (
                    <div
                      key={index}
                      className="w-12 h-12 rounded-lg border-2 border-gray-200 cursor-pointer"
                      style={{ backgroundColor: color }}
                      onClick={() => {
                        const input = document.createElement("input")
                        input.type = "color"
                        input.value = color
                        input.onchange = (e) => {
                          const newColors = [...brandColors]
                          newColors[index] = (e.target as HTMLInputElement).value
                          setBrandColors(newColors)
                        }
                        input.click()
                      }}
                    />
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-12 h-12 p-0 bg-transparent"
                    onClick={() => setBrandColors([...brandColors, "#000000"])}
                  >
                    +
                  </Button>
                </div>
                <div className="space-y-2">
                  <Label>Color Analysis</Label>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• Primary: Cool, professional palette</p>
                    <p>• Accessibility: WCAG AA compliant</p>
                    <p>• Mood: Modern, trustworthy, innovative</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Type className="h-5 w-5" />
                  Typography
                </CardTitle>
                <CardDescription>Set your brand's font preferences and hierarchy</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Primary Font</Label>
                  <Input placeholder="Inter, Helvetica, Arial" />
                </div>
                <div className="space-y-2">
                  <Label>Secondary Font</Label>
                  <Input placeholder="Playfair Display, Georgia, serif" />
                </div>
                <div className="space-y-2">
                  <Label>Font Characteristics</Label>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary">Modern</Badge>
                    <Badge variant="secondary">Clean</Badge>
                    <Badge variant="secondary">Readable</Badge>
                    <Badge variant="secondary">Professional</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="assets" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Brand Assets Upload
              </CardTitle>
              <CardDescription>Upload logos, brand guidelines, and visual references</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-lg font-medium mb-2">Drop files here or click to upload</p>
                <p className="text-sm text-muted-foreground mb-4">Supports: SVG, PNG, JPG, PDF (max 10MB each)</p>
                <Button>Choose Files</Button>
              </div>

              <div className="space-y-3">
                <Label>Uploaded Assets</Label>
                {uploadedAssets.map((asset, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <ImageIcon className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="font-medium">{asset.name}</p>
                        <p className="text-sm text-muted-foreground">{asset.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {asset.status === "processed" ? (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Processed
                        </Badge>
                      ) : (
                        <Badge variant="outline">Processing...</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="voice" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Brand Voice & Tone
              </CardTitle>
              <CardDescription>Define how your brand communicates across all content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Brand Personality</Label>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary">Professional</Badge>
                    <Badge variant="secondary">Friendly</Badge>
                    <Badge variant="secondary">Innovative</Badge>
                    <Badge variant="secondary">Trustworthy</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Communication Style</Label>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline">Conversational</Badge>
                    <Badge variant="outline">Direct</Badge>
                    <Badge variant="outline">Inspiring</Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Brand Description</Label>
                <Textarea
                  placeholder="Describe your brand's mission, values, and unique positioning..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label>Key Messages</Label>
                <Textarea
                  placeholder="List your core brand messages and value propositions..."
                  className="min-h-[80px]"
                />
              </div>

              <div className="space-y-2">
                <Label>Tone Guidelines</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium text-green-600 mb-1">Do Use</h4>
                    <p className="text-sm text-muted-foreground">
                      Clear, actionable language Positive, solution-focused Industry expertise
                    </p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium text-red-600 mb-1">Avoid</h4>
                    <p className="text-sm text-muted-foreground">
                      Jargon or complex terms Negative or critical tone Overly casual language
                    </p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium text-blue-600 mb-1">Preferred</h4>
                    <p className="text-sm text-muted-foreground">
                      "We help you..." vs "Our solution..." "Discover" vs "Find" "Transform" vs "Change"
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Example Content</CardTitle>
              <CardDescription>Provide examples of your best content for AI training</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4">
                  <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg mb-3"></div>
                  <h4 className="font-medium mb-1">Product Launch Post</h4>
                  <p className="text-sm text-muted-foreground mb-2">"Introducing our latest innovation..."</p>
                  <Badge variant="secondary">High Engagement</Badge>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="aspect-square bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg mb-3"></div>
                  <h4 className="font-medium mb-1">Behind the Scenes</h4>
                  <p className="text-sm text-muted-foreground mb-2">"Take a peek at our creative process..."</p>
                  <Badge variant="secondary">Brand Aligned</Badge>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="aspect-square bg-gradient-to-br from-green-400 to-emerald-400 rounded-lg mb-3"></div>
                  <h4 className="font-medium mb-1">Customer Story</h4>
                  <p className="text-sm text-muted-foreground mb-2">"How Sarah transformed her business..."</p>
                  <Badge variant="secondary">Authentic</Badge>
                </div>
              </div>

              <Button className="w-full bg-transparent" variant="outline">
                <Upload className="h-4 w-4 mr-2" />
                Upload More Examples
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end gap-3">
        <Button variant="outline">Save Draft</Button>
        <Button>Save & Train AI Model</Button>
      </div>
    </div>
  )
}

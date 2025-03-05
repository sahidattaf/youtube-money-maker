import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function AIVideoTemplate() {
  const [channelName, setChannelName] = useState("");
  const [topic, setTopic] = useState("AI Tools"); // Default Topic
  const [videoLength, setVideoLength] = useState("medium"); // short, medium, long
  const [targetAudience, setTargetAudience] = useState("beginners"); // beginners, intermediate, advanced
  const [videoStyle, setVideoStyle] = useState("educational"); // educational, entertaining, tutorial
  const [script, setScript] = useState(
    `🎬 Welcome to ${channelName || "[Your Channel Name]"}! 🚀

👋 Are you ready to discover the best ${topic} that can automate your work and help you make money online? Let's dive in!`
  );
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateScript = () => {
    setIsGenerating(true);
    
    // In a real implementation, you'd call an API here
    setTimeout(() => {
      let newScript = ``;
      
      // Introduction section
      newScript += `🎬 Welcome to ${channelName || "[Your Channel Name]"}! 🚀\n\n`;
      newScript += `👋 Are you ready to discover the best ${topic} that can automate your work and help you make money online? Let's dive in!\n\n`;
      
      // Add content based on video style
      if (videoStyle === "educational") {
        newScript += `📚 In today's educational video, we'll explore how ${topic} are transforming the digital landscape.\n\n`;
      } else if (videoStyle === "entertaining") {
        newScript += `🎭 Get ready for an entertaining journey through the world of ${topic}! You won't believe what these tools can do!\n\n`;
      } else if (videoStyle === "tutorial") {
        newScript += `🔧 This step-by-step tutorial will show you exactly how to use ${topic} to maximize your productivity and income.\n\n`;
      }
      
      // Add content based on target audience
      if (targetAudience === "beginners") {
        newScript += `🌱 If you're new to ${topic}, don't worry! We'll start with the basics and guide you through everything you need to know.\n\n`;
      } else if (targetAudience === "intermediate") {
        newScript += `🔄 For those already familiar with ${topic}, we'll focus on advanced features and optimization techniques.\n\n`;
      } else if (targetAudience === "advanced") {
        newScript += `🔥 This deep dive into ${topic} is designed for experts looking to push the boundaries of what's possible.\n\n`;
      }
      
      // Main content based on video length
      if (videoLength === "short") {
        newScript += `⏱️ In this quick overview, we'll cover the top 3 ${topic} you need to know about:\n\n`;
        newScript += `1️⃣ First tool: [Tool Name] - Perfect for automating repetitive tasks\n`;
        newScript += `2️⃣ Second tool: [Tool Name] - Ideal for scaling your online business\n`;
        newScript += `3️⃣ Third tool: [Tool Name] - The secret weapon for passive income\n\n`;
      } else if (videoLength === "medium") {
        newScript += `⏱️ In today's video, we'll explore the top 5 ${topic} that can transform your workflow:\n\n`;
        newScript += `1️⃣ First tool: [Tool Name] - Perfect for automating repetitive tasks\n`;
        newScript += `2️⃣ Second tool: [Tool Name] - Ideal for scaling your online business\n`;
        newScript += `3️⃣ Third tool: [Tool Name] - The secret weapon for passive income\n`;
        newScript += `4️⃣ Fourth tool: [Tool Name] - Essential for content creation and distribution\n`;
        newScript += `5️⃣ Fifth tool: [Tool Name] - The all-in-one solution for digital entrepreneurs\n\n`;
        newScript += `For each tool, we'll cover key features, pricing, and real-world applications.\n\n`;
      } else if (videoLength === "long") {
        newScript += `⏱️ In this comprehensive guide, we'll do a deep dive into the top 7 ${topic} that can revolutionize your business:\n\n`;
        newScript += `1️⃣ First tool: [Tool Name]\n`;
        newScript += `   - Key features and benefits\n`;
        newScript += `   - Step-by-step setup guide\n`;
        newScript += `   - Pricing tiers and best options\n`;
        newScript += `   - Real-world case studies\n\n`;
        newScript += `2️⃣ Second tool: [Tool Name]\n`;
        newScript += `   - Unique selling points\n`;
        newScript += `   - Integration capabilities\n`;
        newScript += `   - ROI analysis\n\n`;
        newScript += `... and 5 more powerful tools with detailed breakdowns!\n\n`;
        newScript += `We'll also compare all tools side-by-side and recommend the best combinations for different business models.\n\n`;
      }
      
      // Call to action
      newScript += `🔔 If you're enjoying this content, don't forget to like, subscribe, and hit the notification bell!\n\n`;
      newScript += `💬 Share your experience with ${topic} in the comments below.\n\n`;
      newScript += `🔗 Check the description for exclusive discounts on all the tools mentioned.\n\n`;
      newScript += `👉 See you in the next video where we'll explore ${topic === "AI Tools" ? "Passive Income Strategies" : "AI Tools"}!`;
      
      setScript(newScript);
      setIsGenerating(false);
    }, 1500); // Simulate API delay
  };

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(script);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
      alert("Failed to copy text. Please copy manually.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-10 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">
        🎬 AI YouTube Video Script Generator
      </h1>
      <p className="mb-10 text-gray-400">
        Customize your script and generate AI-powered YouTube videos!
      </p>

      <div className="w-full max-w-3xl bg-gray-800 rounded-lg p-6 mb-8 border border-gray-700">
        <h2 className="text-2xl font-semibold mb-4">Script Parameters</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Channel Name */}
          <div>
            <label htmlFor="channelName" className="block text-sm font-medium text-gray-300 mb-1">
              Channel Name:
            </label>
            <input
              type="text"
              id="channelName"
              className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={channelName}
              onChange={(e) => setChannelName(e.target.value)}
              placeholder="Your Channel Name"
            />
          </div>

          {/* Topic */}
          <div>
            <label htmlFor="topic" className="block text-sm font-medium text-gray-300 mb-1">
              Topic:
            </label>
            <input
              type="text"
              id="topic"
              className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., AI Tools, Passive Income"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Video Length */}
          <div>
            <label htmlFor="videoLength" className="block text-sm font-medium text-gray-300 mb-1">
              Video Length:
            </label>
            <select
              id="videoLength"
              className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={videoLength}
              onChange={(e) => setVideoLength(e.target.value)}
            >
              <option value="short">Short (3-5 min)</option>
              <option value="medium">Medium (7-12 min)</option>
              <option value="long">Long (15+ min)</option>
            </select>
          </div>

          {/* Target Audience */}
          <div>
            <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-300 mb-1">
              Target Audience:
            </label>
            <select
              id="targetAudience"
              className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
            >
              <option value="beginners">Beginners</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          {/* Video Style */}
          <div>
            <label htmlFor="videoStyle" className="block text-sm font-medium text-gray-300 mb-1">
              Video Style:
            </label>
            <select
              id="videoStyle"
              className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={videoStyle}
              onChange={(e) => setVideoStyle(e.target.value)}
            >
              <option value="educational">Educational</option>
              <option value="entertaining">Entertaining</option>
              <option value="tutorial">Tutorial</option>
            </select>
          </div>
        </div>

        <Button 
          onClick={generateScript} 
          className="w-full bg-green-600 hover:bg-green-700 transition-colors"
          disabled={isGenerating}
        >
          {isGenerating ? "Generating..." : "Generate Script"}
        </Button>
      </div>

      <Card className="bg-gray-800 text-white border border-gray-700 w-full max-w-3xl mb-6">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <CardTitle className="text-xl font-semibold">
              AI-Generated Video Script
            </CardTitle>
            <Button
              className={`${copied ? "bg-green-600" : "bg-blue-600"} hover:${copied ? "bg-green-700" : "bg-blue-700"} transition-colors`}
              onClick={handleCopyClick}
              disabled={copied || script.trim() === ""}
              size="sm"
            >
              {copied ? "Copied! ✓" : "Copy Script 📋"}
            </Button>
          </div>
          <div className="bg-gray-900 rounded-md p-4 max-h-96 overflow-y-auto">
            <pre className="whitespace-pre-wrap text-gray-300 font-mono text-sm">{script}</pre>
          </div>
        </CardContent>
      </Card>

      <div className="text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} {channelName || "Your Channel"} - AI Script Generator</p>
        <p className="mt-1">Customize and generate professional YouTube scripts in seconds</p>
      </div>
    </div>
  );
}
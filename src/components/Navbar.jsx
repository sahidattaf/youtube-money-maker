import { Github } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-800">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">YouTube Money Maker</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={() => window.open('https://github.com/sahidattaf/youtube-money-maker', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </Button>
        </div>
      </div>
    </nav>
  );
}
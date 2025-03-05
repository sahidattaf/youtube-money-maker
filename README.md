# YouTube Money Maker

A React-based application for generating YouTube video scripts and content ideas focused on making money online. Features AI-powered script generation and content optimization tools.

## Features

- 🎬 AI-powered YouTube script generation
- 💰 Focus on monetization strategies and tools
- 🚀 Easy-to-use interface for content creators
- 📋 One-click copy functionality for generated scripts

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/sahidattaf/youtube-money-maker.git
cd youtube-money-maker
```

2. Initialize git in your local project:
```bash
git init
git add .
git commit -m "Initial commit"
```

3. Link your local repository to GitHub:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

4. Update package.json for GitHub Pages:
Add these lines to your package.json:
```json
{
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

5. Install GitHub Pages dependency:
```bash
npm install --save-dev gh-pages
```

6. Deploy to GitHub Pages:
```bash
npm run deploy
```

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Technologies Used

- React
- Vite
- Tailwind CSS
- Radix UI
- Class Variance Authority

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
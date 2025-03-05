# AI YouTube Script Generator

A React-based web application that helps content creators generate customized YouTube video scripts using AI-powered templates.

## Features

- Customizable video script generation
- Multiple video styles (Educational, Entertaining, Tutorial)
- Target audience selection
- Adjustable video length
- Easy copy-to-clipboard functionality
- Modern, responsive UI

## Deployment to GitHub Pages

To deploy this application to GitHub Pages, follow these steps:

1. Create a new repository on GitHub

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
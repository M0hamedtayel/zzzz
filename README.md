# Web Penetration Tester Portfolio

A modern, responsive portfolio website built with React.js, showcasing professional penetration testing skills and projects.

## Project Structure
```
├── client/
│   ├── public/
│   │   └── 404.html           # GitHub Pages 404 redirect
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/        # Layout components (Navbar, Footer)
│   │   │   └── ui/           # UI components
│   │   ├── hooks/            # Custom React hooks
│   │   ├── lib/              # Utility functions
│   │   ├── pages/            # Page components
│   │   └── App.tsx          # Main application component
│   └── index.html           # HTML entry point
├── package.json            # Project dependencies
└── theme.json             # Theme configuration
```

## Deployment Instructions

1. Create a new repository on GitHub
   - Go to GitHub and create a new repository
   - Name it: `yourusername.github.io` (replace 'yourusername' with your GitHub username)

2. Initialize and push your code
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

3. Configure GitHub Pages
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select branch "main" as source
   - Save the changes

4. Update package.json (if needed)
   - Add your repository name to "homepage" field
   - Add deploy scripts

5. After deployment, your site will be available at:
   `https://yourusername.github.io`

## Development

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Features
- Responsive design
- Modern UI components with shadcn/ui
- Dynamic routing
- Contact form
- Project showcase
- Skills visualization
- Blog section
- Professional animations

## Technologies Used
- React.js
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui components
- Wouter for routing

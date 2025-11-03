# AIMBOT - Premium Gaming Platform 🎮

An ultra-sleek, premium gaming frontend built with Next.js, featuring a cyberpunk-inspired design with smooth animations and a modern gaming aesthetic.

## 🚀 Features

- **Ultra-Premium Design**: Dark cyberpunk theme with gradient effects and glassmorphism
- **Smooth Animations**: Framer Motion powered animations for fluid interactions
- **Responsive Layout**: Fully responsive across all devices
- **Gaming Aesthetic**: Neon borders, floating orbs, and grid backgrounds
- **Performance Optimized**: Built with Next.js 13 for optimal performance
- **Vercel Ready**: Pre-configured for seamless Vercel deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 13.5.6
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Vercel

## 📦 Installation

```bash
npm install
```

## 🏃 Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deploy to Vercel

### Option 1: Vercel CLI (Recommended)

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Import the repository in Vercel Dashboard
3. Vercel will auto-detect Next.js and deploy

### Option 3: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import this repository
4. Click "Deploy"

## 🎨 Design Features

- **Gradient Backgrounds**: Purple, blue, and cyan gradient combinations
- **Floating Orbs**: Animated background elements for depth
- **Grid Background**: Gaming-style grid overlay
- **Glassmorphism Cards**: Modern card designs with backdrop blur
- **Neon Borders**: Animated glowing borders
- **Smooth Transitions**: Hover effects and animations throughout

## 📁 Project Structure

```
aimbot-frontend/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main page
├── components/
│   ├── Navbar.tsx            # Navigation component
│   ├── Hero.tsx              # Hero section
│   ├── Features.tsx          # Features grid
│   ├── Stats.tsx             # Statistics section
│   └── Footer.tsx            # Footer component
├── public/
│   └── logo.svg              # Brand logo
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🎯 Customization

### Colors

Edit `tailwind.config.js` to customize the gaming color palette:

```javascript
colors: {
  gaming: {
    dark: '#0a0e27',
    darker: '#050814',
    purple: '#8b5cf6',
    blue: '#3b82f6',
    cyan: '#06b6d4',
    pink: '#ec4899',
    accent: '#f59e0b',
  },
}
```

### Animations

Custom animations are defined in `tailwind.config.js` and can be modified:
- `pulse-glow`: Glowing pulse effect
- `float`: Floating animation
- `slide-up`: Slide up entrance animation

## 📱 Responsive Design

- **Mobile**: Optimized for phones (< 768px)
- **Tablet**: Enhanced layout for tablets (768px - 1024px)
- **Desktop**: Full experience on desktop (> 1024px)

## ⚡ Performance

- Server-side rendering with Next.js
- Optimized images and assets
- Minimal JavaScript bundle
- CSS-only animations where possible
- Lazy loading for components

## 🔧 Build for Production

```bash
npm run build
npm start
```

## 📄 License

This project is available for use and modification.

## 🎮 Live Demo

Deploy your own instance to Vercel in minutes!

---

Built with ⚡ by the AIMBOT team

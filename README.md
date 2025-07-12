# NOVAAR - Landing Page

A modern React web application built with Vite, featuring smooth animations, responsive design, and dynamic content.

## 🚀 Live Demo

Visit the live application at: [http://novaarng.com](http://novaarng.com)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Deployment](#deployment)

## ✨ Features

- **Modern React Architecture**: Built with React 18 and functional components
- **Smooth Animations**: Powered by Framer Motion and GSAP
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Charts**: Data visualization with Chart.js
- **Image Carousels**: Multiple slider implementations (Keen Slider, Swiper, React Slick)
- **Performance Optimized**: Lazy loading and code splitting
- **SEO Friendly**: Proper routing with React Router DOM
- **Loading States**: Custom loading components for better UX

## 🛠 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS, DaisyUI
- **Animations**: Framer Motion, GSAP
- **Routing**: React Router DOM
- **Charts**: Chart.js with React integration
- **UI Components**: Radix UI, Lucide React icons
- **Sliders**: Keen Slider, Swiper, React Slick

## 🏁 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
- `npm run deploy` - Deploy to GitHub Pages
- `npm run predeploy` - Build before deployment

## 📁 Project Structure

```
src/
├── Body/           # Main body components
├── Components/     # Reusable UI components
│   └── Footer/     # Footer component
├── Header/         # Header component
├── Pages/          # Route-based page components
│   ├── About/      # About page
│   ├── Contact/    # Contact page
│   ├── Project/    # Project showcase page
│   └── Services/   # Services page
├── Loading.jsx     # Loading component
├── App.jsx         # Main application component
├── main.jsx        # Application entry point
└── index.css       # Global styles
```

## 📦 Key Dependencies

### Core
- **React 18**: Modern React with hooks and concurrent features
- **Vite**: Fast build tool and development server
- **React Router DOM**: Client-side routing

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework
- **DaisyUI**: Tailwind CSS component library
- **Framer Motion**: Animation library
- **GSAP**: Professional animation library

### Charts & Data Visualization
- **Chart.js**: Flexible charting library
- **React Chart.js 2**: React wrapper for Chart.js

### Carousels & Sliders
- **Keen Slider**: Lightweight slider
- **Swiper**: Modern touch slider
- **React Slick**: Carousel component

### Performance
- **React Lazy Load**: Lazy loading for images
- **React Intersection Observer**: Viewport-based component loading

## 🚀 Deployment

This project is configured for deployment to GitHub Pages:

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

The deployment process automatically builds the project and pushes the `dist` folder to the `gh-pages` branch.

## 🔧 Development

### Code Quality
- ESLint configured with React-specific rules
- Automatic unused directive detection
- Maximum warning threshold set to 0

### Performance Optimization
- Lazy loading for route components
- Image lazy loading
- Code splitting with React.lazy()
- Intersection Observer for viewport-based loading

## 📝 License

This project is private and not open for public distribution.

**Built with ❤️ using React and modern web technologies**

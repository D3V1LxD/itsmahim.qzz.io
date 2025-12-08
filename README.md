# Portfolio Website - Md. Mahim Khan

A modern, responsive portfolio website showcasing the work and expertise of Md. Mahim Khan, a 4th-year Naval Architecture & Offshore Engineering student at Bangladesh Maritime University.

_Last updated: December 8, 2025_

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Scrolling**: Enhanced user experience with smooth section transitions
- **Parallax Effects**: Interactive mouse-driven parallax animations
- **Glass Morphism**: Modern glass effect styling
- **Animated Elements**: Float animations, gradient effects, and hover interactions
- **Optimized Performance**: Built with Next.js for optimal performance
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Custom CSS animations and transitions
- **Icons**: React Icons
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
Portfolio 2/
├── app/
│   ├── globals.css          # Global styles and custom animations
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Home page
├── components/
│   ├── Navigation.tsx        # Navigation bar with scroll effect
│   ├── Hero.tsx              # Hero section with parallax
│   ├── About.tsx             # About section
│   ├── Skills.tsx            # Skills and expertise showcase
│   ├── Projects.tsx          # Featured projects
│   └── Contact.tsx           # Contact information
├── .github/
│   └── copilot-instructions.md
├── next.config.js            # Next.js configuration for GitHub Pages
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

## 🎨 Sections

1. **Hero**: Animated introduction with parallax background effects
2. **About**: Personal introduction and academic profile
3. **Skills**: Three core areas of expertise
   - Ship Design & Modeling
   - Engineering Analysis
   - Programming & Automation
4. **Projects**: Featured academic projects with achievements
   - 2000 DWT Inland Oil Tanker
   - Hull Structural Analysis
   - Hull Form Optimization
5. **Contact**: Contact information and social links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your system
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "Portfolio 2"
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
```

This will generate a static export in the `out` folder, ready for deployment.

## 🌐 Deployment to GitHub Pages

### Method 1: Using GitHub Actions (Recommended)

1. Create a `.github/workflows/deploy.yml` file with the deployment workflow
2. Push your code to GitHub
3. Enable GitHub Pages in repository settings
4. Select "GitHub Actions" as the source

### Method 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The static files will be in the `out` folder
3. Deploy the `out` folder to your GitHub Pages repository

## 🎨 Customization

### Colors

Edit the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: "#0a192f",      // Dark blue background
  secondary: "#112240",    // Lighter dark blue
  accent: "#64ffda",       // Cyan accent
  textPrimary: "#ccd6f6",  // Light text
  textSecondary: "#8892b0", // Gray text
}
```

### Animations

Custom animations are defined in `tailwind.config.ts` and `app/globals.css`.

### Content

Update the content in the component files:
- Personal information: `components/About.tsx`
- Skills: `components/Skills.tsx`
- Projects: `components/Projects.tsx`
- Contact: `components/Contact.tsx`

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Build and export static files

## 🔧 Configuration

### Next.js Config

The `next.config.js` is configured for static export suitable for GitHub Pages:

```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available for personal and educational use.

## 👤 Author

**Md. Mahim Khan**
- Email: mahim.naoe@gmail.com
- Facebook: [@storiesofmahim](https://facebook.com/storiesofmahim)
- Field: Naval Architecture & Offshore Engineering
- University: Bangladesh Maritime University

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

---

**Note**: This portfolio is designed to showcase academic projects and professional skills in naval architecture and offshore engineering.

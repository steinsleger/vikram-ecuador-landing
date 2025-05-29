# Vikram Singh Ecuador - Landing Page

[Visit the live site →](https://vikramecuador.com)

A modern, responsive landing page for Vikram Singh's authentic Hatha Yoga workshop in Ecuador. Built with Vite for optimal performance and developer experience.

## 🌟 Features

- **Modern Build System**: Powered by Vite for lightning-fast development and optimized production builds
- **Live Preview**: Hot module replacement for instant feedback during development
- **Optimized Assets**: Automatic minification of HTML, CSS, and JavaScript
- **Responsive Design**: Mobile-first approach with elegant responsive layouts
- **SEO Optimized**: Complete meta tags, structured data, and social media optimization
- **Performance Focused**: Lazy loading, image optimization, and efficient caching strategies
- **Elegant Animations**: Smooth scroll effects and intersection observer animations
- **Accessibility**: Semantic HTML and proper ARIA attributes

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- pnpm (recommended package manager)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd landing
```

2. Install dependencies:
```bash
pnpm install
```

3. Start development server:
```bash
pnpm dev
```

The development server will start at `http://localhost:3000` with live reload enabled.

## 📁 Project Structure

```
├── public/                 # Static assets served directly
│   ├── favicon.ico        # Main favicon
│   ├── site.webmanifest   # Web app manifest
│   ├── robots.txt         # SEO robots file
│   ├── sitemap.xml        # SEO sitemap
│   ├── .htaccess          # Apache server configuration
│   └── preview.jpg        # Social media preview image
├── src/                   # Source code
│   ├── assets/           # Processed assets
│   │   ├── images/       # Images (jpg, png)
│   │   ├── fonts/        # Custom fonts (otf, woff)
│   │   └── icons/        # Favicon variants
│   ├── styles/           # CSS files
│   │   └── main.css      # Main stylesheet
│   ├── scripts/          # JavaScript modules (future use)
│   ├── components/       # Reusable components (future use)
│   └── main.js           # Main JavaScript entry point
├── index.html            # Main HTML file
├── vite.config.js        # Vite configuration
├── package.json          # Project dependencies and scripts
└── README.md             # This file
```

## 🛠 Available Scripts

- `pnpm dev` - Start development server with live reload
- `pnpm build` - Build for production with minification
- `pnpm preview` - Preview production build locally
- `pnpm serve` - Alias for preview command

## 🔧 Build Configuration

The project uses Vite with custom configuration for:

### Minification
- **HTML**: Minified using vite-plugin-html
- **CSS**: Built-in CSS minification enabled
- **JavaScript**: Terser minification with console removal

### Asset Organization
- Images: `assets/images/[name]-[hash][ext]`
- Fonts: `assets/fonts/[name]-[hash][ext]`
- Styles: `assets/styles/[name]-[hash][ext]`
- Scripts: `assets/js/[name]-[hash].js`

### Caching Strategy
- File-based hashing for optimal browser caching
- Preserved cache functionality from original setup
- Efficient asset loading with proper cache headers

## 🎨 Styling Architecture

### CSS Organization
- **Reset & Base**: Foundational styles and CSS reset
- **Typography**: Font definitions and text styling
- **Components**: Modular component styles
- **Layout**: Grid and flexbox layouts
- **Responsive**: Mobile-first media queries
- **Animations**: Keyframes and transitions

### Design System
- **Colors**: Consistent color palette with CSS custom properties
- **Typography**: Saira Condensed + Made Dillan custom font
- **Spacing**: Consistent spacing scale
- **Shadows**: Layered shadow system for depth
- **Animations**: Smooth transitions and scroll-triggered animations

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

## 🔍 SEO Features

- Complete meta tags for social media sharing
- Structured data (JSON-LD) for search engines
- Optimized images with proper alt attributes
- Semantic HTML structure
- Sitemap and robots.txt included

## 🚀 Performance Optimizations

- **Image Loading**: Lazy loading for non-critical images
- **Font Loading**: Font-display: swap for better performance
- **Code Splitting**: Automatic code splitting by Vite
- **Tree Shaking**: Dead code elimination
- **Compression**: Gzip/Brotli compression ready

## 🌐 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 📦 Deployment

### Build for Production
```bash
pnpm build
```

The `dist/` folder will contain the optimized production build ready for deployment.

### Deployment Options
- **Static Hosting**: Netlify, Vercel, GitHub Pages
- **CDN**: CloudFlare, AWS CloudFront
- **Traditional Hosting**: Any web server with static file support

## 🔧 Development Workflow

1. **Start Development**: `pnpm dev`
2. **Make Changes**: Edit files in `src/` directory
3. **Live Preview**: Changes appear instantly in browser
4. **Build**: `pnpm build` when ready for production
5. **Preview Build**: `pnpm preview` to test production build locally

## 📄 License

This project is proprietary. All rights reserved.
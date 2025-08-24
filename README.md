# Vanguard Technology - DGDP Local Agent Landing Page

## 🎯 Overview

Professional dark-themed landing page for **Vanguard Technology**, Bangladesh's premier local agent facilitating DGDP (Directorate General of Defense Purchase) registration and compliance for international defense manufacturers.

**Version 3.0** - Complete Vector Graphics Implementation (December 2024)

### Live Demo
- Development: http://localhost:3000
- Production: [To be deployed]

## 🚀 Key Features

### Business Value
- **Local DGDP Agent**: Certified representative for international defense manufacturers
- **Government Relations**: Established relationships with Bangladesh Ministry of Defense  
- **Market Expertise**: Deep knowledge of Forces Goal 2030 modernization program
- **Compliance Support**: Complete DGDP registration and documentation assistance

### Technical Features
- **Vector Graphics**: All images replaced with custom SVG icons and animations
- **Enhanced Icons**: 6 defense categories with detailed vector illustrations
- **Compact Services**: 4-column grid layout for better space utilization
- **Streamlined Process**: Visual 4-step timeline without duration clutter
- **Dark Theme**: Professional military contractor aesthetic
- **Responsive Design**: Optimized for all devices

## 🛠️ Tech Stack

### Core Technologies
- **Next.js 15.4.7** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **GSAP** - Advanced timeline animations
- **Lucide React** - Clean, customizable icons

### Build & Development
- **Node.js 18+** - Runtime environment
- **npm** - Package management
- **ESLint** - Code quality
- **PostCSS** - CSS processing

## 📁 Project Structure

```
vanguard-landing/
├── app/
│   ├── layout.tsx               # Root layout with dark theme
│   ├── page.tsx                 # Main landing page
│   ├── globals.css              # Global styles and animations
│   └── categories/              # 6 category detail pages
│       ├── land-systems/
│       ├── naval-systems/
│       ├── air-defense/
│       ├── communications/
│       ├── support-equipment/
│       └── artillery-systems/
├── components/
│   ├── Header.tsx               # Sticky navigation
│   ├── Hero.tsx                 # Hero with 6 defense categories
│   ├── VideoSection.tsx         # Company video showcase
│   ├── DefenseProducts.tsx      # Product categories grid
│   ├── Services.tsx             # 4 services in compact layout
│   ├── Process.tsx              # 4-step process timeline
│   ├── Contact.tsx              # Formspree contact form
│   ├── Footer.tsx               # Footer with links
│   ├── EnhancedDefenseIcons.tsx # 6 defense category icons
│   ├── SimpleServiceIcons.tsx   # 4 service icons
│   ├── ProcessIcons.tsx         # 4 process step icons
│   ├── ClientPlaceholders.tsx   # Client logo placeholders
│   └── SVGFilters.tsx           # Shared SVG effects
├── public/
│   └── images/                  # Static assets (if any)
└── package.json                 # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone [repository-url]
cd vanguard-landing
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

4. **Build for production**
```bash
npm run build
npm start
```

## 🎨 Design System

### Color Palette
```css
--primary: #FF9500         /* Tactical Amber */
--primary-dark: #FFB700    /* Bright Amber */
--background: #0A0E1A      /* Dark Navy */
--surface: #1A1F2E         /* Dark Surface */
--text-primary: #F5F5F5    /* White */
--text-secondary: #9CA3AF  /* Gray */
--border: #FF9500          /* Amber borders */
```

### Typography
- **Headings**: System fonts, bold/black weight, uppercase
- **Body**: System fonts, regular weight, good readability
- **Special**: Tracking-wide for emphasis

### Component Patterns
- **Cards**: Dark backgrounds with amber hover borders
- **Buttons**: Primary (amber) and secondary (gray) variants
- **Icons**: Custom SVG with GSAP animations
- **Forms**: Dark inputs with amber focus states
- **Sections**: 2px amber borders between sections

## 🎯 Icon System

### Defense Category Icons (EnhancedDefenseIcons.tsx)
1. **Tank Icon** - Land systems and armored vehicles
2. **Ship Icon** - Naval vessels and maritime equipment
3. **Fighter Jet** - Enhanced aircraft with detailed design
4. **Radar Icon** - Communications and surveillance
5. **Support Icon** - Logistics and equipment
6. **Missile Icon** - Artillery and missile systems

### Service Icons (SimpleServiceIcons.tsx)
1. **Office Icon** - Local representation
2. **Document Icon** - Documentation support
3. **Network Icon** - Industry liaison
4. **Data Icon** - Market intelligence

### Process Icons (ProcessIcons.tsx)
1. **Consultation** - Partnership agreement
2. **Preparation** - Document preparation
3. **Submission** - DGDP submission
4. **Support** - Ongoing support

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ Performance
- **Build Size**: ~183KB First Load JS
- **Static Pages**: 10 pre-rendered pages
- **Load Time**: < 2 seconds
- **Animations**: 60fps smooth transitions

## 🚢 Deployment

### Vercel (Recommended)
```bash
vercel --prod
```

### Alternative Platforms
- Netlify
- AWS Amplify
- Railway
- Render
- Self-hosted Node.js

### Environment Variables
Create `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
# Add other environment variables as needed
```

## 📝 Recent Updates (v3.0)

### Major Changes
- ✅ Replaced all raster images with custom SVG vectors
- ✅ Redesigned Services section (compact 4-column grid)
- ✅ Enhanced fighter jet icon with realistic aircraft design
- ✅ Removed timeline durations from Process section
- ✅ Removed "Active" badges from product cards
- ✅ Added client logo placeholders
- ✅ Cleaned up unused component files
- ✅ Optimized animations and performance

### File Cleanup
Removed unused components:
- AdvancedDefenseIcons.tsx
- AdvancedDefenseIcons3D.tsx
- AdvancedServiceIcons3D.tsx
- ClientLogos.tsx
- DefenseIcons.tsx

## 🔧 Customization

### Change Contact Form
Edit `components/Contact.tsx` and update the Formspree endpoint

### Add Client Logos
Replace placeholders in `components/ClientPlaceholders.tsx` with actual logos

### Modify Categories
Edit category data in `components/DefenseProducts.tsx` and `components/Hero.tsx`

### Update Content
All text content is in component files, easy to modify

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use a different port
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Proprietary software for Vanguard Technology. All rights reserved.

## 📞 Contact

**Vanguard Technology**
- Location: Dhaka, Bangladesh
- Email: info@vanguard-bd.com
- Website: [vanguard-bd.com]

---

*Built with Next.js, TypeScript, and Tailwind CSS*
*Designed for Bangladesh's defense procurement ecosystem*
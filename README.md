# TimberSouq Website

A modern, professional static website for TimberSouq - a premium timber and wood products marketplace.

## 🚀 Features

- **Next.js 14** with App Router and Static Site Generation
- **Tailwind CSS** for modern, responsive design
- **TypeScript** for type safety
- **SEO Optimized** with metadata, sitemap, and robots.txt
- **Mobile-First** responsive design
- **Fast Performance** with optimized images and minimal JavaScript

## 📋 Pages

- **Home** - Hero section, products overview, industries, why choose us
- **About** - Company story, values, and differentiators
- **Products** - Product listing page
- **Product Details** - Individual pages for each product with contact info
- **Industries** - Industries served with sector-specific information
- **Contact** - Contact form and information

## 🛠️ Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
```

This generates a static export in the `out` directory.

### Preview Production Build

```bash
npm start
```

## 📦 Products

The website showcases the following timber products:

1. LVL Board
2. White Wood
3. Scaffolding Board
4. Film Faced Plywood
5. H20 Beam
6. Hardboard
7. Commercial Plywood

Each product has a dedicated page with:

- Detailed description
- Key features
- Applications
- Specifications
- Contact information (phone & WhatsApp)

## 🎨 Design

- **Color Palette**: Natural browns, dark greens, charcoal, off-white
- **Typography**: Poppins for headings, Inter for body text
- **Style**: Clean, minimal, professional, industrial

## 📱 Responsive Design

The website is fully responsive and optimized for:

- Mobile devices
- Tablets
- Desktop screens

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags for all pages
- Open Graph tags for social sharing
- Sitemap generation
- Robots.txt configuration
- Optimized heading hierarchy

## 🚀 Deployment

The website is configured for static export and can be deployed to:

- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any static hosting service

Simply run `npm run build` and deploy the contents of the `out` directory.

## 📞 Contact Information

Update the contact details in:

- `components/Footer.tsx`
- `app/contact/page.tsx`
- `app/products/[slug]/page.tsx`

Replace placeholder phone numbers and email addresses with actual contact information.

## 📄 License

© 2026 TimberSouq. All rights reserved.

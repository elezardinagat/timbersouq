# Public Assets - Image Organization

This folder contains all public assets for the TimberSouq website. Images are organized by category for easy location and management.

## Folder Structure

```
public/
├── images/
│   ├── products/      (Product images for catalog)
│   └── logo/          (Company logos - light, dark, favicon versions)
├── favicon/           (Favicon files)
└── README.md          (This file)
```

## Folder Usage Guide

### `/images/products/`

- **Purpose**: Store all product images
- **Naming Convention**: Use product slug names
  - Example: `hardwood-flooring.jpg`, `white-wood.png`, etc.
- **Recommended Format**: JPG or PNG (optimized for web)
- **Recommended Size**: 800x600px or higher for quality

### `/images/logo/`

- **Purpose**: Store all logo variations
- **Files to include**:
  - `logo.svg` - Primary logo (SVG recommended for scalability)
  - `logo-dark.svg` - Dark version for light backgrounds
  - `logo-light.svg` - Light version for dark backgrounds
  - `logo.png` - Raster fallback (if needed)

### `/favicon/`

- **Purpose**: Favicon files for browser tabs
- **Files to include**:
  - `favicon.ico` - Classic favicon (16x16, 32x32)
  - `favicon-16x16.png` - Small favicon
  - `favicon-32x32.png` - Medium favicon
  - `apple-touch-icon.png` - Apple device icon (180x180)
  - `android-chrome-192x192.png` - Android launcher icon

## Usage in Code

### Product Images

```tsx
<Image
  src="/images/products/hardwood-flooring.jpg"
  alt="Hardwood Flooring"
  width={800}
  height={600}
/>
```

### Logo Images

```tsx
<Image
  src="/images/logo/logo.svg"
  alt="TimberSouq Logo"
  width={200}
  height={50}
/>
```

### In CSS (Background Images)

```css
background-image: url("/images/products/white-wood.jpg");
```

## Notes

- Keep file names lowercase with hyphens (no spaces)
- Use optimized images to improve page performance
- Consider using WebP format for modern browsers with PNG fallback
- All images in this folder are publicly accessible

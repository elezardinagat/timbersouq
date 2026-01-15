# Favicon Setup Instructions

## Current Issue
SVG favicons are not supported in all browsers (Safari, older Chrome, Edge, IE).

## Solution: Create Multiple Favicon Formats

### Required Formats:
1. **favicon.ico** (16x16, 32x32, 48x48) - For maximum compatibility
2. **favicon-16x16.png** - Small size
3. **favicon-32x32.png** - Standard size
4. **apple-touch-icon.png** (180x180) - For iOS devices

### How to Convert Your SVG:

#### Option 1: Online Converter (Easiest)
1. Go to: https://realfavicongenerator.net/
2. Upload your `timbersouq.svg` file
3. Download the generated favicon package
4. Extract all files to `public/favicon/` folder

#### Option 2: Use GIMP (Free Software)
1. Open `timbersouq.svg` in GIMP
2. Export as PNG:
   - 16x16 → `favicon-16x16.png`
   - 32x32 → `favicon-32x32.png`
   - 180x180 → `apple-touch-icon.png`
3. Convert PNG to ICO using: https://convertio.co/png-ico/

#### Option 3: Use ImageMagick (Command Line)
```bash
# Install ImageMagick first
magick convert timbersouq.svg -resize 16x16 favicon-16x16.png
magick convert timbersouq.svg -resize 32x32 favicon-32x32.png
magick convert timbersouq.svg -resize 180x180 apple-touch-icon.png
magick convert favicon-32x32.png favicon.ico
```

### Final File Structure:
```
public/favicon/
├── timbersouq.svg           (Modern browsers)
├── favicon.ico              (IE, old browsers)
├── favicon-16x16.png        (Chrome, Firefox)
├── favicon-32x32.png        (Chrome, Firefox)
└── apple-touch-icon.png     (iOS devices)
```

After creating these files, I will update the code automatically.

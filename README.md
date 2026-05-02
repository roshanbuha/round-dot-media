# Round Dot Media

A modern, highly-animated, and visually striking portfolio website built for a visual storytelling and media agency. The website features ultra-premium "Noomo-style" scroll animations, cinematic blur fades, an immersive edge-to-edge full-width layout, and a custom interactive network background.

## 🚀 Tech Stack

- **React 19**
- **Vite**
- **Framer Motion** (`motion/react`) for butter-smooth scroll animations, deep cubic-bezier easings, preloader animations, and live counters.
- **Lenis** (`@studio-freight/lenis`) for highly performant, buttery-smooth scrolling physics across all devices.
- **Vanilla CSS** with a custom design system and CSS variables.

## 🌟 Key Features

- **Immersive Preloader:** A sleek, dark-themed intro screen with a branded glowing logo and an exponential live-counting progress bar that elegantly slides away to reveal the site.
- **Cinematic Animations:** Uses sophisticated `[0.16, 1, 0.3, 1]` cubic-bezier curves for premium ease-in/out effects.
- **Interactive Network Background:** A dynamic, particle-based background that connects "dots" (nodes) with lines that react to mouse movement and clicks, reinforcing the "Round Dot Media" branding.
- **Live Animated Stats:** The Hero section features a `requestAnimationFrame` driven counter that smoothly ticks up numerical statistics as soon as they scroll into view.
- **Slide-up Text Reveals:** Headline words slide up from behind invisible masks.
- **Blur Fades:** Elements elegantly blur into focus as you scroll down the page.
- **Edge-to-Edge Layout:** Expanded grid layouts that utilize a fluid `1440px` wide canvas for a bold, spacious visual flow.
- **Dark Mode Aesthetic:** Built with a sleek, dark UI featuring deep blacks and subtle purple gradients.

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/roshanbuha/round-dot-media.git
   cd round-dot-media
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🎨 Design System

The application uses a custom set of CSS variables defined in `index.css`:
- **Primary Purple:** `#7C3AED`
- **Light Purple:** `#B794FF`
- **Dark Backgrounds:** `#0A0A0A` and `#111111`
- **Typography:** `Space Grotesk` (Headings) and `Inter` (Body text)
- **Container Max-Width:** `1440px` for a balanced full-view aesthetic.

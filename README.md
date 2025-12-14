# 🚀 Syed Najaf Turab - Portfolio Website

A modern, high-performance portfolio website showcasing my work as a Software Engineer & Full-Stack Developer. Built with React, TypeScript, and TailwindCSS, featuring stunning 3D animations, glassmorphism effects, and a fully functional contact form.

## ✨ Features

### 🎨 Visual Design
- **3D Animations** - Card tilt effects, floating particles, and smooth transitions
- **Glassmorphism UI** - Modern glass-morphic design elements throughout
- **Interactive Background** - Mouse-tracked gradient orbs that follow cursor movement
- **Responsive Design** - Optimized for all devices (desktop, tablet, mobile)
- **Performance Optimized** - Reduced animations on mobile, debounced interactions

### 📧 Contact Form
- **No Backend Required** - Uses FormSubmit for direct email delivery
- **Real-time Validation** - Instant feedback on form errors
- **Success/Error Messages** - User-friendly feedback with auto-dismiss
- **Glassmorphism Design** - Beautiful, modern form styling

### 🔍 SEO & Accessibility
- **SEO Optimized** - Comprehensive meta tags for search engines
- **Social Media Ready** - Open Graph and Twitter Card metadata
- **Semantic HTML** - Proper heading structure and accessibility
- **Reduced Motion Support** - Respects user preferences

## 🛠️ Technologies

- **Frontend Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** TailwindCSS
- **Icons:** Lucide React
- **Email Service:** FormSubmit
- **Deployment Ready:** Optimized production builds

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📧 Contact Form Setup

### FormSubmit Configuration (Current - No signup required!)

The contact form uses **FormSubmit** which works immediately:

1. **First submission activation** (one-time only):
   - Submit a test form on your site
   - Check email: `syednajafturab@gmail.com`
   - Click "Activate Form" in the email from FormSubmit
   
2. **Done!** All future submissions will work instantly.

The form is configured in [`src/components/Contact.tsx`](src/components/Contact.tsx) (line 50-67).

### Alternative: EmailJS Setup (if you prefer)

If you want to switch to EmailJS:

1. See [`EMAILJS_SETUP.md`](EMAILJS_SETUP.md) for detailed instructions
2. Install EmailJS: `npm install @emailjs/browser`
3. Update the Contact component with your EmailJS credentials

## 🎨 Customization

### Update Personal Information

**Hero Section** - [`src/components/Hero.tsx`](src/components/Hero.tsx)
- Line 128-132: Your name and title
- Line 134-137: Your description/tagline

**About Section** - [`src/components/About.tsx`](src/components/About.tsx)
- Line 49: Your name/initials
- Line 53-73: Your bio and experience
- Line 79-95: Your stats (projects, semester, clients)

**Projects** - [`src/components/Projects.tsx`](src/components/Projects.tsx)
- Line 7-32: Add/edit your project details
- Add project images to `/public` folder

**Contact Info** - [`src/components/Contact.tsx`](src/components/Contact.tsx)
- Line 113-133: Email, phone, and location

### Update Resume/CV

Replace `public/CV.pdf` with your own resume file.

### Color Scheme

Edit [`src/index.css`](src/index.css) to customize colors:
- Glassmorphism classes: Lines 88-107
- Animation keyframes: Lines 128-317
- Scrollbar styling: Lines 462-480

## 📂 Project Structure

```
Portfolio/
├── public/
│   └── CV.pdf              # Your resume
├── src/
│   ├── components/
│   │   ├── About.tsx       # About section with animated stats
│   │   ├── Contact.tsx     # Contact form with FormSubmit
│   │   ├── FloatingElements.tsx
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Hero section with 3D effects
│   │   ├── Projects.tsx    # Projects showcase
│   │   └── Skills.tsx      # Skills section
│   ├── App.tsx             # Main app component
│   ├── index.css           # Global styles & animations
│   └── main.tsx            # Entry point
├── index.html              # HTML template with SEO meta tags
├── package.json
└── README.md
```

## 🚀 Build & Deployment

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Deploy

Deploy the `dist/` folder to any static hosting service:
- **Vercel** - `vercel --prod`
- **Netlify** - Drag & drop `dist/` folder
- **GitHub Pages** - Use GitHub Actions
- **Cloudflare Pages** - Connect GitHub repo

## 🎯 Performance Features

- **Lazy Loading** - Images load as needed
- **GPU Acceleration** - Smooth 60fps animations
- **Debounced Interactions** - Optimized mouse tracking (50ms)
- **Reduced Particles** - Minimal animated elements for speed
- **Mobile Optimization** - Heavy animations hidden on mobile
- **Code Splitting** - Vite automatic optimization

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Syed Najaf Turab (SNT)**
- Email: syednajafturab@gmail.com
- GitHub: [@SyedNajaf512](https://github.com/SyedNajaf512)
- Location: Faisalabad, Pakistan

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Images from [Pexels](https://pexels.com)
- Built with [React](https://react.dev/) & [Vite](https://vitejs.dev/)
- Styled with [TailwindCSS](https://tailwindcss.com/)

---

**Made with ❤️ by Syed Najaf Turab**

Need help? Check out:
- [`CONTACT_FORM_FIXED.md`](CONTACT_FORM_FIXED.md) - Contact form troubleshooting
- [`EMAILJS_SETUP.md`](EMAILJS_SETUP.md) - Alternative email setup guide

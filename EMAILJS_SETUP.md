# Portfolio Website - Setup Guide

## 📧 Email Contact Form Setup (EmailJS)

Your contact form is powered by **EmailJS**. Follow these steps to make it work:

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free tier)

### Step 2: Add Email Service
1. Navigate to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection instructions
5. Copy your **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

**Subject:**
```
New Portfolio Contact from {{from_name}}
```

**Body:**
```
You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Copy your **Template ID** (e.g., `template_xyz456`)

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `abcdefghijk123456`)

### Step 5: Update Contact Component
Open `src/components/Contact.tsx` and replace these values (around line 52-54):

```typescript
const serviceId = 'YOUR_SERVICE_ID';  // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';   // Replace with your Public Key
```

### Done! 🎉
Your contact form will now send emails to: **syednajafturab@gmail.com**

---

## 🚀 Running the Portfolio

### Development Server
```bash
npm run dev
```
Then open [http://localhost:5173](http://localhost:5173)

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## ✨ Features

- **3D Animations**: Card tilt effects, floating particles, and smooth transitions
- **Glassmorphism**: Modern glass-morphic UI elements
- **Interactive Background**: Mouse-tracked gradient orbs
- **Animated Stats**: Counter animations on scroll
- **Email Contact Form**: Functional EmailJS integration
- **Responsive Design**: Optimized for all devices
- **SEO Optimized**: Comprehensive meta tags

---

## 🎨 Technologies

- React + TypeScript
- Vite
- TailwindCSS
- EmailJS
- Lucide Icons

---

## 📝 Customization

### Update Personal Info
- Edit `src/components/Hero.tsx` for hero section content
- Edit `src/components/About.tsx` for about section
- Edit `src/components/Projects.tsx` to add/update projects
- Update `public/CV.pdf` with your resume

### Colors & Styling
- All custom styles are in `src/index.css`
- Glassmorphism utilities: `.glass`, `.glass-strong`, `.glass-glow`
- 3D animations: `.animate-card-tilt`, `.animate-glow-pulse`, etc.

---

## 🐛 Troubleshooting

**Contact form not working?**
- Make sure you've added your EmailJS credentials
- Check browser console for errors
- Verify EmailJS account is active

**Build errors?**
- Clear `node_modules` and reinstall: `npm install`
- Check Node.js version (v16+recommended)

---

Made with ❤️ by Syed Najaf Turab

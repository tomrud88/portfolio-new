# Portfolio - React & Tailwind CSS

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, working contact form with EmailJS, and showcases my development projects and skills.

![Portfolio Preview](public/portfolio-preview.png)

## 🚀 Live Demo

- **Live Site**: [Your Portfolio URL]
- **GitHub**: [https://github.com/tomrud88/portfolio](https://github.com/tomrud88/portfolio)

## ✨ Features

- **Modern Design**: Clean, professional UI with dark theme
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion powered transitions and scroll animations
- **Working Contact Form**: EmailJS integration for real email delivery
- **Project Showcase**: Interactive project cards with live demos and code links
- **Skills Section**: Categorized tech stack with animated skill cards
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Optimized**: Meta tags and semantic HTML structure

## 🛠️ Built With

### Frontend

- **React 19.1.1** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icons

### Tools & Deployment

- **EmailJS** - Contact form email delivery
- **ESLint** - Code linting and formatting
- **Vercel** - Deployment and hosting

## 🎨 Design Features

- **Color Scheme**:
  - Primary: `#3FA7D6` (Cyan Blue)
  - Background: `#15171E` (Dark Charcoal)
  - Text: `#F5F5F5` (Light Gray)
- **Typography**: Clean, modern font hierarchy
- **Components**: Modular, reusable React components
- **Animations**: Smooth scroll-triggered animations

## 📁 Project Structure

```
src/
├── components/
│   ├── Header/          # Navigation header
│   ├── Hero/            # Landing section
│   ├── About/           # About me section
│   ├── Projects/        # Project showcase
│   ├── Skills/          # Technical skills
│   ├── Contact/         # Contact form
│   └── Footer/          # Footer links
├── assets/              # Images and static files
├── App.jsx              # Main app component
└── main.jsx             # React entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/tomrud88/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up EmailJS (for contact form)**

   - Create account at [EmailJS](https://www.emailjs.com/)
   - Create email service and template
   - Copy your credentials to `.env.local`:

   ```bash
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5174
   ```

## 📧 EmailJS Setup

Detailed setup instructions are available in `EMAILJS_SETUP.md`. The contact form uses EmailJS to send emails directly to your inbox when visitors contact you.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Sections

### Hero Section

- Professional introduction
- Call-to-action buttons
- Smooth scroll navigation

### Projects

- Real Estate Platform (React, Node.js, MongoDB, Socket.io)
- Mommy Blog (Next.js, React, MongoDB, React Quill)
- Inter Milan Website (HTML, CSS, JavaScript)

### Skills

- **Frontend**: React, JavaScript, TypeScript, HTML/CSS, Tailwind CSS, Material UI, Bootstrap, Next.js
- **Backend**: Node.js, Express.js, MongoDB, JWT, Socket.io, RESTful APIs
- **Tools**: Git, Vercel, VS Code, npm/yarn, Vite, Prisma

### Contact

- Working contact form with EmailJS
- Direct email link
- Social media links

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms

The project works with any static hosting service:

- Netlify
- GitHub Pages
- Firebase Hosting

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

- **Email**: [rthomas8827@gmail.com](mailto:rthomas8827@gmail.com)
- **GitHub**: [https://github.com/tomrud88](https://github.com/tomrud88)
- **LinkedIn**: [https://linkedin.com/in/tomrud88](https://linkedin.com/in/tomrud88)

---

⭐ **If you like this project, please give it a star on GitHub!**

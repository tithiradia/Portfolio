# Professional Portfolio Website

A modern, responsive portfolio website built with React and Vite. Features a sleek dark theme, smooth animations, and professional layout to showcase your skills and projects.

## 🌟 Features

- **Modern Design**: Clean, professional dark theme with gradient accents
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Fast Performance**: Built with Vite for lightning-fast load times
- **SEO Friendly**: Optimized meta tags and semantic HTML
- **Accessible**: WCAG compliant with proper ARIA labels

## 📋 Sections

- **Hero**: Eye-catching introduction with social links and CTA buttons
- **About**: Personal information with highlights and statistics
- **Skills**: Technical skills organized by category with proficiency levels
- **Experience**: Professional timeline with detailed work history
- **Projects**: Filterable project showcase with live demos and source code links
- **Contact**: Interactive contact form with multiple ways to get in touch
- **Footer**: Quick links and social media connections

## 🛠️ Technologies Used

- **React 18**: Modern JavaScript library for building user interfaces
- **Vite**: Next-generation frontend tooling
- **Framer Motion**: Production-ready motion library for React
- **React Icons**: Popular icon library
- **CSS3**: Custom styling with CSS variables and animations
- **Google Fonts**: Inter and Poppins font families

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## 📝 Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** ([src/components/Hero/Hero.jsx](src/components/Hero/Hero.jsx)):
   - Replace "Your Name" with your actual name
   - Update the subtitle/role
   - Add your social media links
   - Add your profile photo

2. **About Section** ([src/components/About/About.jsx](src/components/About/About.jsx)):
   - Customize the about text
   - Update statistics (projects, experience, clients)
   - Modify highlights to match your strengths

3. **Skills Section** ([src/components/Skills/Skills.jsx](src/components/Skills/Skills.jsx)):
   - Add/remove skills based on your expertise
   - Adjust proficiency levels
   - Update tools and technologies

4. **Experience Section** ([src/components/Experience/Experience.jsx](src/components/Experience/Experience.jsx)):
   - Add your work experience
   - Include responsibilities and achievements
   - Update dates and company information

5. **Projects Section** ([src/components/Projects/Projects.jsx](src/components/Projects/Projects.jsx)):
   - Showcase your actual projects
   - Add project images (replace placeholders)
   - Include live demo and GitHub links
   - Update project descriptions and technologies

6. **Contact Section** ([src/components/Contact/Contact.jsx](src/components/Contact/Contact.jsx)):
   - Update email, phone, and location
   - Configure form submission (currently simulated)
   - Add your social media links

7. **Footer** ([src/components/Footer/Footer.jsx](src/components/Footer/Footer.jsx)):
   - Update copyright information
   - Add additional links if needed

### Colors and Theme

Customize the color scheme in [src/index.css](src/index.css):

```css
:root {
  --accent-primary: #3b82f6;    /* Primary accent color */
  --accent-secondary: #8b5cf6;   /* Secondary accent color */
  /* Modify other color variables as needed */
}
```

### Adding Images

1. Place your images in the `public` folder
2. Update image references in components
3. Replace placeholder images with your actual photos

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder ready for deployment.

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

## 🎨 Customization Tips

- **Animations**: Adjust animation durations and delays in component files
- **Spacing**: Modify padding and margins in CSS files
- **Typography**: Change font families in [index.html](index.html)
- **Responsive Breakpoints**: Adjust media queries in CSS files

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

⭐ If you found this helpful, please give it a star!

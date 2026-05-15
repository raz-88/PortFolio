# Rajnandan Yadav - Portfolio Website (React)

A modern, fully-responsive React portfolio website featuring a clean design with multiple page sections. Built with React, React Router, and Vite for optimal performance.

## 📁 Project Structure

```
portfolio-app/
├── src/
│   ├── components/
│   │   ├── Navigation/
│   │   │   ├── Navigation.jsx
│   │   │   └── Navigation.css
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.css
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── Skills/
│   │   │   ├── Skills.jsx
│   │   │   └── Skills.css
│   │   ├── Education/
│   │   │   ├── Education.jsx
│   │   │   └── Education.css
│   │   ├── Experience/
│   │   │   ├── Experience.jsx
│   │   │   └── Experience.css
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   └── Projects.css
│   │   ├── GitHub/
│   │   │   ├── GitHub.jsx
│   │   │   └── GitHub.css
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   └── Navigation/
│   │       ├── Navigation.jsx
│   │       └── Navigation.css
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Features

### Pages/Sections

1. **Home** - Welcome section with typewriter animation and hero photo
2. **About** - Personal information and objectives
3. **Skills** - Technical expertise with animated skill bars
4. **Education** - Academic journey with timeline
5. **Experience** - Professional experience and training
6. **Projects** - Showcase of featured projects
7. **GitHub** - GitHub profile stats and repositories
8. **Contact** - Contact form and contact information

### Technical Features

- ✨ **Custom Cursor Animation** - Interactive cursor with hover effects
- 📱 **Fully Responsive** - Works on all screen sizes
- 🎨 **Modern Design** - Clean and professional UI
- ⚡ **Fast Performance** - Built with Vite for optimal build times
- 🔄 **Client-Side Routing** - Smooth navigation with React Router
- 📊 **Animated Components** - Reveal animations and skill bar animations
- 🎯 **Form Validation** - Contact form with validation

## 📦 Installation

1. **Navigate to the project directory:**
   ```bash
   cd g:\Document\GITAM\Web App\Raj_Portfolio\portfolio-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Local: http://localhost:5173/
   - The app will auto-reload on file changes

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Dependencies

- **react**: UI library
- **react-router-dom**: Client-side routing
- **vite**: Build tool and dev server

## 🎨 Styling

The project uses:
- **Global CSS Variables** - Defined in `src/styles/global.css`
- **Component-Specific CSS** - Each component has its own CSS file
- **CSS Grid & Flexbox** - For responsive layouts
- **CSS Animations** - For interactive effects

### Color Scheme

- **Primary Accent**: #6c63ff (Purple)
- **Background**: #f8f9ff (Light Blue)
- **Text**: #1a1a2e (Dark)
- **Borders**: #e4e4f0 (Light Gray)

## 📝 Component Details

### Navigation
- Fixed header with sticky navigation
- Active page highlighting
- Resume download button
- Responsive menu

### Home
- Typewriter effect for role
- Animated photo with rotating border
- Stats section
- CTA buttons

### About
- Personal information cards
- Languages section
- Objective statement

### Skills
- Programming languages with progress bars
- Frontend technologies
- Backend technologies
- Database systems
- Tools & technologies

### Education
- Timeline layout
- Education history
- Relevant coursework

### Experience
- Professional timeline
- Training and volunteer work
- Technology tags

### Projects
- Featured projects
- Project descriptions
- Technologies used
- GitHub links

### GitHub
- Contribution statistics
- Contribution graph
- Repository showcase
- Learning areas

### Contact
- Contact information
- Contact form
- Form validation
- Success message

## 🎯 Customization

### Update Personal Information

1. **Home Page** - Edit `src/components/Home/Home.jsx`
2. **About Page** - Edit `src/components/About/About.jsx`
3. **Skills** - Edit `src/components/Skills/Skills.jsx`
4. **Projects** - Edit `src/components/Projects/Projects.jsx`
5. **Contact** - Edit `src/components/Contact/Contact.jsx`

### Update Colors

Edit `src/styles/global.css` to change the color scheme:

```css
:root {
  --accent: #6c63ff; /* Change this color */
  --bg: #f8f9ff;
  --text: #1a1a2e;
  /* ... other colors */
}
```

### Update Images

Replace the image URL in `src/components/Home/Home.jsx`:

```jsx
<img
  src="YOUR_IMAGE_URL"
  className="hero-photo"
  alt="Your Name"
/>
```

## 📱 Responsive Breakpoints

- Desktop: 1200px and above
- Tablet: 768px - 1199px
- Mobile: Below 768px

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized `dist` folder ready for deployment.

### Deploy Options

- **Vercel** - Recommended for React apps
- **Netlify** - Easy deployment with Git integration
- **GitHub Pages** - Free hosting
- **Any Static Host** - Just upload the `dist` folder

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

© 2025 Rajnandan Yadav. All Rights Reserved.

## 📧 Contact

- Email: rajnandan.ydv88@gmail.com
- GitHub: github.com/raz-88
- Phone: +91 9122879242

---

**Built with React & Vite** ⚡

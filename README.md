# ReactifyAI – AI Startup & Tech Innovation React Template

> A modern, clean, and performance-optimized React template designed for AI startups, technology businesses, and machine learning service providers.

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://reactify-ai.orvythemes.com)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

## Overview

ReactifyAI is built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS 4**, offering a highly modular component system, futuristic interface design, and lightning-fast performance. Whether you're launching an AI SaaS product, a tech service platform, or a data-driven business website, ReactifyAI provides everything you need to present your brand professionally.

[**View Live Demo →**](https://reactify-ai.orvythemes.com)

---

## Features

-   **Built with React 19, TypeScript, and Vite** - Latest technology stack
-   **Powered by Tailwind CSS 4.0** - Modern utility-first styling
-   **Modular Component Architecture** - Reusable and maintainable code
-   **Light/Dark Mode Supported** - Theme switching capability
-   **EmailJS Integration** - Working contact form out of the box
-   **Fully Responsive Design** - Optimized for all devices
-   **Clean Folder Structure** - Organized and easy to navigate
-   **Modern Animations** - Smooth effects using AOS
-   **Well-Commented Code** - Developer-friendly setup
-   **Code Protection** - JavaScript Obfuscator for production builds

---

## Folder Structure

```
reactifyai-template/
│
├── public/                          # Static assets
│   ├── images/
│   │   ├── favicon.png
│   │   ├── favicon.svg
│   │   ├── logo.svg
│   │   └── placeholder/
│   │       ├── blogs/
│   │       ├── others/
│   │       ├── projects/
│   │       └── teams/
│   ├── robots.txt
│   └── _redirects
│
├── src/                             # Main React source files
│   ├── components/                  # Reusable UI components
│   ├── pages/                       # All page components
│   ├── routes/                      # App routes configuration
│   ├── styles/                      # Global CSS and Tailwind theme
│   ├── utils/                       # Constants, types, helper functions
│   ├── App.tsx                      # Main app entry
│   └── vite-env.d.ts                # Environment types
│
├── eslint.config.js                 # ESLint configuration
├── package.json                     # Project dependencies
├── vite.config.ts                   # Vite configuration
├── tsconfig.json                    # TypeScript configuration
├── .env                             # Example placeholder environment variables
├── index.html                       # HTML entry point
└── README.md                        # This file
```

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

-   **Node.js** 18 or higher
-   **npm**, **yarn**, or **pnpm** package manager

### Installation

1. **Extract the template**

    ```bash
    unzip reactifyai-template.zip
    cd reactifyai-template
    ```

2. **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3. **Start development server**

    ```bash
    npm start
    ```

4. **Open your browser**
    ```
    http://localhost:3000
    ```

---

## Development Commands

| Command           | Description                                         |
| ----------------- | --------------------------------------------------- |
| `npm start`       | Run the project locally in development mode         |
| `npm run build`   | Create a production build (includes JS obfuscation) |
| `npm run preview` | Preview the production build locally                |
| `npm run lint`    | Run ESLint check                                    |
| `npm run pretty`  | Format code using Prettier                          |

---

## Build for Production

Create a production-ready build:

```bash
npm run build
```

-   Output will be in the `dist/` folder
-   JavaScript obfuscation runs automatically for code protection
-   Preview the build locally:

```bash
npm run preview
```

### Deployment Options

Deploy your production build to:

-   **Vercel** - Zero-config deployment
-   **Netlify** - Drag and drop or Git integration
-   **Firebase Hosting** - Google Cloud Platform
-   **GitHub Pages** - Free static hosting
-   **AWS S3** - Amazon Web Services

**Important:** Include a `_redirects` file for React Router (already included):

```
/*    /index.html   200
```

---

## Environment Variables

1. **Update values as needed**

    ```env
    # EmailJS Config
    VITE_EMAILJS_SERVICE_ID=YOUR_EMAILJS_SERVICE_ID
    VITE_EMAILJS_TEMPLATE_ID=YOUR_EMAILJS_TEMPLATE_ID
    VITE_EMAILJS_PUBLIC_KEY=YOUR_EMAILJS_PUBLIC_KEY
    VITE_FROM_NAME=YOUR_FROM_NAME

    # Team Images
    VITE_TEAM1_IMAGE=/images/placeholder/teams/team1.png
    VITE_TEAM2_IMAGE=/images/placeholder/teams/team2.png
    VITE_TEAM3_IMAGE=/images/placeholder/teams/team3.png
    VITE_TEAM4_IMAGE=/images/placeholder/teams/team4.png

    # Blog Images
    VITE_BLOG1_IMAGE=/images/placeholder/blogs/blog1.png
    VITE_BLOG2_IMAGE=/images/placeholder/blogs/blog2.png
    VITE_BLOG3_IMAGE=/images/placeholder/blogs/blog3.png
    VITE_BLOG4_IMAGE=/images/placeholder/blogs/blog4.png
    VITE_BLOG5_IMAGE=/images/placeholder/blogs/blog5.png
    VITE_BLOG6_IMAGE=/images/placeholder/blogs/blog6.png

    # Project Images
    VITE_PROJECT1_IMAGE=/images/placeholder/projects/project1.png
    VITE_PROJECT2_IMAGE=/images/placeholder/projects/project2.png
    VITE_PROJECT3_IMAGE=/images/placeholder/projects/project3.png
    VITE_PROJECT4_IMAGE=/images/placeholder/projects/project4.png
    VITE_PROJECT5_IMAGE=/images/placeholder/projects/project5.png
    VITE_PROJECT6_IMAGE=/images/placeholder/projects/project6.png

    # Other Images
    VITE_HERO_IMAGE=/images/placeholder/others/hero.png
    VITE_ABOUT_IMAGE=/images/placeholder/others/aboutimage.png
    ```

2. **Setup EmailJS** (for contact form):
    - Create an account at [EmailJS](https://www.emailjs.com/)
    - Create a service and template
    - Copy your Service ID, Template ID, and Public Key
    - Update the `.env` file with your credentials

---

## Customization

### Colors & Theme

All colors and gradients are defined in `src/styles/index.css`:

```css
:root {
	--color-primary: #8d3bd4;
	--color-accent: #ec4899;
	--color-background: #faf4ff;
	--color-text: #000000;
}
```

For dark mode, modify values inside the `.dark` class section.

### Fonts & Typography

Font configuration is in `index.css`. You can replace with Google Fonts or local fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
```

### Quick Customization Guide

| What to Change            | Where to Find                          |
| ------------------------- | -------------------------------------- |
| **Logo**                  | `images/logo.svg`                      |
| **Navigation Menu**       | `src/utils/const.ts`                   |
| **Footer**                | `src/components/layout/Footer.tsx`     |
| **Background Animations** | `src/components/background_animation/` |
| **Routes**                | `src/route/index.tsx`                  |

### Adding New Pages

1. Create file in `/src/pages/`:

    ```tsx
    // /src/pages/NewPage.tsx
    export const NewPage = () => {
    	return (
    		<div>
    			<h1>New Page Content</h1>
    		</div>
    	);
    };
    ```

2. Add route in `/src/route/index.tsx`:

    ```tsx
    import { NewPage } from '../pages/NewPage';

    <Route path="/new-page" element={<NewPage />} />;
    ```

### File Naming Conventions

-   **Components**: PascalCase (`ButtonComponent.tsx`)
-   **Hooks/Utils**: camelCase (`useCustomHook.ts`)
-   **Pages**: PascalCase with Page suffix (`HomePage.tsx`)
-   **Styles**: kebab-case (`component-name.css`)

---

## Included Pages

| Page               | File                    | Description                      |
| ------------------ | ----------------------- | -------------------------------- |
| **Home**           | `HomePage.tsx`          | Main landing page                |
| **Tokenomics**     | `TokenomicsPage.tsx`    | Token distribution and economics |
| **Services**       | `ServicesPage.tsx`      | Service listings                 |
| **Service Detail** | `ServiceDetailPage.tsx` | Individual service information   |
| **Projects**       | `ProjectsPage.tsx`      | Project portfolio showcase       |
| **Project Detail** | `ProjectDetailPage.tsx` | Individual project case study    |
| **FAQ**            | `FAQPage.tsx`           | Frequently asked questions       |
| **Team**           | `TeamPage.tsx`          | Team members showcase            |
| **Blogs**          | `BlogsPage.tsx`         | Blog listing page                |
| **Blog Details**   | `BlogDetailPage.tsx`    | Single blog post view            |

---

## Main Dependencies

| Library                   | Version | Description                  |
| ------------------------- | ------- | ---------------------------- |
| **React**                 | 19      | Latest UI Framework          |
| **TypeScript**            | 5.8     | Type-safe JavaScript         |
| **Vite**                  | Latest  | Fast build tool & dev server |
| **Tailwind CSS**          | 4.1     | Utility-first CSS framework  |
| **React Router DOM**      | 7.7     | Client-side routing          |
| **EmailJS Browser SDK**   | Latest  | Contact form integration     |
| **AOS Animation Library** | Latest  | Scroll animations            |
| **React Hook Form**       | Latest  | Form handling                |
| **Yup**                   | Latest  | Form validation              |
| **Lucide React**          | Latest  | Beautiful icon library       |
| **React Toastify**        | Latest  | Toast notifications          |

For complete dependency list, refer to `package.json`.

---

## Credits & Sources

| Resource                                                 | Description       | License             |
| -------------------------------------------------------- | ----------------- | ------------------- |
| [Vite](https://vitejs.dev/)                              | Build Tool        | MIT                 |
| [Tailwind CSS](https://tailwindcss.com/)                 | CSS Framework     | MIT                 |
| [AOS Animation](https://michalsnik.github.io/aos/)       | Animation Library | MIT                 |
| [Lucide Icons](https://lucide.dev/)                      | Icon Library      | ISC                 |
| [EmailJS](https://www.emailjs.com/)                      | Email Service     | Free Tier Available |
| [Google Fonts](https://fonts.google.com/specimen/Geist/) | Geist             | Open Font License   |
| [Unsplash](https://unsplash.com/)                        | Demo Images       | Free License        |

---

## Image & Font Policy

### Preview Usage

-   All images used in the preview are from **free stock sources**
-   Used for **demo purposes only**
-   Replace with your own licensed or copyright-free images before production

### Image Sources

-   **Unsplash** - High-quality free images

### Fonts Used

-   **Geist** (Google Fonts)

### Important Notice

⚠️ All demo images are placeholders and should be replaced with properly licensed images before deploying your production website.

---

## Support

Limited support is provided for this template through the official email contact form.

### Response Time

Within **24-48 hours** (business days)

### Support Includes

-   ✓ Availability of the author to answer questions
-   ✓ Answering technical questions about item's features
-   ✓ Assistance with reported bugs and issues
-   ✓ Help with included 3rd party assets

### Support Does NOT Include

-   ✗ Customization services or new feature requests
-   ✗ Installation services
-   ✗ Third-party plugin or API integration

### How to Get Support

1. Review this documentation for setup and configuration steps
2. If the issue persists, contact us via the support tab
3. Provide screenshots, browser info, or console logs to help resolve issues faster

---

## Change Log

### v1.0.0 – Initial Release

-   First release with 10+ pages
-   Added light/dark theme support
-   Integrated EmailJS for contact forms
-   Included modern animation components with AOS
-   Built with React 19, TypeScript, and Tailwind CSS 4

---

## Quick Tips

1. **Keep dependencies updated** for security patches and new features
2. **Use environment variables** for sensitive data (API keys, credentials)
3. **Follow naming conventions** for code consistency
4. **Test on multiple devices** and browsers before deployment
5. **Optimize images** for better performance (use WebP format when possible)
6. **Review SEO settings** in each page component before going live
7. **Enable HTTPS** when deploying to production
8. **Monitor performance** using Lighthouse or similar tools

---

## Browser Support

-   Chrome (latest)
-   Firefox (latest)
-   Safari (latest)
-   Edge (latest)
-   Opera (latest)

---

## Performance Optimization

-   **Code Splitting**: Automatic with Vite
-   **Lazy Loading**: Implement for images and routes
-   **Tree Shaking**: Removes unused code
-   **Minification**: JavaScript and CSS in production
-   **Compression**: Enable Gzip/Brotli on server

---

## Security Best Practices

-   Never commit `.env` file to version control
-   Keep dependencies updated
-   Validate all user inputs
-   Use HTTPS in production
-   Implement Content Security Policy (CSP)
-   Sanitize data before rendering

---

## Contact & Links

-   **Live Demo**: [https://reactify-ai.orvythemes.com](https://reactify-ai.orvythemes.com)
-   **Documentation**: Included in download (`reactifyai-documentation/index.html`)
-   **Support**: Support Tab

---

<div align="center">

[View Demo](https://reactify-ai.orvythemes.com) • [Documentation](https://reactifyai-documentation.orvythemes.com)

**Thank you for choosing ReactifyAI! 🚀**

**Don't forget to rate this template if you found it helpful!**

</div>

---

**Last Updated**: January 2025

**Version**: 1.0.0

**Status**: Production Ready

# Profit Optic - Dynamic Pricing Solution

A modern React application for Profit Optic, an ML-driven dynamic pricing tool that leverages Bayesian Optimization to help businesses optimize pricing strategies and boost revenue.

![Profit Optic Screenshot](https://via.placeholder.com/800x400?text=Profit+Optic+Screenshot)

## Features

- **Modern React Implementation**: Built with React and Tailwind CSS for a responsive, elegant UI
- **Smooth Scrolling Navigation**: Enhanced user experience with smooth transitions between sections
- **Fully Responsive Design**: Optimized layout for all device sizes
- **Component-Based Architecture**: Modular code organization for easy maintenance
- **Interactive Elements**: Hover effects, transitions, and interactive components
- **Form Integration**: Working contact form with state management

## Tech Stack

- **React**: Frontend library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript (ES6+)**: Modern JavaScript features
- **CSS3**: Custom styling beyond Tailwind utilities

## Project Structure

```
profit-optic/
│
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── About.jsx
│   │   ├── Testimonial.jsx
│   │   ├── Pricing.jsx
│   │   └── Contact.jsx
│   │
│   ├── App.jsx
│   ├── index.js
│   └── index.css
│
├── tailwind.config.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/profit-optic.git
   cd profit-optic
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Key Sections

1. **Hero**: Eye-catching introduction with a clear value proposition
2. **Features**: Key capabilities of the Profit Optic solution
3. **How It Works**: Step-by-step process visualization
4. **About**: Detailed information about the methodology and approach
5. **Testimonial**: Client success stories and results
6. **Pricing**: Transparent pricing plans for different business needs
7. **Contact**: Contact form and company information

## Customization

### Colors

The main color palette can be adjusted in the `tailwind.config.js` file:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#00487c',
        light: '#0272b6',
        dark: '#003b65',
      },
      accent: {
        DEFAULT: '#10b0e7',
        hover: '#0d9ad0',
      },
    },
  },
},
```

### Content

Content for each section can be modified directly in the corresponding component files.

## Deployment

This application can be deployed to any static hosting service like Netlify, Vercel, GitHub Pages, or AWS Amplify.

Example deployment with Netlify:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy using Netlify CLI:
   ```bash
   netlify deploy --prod
   ```

## Future Enhancements

- Integration with backend API for form submissions
- Authentication for user accounts
- Interactive pricing calculator
- Dynamic dashboard demo
- Additional case studies and testimonials

## License

[MIT](LICENSE)

## Credits

- UI Design inspired by modern SaaS landing pages
- Icons from [Heroicons](https://heroicons.com/)
- Placeholder images courtesy of Placeholder.com

---

Developed for someone's minor project 

# 💅 Treasure Coast Nail Salon Website

A beautiful, modern website for a nail salon built with HTML, CSS, and JavaScript. This project is designed as a learning resource to teach web development fundamentals.

## 🎯 What You'll Learn

This project demonstrates:

- **HTML Structure**: Semantic HTML5 elements, forms, navigation
- **CSS Styling**: Modern CSS with Flexbox, Grid, animations, and responsive design
- **JavaScript**: DOM manipulation, event handling, form validation
- **Responsive Design**: Mobile-first approach that works on all devices
- **Best Practices**: Clean code, comments, and organized file structure

## 📁 Project Structure

```
TreasureCoastNailWebsite/
│
├── index.html      # Main HTML structure
├── styles.css      # All styling and layout
├── script.js       # Interactive functionality
└── README.md       # This file
```

## 🚀 Getting Started

### Option 1: Open Directly in Browser

1. Simply double-click `index.html`
2. Your default browser will open the website

### Option 2: Use a Local Server (Recommended)

For better development experience:

**Using Python:**
```bash
# Python 3
python3 -m http.server 8000

# Then open http://localhost:8000 in your browser
```

**Using Node.js (with npx):**
```bash
npx http-server
```

## 📚 Learning Guide

### 1. HTML Basics (`index.html`)

**Key Concepts:**

- **DOCTYPE Declaration**: `<!DOCTYPE html>` tells browsers this is HTML5
- **Semantic Elements**: Using `<header>`, `<nav>`, `<section>`, `<footer>` for better structure
- **Meta Tags**: Viewport meta tag makes the site mobile-responsive
- **Links & Resources**: Connecting CSS and JavaScript files
- **Forms**: Input types, labels, and form validation attributes

**Try This:**
- Change the salon name in the logo
- Add a new service card in the services section
- Modify the contact form fields

### 2. CSS Styling (`styles.css`)

**Key Concepts:**

- **CSS Variables**: Reusable values defined with `:root`
- **Flexbox**: `display: flex` for one-dimensional layouts
- **CSS Grid**: `display: grid` for two-dimensional layouts
- **Responsive Design**: Media queries (`@media`) for different screen sizes
- **Pseudo-classes**: `:hover`, `:focus` for interactive states
- **Animations**: `@keyframes` and `transition` for smooth effects

**Try This:**
- Change the color scheme by modifying CSS variables
- Adjust the grid layout for different numbers of columns
- Add a new hover effect to service cards

### 3. JavaScript Interactivity (`script.js`)

**Key Concepts:**

- **DOM Manipulation**: Selecting elements with `getElementById()`, `querySelector()`
- **Event Listeners**: Responding to user actions (clicks, scrolls, form submissions)
- **Functions**: Reusable blocks of code
- **Event Handling**: Preventing default behaviors, handling form submissions
- **Classes**: Adding/removing CSS classes dynamically

**Try This:**
- Add a new button that changes the page background color
- Create an alert when clicking a service card
- Add form validation (e.g., check email format)

## 🎨 Features

### Navigation
- Fixed navbar that stays at top while scrolling
- Smooth scroll to sections when clicking nav links
- Mobile hamburger menu
- Active section highlighting

### Sections

1. **Hero Section**: Eye-catching banner with call-to-action
2. **Services**: Grid of service cards with hover effects
3. **Gallery**: Image gallery with overlay effects
4. **About**: Two-column layout with salon information
5. **Contact**: Contact form and business information

### Interactive Elements

- Hover effects on cards and buttons
- Smooth scrolling navigation
- Form submission handling
- Mobile-responsive menu toggle
- Scroll animations

## 🛠️ Customization Guide

### Changing Colors

Edit the CSS variables at the top of `styles.css`:

```css
:root {
    --primary-color: #d4af37;    /* Change this for main accent */
    --secondary-color: #8b4a8b;  /* Change this for secondary accent */
    /* ... */
}
```

### Adding Real Images

Replace the gradient placeholders in the gallery:

1. Add images to an `images/` folder
2. Replace the `<div class="gallery-image">` with:
   ```html
   <img src="images/your-image.jpg" alt="Nail art description">
   ```

### Modifying Content

- **Services**: Edit the service cards in the HTML
- **Business Info**: Update contact section with real information
- **About Text**: Change the about section content

## 📱 Responsive Breakpoints

The website adapts at these screen sizes:

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🌐 Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🔄 Next Steps - Enhancements You Can Try

### Beginner
- [ ] Add more service cards
- [ ] Change color scheme to match your brand
- [ ] Add real photos
- [ ] Update contact information

### Intermediate
- [ ] Add a photo gallery lightbox (opens images in modal)
- [ ] Implement actual form submission (using a service like Formspree)
- [ ] Add a testimonials section
- [ ] Create a booking calendar widget

### Advanced
- [ ] Connect to a backend API
- [ ] Add user authentication
- [ ] Implement a booking system
- [ ] Add payment integration
- [ ] Build an admin panel

## 📖 Resources for Learning

### HTML & CSS
- [MDN Web Docs](https://developer.mozilla.org/) - Comprehensive documentation
- [CSS-Tricks](https://css-tricks.com/) - CSS tutorials and guides
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

### JavaScript
- [JavaScript.info](https://javascript.info/) - Modern JavaScript tutorial
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

### Design
- [Google Fonts](https://fonts.google.com/) - Free fonts
- [Coolors](https://coolors.co/) - Color palette generator
- [Unsplash](https://unsplash.com/) - Free stock photos

## 💡 Tips for Learning

1. **Read the Comments**: Every file has detailed comments explaining what each part does
2. **Experiment**: Don't be afraid to change things and see what happens!
3. **Use Developer Tools**: Right-click → Inspect to see how elements are styled
4. **Start Small**: Modify one thing at a time to understand cause and effect
5. **Break Things**: Try deleting code to see what breaks (then put it back!)

## 📝 Code Quality Notes

- **Semantic HTML**: Using proper HTML5 elements for better SEO and accessibility
- **Responsive Design**: Mobile-first approach ensures it works everywhere
- **Clean Code**: Well-organized, commented code that's easy to read
- **Performance**: Efficient CSS and JavaScript

## 🤝 Contributing

This is a learning project! Feel free to:
- Fork it and make your own version
- Experiment and customize it
- Use it as a starting point for your own projects

## 📄 License

This project is open source and available for educational purposes.

---

**Happy Learning! 🎓**

Remember: The best way to learn web development is by building things. Start small, experiment, and don't be afraid to make mistakes!



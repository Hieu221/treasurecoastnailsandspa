/* 
  JAVASCRIPT FILE
  This adds interactivity to the website - things that respond to user actions
  
  JavaScript makes websites dynamic and interactive!
*/

// 
// ========================================
// MOBILE MENU TOGGLE
// ========================================
// 

// Get references to DOM elements
// DOM = Document Object Model (the HTML structure JavaScript can access)
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

// 
// EVENT LISTENER for the hamburger menu button
// When user clicks the menu button, toggle the 'active' class
// 
menuToggle.addEventListener('click', () => {
    // toggle() adds the class if it's not there, removes it if it is
    navMenu.classList.toggle('active');
    
    // Optional: Animate the hamburger icon (make it an X when open)
    menuToggle.classList.toggle('active');
});

// 
// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
// 
// Change navbar appearance when user scrolls down

const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow effect when scrolled down
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// 
// ========================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ========================================
// 
// When user clicks a nav link, smoothly scroll to that section

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default jump behavior
        
        const targetId = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (targetId === '#') return;
        
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Calculate offset to account for fixed navbar
            const navHeight = navbar.offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight;
            
            // Smooth scroll to target
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});

// 
// ========================================
// FORM HANDLING
// ========================================
// 
// Note: Form removed - appointments are now phone-only
// Contact section displays call-to-action button instead

// 
// ========================================
// ACTIVE NAVIGATION LINK HIGHLIGHTING
// ========================================
// 
// Highlight the current section in navigation as user scrolls

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightActiveSection() {
    const scrollY = window.pageYOffset;
    const navHeight = navbar.offsetHeight;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionId = section.getAttribute('id');
        
        // Check if we're in this section
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // Remove active class from all links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to corresponding nav link
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

// Run on scroll
window.addEventListener('scroll', highlightActiveSection);

// 
// ========================================
// GALLERY IMAGE LAZY LOADING (Optional Enhancement)
// ========================================
// 
// This would load images only when they come into view
// Improves page load speed
// 
// For real images, you'd use:
// const galleryImages = document.querySelectorAll('.gallery-image img');
// 
// if ('IntersectionObserver' in window) {
//     const imageObserver = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const img = entry.target;
//                 img.src = img.dataset.src; // Load actual image
//                 img.classList.remove('lazy');
//                 imageObserver.unobserve(img);
//             }
//         });
//     });
//     
//     galleryImages.forEach(img => imageObserver.observe(img));
// }

// 
// ========================================
// ANIMATION ON SCROLL (Optional Enhancement)
// ========================================
// 
// Animate elements when they come into view

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and gallery items
document.querySelectorAll('.service-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// 
// ========================================
// SEAGULL RANDOM FLYING ANIMATION WITH LOTTIE
// ========================================
// 

let lottieAnimations = [];

function initializeSeagulls() {
    const seagulls = [
        document.getElementById('seagull1'),
        document.getElementById('seagull2')
    ];
    
    seagulls.forEach((seagull, index) => {
        if (!seagull) return;
        
        // Clear any existing Lottie animation
        seagull.innerHTML = '';
        
        // Create container for Lottie animation
        const lottieContainer = document.createElement('div');
        lottieContainer.className = 'lottie-container';
        seagull.appendChild(lottieContainer);
        
        // Initialize Lottie animation
        const animation = lottie.loadAnimation({
            container: lottieContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'image/bird.json' // Path to your bird.json file
        });
        
        // Default: flip all birds to face forward (bird.json might be facing backwards)
        // This will be adjusted based on direction in randomizeSeagullPosition
        
        // Store animation reference
        lottieAnimations.push(animation);
        
        // Set initial random position
        randomizeSeagullPosition(seagull, index);
    });
}

function randomizeSeagullPosition(seagull, index) {
    // Position birds in top 1/3 (around 25-35%) and bottom 1/3 (around 65-75%)
    let targetTop;
    if (index === 0) {
        // First bird: top 1/3 of purple frame
        targetTop = 25 + Math.random() * 10; // 25% to 35%
    } else {
        // Second bird: bottom 1/3 of purple frame
        targetTop = 65 + Math.random() * 10; // 65% to 75%
    }
    seagull.style.top = targetTop + '%';
    
    // Random animation duration (12s to 25s)
    const randomDuration = 12 + Math.random() * 13;
    
    // Random delay (0s to 8s)
    const randomDelay = Math.random() * 8;
    
    // Create wavy/curved path with multiple wave points for non-straight flight
    // Each wave point creates a different vertical offset at different stages
    const wave1 = (Math.random() - 0.5) * 60;  // Wave point at 25% (reduced range)
    const wave2 = (Math.random() - 0.5) * 80;  // Wave point at 50% (reduced range)
    const wave3 = (Math.random() - 0.5) * 60;  // Wave point at 75% (reduced range)
    
    // Set CSS variables with 'px' unit for the wave offsets
    seagull.style.setProperty('--seagull-wave-1', wave1 + 'px');
    seagull.style.setProperty('--seagull-wave-2', wave2 + 'px');
    seagull.style.setProperty('--seagull-wave-3', wave3 + 'px');
    
    // Alternate direction: first bird left to right, second bird right to left
    const direction = index === 0 ? 'LeftToRight' : 'RightToLeft';
    
    // Flip bird horizontally based on direction
    const lottieContainer = seagull.querySelector('.lottie-container');
    if (lottieContainer) {
        if (direction === 'LeftToRight') {
            // Flying left to right - flip to face right
            lottieContainer.style.transform = 'scaleX(-1)';
        } else {
            // Flying right to left - don't flip (faces left naturally)
            lottieContainer.style.transform = 'scaleX(1)';
        }
    }
    
    // Use ease-in-out for smoother curved motion instead of linear
    seagull.style.animation = `fly${direction} ${randomDuration}s ease-in-out infinite`;
    seagull.style.animationDelay = randomDelay + 's';
}

function randomizeSeagulls() {
    const seagulls = [
        document.getElementById('seagull1'),
        document.getElementById('seagull2')
    ];
    
    seagulls.forEach((seagull, index) => {
        if (!seagull) return;
        randomizeSeagullPosition(seagull, index);
    });
}

// Initialize seagulls when Lottie library is loaded
if (typeof lottie !== 'undefined') {
    window.addEventListener('load', initializeSeagulls);
} else {
    // Wait for Lottie library to load
    window.addEventListener('load', () => {
        setTimeout(initializeSeagulls, 100);
    });
}

// Re-randomize positions every 30 seconds for variety
setInterval(randomizeSeagulls, 30000);

// 
// ========================================
// GLOWING STARS ANIMATION
// ========================================
// 

function createGlowingStars() {
    const starsContainer = document.getElementById('starsContainer');
    if (!starsContainer) {
        console.error('ERROR: Stars container not found!');
        return;
    }
    
    console.log('Creating stars... Container found:', starsContainer);
    
    // Number of stars (10-15 stars)
    const numberOfStars = 12;
    
    // Clear any existing stars
    starsContainer.innerHTML = '';
    
    for (let i = 0; i < numberOfStars; i++) {
        // Create star element
        const star = document.createElement('div');
        star.className = 'glowing-star';
        
        // Create img element for the star
        const starImg = document.createElement('img');
        starImg.src = 'image/GlowingStar.gif';
        starImg.alt = 'Glowing star';
        
        // Handle image load
        starImg.onload = function() {
            console.log(`Star ${i} loaded successfully`);
        };
        
        starImg.onerror = function() {
            console.error(`Star ${i} image failed to load:`, starImg.src);
            // Add a fallback colored div if image fails
            star.style.backgroundColor = 'white';
            star.style.borderRadius = '50%';
        };
        
        star.appendChild(starImg);
        
        // Random position (avoid edges)
        const randomLeft = 5 + Math.random() * 90; // 5% to 95%
        const randomTop = 5 + Math.random() * 90;  // 5% to 95%
        
        star.style.left = randomLeft + '%';
        star.style.top = randomTop + '%';
        
        // Random size (40px to 70px, bigger to ensure visibility)
        const randomSize = 40 + Math.random() * 30; // 40px to 70px
        star.style.width = randomSize + 'px';
        star.style.height = randomSize + 'px';
        
        // Random animation duration (3s to 6s for slower, more visible animation)
        const randomDuration = 3 + Math.random() * 3;
        
        // Random delay (0s to 3s - shorter delay so stars appear faster)
        const randomDelay = Math.random() * 3;
        
        // Apply animation
        star.style.animation = `starTwinkle ${randomDuration}s ease-in-out infinite`;
        star.style.animationDelay = randomDelay + 's';
        
        // Add to container
        starsContainer.appendChild(star);
        console.log(`Star ${i} added at position: ${randomLeft}%, ${randomTop}%`);
    }
    
    console.log(`✅ Created ${numberOfStars} stars in container`);
}

// Initialize stars on page load
function initStars() {
    console.log('initStars called');
    // Try immediately
    createGlowingStars();
    
    // Also try after a short delay as backup
    setTimeout(() => {
        console.log('Creating stars after delay...');
        createGlowingStars();
    }, 1000);
}

// Try multiple ways to ensure it runs
window.addEventListener('load', () => {
    console.log('Window loaded, initializing stars');
    initStars();
});

// Also try on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded, initializing stars');
    initStars();
});

// If already loaded, run immediately
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    console.log('Document already ready, initializing stars immediately');
    setTimeout(initStars, 100);
}

// Re-create stars with new positions every 20 seconds
setInterval(() => {
    console.log('Recreating stars...');
    createGlowingStars();
}, 20000);

// 
// ========================================
// CONSOLE MESSAGE FOR DEVELOPERS
// ========================================
// 
console.log('%c💅 Welcome to Treasure Coast Nails!', 
    'color: #d4af37; font-size: 20px; font-weight: bold;');
console.log('%cThis website was built to teach web development.', 
    'color: #666; font-size: 14px;');
console.log('%cOpen the source code to learn HTML, CSS, and JavaScript!', 
    'color: #8b4a8b; font-size: 14px;');

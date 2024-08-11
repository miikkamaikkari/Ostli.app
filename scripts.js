### **JavaScript for Smooth Animations:**

The JavaScript remains the same, as it already includes smooth scrolling and dynamic header effects. We can simply enhance the interactivity by ensuring that the elements fade in as users scroll down.

```javascript
// scripts.js

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic header shrinking on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 40px';
    } else {
        header.style.padding = '20px 40px';
    }
});

// Trigger fade-in animation on scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const splineViewer = document.querySelector('spline-viewer');

        if (splineViewer) {
            splineViewer.addEventListener('mouseenter', function() {
                document.body.style.cursor = 'auto';
            });

            splineViewer.addEventListener('mouseleave', function() {
                document.body.style.cursor = 'default';
            });
        }
    });
</script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const elements = document.querySelectorAll('.fade-in-section');
        
        function checkVisibility() {
            const triggerBottom = window.innerHeight * 0.9;

            elements.forEach(element => {
                const boxTop = element.getBoundingClientRect().top;

                if (boxTop < triggerBottom) {
                    element.classList.add('fade-in');
                    element.classList.remove('fade-out');
                } else {
                    element.classList.add('fade-out');
                    element.classList.remove('fade-in');
                }
            });
        }

        window.addEventListener('scroll', checkVisibility);
        checkVisibility(); // Initial check on page load
    });
</script>

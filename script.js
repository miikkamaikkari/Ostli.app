// Get the navbar links and the sections
const links = document.querySelectorAll(".navbar li");
const sections = document.querySelectorAll(".section");

// Add a click event listener to each link
links.forEach(link => {
    link.addEventListener("click", () => {
        // Get the section id from the data attribute of the link
        const sectionId = link.dataset.section;
        // Get the section element by id
        const section = document.getElementById("section" + sectionId);
        // Scroll to the section smoothly
        section.scrollIntoView({behavior: "smooth"});
        // Remove the active class from all links
        links.forEach(link => link.classList.remove("active"));
        // Add the active class to the clicked link
        link.classList.add("active");
    });
});

// Add a scroll event listener to the window
window.addEventListener("scroll", () => {
    // Get the current scroll position
    const scrollPosition = window.scrollY;
    // Loop through the sections
    sections.forEach(section => {
        // Get the section id
        const sectionId = section.id.slice(-1);
        // Get the link element by id
        const link = document.querySelector(`[data-section="${sectionId}"]`);
        // Get the section offset and height
        const sectionOffset = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        // Check if the scroll position is within the section bounds
        if (scrollPosition >= sectionOffset - sectionHeight / 2 && scrollPosition < sectionOffset + sectionHeight / 2) {
            // Remove the active class from all links
            links.forEach(link => link.classList.remove("active"));
            // Add the active class to the link
            link.classList.add("active");
            // Make the section visible
            section.style.opacity = 1;
        } else {
            // Make the section invisible
            section.style.opacity = 0;
        }
    });
});

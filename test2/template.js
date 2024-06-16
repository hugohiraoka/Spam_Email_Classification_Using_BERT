

function openNav() {
    document.getElementById("mySidenav").style.width = "400px";
}

function closeNav() {
    document.getElementById("mySidenav").style.transition = "width 0s"; // Remove transition
    document.getElementById("mySidenav").style.width = "0";
}

// JavaScript to handle the scroll to top functionality
document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.getElementById('scrollToTop');

    // Function to check if the arrow should be displayed
    function checkScroll() {
        if (document.documentElement.scrollHeight > window.innerHeight) {
            scrollToTopBtn.style.display = (window.scrollY > 100) ? 'block' : 'none';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }

    // Scroll event to check the scroll position
    window.addEventListener('scroll', checkScroll);

    // Initial check on page load
    checkScroll();

    // Click event to scroll to top
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

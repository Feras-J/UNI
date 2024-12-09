// Redirect to the Framer website
window.location.href = "https://uniapp.framer.website/";

// Function to hide the Framer badge
function hideFramerBadge() {
    const observer = new MutationObserver(() => {
        const framerBadge = document.querySelector('.__framer-badge');
        if (framerBadge) {
            framerBadge.style.display = 'none'; // Set display to none
            observer.disconnect(); // Stop observing once the badge is hidden
        }
    });

    // Observe the body for changes to ensure the badge is targeted
    observer.observe(document.body, { childList: true, subtree: true });
}

// Run the function after the redirect
window.onload = hideFramerBadge;

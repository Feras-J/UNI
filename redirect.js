// Redirect to the Framer website
window.location.href = "https://uniapp.framer.website/";

// Function to remove the specific element
function removeSpecificElement() {
    const observer = new MutationObserver(() => {
        const targetElement = document.querySelector('body > div:nth-child(2) > div');
        if (targetElement) {
            targetElement.remove(); // Remove the element
            observer.disconnect(); // Stop observing after the element is removed
        }
    });

    // Observe the body for changes
    observer.observe(document.body, { childList: true, subtree: true });
}

// Ensure the DOM is fully loaded before running the function
document.addEventListener('DOMContentLoaded', () => {
    removeSpecificElement();
});

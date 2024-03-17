// ==UserScript==
// @name         Shorts No More!
// @match        https://www.youtube.com/*
// @grant        none
// @author       João Cirilo
// @match        http://*.youtube.com/*
// @match        https://*.youtube.com/*
// ==/UserScript==

// Function to delete HTML content
function deleteElementContent() {
    const elementToDelete = document.querySelectorAll('.ytd-rich-section-renderer.style-scope:nth-child(3)');
    if (elementToDelete) {
        elementToDelete.innerHTML = ''; // This line empties the inner HTML of the selected element
    }
}

// Mutation observer to wait for the element to appear
const observer = new MutationObserver((mutationsList, observer) => {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            deleteElementContent();
            observer.disconnect(); // Disconnect the observer once the element is found and processed
            break;
        }
    }
});

window.onload = () => {
    observer.observe(document.body, { childList: true, subtree: true });
};

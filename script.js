console.log("Portfolio loaded successfully!");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed. Setting up Intersection Observer...");

  // Select all elements with the fade-up class
  const fadeUpElements = document.querySelectorAll(".fade-up");

  // Set up the Intersection Observer
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(`Element is in view:`, entry.target); // Debug log
          entry.target.classList.add("visible"); // Add the visible class
          observer.unobserve(entry.target); // Stop observing the element
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of the element is visible
  );

  // Observe each fade-up element
  fadeUpElements.forEach((el) => observer.observe(el));
});

function goToExperiencePage() {
  window.location.href = "experience.html";
}

function showPopup(event) {
  event.preventDefault();  // Prevent form submission so that popup can show first
  
  // Show the popup
  document.getElementById('popup').style.display = 'block';

  // Send the form data using FormSubmit's action URL
  setTimeout(function() {
      document.getElementById('contact-form').submit(); // Submit the form after the popup is displayed
  }, 1500); // Delay to give time for popup to show
}

function closePopup() {
  document.getElementById('popup').style.display = 'none'; // Hide the popup
}
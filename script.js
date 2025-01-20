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

function showPopup() {
  // Show the popup
  const popup = document.getElementById('popup');
  popup.style.display = 'block';
}


// Handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission

  const form = document.getElementById("contact-form");
  const popup = document.getElementById("popup");

  // Validate the form manually
  if (!form.checkValidity()) {
    // Trigger browser's native validation messages
    form.reportValidity();
    return; // Stop execution if the form is invalid
  }

  // If the form is valid, proceed with submission
  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      if (response.ok) {
        // Show the popup
        popup.style.display = "block";

        // Clear form fields
        form.reset();
      } else {
        console.error("Form submission failed:", response);
        alert("An error occurred. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    });
}

// Close the popup
function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none"; // Hide the popup
}

// Attach event listeners
document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submitBtn");
  const closePopupBtn = document.getElementById("closePopup");

  // Trigger form submission on link click
  submitBtn.addEventListener("click", (event) => handleSubmit(event));

  // Close popup on button click
  closePopupBtn.addEventListener("click", () => closePopup());
});


document.addEventListener('DOMContentLoaded', function () {
  // Select all social media links
  const socialMediaLinks = document.querySelectorAll('.social-media-list li a');

  // Add click event listener to each link
  socialMediaLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const url = link.getAttribute('href'); // Get the href attribute
      if (url) {
        window.open(url, '_blank'); // Open the URL in a new tab
      } else {
        console.error('No URL found for this link.');
      }
    });
  });
});


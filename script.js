
// Tailwind configuration
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
    },
  },
}



// Toggle mobile menu visibility using querySelector
const hamburgerBtn = document.querySelector("#hamburger-btn");
const mobileMenu = document.querySelector("#mobile-menu");
const closeMenuBtn = document.querySelector("#close-menu");

// Toggle the mobile menu when hamburger button is clicked
hamburgerBtn.addEventListener("click", function() {
mobileMenu.classList.toggle("hidden");
});

// Close the menu when the close button is clicked
closeMenuBtn.addEventListener("click", function() {
mobileMenu.classList.add("hidden");
});

// Close the menu when clicking outside of it
document.addEventListener("click", function(event) {
if (!mobileMenu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
 mobileMenu.classList.add("hidden");
}
});

function fetchJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(data => {
        const apiElement = document.querySelector('#api');
        apiElement.textContent = `${data.setup} - ${data.punchline}`;
      })
      .catch(error => {
        const apiElement = document.querySelector('#api');
        apiElement.textContent = 'Failed to load joke, please try again later.';
      });
  }
  
  setInterval(fetchJoke, 15000);
  window.onload = fetchJoke;
  

//Script for zooming into picture relative to the mouse.
document.querySelector('#zoom-img').addEventListener('mousemove', function(e) {
  const zoomImg = e.target;
  const { width, height, left, top } = zoomImg.getBoundingClientRect();
  
  // Calculate the mouse position relative to the image
  const offsetX = e.clientX - left;
  const offsetY = e.clientY - top;
  
  // Calculate percentage of image to focus on
  const xPercent = (offsetX / width) * 100;
  const yPercent = (offsetY / height) * 100;
  
  // Apply the zoom by adjusting object-position dynamically
  zoomImg.style.objectPosition = `${xPercent}% ${yPercent}%`;
});

document.querySelector('#zoom-img').addEventListener('mouseleave', function() {
  const zoomImg = document.querySelector('#zoom-img');
  zoomImg.style.objectPosition = 'center'; // Reset to center when mouse leaves
});





// Typewriter effect for the heading
const headingTextPart1 = "Hi, I'm ";
const headingTextPart2 = "Mthokozisi Nxumalo";
let i = 0;
const typewriterText = document.querySelector('#typewriter-text');

function typeWriter() {
  // Type the first part
  if (i < headingTextPart1.length) {
    typewriterText.innerHTML += headingTextPart1.charAt(i);
    i++;
    setTimeout(typeWriter, 100); // Adjust typing speed
  } else if (i < headingTextPart1.length + headingTextPart2.length) {
    
    typewriterText.innerHTML += `<span class="text-[#7d6f5a]">${headingTextPart2.charAt(i - headingTextPart1.length)}</span>`;
    i++;
    setTimeout(typeWriter, 100); // Adjust typing speed
  }
}

window.onload = typeWriter;


//Scrolling animation

// Set up the Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Add the 'visible' class when in view
      observer.unobserve(entry.target); // Stop observing once the element is visible
    }
  });
}, { threshold: 0.3 }); // Trigger when 30% of the element is in view

// Select all the container elements you want to animate
const containers = document.querySelectorAll('.container');
containers.forEach(container => {
  observer.observe(container); // Start observing each container
});

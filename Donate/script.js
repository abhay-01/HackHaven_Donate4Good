const testimonials = document.querySelectorAll('.testimonial-card');
let currentIndex = 0;

function showNextTestimonial() {
  testimonials[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % testimonials.length;
  testimonials[currentIndex].classList.add('active');
}

// Automatically show the next testimonial every 5 seconds
setInterval(showNextTestimonial, 5000);

// Show the first testimonial initially
testimonials[currentIndex].classList.add('active');

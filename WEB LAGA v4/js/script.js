// Cache element yang akan digunakan
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

// Toggle class active saat tombol hamburger diklik
hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};

// Fungsi untuk menutup menu jika klik di luar
const closeMenuOnClickOutside = (e) => {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
};

// Listener klik di luar menu
document.addEventListener("click", closeMenuOnClickOutside);

// Fungsi scroll

// Mengambil semua elemen yang ingin ditampilkankan
// Fungsi untuk melakukan scrolling otomatis dengan loop
const scrollContainer = document.getElementById('scrollContainer');

// Clone the content for seamless looping
scrollContainer.innerHTML += scrollContainer.innerHTML;

function autoScroll() {
  if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
    scrollContainer.scrollLeft = 0; // Reset ke posisi awal setelah mencapai akhir konten
  } else {
    scrollContainer.scrollLeft += 7// Kecepatan scroll dapat diatur
  }
}

// Menggunakan setInterval untuk mengatur kecepatan scrolling

let interval = setInterval(autoScroll, 10); // Kecepatan diatur lebih cepat

scrollContainer.addEventListener("mouseenter", () => {
  clearInterval(interval); // Stop scroll saat di-hover
});

scrollContainer.addEventListener("mouseleave", () => {
  interval = setInterval(autoScroll, 10); // Mulai scroll lagi setelah hover
});
const testimonials = document.querySelectorAll('.testimonial-item');
let currentIndex = 0;

// Function to show the current testimonial
function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active'); // Remove active class from all
        if (i === index) {
            testimonial.classList.add('active'); // Add active class to the current testimonial
        }
    });
}

// Function to change testimonial every 5 seconds
function changeTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length; // Loop back to the first testimonial
    showTestimonial(currentIndex);
}

// Initial call to show the first testimonial
showTestimonial(currentIndex);

// Set interval to change testimonial every 5 seconds
setInterval(changeTestimonial, 5000);
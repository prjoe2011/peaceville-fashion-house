// =========================================================
// 1. HOME PAGE FEATURES (index.html)
// =========================================================

// Feature A: Dynamic Time-Based Greeting
const welcomeHeading = document.getElementById("welcome-heading");
if (welcomeHeading) {
    const hour = new Date().getHours();
    if (hour < 12) {
        welcomeHeading.innerText = "Good Morning — Welcome to Peaceville Fashion House";
    } else if (hour < 18) {
        welcomeHeading.innerText = "Good Afternoon — Elegance Redefined";
    } else {
        welcomeHeading.innerText = "Good Evening — Discover Luxury Fashion";
    }
}

// Feature B: Random Styling Tip Generator
const tips = [
    "Pair structured blazers with relaxed linen trousers for effortless smart-casual balance.",
    "Monochrome outfits create an elongated, sophisticated silhouette.",
    "Let one statement accessory—like a gold cuff or structured tote—anchor a neutral outfit.",
    "Tailoring is everything: a well-fitted mid-range piece always outshines an ill-fitting luxury item."
];

function generateTip() {
    const tipElement = document.getElementById("fashion-tip");
    if (tipElement) {
        const randomIndex = Math.floor(Math.random() * tips.length);
        tipElement.innerText = tips[randomIndex];
    }
}


// =========================================================
// 2. PRODUCTS PAGE FEATURE (products.html)
// =========================================================

// Interactive Category Filter (All, Apparel, Accessories)
function filterProducts(category) {
    const items = document.querySelectorAll(".product-item");
    items.forEach(item => {
        if (category === "all" || item.getAttribute("data-category") === category) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}


// =========================================================
// 3. BOARD OF TRUSTEES PAGE FEATURE (board.html)
// =========================================================

// Show / Hide Member Biographies
function toggleBio(bioId) {
    const bioElement = document.getElementById(bioId);
    if (bioElement) {
        bioElement.style.display = (bioElement.style.display === "none") ? "block" : "none";
    }
}


// =========================================================
// 4. UPCOMING EVENTS PAGE FEATURES (events.html)
// =========================================================

// Feature A: Live Countdown Timer to November 28, 2026
const countdownElement = document.getElementById("countdown");
if (countdownElement) {
    const eventDate = new Date("Nov 28, 2026 18:00:00").getTime();

    setInterval(function () {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) {
            countdownElement.innerText = "The Runway Showcase is Live!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

// Feature B: Interactive Seat Reservation Alert
function rsvpEvent(eventName) {
    alert("Thank you! Your VIP seat reservation request for the " + eventName + " has been logged.");
}


// =========================================================
// 5. INQUIRIES & APPOINTMENTS PAGE FEATURE (inquiries.html)
// =========================================================

// Form Submission Handling & Instant Confirmation Message
function handleBooking(event) {
    event.preventDefault(); // Stops the page from refreshing

    const name = document.getElementById("fullName").value;
    const service = document.getElementById("serviceType").value;
    const date = document.getElementById("preferredDate").value;

    const msgBox = document.getElementById("confirmationMessage");
    msgBox.innerText = `Thank you, ${name}! Your ${service} for ${date} has been received. Our concierge will email you shortly.`;

    document.getElementById("bookingForm").reset();
}

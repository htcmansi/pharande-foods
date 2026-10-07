// Mobile menu
function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
}

// Close mobile menu after clicking a link
document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navMenu").classList.remove("show");
    });
});


// WhatsApp enquiry form
function sendWhatsApp() {

    const name = document
        .querySelector('input[placeholder="Your Name"]')
        .value.trim();

    const phone = document
        .querySelector('input[placeholder="Phone Number"]')
        .value.trim();

    const product = document
        .querySelector("select")
        .value;

    const message = document
        .querySelector("textarea")
        .value.trim();

    if (!name || !phone) {
        alert("Please enter your name and phone number.");
        return;
    }

    const whatsappMessage =
        `Hello Pharande Foods, I would like to make an enquiry.

Name: ${name}
Phone: ${phone}
Product: ${product}
Message: ${message}`;

    const whatsappURL =
        "https://wa.me/919423142302?text=" +
        encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");
}
document.addEventListener("DOMContentLoaded", function () {
    const wordContainer = document.querySelector(".word-container");
    const investmentContainer = document.querySelector(".investment-content");
    const investmentImage = document.querySelector(".investment-image");
    const strategicMap = document.querySelector(".strategic-section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show"); // Remove if you want to reset on exit
            }
        });
    });

    // 加入想要的container name
    if (wordContainer) observer.observe(wordContainer);
    if (investmentContainer) observer.observe(investmentContainer);
    if (investmentImage) observer.observe(investmentImage);
    if (strategicMap) observer.observe(strategicMap);
});


//Smooth scroll jump effect function
document.getElementById("floor-plan-link").addEventListener("click", function(event) {
    event.preventDefault(); 
    document.querySelector("#floor-plan-section").scrollIntoView({
        behavior: "smooth" 
    });
});

document.getElementById("gallery-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector("#gallery").scrollIntoView({
        behavior: "smooth" 
    });
});

document.getElementById("contact-section").addEventListener("click", function(event) {
    event.preventDefault(); 
    document.querySelector("#contact").scrollIntoView({
        behavior: "smooth" 
    });
});

document.getElementById("investment-section").addEventListener("click", function(event) {
    event.preventDefault(); 
    document.querySelector("#investment").scrollIntoView({
        behavior: "smooth" 
    });
});



//Plan card chage of floor plan
document.addEventListener("DOMContentLoaded", () => {
    const images = [
        {
            src: "maldives_sitePlan.png",
            caption: "Site Plan",
        },
        {
            src: "maldives_planB.png",
            caption: "Type B 850 + 80 sq. ft",
        },
        {
            src: "maldives_planC.png",
            caption: "Type C 850 + 78 sq. ft",
        },
    ];

    let currentIndex = 0;

    const imageElement = document.getElementById("floor-plan-image");
    const captionElement = document.getElementById("floor-plan-caption");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    function updateSlider(index) {
        imageElement.src = images[index].src;
        imageElement.alt = images[index].caption;
        captionElement.textContent = images[index].caption;
    }

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider(currentIndex);
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider(currentIndex);
    });

    // Initialize the slider
    updateSlider(currentIndex);
});

//call whastsapp function
function callWhatsapp() {
    const whatsappNumber = "60164771238"; 
    const message = encodeURIComponent("Hello, I would like to get more information about Maldives Residences Penang ?"); 
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank'); 
}

document.getElementById('whatsapp-icon').addEventListener('click', function () {
    console.log('WhatsApp icon clicked!');
});


/*lightbox function*/ 
document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".gallery-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeLightbox = document.getElementById("close-lightbox");

    galleryItems.forEach((item) => {
        item.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = item.src;
            lightboxImg.alt = item.alt;
        });
    });

    closeLightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});

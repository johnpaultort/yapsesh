// Project Filters
const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".project-card");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        cards.forEach(card => {

            if (
                filter === "all" ||
                card.dataset.category.includes(filter)
            ) {
                card.style.display = "block";
            }
            else {
                card.style.display = "none";
            }

        });

    });

});

// About Page Gallery
const galleries = {

    programming: {

        title: "Programming",

        images: [

            {
                image: "images/projects/traffic.jpg",
                caption: "Snowfitter"
            }

        ],

        journal: [

            {
                date: "July 2026",
                title: "Started Snowfitter",
                text: "This website is to help those looking for new gear." +
                      "The idea was given through sitting hours on end helping customers afraid of asking questions " +
                      "on what they should be on, or if one of us is busy it allows the customer to fill out each category " +
                      "to recieve a couple of suggestions."
            }

        ]

    },

    cycling: {

        title: "Cycling",

        images: [

            {
                image: "images/cycling/ride1.jpg",
                caption: "Ballona Creek Sports Basement ride"
            },

            {
                image: "images/cycling/firstride.jpg",
                caption: "BMC TeamMachine"
            },

            {
                image: "images/cycling/gorilla.jpg",
                caption: "Ballona end path"
            },

            {
                image: "images/cycling/sd.jpg",
                caption: "UCSD"
            }

        ],

        journal: [

            {
                date: "June 20, 2026",
                title: "47.5 Mile Ride",
                text: "I was in San Diego for the weekend for Uncle Daves babyshower. " +
                      "I decided to bring my bike and rode a big loop around San Diego where I should've been for school. " +
                      "I felt like I could have kept going since I was riding at my own pace, but was almost late to shower the baby." 
            },

            {
                date: "June 19, 2026",
                title: "New Toys Day",
                text: "I upgraded my saddle since it was giving me saddle sores. " +
                      "I also got new tires, another bottle cage, and new bottles " +
                      "I needed new bottles and another cage because I was tired of one bottle."
            }

        ]

    },

    outdoors: {

        title: "Outdoors",

        images: [

            {
                image: "images/outdoors/baldy.jpg",
                caption: "Dumping"
            },

            {
                image: "images/outdoors/mount.jpg",
                caption: "Blue Bird"
            },

            {
                image: "images/outdoors/palisades.jpg",
                caption: "Palisades Blue Bird"
            },

            {
                image: "images/outdoors/gmab.jpg",
                caption: "Grandma bird was on a sick one"
            },

            {
                image: "images/outdoors/mammy.jpg",
                caption: "My last Mammy Trip"
            },

            {
                image: "images/outdoors/range.jpg",
                caption: "Range with Arsenal."
            }
        ],

        journal: [

            {
                date: "2026",
                title: "2025/26 Season",
                text: "So far this past season was not as good as I wanted it " +
                      "I got ~18 days in which is nothing. The best trips were palisades " +
                      " I was so used to baldy runs or even mt high Palisades is another level!"
            }

        ]

    }

};

// Modal Elements
const modal = document.getElementById("galleryModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("galleryImage");
const modalCaption = document.getElementById("imageCaption");
const journalContainer = document.getElementById("journalContainer");
const closeModal = document.getElementById("closeModal");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentGallery = null;
let currentImage = 0;

// Open Gallery
function openGallery(name){

    const gallery = galleries[name];

    if(!gallery){
        console.error("Gallery not found:", name);
        return;
    }

    currentGallery = gallery;
    currentImage = 0;

    modalTitle.textContent = gallery.title;

    showImage();

    journalContainer.innerHTML = "";

    gallery.journal.forEach(entry => {

        journalContainer.innerHTML += `
            <div class="journal-entry">
                <h4>${entry.date}</h4>
                <strong>${entry.title}</strong>
                <p>${entry.text}</p>
            </div>
        `;

    });

    modal.style.display = "flex";

}

function showImage() {

    const image = currentGallery.images[currentImage];

    modalImage.src = image.image;
    modalCaption.textContent = image.caption;

}

nextBtn.addEventListener("click", () => {

    currentImage++;

    if(currentImage >= currentGallery.images.length){
        currentImage = 0;
    }

    showImage();

});

prevBtn.addEventListener("click", () => {

    currentImage--;

    if(currentImage < 0){
        currentImage = currentGallery.images.length - 1;
    }

    showImage();

});

// Explore Buttons
document.querySelectorAll(".explore-btn").forEach(button => {

    button.addEventListener("click", () => {

        const gallery =
            button.closest(".flip-card").dataset.gallery;

        openGallery(gallery);

    });

});

// Close Modal
closeModal.addEventListener("click", () => {

    modal.style.display = "none";

});


window.addEventListener("click", event => {

    if(event.target === modal){

        modal.style.display = "none";

    }

});
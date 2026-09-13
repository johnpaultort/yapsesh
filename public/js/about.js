// About Page Gallery
const galleries = {

    programming: {

        title: "Programming",

        images: [

            {
                image: "images/projects/traffic.jpg",
                caption: "Traffic Light Sim"
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
            },

            {
                image: "images/outdoors/s13 lbx.jpg",
                caption: "FD LBX THURS 2023"
            },

            {
                image: "images/outdoors/e36.jpg",
                caption: "FD 2025"
            },
            
            {
                image: "images/outdoors/HIN.jpg",
                caption: "HIN COVID"
            },

            {
                image: "images/outdoors/poopra.jpg",
                caption: "Supra"
            },

            {
                image: "images/outdoors/jzxchaser.jpg",
                caption: "chaser, one of my favorite cars."
            }
        ],
    }

};

// Modal Elements
const modal = document.getElementById("galleryModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("galleryImage");
const modalCaption = document.getElementById("imageCaption");
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
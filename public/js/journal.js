// Journal Filters
const buttons = document.querySelectorAll(".journal.filter-btn");
const cards = document.querySelectorAll(".journal-card");

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
            } else {
               card.style.display = "none";
            }
            
        });

    });

})
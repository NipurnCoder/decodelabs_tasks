const heroBtn = document.getElementById("heroBtn");

heroBtn.addEventListener("click", () => {
    alert("Welcome to my Responsive Frontend Interface Project!");
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Message Sent Successfully!");

    form.reset();

});
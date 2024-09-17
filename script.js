document.addEventListener("scroll", function() {
    let elements = document.querySelectorAll(".fade-in");
    elements.forEach((element) => {
        let position = element.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            element.classList.add("active");
        }
    });
});

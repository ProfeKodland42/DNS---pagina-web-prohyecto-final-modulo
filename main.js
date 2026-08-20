const burger = document.querySelector(".burger");
const nav = document.querySelector(".main-nav");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
});

$(".corusel").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    arrows: true,
    dots: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true,
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                dots: true,
                centerMode: true,
                centerPadding: "20px",
                slidesToShow: 1
            }
        }
    ]
});
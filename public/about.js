setInterval(() => {
    const img1 = $("#img-swap1");
    const img2 = $("#img-swap2");

    if (img2.hasClass("show")) {
        img2.removeClass("show");
        img1.addClass("show");
    } else {
        img2.addClass("show");
        img1.removeClass("show");
    }
}, 5000);

window.onscroll = () => {
    const scrollPos = window.scrollY - window.innerHeight;
    const { top, height } = document.getElementById("parallax").getBoundingClientRect();

    if (scrollPos > top) {
        $("#parallax").css("margin-top", -(scrollPos / height) * 250);
    }
}
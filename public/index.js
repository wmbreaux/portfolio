const openMobileNav = () => {
    if ($("#header .mobile-overlay.open").length) {
        $("#header .mobile-overlay").removeClass("open");
        $("#header .nav-btn").removeClass("open");
    } else {
        $("#header .mobile-overlay").addClass("open");
        $("#header .nav-btn").addClass("open");
    }
}

const path = window.location.pathname;
if (path.includes("index.html")) {
    $("#index-nav").addClass("active");
    $("#index-nav-m").addClass("active");
    if (document.getElementById("footer").getBoundingClientRect().top < window.innerHeight) {
        const footer = $("#footer");
        footer.css("position", "absolute");
        footer.css("bottom", "0");
        footer.css("left", "calc(50% - 7rem)");
        footer.css("width", "14rem");
        footer.css("width", "14rem");
    }
} else if (path.includes("about.html")) {
    $("#about-nav").addClass("active");
    $("#about-nav-m").addClass("active");
} else if (path.includes("cv.html")) {
    $("#cv-nav").addClass("active");
    $("#cv-nav-m").addClass("active");
} else if (path.includes("razzou-dating.html")) {
    $("#razzou-nav").addClass("active");
    $("#razzou-nav-m").addClass("active");
    $("#razzou-link-bottom").addClass("active");
} else if (path.includes("activate-app.html")) {
    $("#activate-nav").addClass("active");
    $("#activate-nav-m").addClass("active");
    $("#activate-link-bottom").addClass("active");
}

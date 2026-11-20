// Lightbox: only images marked .zoomable open full screen.
// Images inside links (e.g. home page project cards) are never zoomable,
// so clicking them just navigates to the project.
document.addEventListener("DOMContentLoaded", function () {
    var overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";
    overlay.innerHTML =
        '<button class="lightbox-close" aria-label="Close">&times;</button>' +
        '<img class="lightbox-content" alt="">';
    document.body.appendChild(overlay);

    var target = overlay.querySelector(".lightbox-content");

    function close() {
        overlay.classList.remove("open");
    }

    document.querySelectorAll("img.zoomable").forEach(function (img) {
        if (img.closest("a")) {
            img.classList.remove("zoomable");
            return;
        }
        img.addEventListener("click", function () {
            target.src = img.src;
            target.alt = img.alt;
            overlay.classList.add("open");
        });
    });

    overlay.addEventListener("click", close);
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") close();
    });
});

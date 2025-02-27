document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const navLinks = document.querySelector(".nav-links");

    closeBtn.style.display = "none";

    menuBtn.addEventListener("click", function () {
        navLinks.classList.add("active");
        menuBtn.style.display = "none";
        closeBtn.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.style.display = "block";
        closeBtn.style.display = "none";
    });

    // ✅ Progress Bar Animation ✅
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        const percent = bar.getAttribute("data-percent");
        bar.style.width = percent + "%";

        let count = 0;
        let interval = setInterval(() => {
            if (count < percent) {
                count++;
                bar.setAttribute("data-percent", count);
            } else {
                clearInterval(interval);
            }
        }, 20);
    });
});

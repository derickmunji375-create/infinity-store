function toggleMenu() {
  document.getElementById("navlist").classList.toggle("active");
}

// Highlight active nav link based on current page
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".navlist li a");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

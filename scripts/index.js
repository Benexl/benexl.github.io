document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("active");

    // Toggle icon between bars and times
    const icon = this.querySelector("i");
    if (icon.classList.contains("fa-bars")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll(".mobile-nav-link, .mobile-nav-button").forEach(
    (link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("active");
        mobileMenuButton.querySelector("i").classList.remove("fa-times");
        mobileMenuButton.querySelector("i").classList.add("fa-bars");
      });
    },
  );

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Image viewer functionality
  const designCards = document.querySelectorAll(".design-card");
  const imageViewer = document.getElementById("image-viewer");
  const fullImage = document.getElementById("full-image");
  const closeButton = document.querySelector(".close-button");
  const prevButton = document.getElementById("previous-image");
  const nextButton = document.getElementById("next-image");
  const figmaLink = document.getElementById("figma-link");

  let currentImageIndex = 0;
  const designImages = Array.from(designCards).map((card) => ({
    src: card.querySelector("img").getAttribute("src"),
    design: card.querySelector("img").getAttribute("data-design"),
  }));

  // Open image viewer
  designCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      currentImageIndex = index;
      updateImageViewer();
      imageViewer.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });
  });

  // Close image viewer
  closeButton.addEventListener("click", () => {
    imageViewer.classList.add("hidden");
    document.body.style.overflow = "";
  });

  // Navigation buttons
  prevButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + designImages.length) %
      designImages.length;
    updateImageViewer();
  });

  nextButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % designImages.length;
    updateImageViewer();
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!imageViewer.classList.contains("hidden")) {
      if (e.key === "Escape") {
        imageViewer.classList.add("hidden");
        document.body.style.overflow = "";
      } else if (e.key === "ArrowLeft") {
        currentImageIndex = (currentImageIndex - 1 + designImages.length) %
          designImages.length;
        updateImageViewer();
      } else if (e.key === "ArrowRight") {
        currentImageIndex = (currentImageIndex + 1) % designImages.length;
        updateImageViewer();
      }
    }
  });

  function updateImageViewer() {
    const currentImage = designImages[currentImageIndex];
    fullImage.setAttribute("src", currentImage.src);
    fullImage.setAttribute("alt", currentImage.design + " design");

    // Update Figma link (you would need to add actual Figma links)
    figmaLink.setAttribute(
      "href",
      `https://figma.com/design/${currentImage.design}`,
    );
  }

  // Set current year in footer
  document.getElementById("year").textContent = new Date().getFullYear();
});

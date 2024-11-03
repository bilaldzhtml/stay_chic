function toggleAccordion(header) {
    const body = header.nextElementSibling;
    if (body.style.display === "block") {
        body.style.display = "none";
    } else {
        body.style.display = "block";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const agentItems = document.querySelectorAll(".agent-item");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the item is in view
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1"; // Fade in
                entry.target.style.transform = "translateY(0)"; // Move to original position
            }
        });
    }, observerOptions);

    agentItems.forEach((item) => {
        observer.observe(item);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");
    const reviewForm = document.querySelector("form");
  
    stars.forEach((star, index) => {
      star.addEventListener("click", () => {
        stars.forEach((s, i) => {
          if (i <= index) {
            s.classList.add("selected");
          } else {
            s.classList.remove("selected");
          }
        });
      });
    });
  
    reviewForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const selectedStars = document.querySelectorAll(".star.selected").length;
      const reviewText = document.querySelector("textarea").value;
  
      if (selectedStars === 0 || reviewText.trim() === "") {
        alert("Please provide a rating and a review.");
        return;
      }
  
      // Here you can add functionality to handle the submitted review
      alert(`Thank you for your review! You rated us ${selectedStars} stars.`);
  
      // Clear the form after submission
      stars.forEach((star) => star.classList.remove("selected"));
      reviewForm.reset();
    });
  });
  


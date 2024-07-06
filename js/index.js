
      // Get the button
      var scrollToTopBtn = document.getElementById("scroll-to-top");

      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function () {
        scrollFunction();
      };

      function scrollFunction() {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          scrollToTopBtn.classList.add("show");
        } else {
          scrollToTopBtn.classList.remove("show");
        }
      }

      // When the user clicks on the button, scroll to the top of the document
      scrollToTopBtn.addEventListener("click", function (e) {
        e.preventDefault();
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      });

      document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-item');

  navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - document.getElementById('header').offsetHeight,
          behavior: 'smooth'
        });
      }
    });
  });
});


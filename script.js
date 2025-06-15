document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a[href]");

  links.forEach((link) => {
    if (link.href.includes(".html")) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.getAttribute("href");

        document.body.style.opacity = "0";
        document.body.style.transform = "translateY(-20px)";
        document.body.style.transition = "all 0.3s ease";
        setTimeout(() => {
          window.location.href = href;
        }, 300);
      });
    }
  });
  document.body.style.opacity = "0";
  document.body.style.transform = "translateY(20px)";

  setTimeout(() => {
    document.body.style.opacity = "1";
    document.body.style.transform = "translateY(0)";
    document.body.style.transition = "all 0.6s ease";
  }, 100);
  const skills = document.querySelectorAll(".skill");
  if (skills.length > 0) {
    skills.forEach((skill, index) => {
      skill.style.animationDelay = `${index * 0.1 + 0.5}s`;
    });
  }

  const projectCards = document.querySelectorAll(".project-card");
  if (projectCards.length > 0) {
    projectCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.2 + 0.3}s`;
    });
  }

  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
    });

    link.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    document.body.style.backgroundPosition = `center ${rate}px`;
  });
  const heroH1 = document.querySelector(".hero h1");
  if (heroH1) {
    const text = heroH1.textContent;
    heroH1.textContent = "";
    heroH1.style.borderRight = "2px solid white";
    setTimeout(() => {
      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          heroH1.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        } else {
          heroH1.style.borderRight = "none";
        }
      };
      typeWriter();
    }, 1000);
  }
});

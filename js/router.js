const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");

// function to toggle page active

function navigation(pageId) {
  pages.forEach((p) => p.classList.remove("active"));
  navLinks.forEach((n) => {
    if(n.dataset.page === pageId){
      n.classList.add("active-link")
    }else{
      n.classList.remove("active-link")
    }
  })

  const target = document.getElementById("page-" + pageId);
  if (target) {
    target.classList.add("active");
  }
}

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    navigation(link.dataset.page);
  });
});

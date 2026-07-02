const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");

const blogTitles = document.querySelectorAll(".post-title") 

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

  history.replaceState(null, "", "#"+pageId)
}

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    navigation(link.dataset.page);
  });
});

const hash = window.location.hash.slice(1)
if(hash){
  navigation(hash)
}

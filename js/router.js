/* ─── Header videos: sync start, play once ──────────────────
   Both videos have no autoplay. We wait for both to buffer
   enough data (canplaythrough), then fire .play() on them
   simultaneously in the same microtask so they stay in sync.
───────────────────────────────────────────────────── */
(function syncHeaderVideos() {
  const vHandwriting = document.getElementById("header-video-handwriting");
  const vFlower      = document.getElementById("header-video-flower");
  if (!vHandwriting || !vFlower) return;

  function readyPromise(video) {
    // If already buffered enough, resolve immediately
    if (video.readyState >= 4) return Promise.resolve();
    return new Promise(resolve => {
      video.addEventListener("canplaythrough", resolve, { once: true });
    });
  }

  Promise.all([readyPromise(vHandwriting), readyPromise(vFlower)]).then(() => {
    vHandwriting.play();
    vFlower.play();
  });
})();

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

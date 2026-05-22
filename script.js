// PARALLAX EFFECT

document.addEventListener("mousemove", (e) => {

  const x = (window.innerWidth / 2 - e.pageX) / 40;
  const y = (window.innerHeight / 2 - e.pageY) / 40;

  document.querySelector(".hero-img").style.transform =
    `translate(${x}px, ${y}px) scale(1.02)`;

});

// FADE IN ANIMATION

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section").forEach((el)=>{
  observer.observe(el);
});
document.addEventListener("mousemove", (e) => {
  let x = (e.clientX / window.innerWidth) * 100;
  let y = (e.clientY / window.innerHeight) * 100;

  document.body.style.background = `radial-gradient(circle at ${x}% ${y}%, 
        rgba(255, 0, 150, 0.6), 
        rgba(0, 255, 255, 0.4), 
        rgba(0, 0, 0, 0.9))`;
});

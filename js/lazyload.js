

 
  document.addEventListener("DOMContentLoaded", function () {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  
    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function (
        entries,
        observer
      ) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            setTimeout(() => {
              lazyImage.src = lazyImage.getAttribute("imgsrc");
              lazyImage.classList.remove("lazy");
              lazyImageObserver.unobserve(lazyImage);
            }, 300);
          }
        });
      });
  
      lazyImages.forEach(function (lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
      // Possibly fall back to event handlers here
    }
  });
  
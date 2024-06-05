export function animateOnScroll(element, className) {
  function isElementPartiallyInViewport(el, percentVisible) {
    const rect = el.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const heightThreshold = el.offsetHeight * percentVisible;

    return (
      rect.bottom >= heightThreshold &&
      rect.top <= windowHeight - heightThreshold
    );
  }

  function handleScroll() {
    if (isElementPartiallyInViewport(element, 0.25)) {
      element.classList.add(className);
      element.style.opacity = 1;
    } else {
      element.classList.remove(className);
      element.style.opacity = 0;
    }
  }

  window.addEventListener("load", handleScroll);
  window.addEventListener("scroll", handleScroll);
}

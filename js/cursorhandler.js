document.addEventListener("DOMContentLoaded", () => {
  const customCursor = document.createElement("div");
  customCursor.classList.add("custom-cursor");
  document.body.appendChild(customCursor);

  document.addEventListener("mousemove", (e) => {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
  });

  document.body.addEventListener("mouseleave", () => {
    customCursor.remove();
  });

  document.body.addEventListener("mouseenter", () => {
    document.body.appendChild(customCursor);
  });

  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  const allAnchorElements = document.querySelectorAll("a");
  allAnchorElements.forEach((a) => {
    a.addEventListener("mouseenter", () => {
      customCursor.style.transform = "scale(1.5) translate(-30%, -30%)";
      customCursor.style.backgroundColor = "rgb(32, 188, 255)";
      customCursor.classList.toggle("linkElemnent");
    });

    a.addEventListener("mouseleave", () => {
      customCursor.style.transform = "scale(1) translate(-50%, -50%)";
      customCursor.style.backgroundColor = "rgb(154, 154, 154) ";
      customCursor.classList.toggle("linkElemnent");
    });
  });
});

document.body.style.cursor = "none";

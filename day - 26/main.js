document.addEventListener("DOMContentLoaded", () => {
  const headingElement = document.getElementById("heading");
  const toggleStyleButton = document.getElementById("toggle-style-btn");

  if (!headingElement || !toggleStyleButton) {
    return;
  }

  toggleStyleButton.addEventListener("click", () => {
    const isActive = headingElement.classList.toggle("heading-emphasis");
    toggleStyleButton.setAttribute("aria-pressed", String(isActive));
  });
});

/**
 * Renders notifications to the UI.
 * @param {HTMLElement} listEl - The <ul> element.
 * @param {string[]} notifications - Array of notification messages.
 */
function renderNotifications(listEl, notifications) {
  listEl.innerHTML = "";

  notifications.forEach(msg => {
    const li = document.createElement("li");
    li.textContent = msg;
    listEl.appendChild(li);
  });
}

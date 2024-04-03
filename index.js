const btn_menu = document.querySelector("[data-btn-menu]");
const submenu = document.querySelector(".submenu");

btn_menu.addEventListener("click", () => {
    submenu.hidden = !submenu.hidden;
});
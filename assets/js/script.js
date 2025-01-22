function toggleSubMenu(subMenuId) {
    var subMenu = document.getElementById(subMenuId);
    var menu = subMenu.parentElement;

    if (subMenu.style.maxHeight) {
        subMenu.style.maxHeight = null;
        menu.classList.remove('active');
    } else {
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        menu.classList.add('active');
    }
}
console.log("Hello class from console!");

// Content

// Helper Funtions

const getYear = () => {
  const date = new Date();
  return date.getFullYear();
};

const getLastUpdate = () => {
  const date = document.lastModified;
  return date.toLocaleString();
};

const handleMenu = () => {
  const menu = document.getElementById("menu");
  const icon = document.getElementById("menu-icon");
  if (menu.classList.contains("menu-open")) {
    menu.classList.remove("menu-open");
    icon.classList.replace("fa-times", "fa-bars");
  } else {
    menu.classList.add("menu-open");
    icon.classList.replace("fa-bars", "fa-times");
  }
};

/** DOM Manipulation */

// Main

// Footer
document.getElementById("current-year").innerHTML = getYear();
document.getElementById(
  "last-modified"
).innerHTML = `Last Modification: ${getLastUpdate()}`;

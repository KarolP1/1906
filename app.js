window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 1000);
};

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});
const hamburgermenu = document.getElementsByClassName("line");
window.onscroll = function (e) {
  console.log(window.pageYOffset > window.innerHeight);
  if (
    window.pageYOffset > window.innerHeight - 50 ||
    window.pageYOffset > window.innerHeight
  ) {
    hamburgermenu[0].style.backgroundColor = "black";
    hamburgermenu[1].style.backgroundColor = "black";
    hamburgermenu[2].style.backgroundColor = "black";
  } else {
    hamburgermenu[0].style.backgroundColor = "white";
    hamburgermenu[1].style.backgroundColor = "white";
    hamburgermenu[2].style.backgroundColor = "white";
  }
};

const links = document.querySelectorAll(".menu-link");

links.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
  });
});

function readText(form) {
  let name = form.name.value;
  let email = form.email.value;

  alert("Cześć: " + name + "\n" + "odezwiemy się do ciebie na maila: " + email);
}

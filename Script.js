
//=========================== Onclick Show Navbar===============================//

let LinksNavbar = document.querySelectorAll(".link");

function AddActive(link) {
    LinksNavbar.forEach(item => {
        item.classList.remove("active");
    });
    link.classList.add("active");
};

LinksNavbar.forEach(link => {
    link.addEventListener("click",function() {
        AddActive(link);
    });
});

//=========================== Onclick add || remove Active ===============================//
let Bars = document.querySelector(".fa-bars");
let Xmarc = document.querySelector(".fa-xmark");
let Navbar = document.querySelector(".nav");

function ShowNavbar(link) {
  Navbar.classList.remove("active");
  link.classList.add("active");
};

Bars.addEventListener("click",() => {
   ShowNavbar(Navbar);
    Bars.classList.remove("active");
});

Xmarc.addEventListener("click",() => {
    Navbar.classList.remove("active");
    Bars.classList.remove("active");
});

// ================= Show Efeect to Navbar ================ //
let Header = document.querySelector(".header");
window.onscroll = () => {
   if(window.scrollY > 50) {
      Header.classList.add("active");
    }else {
        Header.classList.remove("active");
   }
}

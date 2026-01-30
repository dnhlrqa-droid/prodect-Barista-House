
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
        // إغلاق الـ navbar على الشاشات الصغيرة عند النقر على رابط
        if (window.innerWidth <= 600) {
            Navbar.classList.remove("active");
            Bars.classList.remove("active");
        }
    });
});

//=========================== Onclick add || remove Active ===============================//
let Bars = document.querySelector(".fa-bars");
let Xmarc = document.querySelector(".fa-xmark");
let Navbar = document.querySelector(".nav");

function ShowNavbar() {
  Navbar.classList.add("active");
  Bars.classList.add("active");
};

function HideNavbar() {
    Navbar.classList.remove("active");
    Bars.classList.remove("active");
};

if (Bars) {
  Bars.addEventListener("click", ShowNavbar);
}

if (Xmarc) {
  Xmarc.addEventListener("click", HideNavbar);
}

// إغلاق الـ navbar عند الضغط خارجها
document.addEventListener("click", (e) => {
    if (window.innerWidth <= 600) {
        if (!e.target.closest(".header") && Navbar.classList.contains("active")) {
            HideNavbar();
        }
    }
});

// ================= Show Effect to Navbar ================ //
let Header = document.querySelector(".header");
window.onscroll = () => {
   if(window.scrollY > 50) {
      Header.classList.add("active");
    }else {
        Header.classList.remove("active");
   }
}

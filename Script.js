
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

// =================== Shwo items Orders loops =================== //
let Menu = [
{   id: 1,
   title: "شاي بالبرتقال المنعش",
   price: 15,
   img: "./images/photo-3.png",
   quantity: 0},
{   id: 2,
   title: "شاي أحمر بالليمون",
   price: 3,
   img: "./images/photo-14.png",
   quantity: 0},
{   id: 3,
   title: "قهوة عربية",
   price: 7,
   img: "./images/photo-13.png",
   quantity: 0},
{   id: 4,
   title: "قهوة عربية بالهيل",
   price: 9.9,
   img: "./images/photo-12.png",
   quantity: 0},
{   id: 5,
   title: "كابتشينو بالهيل والكريمة المخفوقة بالشوكولات",
   price: 16.5,
   img: "./images/photo-11.png",
   quantity: 0},
{   id: 6,
   title: "شاي اصفر بالمليسة",
   price: 4,
   img: "./images/photo-10.png",
   quantity: 0},
{   id: 7,
   title: "شاي أخضر بالياسمين",
   price: 5.5,
   img: "./images/photo-9.png",
   quantity: 0},
{   id: 8,
   title: "كابتشينو بالقرنفل",
   price: 7.8,
   img: "./images/photo-8.png",
   quantity: 0},
{   id: 9,
   title: "كابتشينو بالڤانيلا",
   price: 14.5,
   img: "./images/photo-7.png",
   quantity: 0},
{   id: 10,
   title: "كابتشينو بالشيكولاتة",
   price: 13.5,
   img: "./images/photo-6.png",
   quantity: 0},
{   id: 11,
   title: "كابتشينو بالكراميل",
   price: 11.99,
   img: "./images/photo-5.png",
   quantity: 0},
{   id: 12,
   title: "شاي أخضر بالنعناع",
   price: 10,
   img: "./images/photo-4.png",
   quantity: 0},

]

let Orders = document.querySelectorAll("#Menu .container-products");

Menu.forEach(item => {
    Orders[0].innerHTML += `
              <div class="cart">
                      <div class="img">
                             <img src=${item.img} alt="coffee" loading="lazy">
                      </div>
                      <div class="infromations">
                                 <p>${item.title}</p>
                             <div class="butt-price">
                                  <span>$${item.price}</span>
                                  <button>Request</button>
                             </div>
                      </div>
               </div>
    `;
});


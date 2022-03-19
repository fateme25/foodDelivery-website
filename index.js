// Menu
const menu = [
  {
    id: 1,
    title: "کباب گوشت گوسفندی",
    price: "184,000",
    category: "traditional",
    img: "./assets/images/food1.jpg",
    rateNum: 4.2,
    rateVote: "(15.845)",
    discount: ["./assets/images/discount15.png", "./assets/images/discount.png"]

  },
  {
    id: 2,
    title: "مرغ سوخاری",
    price: "84,000",
    category: "fast-food",
    img: "./assets/images/food2.jpg",
    rateNum: 5,
    rateVote: "(18.425)",
    discount: ["./assets/images/discount10.png", "./assets/images/discount.png"]
  },
  {
    id: 3,
    title: "ساندویچ ژامبون مرغ",
    price: "50,000",
    category: "fast-food",
    img: "./assets/images/food3.jpg",
    rateNum: 4,
    rateVote: "(13.200)",
    discount: ["./assets/images/discount7.png", "./assets/images/discount.png"]

  },
  {
    id: 4,
    title: "نودل سبزیجات",
    price: "76,000",
    category: "international",
    img: "./assets/images/food4.jpg",
    rateNum: 3.5,
    rateVote: "(325)",
    discount: ["./assets/images/discount4.png", "./assets/images/discount.png"]
  },
  {
    id: 5,
    title: "چلو جوجه کباب",
    price: "165,000",
    category: "traditional",
    img: "./assets/images/food5.jpg",
    rateNum: 4.6,
    rateVote: "(16.562)",
    discount: ["../assets/images/discount12.png", "./assets/images/discount.png"]

  },
  {
    id: 6,
    title: "پیتزا پپرونی",
    price: "90,000",
    category: "fast-food",
    img: "./assets/images/food6.png",
    rateNum: 4.8,
    rateVote: "(10.000)",
    discount: ["./assets/images/discount10.png", "./assets/images/discount.png"]

  },

];




const wrapperCard = document.querySelector('.wrapper');

const containerBtn = document.querySelector('.btn-container');


// load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();

});



function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);
    return `
      <div class="menu-item">
      <div class="discount">
        <img src=${item.discount[0]}>
        <img src=${item.discount[1]}>
      </div>
      <i class="fa fa-heart" aria-hidden="true"></i>
      <div class="menu-image" style="background-image:url('${item.img}')">
      </div>
      <div class="menu-text">
        <div class="item-title">${item.title}</div>
        <div class="item-rate">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.69533 0.521791L4.86449 4.40022L0.768236 5.02416C0.0336581 5.13548 -0.260734 6.08165 0.271975 6.62358L3.23552 9.64078L2.53459 13.9029C2.40842 14.6734 3.18505 15.2504 3.83552 14.8901L7.5 12.8777L11.1645 14.8901C11.8149 15.2475 12.5916 14.6734 12.4654 13.9029L11.7645 9.64078L14.728 6.62358C15.2607 6.08165 14.9663 5.13548 14.2318 5.02416L10.1355 4.40022L8.30467 0.521791C7.97664 -0.16953 7.02617 -0.178317 6.69533 0.521791Z" fill="#FCD611"/>
      </svg>
      <span class="rateItem-num">${item.rateNum}</span>
      <span class="rateItem-str">${item.rateVote}</span>
      </div>
      
        <div class="item-purchase">
          <span class="price">${item.price}
            <span class="price-currency">تومان</span>
          </span>
          <button class="btn-purchase">مشاهده</button>
        </div>
      </div>
      </div>
   
    `
  });
  displayMenu = displayMenu.join("");
  wrapperCard.innerHTML = displayMenu;

}

function displayMenuButtons() {
  const categories = menu.reduce(function (values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }

    return values;
  },
    ["all"]
  );
  const categoryBtns = categories.map(function (category) {
    return `
    <button class="filter-li" data-id=${category}>${category}</button>
  `;

  })
    .join("");
  containerBtn.nodeValue = categoryBtns;
  const filterBtn = containerBtn.querySelectorAll(".filter-btn");
  // filter items
  filterBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id
      // filter method
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;

        }
      });
      // console.log(menuCategory);
      if (category === 'all') {
        displayMenuItems(menu)
      }
      else {
        displayMenuItems(menuCategory)
      }
    })
  });
}

var swiper = new Swiper(".mySwiper", {
  // swiper slider
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    268: {
      slidesPerView: 1,
      spaceBetweenSlides: 20,
    },
    600: {
      slidesPerView: 2,
      spaceBetweenSlides: 20
    },

    900: {
      slidesPerView: 3,
      spaceBetweenSlides: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetweenSlides: 30
    }
  }
})

//===============Sliding active class==============//
$(document).on('click', 'button', function () {
  $(this).addClass("active").siblings().removeClass("active")
})

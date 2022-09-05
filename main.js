// this is for img
const next = document.querySelector(".next-icon");
const previous = document.querySelector(".previous-icon");
const sneakerImg = document.querySelector(".sneaker-img");
const sneakerImg1 = document.querySelector(".sneaker-img1");
// --------------------------------------
// Cart showing selectors
// ---------------------------------
const cart = document.querySelector(".cart-img");
const cartShown = document.querySelector(".cart-box");
const cartActive = document.querySelector(".checked-visible");
const empty = document.querySelector(".empty");
const cartButton = document.querySelector(".cart-button");
const trash = document.querySelector(".trash");
// Menu showing
const menu = document.querySelector(".menu-img");
const sideContent = document.querySelector(".side-content");
const close = document.querySelector(".close");
//  -------------------------------------------
// plus/minus/ addToCart
const plus = document.querySelector(".plus-icon");
const minus = document.querySelector(".minus-icon");
const addToCart = document.querySelector(".button-second");
const countingSneaker = document.querySelector(".sneaker-counting");
const greyP = document.querySelector(".grey-p");
const lastPrice = document.querySelector(".last-price");
const orangeP = document.querySelector(".p-orange");

// image changing
let i = 1;
const imgNext = function () {
  if (i === 4) {
    i = 1;
  } else {
    i++;
  }
  sneakerImg.src = `images/image-product-${i}.jpg`;
};
const imgPrev = function () {
  if (i === 1) {
    i = 4;
  } else {
    i--;
  }
  sneakerImg.src = `images/image-product-${i}.jpg`;
};
next.addEventListener("click", imgNext);
previous.addEventListener("click", imgPrev);

// Cart showing
let displayCart = 1;
cart.addEventListener("click", function () {
  if (displayCart === 1) {
    cartShown.style.display = "flex";
    displayCart = 0;
  } else if (displayCart === 0) {
    cartShown.style.display = "none";
    displayCart = 1;
  }
  sideContent.style.display = "none";
});
trash.addEventListener("click", function () {
  cartActive.style.display = "none";
  empty.style.display = "flex";
  cartButton.style.display = "none";
  orangeP.innerHTML = 0;
  countingSneaker.innerHTML = "0";
  sneakerIndex = 0;
});
// Menu Showing
menu.addEventListener("click", function () {
  sideContent.style.display = "flex";
  cartShown.style.display = "none";
});
close.addEventListener("click", function () {
  sideContent.style.display = "none";
});

// Pricing plus/minus
// FIXME
let sneakerIndex = 1;
plus.addEventListener("click", function () {
  if (sneakerIndex === 50) {
    return (sneakerIndex = 50);
  } else {
    sneakerIndex++;
  }
  countingSneaker.innerHTML = sneakerIndex;
});
minus.addEventListener("click", function () {
  if (sneakerIndex === 0) {
    return (sneakerIndex = 0);
  } else {
    sneakerIndex--;
  }
  countingSneaker.innerHTML = sneakerIndex;
});
///////////////////////////
addToCart.addEventListener("click", function () {
  cartShown.style.display = "flex";
  empty.style.display = "none";
  cartButton.style.display = "flex";
  cartActive.style.display = "flex";
  greyP.innerHTML = `$125.00 x ${countingSneaker.innerHTML}`;
  orangeP.style.display = "flex";
  orangeP.innerHTML = countingSneaker.innerHTML;
  lastPrice.innerHTML = 125 * countingSneaker.innerHTML + ".00$";
});
// Small images clicking and changing main image and hover
const firstMethod = document.querySelectorAll(".firstMethod");
firstMethod.forEach((element) => {
  element.addEventListener("click", function () {
    firstMethod.forEach((element) => {
      element.classList.remove("active");
    });
    element.classList.add("active");
    sneakerImg.src = element.src;
  });
});
// Small images on zoomin changing main image
const smallImgs = document.querySelectorAll(".sec");
smallImgs.forEach((element) => {
  element.addEventListener("click", function () {
    sneakerImg1.src = element.src;
  });
});
// ///////////////////////////////////
// zoom image
const background = document.querySelector(".zoom-background");
const close1 = document.querySelector(".close1");
close1.style.cursor = "pointer";
close1.addEventListener("click", function () {
  background.style.display = "none";
});
sneakerImg.addEventListener("click", function () {
  if (window.screen.width >= 1440) {
    background.style.display = "flex";
  } else {
    background.style.display = "none";
  }
});
let index = 1;
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
leftArrow.addEventListener("click", function () {
  if (i === 4) {
    i = 1;
  } else {
    i++;
  }
  sneakerImg1.src = `images/image-product-${i}.jpg`;
});
rightArrow.addEventListener("click", function () {
  if (i === 1) {
    i = 4;
  } else {
    i--;
  }
  sneakerImg1.src = `images/image-product-${i}.jpg`;
});

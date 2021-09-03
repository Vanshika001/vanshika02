const selectImage = document.querySelectorAll("[data-src]");

const imageOptions = {
    root: null,
    threshold: 1,
    rootMargin: "200px"
};

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    }

    img.src = src;
}

const imgObserver = new IntersectionObserver(function (enteries, imgObserver) {
    enteries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        preloadImage(entry.target);
        imgObserver.unobserve(entry.target);
    });
}, imageOptions);

selectImage.forEach(image => {
    imgObserver.observe(image);
});


// Product-images 
// var productImg = document.getElementById("productImage");
// var smallImg = document.getElementsByClassName("smallImage");

// smallImg[0].onclick = function () {
//     productImg.src = smallImg[0].src;
// }
// smallImg[1].onclick = function () {
//     productImg.src = smallImg[1].src;
// }
// smallImg[2].onclick = function () {
//     productImg.src = smallImg[2].src;
// }
// smallImg[3].onclick = function () {
//     productImg.src = smallImg[3].src;
// }

//Cart Item
const btn = document.querySelector(".shop-item-button");
const overlay = document.querySelector(".cart-1");

btn.addEventListener('click', function () {
    overlay.classList.remove("hidden-class");
    document.querySelector(".cart-overlay").classList.remove("hidden-class");
    document.querySelector(".content").classList.remove("hidden-class");
})



















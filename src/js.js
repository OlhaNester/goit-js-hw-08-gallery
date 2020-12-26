import images from "./src/gallery-items.js";
console.log(images);

// const listGallery = document.querySelector(".gallery js-gallery");

// const elemLi = document.createElement("li");
// elemLi.classList.add("gallery__item");

// const elemRef = document.createElement("a");
// elemRef.classList.add("gallery__link");

// const elemImage = document.createElement("img");
// elemImage.classList.add("gallery__image");

// elemRef.appendChild(elemImage);
// elemLi.appendChild(elemRef);

// const createImage = images.map((image) => {
//   elemImage.setAttribute("src", image.preview);
//   elemImage.setAttribute("data-source", image.original);
//   elemImage.setAttribute("alt", image.description);
// });
// listGallery.appendChild(elemLi);

// const createRef = images.map((image) => {
//   elemRef.setAttribute("href", image.original);
// });

// const createGallery = images.map((image) => {
//     return `<li class = "class-li"><img class = "class-img" src =${image.url}, alt = ${image.alt}></li>`;
// });

// listGallery.insertAdjacentHTML("afterbegin", createGallery);

/* <li class="gallery__item">
    <a
        class="gallery__link"
        href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
    >
        <img
            class="gallery__image"
            src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
            data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
            alt="Tulips"
        />
    </a>
</li> */

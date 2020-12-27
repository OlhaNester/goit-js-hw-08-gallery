import images from "./gallery-items.js";

const createGallery = (image) => {
  const elemLi = document.createElement("li");
  elemLi.classList.add("gallery__item");

  const elemRef = document.createElement("a");
  elemRef.classList.add("gallery__link");

  const elemImage = document.createElement("img");
  elemImage.classList.add("gallery__image");

  elemRef.appendChild(elemImage);
  elemLi.appendChild(elemRef);

  elemImage.setAttribute("src", image.preview);
  elemImage.setAttribute("data-source", image.original);
  elemImage.setAttribute("alt", image.description);
  elemRef.setAttribute("href", image.original);

  return elemLi;
};

const Gallery = images.map((image) => createGallery(image));
const listGallery = document.querySelector(".js-gallery");
listGallery.append(...Gallery);
const divLightbox = document.querySelector(".js-lightbox");

listGallery.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const elemImage = event.target;
  const largeImageURL = elemImage.dataset.source;

  const imgLightbox = divLightbox.querySelector(".lightbox__image");
  imgLightbox.src = largeImageURL;
  divLightbox.classList.add("is-open");
}

const btnClose = divLightbox.querySelector(
  'button[data-action="close-lightbox"]'
);
btnClose.addEventListener("click", closeLargeImage);
function closeLargeImage() {
  divLightbox.classList.remove("is-open");
  const imgLightbox = divLightbox.querySelector(".lightbox__image");
  imgLightbox.src = "";
}

import images from "./src/gallery-items.js";

const createGallery = (images) => {
  
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


const Gallery = images.map(image => createGallery(image));
const listGallery = document.querySelector(".js-gallery");

listGallery.append(...Gallery);

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

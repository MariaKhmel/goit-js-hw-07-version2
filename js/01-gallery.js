import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
//refs
const refs = {
    galleryList: document.querySelector('.gallery'),
    
}

//eventListeners
refs.galleryList.addEventListener('click', pictureClick);


//markup
function gallerymarkUp(galleryItems) {
    return galleryItems.map((item) => {
        const { preview, original, description } = item;
        return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`

    }).join('');
}

const galleryPictures = gallerymarkUp(galleryItems);
refs.galleryList.insertAdjacentHTML('afterbegin', galleryPictures);

//
function pictureClick(e) {
    e.preventDefault();
    const pictureUrl = e.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${pictureUrl}" width="800" height="600">
`)

    instance.show();
    
    document.addEventListener('keydown', pictureCloseOnEscape);
    function pictureCloseOnEscape() {
        instance.close();
        document.removeEventListener('keydown', pictureCloseOnEscape);
    }
}

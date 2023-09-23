import { galleryItems } from './gallery-items.js';
// Change code below this line


const refs = {
    galleryList: document.querySelector('.gallery'),

}

function gallerymarkUp(items) {
    return items.map(item => {
        const { preview, original, description } = item;
        return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="Image ${description}" />
   </a>
</li>`
    }).join('');
    
}

const markUp = gallerymarkUp(galleryItems);
refs.galleryList.insertAdjacentHTML('afterbegin', markUp);

var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
 });

import galleryItems from './galleryItems.js';

const galleryContainerRef = document.querySelector('.js-gallery');
const galleryMarkup = cerateGalleryMarkup(galleryItems);
galleryContainerRef.insertAdjacentHTML('beforeEnd',galleryMarkup);
//console.log(galleryMarkup);

galleryContainerRef.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(e) {
  e.preventDefault();
  const originalImageRef = e.target.dataset.source;
  
  const lightBoxRef = document.querySelector('.js-lightbox');
  lightBoxRef.classList.add('is-open');

  const fullScreenImageRef = document.querySelector('.lightbox__image');
  fullScreenImageRef.src = originalImageRef;

  console.log(galleryItems);
  console.log(e.target.);

  const closeBtnRef = document.querySelector('button[data-action="close-lightbox"]');
  closeBtnRef.addEventListener('click', onCloseBtnClick);

  function onCloseBtnClick(e) {
    lightBoxRef.classList.remove('is-open');
    fullScreenImageRef.src = '';
  }

  window.addEventListener('keydown', onEscClick);
  
  function onEscClick(e) {
    if (e.code !== 'Escape') {
      return;
    }
    lightBoxRef.classList.remove('is-open');
    fullScreenImageRef.src = '';
  }


}

function cerateGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    })
    .join('');
};


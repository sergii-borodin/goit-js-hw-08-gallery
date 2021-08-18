import galleryItems from './galleryItems.js';
let currentIndex = null;

const galleryContainerRef = document.querySelector('.js-gallery');
const galleryMarkup = cerateGalleryMarkup(galleryItems);
galleryContainerRef.insertAdjacentHTML('beforeEnd', galleryMarkup);
const liArrayRef = document.querySelectorAll('.gallery__item');
//console.log(galleryMarkup);

galleryContainerRef.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(e) {
  e.preventDefault();
  // liArrayRef.forEach((li, index) => {
  //   if (e.target.closest('.gallery__item') !== li) {
  //     return;
  //   } else {
  //     currentIndex = index;
  //   }
  // });
  

  const originalImageRef = e.target.dataset.source;
  
  const lightBoxRef = document.querySelector('.js-lightbox');
  lightBoxRef.classList.add('is-open');

  let fullScreenImageRef = document.querySelector('.lightbox__image');
  fullScreenImageRef.src = originalImageRef;



  // console.log(galleryItems);
  // console.log(e.target);  
  
  // console.log(liArrayRef);

  // window.addEventListener('keydown', onArrowPress);

  // function onArrowPress(e) {

  //   if (e.code === 'ArrowRight') {
  //     liArrayRef.forEach((li, index) => {
  //      //console.log(li);
  //     if (e.target.closest('.gallery__item') !== li) {
  //       return;
  //     } else {
  //       currentIndex += 1;
  //       fullScreenImageRef.src = li.childNodes[1].href;
  //       //fullScreenImageRef = li.dataset.src;
        
  //       console.log(fullScreenImageRef.src);
  //       console.log(li.childNodes[1].href);
  //       console.log(currentIndex);
  //     }
  //   })
  //   } else if (e.code === 'ArrowLeft') {
  //     liArrayRef.forEach((li, index) => {
  //     // console.log(li);
  //     if (e.target.closest('.gallery__item') !== li) {
  //       return;
  //     } else {
  //       currentIndex -= 1;
  //       //fullScreenImageRef.nodeValue.src = li.dataset.source;
  //       console.log(fullScreenImageRef.src);
  //       fullScreenImageRef.src = li.childNodes[1].href;
  //       console.log(li.childNodes[1].href);

  //     //   console.log(e.target.closest('.gallery__item'));
  //     console.log(currentIndex);
  //     }
  //   })
  //   }     
  // }


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


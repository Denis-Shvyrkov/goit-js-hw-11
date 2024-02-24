import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { searchImages } from './js/pixabay-api';
import { galleryMarkup } from './js/render-functions';

const refs = {
  formEl: document.querySelector('.search-form'),
  imgGallery: document.querySelector('.gallery'),
  submitBtn: document.querySelector('.submit'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader-container'),
};

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

const iziToastOptions = {
  theme: 'light',
  backgroundColor: '#B51B1B',
  messageColor: '#FFFFFF',
  position: 'topRight',
  iconColor: '#FFFFFF',
  color: '#FFFFFF',
};

lightbox.on('show.simplelightbox');

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  refs.loader.classList.remove('hidden');
  refs.gallery.innerHTML = '';

  const query = e.target.elements.search.value.trim();
  searchImages(query)
    .then(resp => {
      if (query === '') {
        refs.loader.classList.add('hidden');
        iziToast.error({
          ...iziToastOptions,
          message: 'Please, enter a request!',
        });
        return;
      }
      if (resp.hits.length === 0) {
        refs.loader.classList.add('hidden');
        iziToast.error({
          ...iziToastOptions,
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        refs.loader.classList.remove('hidden');
        renderGallery(resp.hits);
        refs.loader.classList.add('hidden');
      }
    })
    .catch(err => {
      console.log(err);
    });
  e.target.reset();
});

function renderGallery(images) {
  const markup = galleryMarkup(images);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

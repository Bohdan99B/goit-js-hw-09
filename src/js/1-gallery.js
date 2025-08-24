import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/styles.css';

const galleryItems = [
  {
    preview: 'https://picsum.photos/id/1015/300/200',
    original: 'https://picsum.photos/id/1015/1200/800',
    description: 'Mountain Landscape',
  },
  {
    preview: 'https://picsum.photos/id/1025/300/200',
    original: 'https://picsum.photos/id/1025/1200/800',
    description: 'Cute Dog',
  },
  {
    preview: 'https://picsum.photos/id/1035/300/200',
    original: 'https://picsum.photos/id/1035/1200/800',
    description: 'City View',
  },
  {
    preview: 'https://picsum.photos/id/1045/300/200',
    original: 'https://picsum.photos/id/1045/1200/800',
    description: 'Forest Path',
  },
  {
    preview: 'https://picsum.photos/id/1055/300/200',
    original: 'https://picsum.photos/id/1055/1200/800',
    description: 'River',
  },
  {
    preview: 'https://picsum.photos/id/1065/300/200',
    original: 'https://picsum.photos/id/1065/1200/800',
    description: 'Bridge',
  },
];

const galleryContainer = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    ({ preview, original, description }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img class="gallery-image" src="${preview}" alt="${description}" />
      </a>
    </li>
  `
  )
  .join('');

galleryContainer.innerHTML = markup;

new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

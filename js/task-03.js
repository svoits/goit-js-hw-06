const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// select container for images
const galleryContainer = document.querySelector('.gallery');

// iterate each gallery item and create <li><img></li>
const galleryItems = images
  .map(
    ({ url, alt }) =>
      `<li>
      <img class="gallery-image" src="${url}" alt="${alt}">
    </li>`
  )
  .join('');

// add all images to the list
galleryContainer.insertAdjacentHTML('beforeend', galleryItems);

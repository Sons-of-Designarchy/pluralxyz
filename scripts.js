'use strict';

const modal = document.querySelector('.modal');
const videoContainer = document.querySelector('.modal-video-container');
const closeBtn = document.querySelector('.close-button');

function openModal(url) {
  videoContainer.innerHTML = '';

  const iframe = document.createElement('iframe');
  iframe.width = '100%';
  iframe.height = '315';
  iframe.src = url + '?&autoplay=1';
  iframe.allow =
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;
  iframe.frameBorder = 0;

  videoContainer.appendChild(iframe);
  modal.style.display = 'flex';
}

function closeModal() {
  videoContainer.innerHTML = '';
  modal.style.display = 'none';
}

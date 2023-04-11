const pictureTemplate = document.querySelector("#picture")

export function drawMiniatures(photoData) {
  const pictureFragments = document.createDocumentFragment();
  for (const {url, likes, comments} of photoData) {
    const newPicture = pictureTemplate.cloneNode(true).content;

    newPicture.querySelector('.picture__img').src = url;
    newPicture.querySelector('.picture__likes').textContent = likes;
    newPicture.querySelector('.picture__comments').textContent = comments;
    
    pictureFragments.append(newPicture);
  }
  document.querySelector('.pictures').appendChild(pictureFragments);
}
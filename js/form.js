import { checkMaxLength, isEscapeKey } from './util.js';
import { addPreviewControls, removePreviewControls } from './imagePreview.js';

const TAG_ERROR_MESSAGE = 'Неправильно заполнены тэги';
const COMMENT_ERROR_MESSAGE = 'Дляна комментария должна быть от 20 до 140 символов';

const overlay = document.querySelector('.img-upload__overlay'),
  fileUpload = document.querySelector('#upload-file'),
  form = document.querySelector('#upload-select-image'),
  closeButton = document.querySelector('#upload-cancel'),
  hashtags = document.querySelector('.text__hashtags'),
  comment = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-ipload__field-wrapper-error',
});

const areTagsUnique = (tags) => {
  const tagSet = new Set(tags);
  return tags.length === tagSet.size;
};

const validateHashtags = (value) => {
  const tags = value.trim().split(' ');
  return areTagsUnique(tags);
};

const validateComment = (value) => checkMaxLength(value, 140) && !checkMaxLength(value, 19);

function addValidation() {
  pristine.addValidator(hashtags, validateHashtags, TAG_ERROR_MESSAGE);
  pristine.addValidator(comment, validateComment, COMMENT_ERROR_MESSAGE);

  form.addEventListener('submit', (ev) => {
    ev.presentDefault();
    pristine.validate();
  });
}

function clearForm() {
  fileUpload.value = '';
  hashtags.value = '';
  comment.value = '';
}

function closeOverlay() {
  form.reset();
  pristine.reset();
  clearForm();

  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.body.removeEventListener('keydown', onEscapeKeyDown);

  removePreviewControls();
}

function openOverlay() {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.body.addEventListener('keydown', onEscapeKeyDown);
  closeButton.addEventListener('click', closeOverlay);

  addPreviewControls();
}

function onEscapeKeyDown(ev) {
  if (isEscapeKey(ev)) {
    ev.preventDefault();
    closeOverlay();
  }
}

export function openForm() {
  addValidation();
  fileUpload.addEventListener('change', openOverlay);
}

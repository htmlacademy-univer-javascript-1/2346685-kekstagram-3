//Задание 7 часть 2
import { generatePhotoData } from './data.js';
import { drawMiniatures } from './dom.js';
import { openForm } from './form.js';

const photoData = generatePhotoData(20);
drawMiniatures(photoData);

openForm();

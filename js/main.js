//Задание 7 часть 2
import { generatePhotoData } from './data.js';
import { checkMaxLength } from './util.js';
import { drawMiniatures } from './dom.js';

checkMaxLength('Hello world!', 255);
const photoData = generatePhotoData(20);
drawMiniatures(photoData);

'use stric';

let collect = document.querySelectorAll('.books'),
    elem = document.querySelectorAll('.book'),
    body = document.querySelector('body'),
    adv = document.querySelector('.adv'),
    h2 = document.querySelectorAll('h2 a'),
    li = document.querySelectorAll('.book ul li'),
    newElem = document.createElement('li');

// Восстановить порядок книг.
collect[0].appendChild(elem[1]);
collect[0].appendChild(elem[0]);
collect[0].appendChild(elem[4]);
collect[0].appendChild(elem[3]);
collect[0].appendChild(elem[5]);
collect[0].appendChild(elem[2]);

// Заменить картинку заднего фона на другую из папки image
body.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)');

// Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
h2[4].textContent='Книга 3. this и Прототипы Объектов';

// Удалить рекламу со страницы
adv.setAttribute('style', 'display: none');

// Восстановить порядок глав во второй и пятой книге
elem[0].appendChild(li[0]);
elem[0].appendChild(li[1]);
elem[0].appendChild(li[3]);
elem[0].appendChild(li[6]);
elem[0].appendChild(li[8]);
elem[0].appendChild(li[4]);
elem[0].appendChild(li[5]);
elem[0].appendChild(li[7]);
elem[0].appendChild(li[9]);
elem[0].appendChild(li[2]);
elem[0].appendChild(li[10]);

elem[5].appendChild(li[0]);
elem[5].appendChild(li[1]);
elem[5].appendChild(li[9]);
elem[5].appendChild(li[3]);
elem[5].appendChild(li[4]);
elem[5].appendChild(li[2]);
elem[5].appendChild(li[6]);
elem[5].appendChild(li[7]);
elem[5].appendChild(li[5]);
elem[5].appendChild(li[8]);
elem[5].appendChild(li[10]);

// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
newElem.textContent = 'Глава 8: За пределами ES6';
elem[2].appendChild(newElem);
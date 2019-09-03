'use stric';

let collect = document.querySelectorAll('.books'),
    elem = document.querySelectorAll('.book'),
    body = document.querySelector('body'),
    adv = document.querySelector('.adv'),
    h2 = document.querySelectorAll('h2 a'),
    ul = document.querySelectorAll('ul'),
    li = document.querySelectorAll('li'),
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
ul[0].insertBefore(li[8], li[4]);
ul[0].insertBefore(li[6], li[8]);
ul[0].insertBefore(li[2], li[10]);

ul[5].insertBefore(li[55], li[48]);
ul[5].insertBefore(li[48], li[51]);
ul[5].insertBefore(li[51], li[54]);

// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
newElem.textContent = 'Глава 8: За пределами ES6';
ul[2].appendChild(newElem);
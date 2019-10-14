/* ВЗАИМОДЕЙСТВИЯ С ЭЛЕМЕНТАМИ */
$('h2, p') // первый, второй, третий и тд
$('h2 span') // outer и inner
$('h2 > span') // parent > child
$('h2 + p') // perv + next
$('h2 ~ p').css('border', '2px solid #000'); // perv ~ next
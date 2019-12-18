// Получив сообщение поток делает ответ.
addEventListener("message", function (e) {
	// продолжение вычисления

	postMessage(e.data); // Отправка данных основному потоку. На странице будет вызвано событие message
}, true);
/*JSON (javaScript object notation. Текстовый формат обмена данными)
набор пар: ключ-значение
*/

let option={
	width: 1366,
	height: 768,
	background: 'red',
	font: {
		size: '16px',
		color: '#fff'
	}
};
let to_json=JSON.stringify(option);

//выгрузили на "сервер" в формате JSON.
console.log(to_json);

//обратно преобразуем в js-объект JSON, поченный от "сервера"
let from_json=JSON.parse(to_json);
console.log(from_json);

/*
раньше использовался XML,
Преимущества JSON - конпактность
стравнение to_json - как будет выглядеть в формате XML
https://www.freeformatter.com/json-to-xml-converter.html#ad-output
*/
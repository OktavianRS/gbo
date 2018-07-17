(function() {
	// initEventListeners();

})();

const DEFAULT_DATA = {
	1: [
		{
			city: '1Полтава',
			address: 'Ул Пушкина дом Колотушкина',
			phone: '0998371829',
			link: '#'
		},
		{
			city: 'Полтава',
			address: 'Ул Пушкина дом Колотушкина',
			phone: '0998371829',
			link: '#'
		},
		{
			city: 'Полтава',
			address: 'Ул Пушкина дом Колотушкина',
			phone: '0998371829',
			link: '#'
		},
	],
	2: [
		{
			city: '2Полтава',
			address: 'Ул Пушкина дом Колотушкина',
			phone: '0998371829',
			link: '#'
		},
		{
			city: 'Полтава',
			address: 'Ул Пушкина дом Колотушкина',
			phone: '0998371829',
			link: '#'
		},
		{
			city: 'Полтава',
			address: 'Ул Пушкина дом Колотушкина',
			phone: '0998371829',
			link: '#'
		},
	],
	3: [
		{
			city: '3Полтава',
			address: 'Ул Пушкина дом Колотушкина',
			phone: '0998371829',
			link: '#'
		},
		{
			city: 'Полтава',
			address: 'Ул Пушкина дом Колотушкина',
			phone: '0998371829',
			link: '#'
		},
		{
			city: 'Полтава',
			address: 'Ул Пушкина дом Колотушкина',
			phone: '0998371829',
			link: '#'
		},
	],
	4: [
		{
			city: '4Полтава',
			address: 'Ул Пушкина дом Колотушкина',
			phone: '0998371829',
			link: '#'
		},
		{
			city: 'Полтава',
			address: 'Ул Пушкина дом Колотушкина',
			phone: '0998371829',
			link: '#'
		},
		{
			city: 'Полтава',
			address: 'Ул Пушкина дом Колотушкина',
			phone: '0998371829',
			link: '#'
		},
	],
	5: [
		{
			city: '5Полтава',
			address: 'Ул Пушкина дом Колотушкина',
			phone: '0998371829',
			link: '#'
		},
		{
			city: 'Полтава',
			address: 'Ул Пушкина дом Колотушкина',
			phone: '0998371829',
			link: '#'
		},
		{
			city: 'Полтава',
			address: 'Ул Пушкина дом Колотушкина',
			phone: '0998371829',
			link: '#'
		},
	],
};

function initEventListeners() {
	var classname = document.getElementsByClassName("uk-card");

	for (var i = 0; i < classname.length; i++) {
	    classname[i].addEventListener('click', handleClick, false);
	}
}

function handleClick(button) {
	console.log(button);
    removeActiveClass();
    document.getElementById(button + '').classList.add('active');
    openDataTable(DEFAULT_DATA[button]);
};

function removeActiveClass() {
	var classname = document.getElementsByClassName("uk-card");
	for (var i = 0; i < classname.length; i++) {
	    classname[i].classList.remove('active');
	}
}

function openDataTable(data) {
	var html = '';
	for (var i = 0; i < data.length; i++) {
		html +=
		'<tr>'+
		'<td>' + data[i].city + '</td>' +
		'<td>' + data[i].address + '</td>' +
		'<td>' + data[i].phone + '</td>' +
		'<td><a class="uk-link-text" href="' + data[i].link + '">Перейти на сайт</a></td>' +
		'</tr>';
	}
	document.getElementById('table-body').innerHTML = html;
}

"use strict"
// Логика работы Прелоадера
window.addEventListener('load', function () {
	var preloader = document.getElementById('preloader')
	preloader.style.display = 'none'
})

// Логика работы фильтра в разделе проектов
const filterProjects = document.querySelectorAll('.project')

document.querySelector('nav').addEventListener('click', event => {
	if (event.target.tagName !== 'DIV') return false

	let filterClass = event.target.dataset['f']

	filterProjects.forEach(elem => {
		elem.classList.remove('hide')
		if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
			elem.classList.add('hide')
		}
	})
})

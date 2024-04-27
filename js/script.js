window.addEventListener('load', function () {
	var preloader = document.getElementById('preloader')
	preloader.style.display = 'none'
})

const cards = document.querySelectorAll('.card')

cards.forEach(card => {
	card.addEventListener('click', () => {
		// Обработчик клика по карточке
		console.log('Карточка нажата!')
		// Вы можете добавить сюда нужный функционал, например, переход на другую страницу
	})
})

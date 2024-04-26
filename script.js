const cards = document.querySelectorAll('.card')

cards.forEach(card => {
	card.addEventListener('click', () => {
		// Обработчик клика по карточке
		console.log('Карточка нажата!')
		// Вы можете добавить сюда нужный функционал, например, переход на другую страницу
	})
})

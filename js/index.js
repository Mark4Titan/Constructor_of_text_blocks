const doc = document
// import

const inImg = doc.querySelector('input[class="inP"]')
const imgRevision = doc.querySelector('img[class="picture"]')

const inTitle = doc.getElementById('title')
const inSrc = doc.getElementById('url')
const inText = doc.getElementById('text')
const moreDownload = doc.getElementById('notReal')

const inputs = doc.getElementById('inputTitle')

const btnCreate = doc.querySelector('button[data-action="render"]')

const outUl = doc.getElementById('card')
let urls

// let element

const cardArr = []

btnCreate.addEventListener('click', () => createBoxes())
moreDownload.addEventListener('click', () => modulDownload())

const createBoxes = () => {
	cardArr.push(createСard())

	if (cardArr.length <= 10) {
		// outUl.parentNode.removeChild(element)
		// console.log(element)
		// outUl.removeChild(element)

		outUl.appendChild(cardArr[cardArr.length - 1])
		// outUl.appendChild(notRealCard())
		// outUl.appendChild(createСard())
	} else {
		console.log('cardArr.length = ', cardArr.length)
	}

	if (cardArr.length === 10) {
		// outUl.className = 'card on'
		// notRealCard()
		// notReal = doc.querySelectorAll('li[class="items on"]')
		// console.log(notReal)
		moreDownload.className = 'items moreDownload'
	}

	clear()
}

const modulDownload = () => {
	console.log(cardArr.length)
}

// const notRealCard = () => {
// 	const element_li = doc.createElement('li')
// 	element_li.classList = 'items del on'

// 	const element_div = doc.createElement('div')
// 	element_div.classList = 'boxItems moreDownload'
// 	// element_div.id = 'notRealCard'

// 	const element_p = doc.createElement('p')
// 	element_p.classList = 'more'
// 	element_p.appendChild(doc.createTextNode('Загрузить больше'))

// 	element_div.appendChild(element_p)
// 	element_li.appendChild(element_div)
// 	outUl.append(element_li)
// 	// element = doc.querySelector('li[class="items del on"]')
// }

// notRealCard()
// element = document.querySelector('li[class="items del on"]')

// element.addEventListener('click', function (e) {
// 	console.log('ok')
// })

const clear = () => {
	inImg.src = '../newm.jpg'
	inTitle.value = 'Заголовок'
	inSrc.value = 'Ссылка'
	inText.value = 'Текст'
	urls = ''
	imgRevision.src = '../newm.jpg'
}

const createСard = function (
	src = '../newm.jpg',
	// src = urls,
	// src = inImg.value,
	// src = URL.createObjectURL(inImg.value),

	title = inTitle.value,
	text = inText.value
) {
	const element_li = doc.createElement('li')
	element_li.classList = 'items'

	const element_div = doc.createElement('div')
	element_div.classList = 'boxItems'

	const element_a = doc.createElement('a')
	element_a.href =
		'https://www.google.com/?&bih=635&biw=1360&rlz=1C1SQJL_ruUA920UA920&hl=uk'

	const element_img = doc.createElement('img')
	element_img.classList = 'imgM'
	element_img.src = `${src}`

	const element_label = doc.createElement('label')
	element_label.classList = 'text'
	element_label.appendChild(doc.createTextNode(`${title}`))

	const element_p = doc.createElement('p')
	element_p.classList = 'text'
	element_p.appendChild(doc.createTextNode(`${text}`))
	element_a.appendChild(element_img)
	element_div.appendChild(element_a)
	element_div.appendChild(element_label)
	element_div.appendChild(element_p)
	element_li.appendChild(element_div)

	return element_li
}

doc.getElementById('filetag').addEventListener('change', function (e) {
	const newImg = doc.createElement('img')
	newImg.src = e.target.files[0]
	newImg.src = URL.createObjectURL(e.target.files[0])
	console.log(newImg.src)
	imgRevision.src = newImg.src
	urls = newImg.src
})

const corrector = () => {
	if (inImg.src === '') inImg.src = '../newm.jpg'
	if (inTitle.value === '') inTitle.value = 'Заголовок'
	if (inSrc.value === '') inSrc.value = 'Ссылка'
	if (inText.value === '') inText.value = 'Текст'
	if (imgRevision.src === '') imgRevision.src = '../newm.jpg'
}

inputs.addEventListener('mouseup', function (e) {
	corrector()
	if (
		e.path[0].value === 'Заголовок' ||
		e.path[0].value === 'Ссылка' ||
		e.path[0].value === 'Текст'
	)
		e.path[0].value = ''
	// console.log(e.path[0])
})

// notReal.addEventListener('mouseup', function (e) {
// 	console.log(e)
// 	// notReal.className = 'items hidden'
// })

const valid = key => {
	if (
		key !== 'Shift' &&
		key !== 'Control' &&
		key !== ' ' &&
		key !== 'Alt' &&
		key !== 'Backspace' &&
		key !== 'Tab' &&
		key !== 'ArrowUp' &&
		key !== 'ArrowDown' &&
		key !== 'ArrowLeft' &&
		key !== 'ArrowRight' &&
		key !== 'Delete' &&
		key !== 'Enter' &&
		key !== 'CapsLock' &&
		key.search(/[А-Яа-яЁё]/) === -1
	)
		alert('только кириллические символы')
	// console.log(inTitle.value.length > 20)
	inTitle.value.length > 20 &&
		alert('в поле "Заголовок" можно ввести не более 20 символов')
	// console.log(inText.value.length > 25)
	inText.value.length > 250 &&
		alert('в поле "Текст " можно ввести не более 250 символов')
}

inputs.addEventListener('keyup', function (e) {
	console.log(e.key)
	valid(e.key)
})

// notReal.addEventListener('click', () => console.log('ok'))

// const downloadMore = () => {
// 	console.log('ok')
// }

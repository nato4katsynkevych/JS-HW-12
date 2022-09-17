import name from './fetchCountries'
import countryCard from './countryCard.hbs'
import countryList from './countryList.hbs'

const countryCardRef = document.querySelector('.wrapper')
const inputRef = document.querySelector('.input')
var debounce = require('lodash.debounce');

inputRef.addEventListener('input', debounce(onInput, 500));

function renderCountryList(array) {
	const names = array.map(item => item.name);
	const markup = countryList({ names });
	countryCardRef.insertAdjacentHTML('afterbegin', markup);
}

function addOnInput(name) {
	const country = countryCard(...name)
	countryCardRef.insertAdjacentHTML('beforeend', country)
}

function onInput(e) {
	countryCardRef.textContent = "";
	const countryName = e.target.value

	name(countryName).then(data => {

		const amountCountries = data.length

		if (amountCountries >= 2 && amountCountries <= 10) {
			countryCardRef.innerHTML = ""
			renderCountryList(data)
		}
		if (amountCountries >= 10) {
			countryCardRef.innerHTML = ""
			window.alert('please, more information')
		}
		if (amountCountries === 1) {
			countryCardRef.innerHTML = ""
			addOnInput(data)
		}
	})
		.catch(err => console.log("ошибка"))
}

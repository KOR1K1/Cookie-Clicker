let cookie = document.getElementById('cookie')
let countClick = document.getElementById('count-click')
let uc
let counter = 0
let counter_two = 1
let clickerPrice = Math.round(100)
let farmPrice = Math.round(1500)
let lvlUpgradeClicker = 0
let lvlUpgradeFarm = 0
let expectedCookie = 0
let expectedCookieFarm = 0

function onClickCookie() {
	counter = counter + counter_two
	countClick.innerHTML = 'Количество печенья: ' + counter
}

function upgradeCursor(uc) {
	if (counter >= clickerPrice) {
		counter = counter - clickerPrice
		counter_two += 1;
		lvlUpgradeClicker++;
		clickerPrice = Math.round(clickerPrice * 1.85)
		uc.innerHTML =
			'<p>Улучшить курсор</p>' +
			'<p>' +
			'Цена: ' +
			clickerPrice +
			'</p>' +
			'Уровень ' +
			lvlUpgradeClicker
		console.log('Успешная покупка')
		alert('Успешное улучшение!')
		countClick.innerHTML = 'Количество печенья: ' + counter
	} else {
		expectedCookie = clickerPrice - counter
		console.log('Нехватает ' + expectedCookie + ' печенья')
		alert('Нехватает ' + expectedCookie + ' печенья')
	}
}

function upgradeFarm(uf) {
	if (counter >= farmPrice) {
		counter = counter - farmPrice
		lvlUpgradeFarm++
		farmPrice = Math.round(farmPrice * 1.85)
		setInterval(() => {
			counter++
			countClick.innerHTML = 'Количество печенья: ' + counter
		}, 1000)
		uf.innerHTML =
			'<p>Купить ферму</p>' +
			'<p>' +
			'Цена: ' +
			farmPrice +
			'</p>' +
			'Уровень ' +
			lvlUpgradeFarm
		console.log('Успешная покупка')
		alert('Успешное улучшение!')
		countClick.innerHTML = 'Количество печенья: ' + counter
	} else {
		expectedCookieFarm = farmPrice - counter
		console.log('Нехватает ' + expectedCookieFarm + ' печенья')
		alert('Нехватает ' + expectedCookieFarm + ' печенья')
	}
}

let cookie = document.getElementById('cookie')
let countClick = document.getElementById('count-click')
let upgradeCursorLet = document.getElementById('upgrade-cursor')
let upgradeFarmLet = document.getElementById('upgrade-farm')
let counter = 0
let counter_two = 1
let clickerPrice = Math.round(100)
let farmPrice = Math.round(1500)
let lvlUpgradeClicker = 0
let lvlUpgradeFarm = 0
let expectedCookie = 0
let expectedCookieFarm = 0
let FarmPerSecond = 0
let aboutTheUpdate = document.getElementById('abouthui')
let dontShowAgain = 0

if (localStorage.getItem('dontShowAgain') >= 1) {
	aboutTheUpdate.classList.add("obnova")
}

counter = Number(localStorage.getItem("counter"))
farmPrice = Number(localStorage.getItem("farmPrice"));
clickerPrice = Number(localStorage.getItem("clickerPrice"))
FarmPerSecond = Number(localStorage.getItem("FarmPerSecond"));
lvlUpgradeClicker =Number( localStorage.getItem("lvlUpgradeClicker"))
lvlUpgradeFarm = Number(localStorage.getItem("lvlUpgradeFarm"))
counter_two = Number(localStorage.getItem("counter_two"))


countClick.innerHTML = 'Количество печенья: ' + Number(localStorage.getItem("counter"));
upgradeCursorLet.innerHTML = '<p>Улучшить курсор</p>' + '<p>' + 'Цена: ' + localStorage.getItem("clickerPrice") + '</p>' + 'Уровень ' + localStorage.getItem("lvlUpgradeClicker")
upgradeFarmLet.innerHTML = '<p>Купить ферму</p>' + '<p>' + 'Цена: ' + localStorage.getItem("farmPrice") + '</p>' + 'Уровень ' + localStorage.getItem("lvlUpgradeFarm")

function onClickCookie() {
	counter += counter_two
	Number(localStorage.setItem("counter", counter))
	countClick.innerHTML = 'Количество печенья: ' + counter;
}

setInterval(() => {
	counter = Number(localStorage.getItem("counter")) + Number(FarmPerSecond = localStorage.getItem("FarmPerSecond"))
	Number(localStorage.setItem("counter", counter))
	countClick.innerHTML = 'Количество печенья: ' + Number(localStorage.getItem("counter"));
}, 1000)
function upgradeCursor(uc) {
	if (Number(localStorage.getItem("counter")) >= Number(localStorage.getItem("clickerPrice"))) {
		counter = counter - clickerPrice
		Number(localStorage.setItem("counter", counter))
		counter_two += 1;
		Number(localStorage.setItem("counter_two", counter_two))
		lvlUpgradeClicker++;
		Number(localStorage.setItem("lvlUpgradeClicker", lvlUpgradeClicker))
		clickerPrice = Math.round(clickerPrice * 1.85)
		Number(localStorage.setItem("clickerPrice", clickerPrice))
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
		countClick.innerHTML = 'Количество печенья: ' + Number(localStorage.getItem("counter"));
	} else {
		expectedCookie = clickerPrice - Number(localStorage.getItem("counter"));
		console.log('Нехватает ' + expectedCookie + ' печенья')
		alert('Нехватает ' + expectedCookie + ' печенья')
	}
}

function upgradeFarm(uf) {
	if (Number(localStorage.getItem("counter")) >= Number(farmPrice = localStorage.getItem("farmPrice"))) {
		counter = Number(localStorage.getItem("counter")) - Number(farmPrice = localStorage.getItem("farmPrice"));
		Number(localStorage.setItem("counter", counter))
		lvlUpgradeFarm++
		Number(localStorage.setItem("lvlUpgradeFarm", lvlUpgradeFarm))
		FarmPerSecond++
		Number(localStorage.setItem("FarmPerSecond", FarmPerSecond))
		farmPrice = Math.round(farmPrice * 1.85)
		Number(localStorage.setItem("farmPrice", farmPrice))
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
		countClick.innerHTML = 'Количество печенья: ' + Number(localStorage.getItem("counter"));
	} else {
		expectedCookieFarm = farmPrice - Number(localStorage.getItem("counter"));
		console.log('Нехватает ' + expectedCookieFarm + ' печенья')
		alert('Нехватает ' + expectedCookieFarm + ' печенья')
	}
}

function hideAbout() {
	if (localStorage.getItem('dontShowAgain') == 0) {

	
aboutTheUpdate.classList.add('obnova')
dontShowAgain++
Number(localStorage.setItem("dontShowAgain", 1))
} else {
console.log('Nothing')
}
} 

function wipeData() {
Number(localStorage.setItem("counter", 0));
Number(localStorage.setItem("dontShowAgain", 0))
aboutTheUpdate.classList.remove('obnova')
Number(localStorage.setItem("farmPrice", 1500));
Number(localStorage.setItem("clickerPrice", 100));
Number(localStorage.setItem("FarmPerSecond", 0));
Number(localStorage.setItem("lvlUpgradeClicker", 0));
Number(localStorage.setItem("lvlUpgradeFarm", 0));
Number(localStorage.setItem("counter_two", 1));
counter = Number(localStorage.getItem("counter"))
farmPrice = Number(localStorage.getItem("farmPrice"));
clickerPrice = Number(localStorage.getItem("clickerPrice"))
FarmPerSecond = Number(localStorage.getItem("FarmPerSecond"));
lvlUpgradeClicker = Number(localStorage.getItem("lvlUpgradeClicker"))
lvlUpgradeFarm = Number(localStorage.getItem("lvlUpgradeFarm"))
counter_two = Number(localStorage.getItem("counter_two"))
countClick.innerHTML = 'Количество печенья: ' + Number(localStorage.getItem("counter"));
upgradeCursorLet.innerHTML = '<p>Улучшить курсор</p>' + '<p>' + 'Цена: ' + localStorage.getItem("clickerPrice") + '</p>' + 'Уровень ' + localStorage.getItem("lvlUpgradeClicker")
upgradeFarmLet.innerHTML = '<p>Купить ферму</p>' + '<p>' + 'Цена: ' + localStorage.getItem("farmPrice") + '</p>' + 'Уровень ' + localStorage.getItem("lvlUpgradeFarm")
}





const companyName = 'KristyGames';

const mainUrl = 'https://kristy-games.github.io/';
const homeUrl = `${mainUrl}Home`
const localPath = 'C:/Users/Kristy/Documents/GitHub/kristy-games.github.io/';

const stylePath = 'Resources/css/style.css';
const imagePath = `${mainUrl}Resources/Images/`;

const logoImageUrl = `${imagePath}Logo/Logo.png`;

const svgUrl = `${mainUrl}Resources/svg/SVG.svg`;

const squareButtonUrl = `${imagePath}Buttons/SquareButton.png`;
const rectangleButtonUrl = `${imagePath}Buttons/RectangleButton.png`;

const appleIconUrl = `${imagePath}StoreIcons/Apple_Icon.png`;
const googleIconUrl = `${imagePath}StoreIcons/Google_Icon.png`;

const appleStorePath = 'http://apps.apple.com/app/';
const googleStorePath = `http://play.google.com/store/apps/details?id=com.${companyName}.`;

const appleButtonTitle = 'Download on the Apple App Store';
const appleButtonAlt = 'Apple App Store Icon';
const googleButtonTitle = 'Download on the Google Play Store';
const googleButtonAlt = 'Google Play Store Icon';

const userAgent = navigator.userAgent || navigator.vendor || window.opera;
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
const isAndroid = /Android/i.test(userAgent);
const isIOS = /iPhone|iPad|iPod/i.test(userAgent);

const rockPaperScissorsApple = 'xcode/id497799835';
//const rockPaperScissorsAppleId ? '{gameNamePath}/id{rockPaperScissorsAppleId}'

document.addEventListener('DOMContentLoaded', function () {

	var elements = document.querySelectorAll('[data-type]');

	if (elements.length > 0) {

		elements.forEach(function (element) {

			var dataType = element.getAttribute('data-type');

			switch (dataType)
			{
			case 'Logo':
				setLogo(element);
				break;
			case 'TextButton':
				setTextButton(element);
				break;
			case 'HomeButton':
				setHomeButton(element);
				break;
			case 'GameSection':
				setGameSection(element);
				break;
			case 'Redirect':
				redirect(element);
				break;
			}
		});
	}

	var stylesheet = document.getElementById('stylesheet');

	if (stylesheet)
	{
		if (window.location.protocol === 'file:') {

			stylesheet.href = `${localPath}${stylePath}`;
			createDarkButton();
		}
	}
});

function setLogo(image) {

	image.className = 'image logo';
	image.src = logoImageUrl;
	image.title = companyName;
	image.alt = ``;
}

function setTextButton(anchor) {

	var id = anchor.id;
	var idPath = getPath(id);
	anchor.className = 'button';
	anchor.title = id;
	anchor.href = `${mainUrl}${idPath}`;

	var span = document.createElement('span');
	span.textContent = id;
	anchor.appendChild(span);

	var image = document.createElement('img');
	image.src = rectangleButtonUrl;
	image.alt = `${id} Button`;
	anchor.appendChild(image);
}

function setHomeButton(anchor) {

	var id = 'Home Button';
	anchor.className = 'button home';
	anchor.title = 'Home';
	anchor.href = homeUrl;

	fetch(svgUrl)
	.then(response => response.text())
	.then(svgData => {
		var svgDoc = new DOMParser().parseFromString(svgData, 'image/svg+xml');
		var externalSVG = svgDoc.getElementById('Home');
		var clonedSVG = externalSVG.cloneNode(true);
		anchor.appendChild(clonedSVG);
	});

	var image = document.createElement('img');
	image.src = squareButtonUrl;
	image.alt = id;
	anchor.appendChild(image);
}

function setGameSection(gameSection) {

	var gameName = gameSection.getAttribute('data-gameName');
	var gameNamePath = getPath(gameName);

	var gameIcon = gameSection.querySelector('[data-type="GameIcon"]');
	var gameTitle = gameSection.querySelector('[data-type="GameTitle"]');
	var gameQR = gameSection.querySelector('[data-type="GameQR"]');
	var appleButton = gameSection.querySelector('[data-type="AppleButton"]');
	var googleButton = gameSection.querySelector('[data-type="GoogleButton"]');

	if (gameIcon) {
		gameIcon.className = 'image gameIcon';
		gameIcon.src = `${imagePath}AppIcons/${gameNamePath}_Icon.png`;
		gameIcon.title = gameName;
		gameIcon.alt = `${gameName} Icon`;
	}

	if (gameTitle) {
		gameTitle.className = 'text gameTitle';
		gameTitle.title = gameName;
		gameTitle.textContent = gameName;
	}

	if (gameQR)	{		
		gameQR.className = 'image gameQR';
		gameQR.src = `${imagePath}QRCodes/${gameNamePath}_QR.png`;
		gameQR.title = `Download ${gameName}`;
		gameQR.alt = `${gameName} QR Code`;
	}

	if (appleButton) {

		appleButton.className = 'button';
		appleButton.title = appleButtonTitle;
		appleButton.target = '_blank';
		appleButton.href = getAppleUrl(gameNamePath);

		var image = document.createElement('img');
		image.src = appleIconUrl;
		image.alt = appleButtonAlt;
		appleButton.appendChild(image);
	}

	if (googleButton) {

		googleButton.className = 'button';
		googleButton.title = googleButtonTitle;
		googleButton.target = '_blank';
		googleButton.href = getGoogleUrl(gameNamePath);
		
		var image = document.createElement('img');
		image.src = googleIconUrl;
		image.alt = googleButtonAlt;
		googleButton.appendChild(image);
	}
}

function createDarkButton() {

	var button = document.createElement('button');
	button.className = 'button dark';
	button.textContent = 'Dark';
	button.onclick = function() {
		document.body.classList.toggle('dark');
	};
	document.body.appendChild(button);
}

function redirect(element) {
	
	// if (isMobile) {
		var gameName = element.getAttribute('data-gameName');
		var gameNamePath = getPath(gameName);
		//var appScheme = `${gameNamePath}://`;
		//app + joinCode/blank

		var iframe = document.createElement('iframe');
		iframe.style.display = 'none';
		// iframe.src = appScheme;
		iframe.src = "instagram://";
		document.body.appendChild(iframe);

		setTimeout(function() {

			var targetUrl;

			if (isIOS) targetUrl = getAppleUrl(gameNamePath);
			else if (isAndroid) targetUrl = getGoogleUrl(gameNamePath);

			window.target = '_blank';
			window.location.href = targetUrl;

		}, 1000);

	// setTimeout(function() {
	// 	document.body.removeChild(iframe);
	// }, 1500);
	// }
}

function getAppleUrl(gameNamePath) {

	switch (gameNamePath) {

	case 'RockPaperScissors':
		return `${appleStorePath}${rockPaperScissorsApple}`;
	}
}

function getGoogleUrl(gameNamePath) {

	return `${googleStorePath}${gameNamePath}`;
}

function getPath (string) {
	return string.split(' ').join('');
}
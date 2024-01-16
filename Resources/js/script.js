var mainUrl = 'https://kristy-games.github.io/';
var homeUrl = `${mainUrl}Home`
var localPath = 'C:/Users/Kristy/Documents/GitHub/kristy-games.github.io/';

var stylePath = 'Resources/css/style.css';
var imagePath = `${mainUrl}Resources/Images/`;

var logoImageUrl = `${imagePath}Logo/Logo.png`;

var svgUrl = `${mainUrl}Resources/svg/SVG.svg`;

var squareButtonUrl = `${imagePath}Buttons/SquareButton.png`;
var rectangleButtonUrl = `${imagePath}Buttons/RectangleButton.png`;

var appleIconUrl = `${imagePath}StoreIcons/Apple_Icon.png`;
var googleIconUrl = `${imagePath}StoreIcons/Google_Icon.png`;

var appleStorePath = 'http://apps.apple.com/app/';
var googleStorePath = 'http://play.google.com/store/apps/details?id=';

var rpsIconUrl = `${imagePath}AppIcons/RPS_Icon.png`;

var rpsApple = 'xcode/id497799835';
var rpsGoogle = 'com.KristyGames.RockPaperScissors';

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

	var id = 'Logo';
	image.src = logoImageUrl;
	image.className = 'image logo';
	image.title = id;
	image.setAttribute('alt', id);
}

function setTextButton(anchor) {

	var id = anchor.id;
	anchor.title = id;
	anchor.className = 'button';
	anchor.href = `${mainUrl}${removeSpaces(id)}`;

	var span = document.createElement('span');
	span.textContent = id;
	anchor.appendChild(span);

	var image = document.createElement('img');
	image.src = rectangleButtonUrl;
	image.setAttribute('alt', `${id} Button`);
	anchor.appendChild(image);
}

function setHomeButton(anchor) {

	var id = 'Home Button';
	anchor.className = 'button home';
	anchor.href = homeUrl;
	anchor.title = 'Home';

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
	image.setAttribute('alt', id);
	anchor.appendChild(image);
}

function setGameSection(gameSection)
{
	var gameIcon = gameSection.querySelector('[data-type="GameIcon"]');
	var gameTitle = gameSection.querySelector('[data-type="GameTitle"]');
	var gameQR = gameSection.querySelector('[data-type="GameQR"]');
	var appleButton = gameSection.querySelector('[data-type="AppleButton"]');
	var googleButton = gameSection.querySelector('[data-type="GoogleButton"]');

	if (gameIcon)
	{
		gameIcon.src = 
		src='https://kristy-games.github.io/Resources/Images/AppIcons/RPS_Icon.png' title='Rock Paper Scissors' alt='Rock Paper Scissors Icon'
	}
	if (gameTitle) gameSection.getAttribute gameName

}

function setDownloadButton(button) {

// var rpsAppleUrl = `${applePath}${rpsApple}`; //set href, src = qrcode
// var rpsGoogleUrl = `${googlePath}${rpsGoogle}`;
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

// timeout
// https://apps.apple.com/us/app/xcode/id497799835

	var gameName = element.getAttribute('data-gameName');
	var appScheme = `${removeSpaces(gameName)}://`;

// var userAgent = navigator.userAgent || navigator.vendor || window.opera;

	if (/iPad|iPhone|iPod/i.test(userAgent) && !window.MSStream)
		window.location.href = appleUrl(gameName);

	else if (/android/i.test(userAgent))
		window.location.href = googleUrl(gameName);
}

function appIcon(gameName) {

}

function appleUrl(gameName) {

	switch (gameName)
	{
	case 'RPS':
		return `${appleStorePath}${rpsApple}`;
	}
}

function googleUrl(gameName) {

	switch (gameName)
	{
	case 'RPS':
		return `${googleStorePath}${rpsGoogle}`;
	}
}

function removeSpaces (string) {
	return string.split(' ').join('');
}
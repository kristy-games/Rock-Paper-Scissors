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

var appleButtonTitle = 'Download on the Apple App Store';
var googleButtonTitle = 'Download on the Google Play Store';

var rockPaperScissorsApple = 'xcode/id497799835';
var rockPaperScissorsGoogle = 'com.KristyGames.RockPaperScissors';

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

	var id = 'KristyGames Logo';
	image.className = 'image logo';
	image.src = logoImageUrl;
	image.title = id;
	image.alt = id;
}

function setTextButton(anchor) {

	var id = anchor.id;
	var idPath = getPath(id);
	// anchor.className = 'button';
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

	// if (appleButton) {

	// 	appleButton.h
	// 		href='https://www.example.com' target='_blank' title='Download on the Apple App Store'

	// 		add image

    //         <img class='image button' src='https://kristy-games.github.io/Resources/Images/StoreIcons/Apple_Icon.png' alt='Apple App Store Icon'>
	// }

	// if (googleButton) {

	// 	 href='https://play.google.com/store/apps/details?id=com.KristyGames.RockPaperScissors' target='_blank' title='Download on the Google Play Store'>
    //                     <img class='image button' src='https://kristy-games.github.io/Resources/Images/StoreIcons/Google_Icon.png' alt='Google Play Store Icon'>
	// }
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
	var gameNamePath = getPath(gameName);
	var appScheme = `${gameNamePath}://`;

// var userAgent = navigator.userAgent || navigator.vendor || window.opera;

	if (/iPad|iPhone|iPod/i.test(userAgent) && !window.MSStream)
		window.location.href = getAppleUrl(gameName);

	else if (/android/i.test(userAgent))
		window.location.href = getGoogleUrl(gameName);
}

function getAppleUrl(gameName) {

	switch (gameName) {
	case 'Rock Paper Scissors':
		return `${appleStorePath}${rockPaperScissorsApple}`;
	}
}

function getGoogleUrl(gameName) {

	switch (gameName) {
	case 'Rock Paper Scissors':
		return `${googleStorePath}${rockPaperScissorsGoogle}`;
	}
}

function getPath (string) {
	return string.split(' ').join('');
}
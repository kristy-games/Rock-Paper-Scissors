var mainUrl = "https://kristy-games.github.io/";
var homeUrl = `${mainUrl}Home`
var localPath = "C:/Users/Kristy/Documents/GitHub/kristy-games.github.io/";

var stylePath = "Resources/css/style.css";
var imagePath = `${mainUrl}Resources/Images/`;

var logoImageUrl = `${imagePath}Logo/Logo.png`;

var squareButtonUrl = `${imagePath}Buttons/SquareButton.png`;
var rectangleButtonUrl = `${imagePath}Buttons/RectangleButton.png`;

var rpsIconUrl = `${imagePath}AppIcons/RPS_Icon.png`; //maybe don't need up here, switch id?

var appleIconUrl = `${imagePath}StoreIcons/Apple_Icon.png`;
var googleIconUrl = `${imagePath}StoreIcons/Google_Icon.png`;

var appleStorePath = "https://apps.apple.com/app/";
var googleStorePath = "https://play.google.com/store/apps/details?id="

var rpsApple = "xcode/id497799835";
var rpsGoogle = "com.KristyGames.RockPaperScissors";

document.addEventListener("DOMContentLoaded", function () {

	var elements = document.querySelectorAll("[data-type]");

	if (elements.length > 0) {

		elements.forEach(function (element) {
			
			var dataType = element.getAttribute("data-type");

			switch (dataType)
			{
			case "Logo":
				setLogo(element);
				break;
			case "PageButton":
				setPageButton(element);
				break;
			case "HomeButton":
				setHomeButton(element);
				break;
			// case "GameSection":
			// 	setGameSection(element);
			// 	break;
			case "Redirect":
				redirect(element);
				break;
			}
		});
	}

	var stylesheet = document.getElementById("stylesheet");

	if (stylesheet)
	{
		if (window.location.protocol === "file:") {

			stylesheet.href = `${localPath}${stylePath}`;
			createDarkButton();
		}
	}
});

function setLogo(image) {

	var id = "Logo";
	image.src = logoImageUrl;
	image.className = "image logo";
	image.title = id;
	image.setAttribute("alt", id);
}

function setPageButton(button) {

	var id = button.id;
	button.title = id;
	button.className = "button text";
	button.setAttribute("data-text", id);
	button.href = `${mainUrl}${id.split(' ').join('')}`;

	var image = document.createElement("img");
	image.className = "image button";
	image.src = rectangleButtonUrl;
	image.setAttribute("alt", `${id} Button`);
	button.appendChild(image);
}

function setHomeButton(button) {

	var id = "Home Button";
	button.className = "button home";
	button.href = homeUrl;
	button.title = "Home";

	var image = document.createElement("img");
	image.className = "image button";
	image.src = squareButtonUrl;
	image.setAttribute("alt", id);
	button.appendChild(image);
}

function setGameSection(gameSection)
{

}

function setDownloadButton(button) {

	// var rpsAppleUrl = `${applePath}${rpsApple}`; //set href, src = qrcode
	// var rpsGoogleUrl = `${googlePath}${rpsGoogle}`;
}

function createDarkButton() {

	var button = document.createElement("button");
	button.className = "button dark";
	button.textContent = "Dark";
	button.onclick = function() {
		document.body.classList.toggle("dark");
	};
	document.body.appendChild(button);
}

function redirect(element) {

	var gameName = element.getAttribute("data-gameName");

	var userAgent = navigator.userAgent || navigator.vendor || window.opera;

	if (/iPad|iPhone|iPod/i.test(userAgent) && !window.MSStream)
		redirectApple(gameName);

	if (/android/i.test(userAgent))
		redirectGoogle(gameName);

	console.log(`Redirect ${gameName}`);
}

function redirectApple(gameName) {

	switch (gameName)
	{
	case "RPS":
		window.location.href = `${appleStorePath}${rpsApple}`;
		break;
	}
}

function redirectGoogle(gameName) {

	switch (gameName)
	{
	case "RPS":
		window.location.href = `${googleStorePath}${rpsGoogle}`;
		break;
	}
}
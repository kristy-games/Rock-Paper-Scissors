var homeUrl = "https://kristy-games.github.io/";
var localPath = "C:/Users/Kristy/Documents/GitHub/kristy-games.github.io/";

var imagePath = `${homeUrl}Resources/Images/`;

var logoImageUrl = `${imagePath}Logo/Logo.png`;

var squareButtonUrl = `${imagePath}Buttons/SquareButton.png`;
var rectangleButtonUrl = `${imagePath}Buttons/RectangleButton.png`;

var rpsIconUrl = `${imagePath}AppIcons/RPS_Icon.png`; //maybe don't need up here

var appleIconUrl = `${imagePath}StoreIcons/Apple_Icon.png`;
var googleIconUrl = `${imagePath}StoreIcons/Google_Icon.png`;

var appleStorePath = "https://apps.apple.com/app/";
var googleStorePath = "https://play.google.com/store/apps/details?id="

document.addEventListener("DOMContentLoaded", function () {

	var dataTypeElements = document.querySelectorAll("[data-type]");

	if (dataTypeElements.length > 0) {

		var dataTypes = [];

		dataTypeElements.forEach(function (element) {
			
			var dataType = element.getAttribute("data-type");

			if (!dataTypes.includes(dataType))
				dataTypes.push(dataType);
		});

		dataTypes.forEach(function (dataType) {
			switch (dataType)
			{
			case "Logo":
				console.log("Logo");
				break;
			case "TextButton":
				console.log("TextButton");
				break;
			}
		});
	}

	var stylesheet = document.getElementById("stylesheet");

	if (window.location.protocol === "file:") {
		stylesheet.href = `${localPath}Resources/css/style.css`;

		setDarkButton();
	}
});

function setDarkButton() {
	var homeButton = document.createElement("button");
	homeButton.className = "button dark";
	homeButton.textContent = "Dark";
	homeButton.onclick = function() {
		document.body.classList.toggle("dark");
	};
	document.body.appendChild(homeButton);
}

function setLogo() {

	var id = "KristyGames Logo";
	var image = document.getElementById(id);
	image.src = logoImageUrl;
	image.className = "image logo";
	image.title = id;
	image.setAttribute("alt", id);

	var buttons = document.getElementsByClassName("button text");

	Array.from(buttons).forEach(function(button) {
		var id = button.id;
		button.title = id;
		button.setAttribute("data-text", id);
		button.href = `${homeUrl}${id.split(' ').join('')}`;

		var image = document.createElement("img");
		image.className = "image button";
		image.src = rectangleButtonUrl;
		image.setAttribute("alt", `${id} Button`);
		button.appendChild(image);
	});
}

// function setHomePage() {

// 	var id = "KristyGames Logo";
// 	var image = document.getElementById(id);
// 	image.src = logoImageUrl;
// 	image.className = "image logo";
// 	image.title = id;
// 	image.setAttribute("alt", id);

// 	var buttons = document.getElementsByClassName("button text");

// 	Array.from(buttons).forEach(function(button) {
// 		var id = button.id;
// 		button.title = id;
// 		button.setAttribute("data-text", id);
// 		button.href = `${homeUrl}${id.split(' ').join('')}`;

// 		var image = document.createElement("img");
// 		image.className = "image button";
// 		image.src = rectangleButtonUrl;
// 		image.setAttribute("alt", `${id} Button`);
// 		button.appendChild(image);
// 	});
// }

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

function setDownloadButtons() {

	//get class button download
	//foreach download button
	//	button.className = "image button";
	//title/alt = "Download on the Apple App Store"

	// var rpsAppleUrl = `${applePath}${rpsApple}`; //set href, src = qrcode
	// var rpsGoogleUrl = `${googlePath}${rpsGoogle}`;
}

function redirect() {

	var redirect = document.getElementById("redirect");
	var gameName = redirect.getAttribute("data-gameName");

	var userAgent = navigator.userAgent || navigator.vendor || window.opera;

	if (/iPad|iPhone|iPod/i.test(userAgent) && !window.MSStream)
		redirectApple(gameName);

	if (/android/i.test(userAgent))
		redirectGoogle(gameName);
}

function redirectApple(gameName) {

	switch (gameName)
	{
	case "RPS":
		window.location.href = `${appleStorePath}xcode/id497799835`;
		break;
	}
}

function redirectGoogle(gameName) {

	switch (gameName)
	{
	case "RPS":
		window.location.href = `${googleStorePath}com.KristyGames.RockPaperScissors`;
		break;
	}
}
var homeUrl = "https://kristy-games.github.io/";
var localPath = "C:/Users/Kristy/Documents/GitHub/kristy-games.github.io/";

var imagePath = `${homeUrl}Resources/Images/`;

var logoImageUrl = `${imagePath}Logo/Logo.png`;

var squareButtonUrl = `${imagePath}Buttons/SquareButton.png`;
var rectangleButtonUrl = `${imagePath}Buttons/RectangleButton.png`;

var rpsIconUrl = `${imagePath}AppIcons/RPS_Icon.png`;

var appleIconUrl = `${imagePath}StoreIcons/Apple_Icon.png`;
var googleIconUrl = `${imagePath}StoreIcons/Google_Icon.png`;

var appleStorePath = "https://apps.apple.com/app/";
var googleStorePath = "https://play.google.com/store/apps/details?id="

var rpsApple = "xcode/id497799835";
var rpsGoogle = "com.KristyGames.RockPaperScissors";

document.addEventListener("DOMContentLoaded", function () {

	var pageType = document.documentElement.getAttribute("data-pageType");
	
	if (pageType === "Home")
		setHomePage();

	if (pageType === "Redirect")
		redirect();

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

// MOVE ALL INTO ONLOADED, if id exists..

function setHomePage() {

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

function setHomeButton() {
	var id = "Home Button"
	var button = document.getElementById(id);
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

	var rpsAppleUrl = `${applePath}${rpsApple}`; //set href, src = qrcode
	var rpsGoogleUrl = `${googlePath}${rpsGoogle}`;
}

function redirect()
{
	var appleLink;
	var googleLink;

	// var id = "redirect";
	// var anchor = document.getElementById(id);
	// var gameName = anchor.getAttribute("data-gameName");

	var gameName = "RPS";

	switch (gameName)
	{
	case "RPS":
		console.log("Redirect RPS");
		appleLink = "http://apps.apple.com/us/app/xcode/id497799835";
		googleLink = "http://play.google.com/store/apps/details?id=com.KristyGames.RockPaperScissors";
		break;
	}

	var userAgent = navigator.userAgent || navigator.vendor || window.opera;

	if (/android/i.test(userAgent)) {
		window.location.href = googleLink;
	} 
	else if (/iPad|iPhone|iPod/i.test(userAgent) && !window.MSStream) {
		window.location.href = appleLink;
	}
	
	// REMOVE

	else {
		// window.location.href = "https://example.com";
		window.open("https://example.com", "_blank");
	}
}

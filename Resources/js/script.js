var mainUrl = "https://kristy-games.github.io/";
var imagePath = `${mainUrl}Resources/Images/`;

var logoImageUrl = `${imagePath}Logo/Logo.png`;
var homeButtonUrl = `${imagePath}Buttons/HomeButton.png`;
var rpsIconUrl = `${imagePath}AppIcons/RPS_Icon.png`;
var appleIconUrl = `${imagePath}StoreIcons/Apple_Icon.png`;
var googleIconUrl = `${imagePath}StoreIcons/Google_Icon.png`;

var appleStorePath = "https://apps.apple.com/app/";
var googleStorePath = "https://play.google.com/store/apps/details?id="

var rpsApple = "xcode/id497799835";
var rpsGoogle = "com.KristyGames.RockPaperScissors";

export function setHomePage() {

	var id = "KristyGames Logo";
	var image = document.getElementById(id);
	image.src = logoImageUrl;
	image.className = "image logo";
	image.title = id;
	image.setAttribute("alt", id);

	var buttons = document.getElementsByClassName("button");

	Array.from(buttons).forEach(function(button) {
		button.classList.add("text");
		button.textContent = button.id;
		button.title = button.id;
		button.href = `${mainUrl}${button.id.split(' ').join('')}`;
	});
}

export function setHomeButton() {
	var id = "Home Button"
	var button = document.getElementById(id);
	button.href = mainUrl;
	button.className = "button";
	button.title = "Home";

	var image = document.createElement("img");
	image.src = homeButtonUrl;
	image.setAttribute("alt", id);

	button.appendChild(image);
}

export function setDownloadButtons() {

	//get class button download
	//foreach download button

	//title/alt = "Download on the Apple App Store"

	var rpsAppleUrl = `${applePath}${rpsApple}`; //set href, src = qrcode
	var rpsGoogleUrl = `${googlePath}${rpsGoogle}`;
}

export function download(gameName)
{
	var appleLink;
	var googleLink;

	var a = document.createElement("a");
	a.target = "_blank";
	document.body.appendChild(a);

	switch (gameName)
	{
	case "RPS":
		appleLink = "http://apps.apple.com/us/app/xcode/id497799835";
		googleLink = "http://play.google.com/store/apps/details?id=com.KristyGames.RockPaperScissors";
		break;
	}

	var userAgent = navigator.userAgent || navigator.vendor || window.opera;

	if (/android/i.test(userAgent)) {
		// window.location.href = googleLink;
		a.href = googleLink;
		a.click();
	} 
	else if (/iPad|iPhone|iPod/i.test(userAgent) && !window.MSStream) {
		//window.location.href = appleLink;
		a.href = appleLink;
		a.click();
	}

	document.body.removeChild(a);
}

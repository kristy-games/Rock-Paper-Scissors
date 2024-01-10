var mainUrl = "https://kristy-games.github.io/";
var imagePath = `${mainUrl}Resources/Images/`;

var logoImageUrl = `${imagePath}Logo/Logo.png`;
var homeImageUrl = `${imagePath}Shapes/Home.png`;
var rpsIconUrl = `${imagePath}AppIcons/RPS_Icon.png`;
var appleIconUrl = `${imagePath}StoreIcons/Apple_Icon.png`;
var googleIconUrl = `${imagePath}StoreIcons/Google_Icon.png`;

var appleStorePath = "https://apps.apple.com/app/";
var googleStorePath = "https://play.google.com/store/apps/details?id="

var rpsApple = "xcode/id497799835";
var rpsGoogle = "com.KristyGames.RockPaperScissors";

export function setLogo() {
	var logo = document.getElementById("Logo");
	logo.src = logoImageUrl;
	logo.className = "image logo";
	logo.title = "KristyGames";
	logo.setAttribute("alt", "KristyGames Logo");
}

export function setMainButtons() {
	var mainButtons = document.getElementsByClassName("button main");

	Array.from(mainButtons).forEach(function(button) {
		button.classList.add("text");
		button.textContent = button.id;
		button.title = button.id;
		button.href = `${mainUrl}${button.id.split(' ').join('')}`;
	});
}

function setHomeButton() {
	var id = "HomeButton"
	var button = document.getElementById(id);

	button.href = mainUrl;
	button.src = homeImageUrl;
	button.className = "button";
	button.title = "Home";
	button.setAttribute("alt", "Home Button");
}

export function setDownloadButtons() {

	//get class button download
	//foreach download button

	//title/alt = "Download on the Apple App Store"

	var rpsAppleUrl = `${applePath}${rpsApple}`; //set href, src = qrcode
	var rpsGoogleUrl = `${googlePath}${rpsGoogle}`;
}

//export { setLogo, setMainButtons, setHomeButton, setDownloadButtons };

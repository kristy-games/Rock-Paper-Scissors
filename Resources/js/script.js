var mainUrl = "https://kristy-games.github.io/";
var imagePath = `${mainUrl}Resources/Images/`;

var logoImage = "Logo/Logo.png";
var rpsImage = "AppIcons/RPS_Icon.png";
var appleImage = "StoreIcons/Apple_Icon.png";
var googleImage = "StoreIcons/Google_Icon.png";

var logoImageUrl = `${imagePath}${logoImage}`;
var rpsImageUrl = `${imagePath}${rpsImage}`;
var appleImageUrl = `${imagePath}${appleImage}`;
var googleImageUrl = `${imagePath}${googleImage}`;

var applePath = "https://apps.apple.com/app/";
var googlePath = "https://play.google.com/store/apps/details?id="

var rpsApple = "block-your-friends/id1611839181";
var rpsGoogle = "com.KristyGames.RockPaperScissors";

export function setLogo() {
	var logo = document.getElementById("Logo");
	logo.src = logoImageUrl;
	logo.className = "image logo"
	logo.setAttribute("alt", "KristyGames Logo");
}

export function setMainButtons() {
	var mainButtons = document.getElementsByClassName("button main");

	Array.from(mainButtons).forEach(function(button) {
		button.textContent = button.id;
		button.classList.add('button', 'text');
		button.href = `${mainUrl}${button.id.split(' ').join('')}`;
		buttonSetup(button);
	});
}

function setHomeButton() {
	var button = document.getElementById("HomeButton");
	button.href = mainUrl;
	logo.src = logoImageUrl;
	logo.className = "image logo"
	logo.setAttribute("alt", "Home Button");
	//src = home image
	buttonSetup(button);
}

function buttonSetup(button) {
	button.title = button.id;
	button.target = "_blank";
}

export function setDownloadButtons() {

	//get class button download
	//foreach download button

	//title = "Download on the Apple App Store"
	var rpsAppleUrl = `${applePath}${rpsApple}`; //set href
	var rpsGoogleUrl = `${googlePath}${rpsGoogle}`;

}

//export { setLogo, setMainButtons, setHomeButton, setDownloadButtons };

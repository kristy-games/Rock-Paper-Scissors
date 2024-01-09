var mainUrl = "https://kristy-games.github.io/";
var imagePath = "Resources/Images/";

var applePath = "https://apps.apple.com/app/";
var googlePath = "https://play.google.com/store/apps/details?id="

var rpsAppleUrl = `${appleDownload}TODO`;
var rpsGoogleUrl = `${googleDownload}com.KristyGames.RockPaperScissors`;

var logoImage = "Logo/Logo.png";
var rpsImage = "AppIcons/RPS_Icon.png";
var appleImage = "StoreIcons/Apple_Icon.png";
var googleImage = "StoreIcons/Google_Icon.png";

var logoImageUrl = `${mainUrl}${imagePath}${logoImage}`;
var rpsImageUrl = `${mainUrl}${imagePath}${rpsImage}`;
var appleImageUrl = `${mainUrl}${imagePath}${appleImage}`;
var googleImageUrl = `${mainUrl}${imagePath}${googleImage}`;

function setLogo() {
	var logo = document.getElementById("Logo");
	logo.src = logoImageUrl;
}

function setMainButtons() {
	var buttons = document.getElementsByClassName("button");

	Array.from(buttons).forEach(function(button) {
		setButton(button.id);
	});
}

function setHomeButton() {
	setButton("Home");
}

function setButton(id) {
	var button = document.getElementById(id);
    button.textContent = id; //todo remove, image
    button.title = id;
    button.target = "_blank";

    if (id === "Home") button.href = mainUrl;
    else button.href = `${mainUrl}${id.split(' ').join('')}`;
}

function setDownloadLinks() {

}

export { setLogo, setMainButtons, setHomeButton };
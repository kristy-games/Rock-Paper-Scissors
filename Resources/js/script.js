var main = "https://kristy-games.github.io/";
var images = "Resources/Images/";

var appleDownload = "https://apps.apple.com/app/";
var googleDownload = "https://play.google.com/store/apps/details?id=com."

var rpsAppleDownload = `${appleDownload}TODO`;
var rpsGoogleDownload = `${googleDownload}KristyGames.RockPaperScissors`;

var logoImage = "Logo/Logo.png";
var rpsImage = "AppIcons/RPS_Icon.png";
var appleImage = "StoreIcons/Apple_Icon.png";
var googleImage = "StoreIcons/Google_Icon.png";

var logoImageUrl = `${baseUrl}${imagePath}${logoImagePath}`;
var rpsImageUrl = `${baseUrl}${rpsImagePath}`;
var appleImageUrl = `${baseUrl}${rpsImagePath}`;
var googleImageUrl = `${baseUrl}${rpsImagePath}`;

function setLogo() {
    var logo = document.getElementById("Logo");
    logo.src = logoImageUrl;
}

function setButtons() {
	var buttons = document.getElementsByClassName("button");

    Array.from(buttons).forEach(function(button) {
        button.textContent = button.id;
        button.title = button.id;
        button.target = "_blank";
        button.href = `${baseUrl}${button.id.split(' ').join('')}`;
    });
}

function setDownloadLinks() {

}

export { setLogo, setButtons };

// Apple/google store icons
// apple/google download pageURLs
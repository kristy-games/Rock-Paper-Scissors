let baseUrl = "https://kristy-games.github.io/";
let logoPath = "Assets/Images/Logo/Logo.png";
let logoUrl = `${baseUrl}${logoPath}`;

function setButtonProperties(id) {
	var button = document.getElementById(id);
	button.textContent = id;
	button.title = id;
	button.target = "_blank";
	button.href = `${baseUrl}${id.split(' ').join('')}`;
}

export { logoUrl, setButtonProperties };

// Apple/google store icons
// apple/google download pageURLs
window.addEventListener("load", () => {
	const searchParams = new URLSearchParams(document.location.search);
	const url = decodeURIComponent(searchParams.get("url"));
	const urlElement = document.getElementById("url");
	urlElement.setAttribute("href", url);
	urlElement.innerText = url;
});

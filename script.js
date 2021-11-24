// Add event listener to fetch result list as json
// Convert the json to array  (parse)
// Replace comment with result array

const fetchLinksBttn = document.querySelector("#fetchLinksBttn");
const urlInput = document.querySelector("#url");

fetchLinksBttn.addEventListener("click", async function (event) {
  event.stopPropagation();
  const url = urlInput.value;
  const response = await fetch("https://api.mapmyquest.net/?url=" + url);
  console.log(response);
});

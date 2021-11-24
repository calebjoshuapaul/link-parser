// Add event listener to fetch result list as json
// Convert the json to array  (parse)
// Replace comment with result array

const fetchLinksBttn = document.querySelector("#fetchLinksBttn");
const urlInput = document.querySelector("#url");
const result = document.querySelector("#result-list");

fetchLinksBttn.addEventListener("click", async function (event) {
  event.stopPropagation();
  const url = urlInput.value;
  const response = await fetch("https://api.mapmyquest.net/?url=" + url);

  let links = await response.json();
  result.innerHTML = getLinksListTemplate(links);
});

function getLinksListTemplate(links) {
  return links
    .map((link) => {
      return `<li><a href="${link}">${link}</a></li>`;
    })
    .join("");
}

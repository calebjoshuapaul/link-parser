// Add event listener to fetch result list as json
// Convert the json to array  (parse)
// Replace comment with result array

const fetchLinksBttn = document.querySelector("#fetchLinksBttn");
const urlInput = document.querySelector("#url");
const result = document.querySelector("#result-list");

fetchLinksBttn.addEventListener("click", async function (event) {
  event.stopPropagation();
  const url = urlInput.value;
  const response = await fetch(
    "https://link-parser-worker.calebjoshuapaul.workers.dev/?url=" + url
  )
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error("Error:", error);
    });

  result.innerHTML = getLinksListTemplate(response);
});

function getLinksListTemplate(links) {
  return links
    .map((link) => {
      return `<li><a href="${link}">${link}</a></li>`;
    })
    .join("");
}

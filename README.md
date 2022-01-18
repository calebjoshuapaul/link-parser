# link-parser
The site is published at https://calebjoshuapaul.github.io/link-parser/

This app uses cloudflare worker [link-parser-worker](https://github.com/calebjoshuapaul/link-parser-worker/) to get all http links in the provided site and list them.

- The code starts by creating a new variable called fetchLinksBttn.
- This is the button that will be clicked to call the function for fetching links.

- The next line creates an input field with a text label of "url" and sets its value to whatever is typed into it.
- The code then uses this input field as part of a querySelector statement, which selects the element with id="url".

- Next, we create another variable called urlInput and set its value to what was just selected in the previous step.
- We also create another variable called result-list and set its value to an empty string ("").

- Then we add an event listener on click on our newly created button so that when it's clicked, it calls our function for fetching links:

- fetchLinksBttn.addEventListener("click", async function (event) {   event.stopPropagation();   const url = urlInput.value;   const response = await fetch( "https://link-parser-worker.calebjoshuapaul.workers.dev/?url=" + url ) .then((response) => response.json()) .then((data) => data).catch((error
–
- The code is a snippet of code that fetches the links from the given URL and displays them in a list.

- In order to do this, we first need to add an event listener for when the "fetchLinksBttn" button is clicked.
- This will run an async function called "fetchLinksBttn".
- The async function will fetch the links from the given URL and display them in a list.

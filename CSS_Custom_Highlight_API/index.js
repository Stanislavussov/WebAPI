const query = document.getElementById("query");
const article = document.querySelector("article p");
const queryClass = document.querySelector(".query");

query.addEventListener("input", () => {
  if (!window.CSS || !CSS.highlights) {
    article.textContent = "CSS Custom Highlight API not supported.";
    return;
  }

  CSS.highlights.clear("results");

  const searchString = query.value.trim().toLowerCase();
  if (!searchString) {
    return;
  }

  const text = article.textContent.toLowerCase();
  const ranges = [];
  let startPos = 0;
  let index = text.indexOf(searchString, startPos);

  while (index !== -1) {
    const range = new Range();
    const node = article.firstChild;
    range.setStart(node, index);
    range.setEnd(node, index + searchString.length);
    ranges.push(range);
    startPos = index + searchString.length;
    index = text.indexOf(searchString, startPos);
  }

  const searchResultsHighlight = new Highlight(...ranges.flat());

  CSS.highlights.set("results", searchResultsHighlight);
});

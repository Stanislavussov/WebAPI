const query = document.getElementById("query");
const article = document.querySelector("article p");

query.addEventListener("input", () => {
  if (!window.CSS || !CSS.highlights) {
    throw new Error("CSS Custom Highlight API is not supported.");
  }

  CSS.highlights.clear("results");

  const searchString = query.value.trim().toLowerCase();
  if (!searchString) {
    return;
  }

  const text = article.textContent.toLowerCase();
  const ranges = [];
  let startPos = 0;
  let startIndex = text.indexOf(searchString, startPos);

  while (startIndex !== -1) {
    const range = new Range();
    const node = article.firstChild;
    const endIndex = startIndex + searchString.length;
    range.setStart(node, startIndex);
    range.setEnd(node, endIndex);
    ranges.push(range);
    startPos = endIndex;
    startIndex = text.indexOf(searchString, startPos);
  }

  const searchResultsHighlight = new Highlight(...ranges.flat());

  CSS.highlights.set("results", searchResultsHighlight);
});

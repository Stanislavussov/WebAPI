const counter = document.getElementById("counter");
counter.addEventListener("invoke", (e) => {
  const [action, count] = e.action.split(":");
  const i = +counter.textContent;
  if (action == "add") {
    counter.textContent = i + +count;
  } else if (action == "sub") {
    counter.textContent = i - +count;
  }
});

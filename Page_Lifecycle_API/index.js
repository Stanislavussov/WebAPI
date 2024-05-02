// Load event
window.addEventListener("load", () => {
  console.log("All resources finished loading!");
});

// DOMContentLoaded event
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
});

// Visibility change event
document.addEventListener("visibilitychange", () => {
  console.log(`Document visibility changed to ${document.visibilityState}`);
});

// Freeze event
document.addEventListener("freeze", () => {
  console.log("Page is about to be frozen.");
});

// Resume event
document.addEventListener("resume", () => {
  console.log("Page has been unfrozen.");
});

// Pageshow event
window.addEventListener("pageshow", (event) => {
  console.log("Pageshow event fired", `persisted: ${event.persisted}`);
});

// Pagehide event
window.addEventListener("pagehide", (event) => {
  console.log("Pagehide event fired", `persisted: ${event.persisted}`);
});

// Beforeunload event
window.addEventListener("beforeunload", (event) => {
  console.log("Beforeunload event fired");
  // Optionally set returnValue to show a confirmation dialog
  // event.returnValue = 'Are you sure you want to leave?';
});

// Unload event
window.addEventListener("unload", () => {
  console.log("Unload event fired");
});

window.addEventListener("blur", () => {
  console.log(`Blur event fired`);
});

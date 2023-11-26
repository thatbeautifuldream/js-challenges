// Debounce function
function debounce(callback, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      console.log("Debouncing ...");
      callback(...args);
    }, delay);
  };
}

// Throttle function
function throttle(callback, limit) {
  let throttling;
  return function (...args) {
    if (!throttling) {
      console.log("Throttling ...");
      callback(...args);
      throttling = true;
      setTimeout(() => {
        throttling = false;
      }, limit);
    }
  };
}

// Click event handler for debounced button
const debouncedClick = debounce(() => {
  updateOutput("Debounced button clicked!");
}, 1000);

// Click event handler for throttled button
const throttledClick = throttle(() => {
  updateOutput("Throttled button clicked!");
}, 1000);

// Update output paragraph
function updateOutput(message) {
  const outputElement = document.getElementById("output");
  outputElement.textContent = message;
}

// Attach click events to buttons
document
  .getElementById("debounceBtn")
  .addEventListener("click", debouncedClick);
document
  .getElementById("throttleBtn")
  .addEventListener("click", throttledClick);

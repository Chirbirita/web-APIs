var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button
incrementEl.addEventListener("click", function () {
  // count = count + 1
  count++;
  countEl.textContent = count;
  // or: setCounterText();
})


// TODO: Add event listener to decrement button
decrementEl.addEventListener("click", function () {
  // Action will fire if count is greater than  0
  if (count > 0) {
    count--;
    setCounterText();
  }
})
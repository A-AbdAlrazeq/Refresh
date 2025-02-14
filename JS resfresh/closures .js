function createCounter() {
  let count = 0; // This variable is **private** to the closure

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
    getCount: function () {
      console.log(count);
    },
  }; //The methods inside the returned object (like increment, decrement, etc.) have access to the count variable because of the closure.
}

const counter = createCounter();
//This allows you to encapsulate the counter’s state while still being able to interact with it through the methods.
counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.decrement(); // Output: 1
counter.getCount(); // Output: 1

function createTimer() {
  let startTime = Date.now();

  return {
    start: function () {
      startTime = Date.now(); // Reset the start time
    },
    getElapsedTime: function () {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      console.log(elapsed + " seconds");
    },
  };
}

const timer = createTimer();

setTimeout(() => {
  timer.getElapsedTime(); // Output after 3 seconds: "3 seconds"
}, 3000);

function createButton() {
  let count = 0; // Private variable

  const button = document.createElement("button");
  button.innerHTML = "Click Me";

  button.addEventListener("click", function () {
    count++;
    console.log("Button clicked " + count + " times");
  });

  document.body.appendChild(button);
}

createButton();

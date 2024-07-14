let count = 0;

function counter() {
  count++;
  console.log("The Counter is at: " + count);
  setTimeout(counter, 1000);
}

// Initial call to start the recursive timeout chain
setTimeout(counter, 1000);

let count = 0;
let cycleCount = 0;
let goal = 100;

function increase() {
  count++;
  if (count >= goal) {
    count = 0;
    cycleCount++;
    alert(`🎉 You completed ${cycleCount} cycle(s)!`);
  }
  updateCounter();
}

function decrease() {
  count--;
  if (count < 0) count = 0;
  updateCounter();
}

function reset() {
  count = 0;
  cycleCount = 0;
  updateCounter();
}

function updateCounter() {
  document.getElementById("counter").innerText = `Count: ${count}\nCycles: ${cycleCount}`;
}

// script.js
// Handles: shuffling questions, showing one at a time, reacting to clicks,
// tracking progress, and restarting once you reach the end.

const leftBtn = document.getElementById("choiceLeft");
const rightBtn = document.getElementById("choiceRight");
const leftText = document.getElementById("leftText");
const rightText = document.getElementById("rightText");
const reaction = document.getElementById("reaction");
const progress = document.getElementById("progress");
const nextBtn = document.getElementById("nextBtn");
const duel = document.getElementById("duel");
const finished = document.getElementById("finished");
const totalCount = document.getElementById("totalCount");
const restartBtn = document.getElementById("restartBtn");

let order = [];
let current = 0;

// Used only as a fallback, in case a dilemma is missing custom reactions.
const fallbackReactions = [
  "Solid choice!",
  "Ay grabe, ang hirap noh?",
  "Weh, sigurado ka?",
  "Classic Pinoy dilemma yan.",
];

// Picks a random line from an array. Falls back to the generic pool
// if the dilemma doesn't have its own reactions defined.
function pickReaction(pool) {
  const source = (pool && pool.length > 0) ? pool : fallbackReactions;
  return source[Math.floor(Math.random() * source.length)];
}

// Fisher-Yates shuffle so the question order is different every run.
function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startGame() {
  order = shuffle(DILEMMAS);
  current = 0;

  // Small easter egg: 25% chance a secret bonus question gets slipped
  // into this playthrough, at a random spot in the order.
  if (Math.random() < 0.25) {
    const bonus = BONUS_DILEMMAS[Math.floor(Math.random() * BONUS_DILEMMAS.length)];
    const spot = Math.floor(Math.random() * (order.length + 1));
    order.splice(spot, 0, { ...bonus, isBonus: true });
  }

  finished.hidden = true;
  duel.hidden = false;
  progress.hidden = false;
  totalCount.textContent = order.length;
  showQuestion();
}

function showQuestion() {
  reaction.textContent = "";
  nextBtn.hidden = true;
  leftBtn.disabled = false;
  rightBtn.disabled = false;
  leftBtn.classList.remove("selected", "dimmed");
  rightBtn.classList.remove("selected", "dimmed");
  duel.classList.remove("bonus");

  const q = order[current];
  leftText.textContent = q.left;
  rightText.textContent = q.right;

  if (q.isBonus) {
    duel.classList.add("bonus");
    progress.textContent = " Bonus question! ";
  } else {
    progress.textContent = `Tanong ${current + 1} ng ${order.length}`;
  }
}

function choose(side) {
  leftBtn.disabled = true;
  rightBtn.disabled = true;

  const q = order[current];

  if (side === "left") {
    leftBtn.classList.add("selected");
    rightBtn.classList.add("dimmed");
    reaction.textContent = pickReaction(q.reactionsLeft);
  } else {
    rightBtn.classList.add("selected");
    leftBtn.classList.add("dimmed");
    reaction.textContent = pickReaction(q.reactionsRight);
  }

  if (current < order.length - 1) {
    nextBtn.hidden = false;
  } else {
    setTimeout(showFinished, 600);
  }
}

function showFinished() {
  duel.hidden = true;
  progress.hidden = true;
  reaction.textContent = "";
  nextBtn.hidden = true;
  finished.hidden = false;
}

leftBtn.addEventListener("click", () => choose("left"));
rightBtn.addEventListener("click", () => choose("right"));

nextBtn.addEventListener("click", () => {
  current++;
  showQuestion();
});

restartBtn.addEventListener("click", startGame);

startGame();

/* GOLD PARTICLES */
const layer = document.getElementById("particles");

setInterval(() => {
  const p = document.createElement("span");
  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = 8 + Math.random() * 6 + "s";
  layer.appendChild(p);
  setTimeout(() => p.remove(), 14000);
}, 500);

const noBtn = document.getElementById("no");
const noBubble = document.getElementById("noBubble");
const yesBtn = document.getElementById("yes");

const noLines = [
  "Are you sure? 🙂",
  "Like… really sure?",
  "Fr Hunitakiiiii ",
  "Na nikikuletea puss puss",
  "Sawa tuuuuu",
  "WOIYEEEEEEEEEEEEEEEE🤍",
  "MEOW MEOWWWWWWWWWWWWWWWWWWWWWW Pweeeeeaseeeeee",
  "Nilijua tu hunipendi",
  "Sawa tuuuuuuuu",
  "Ata nimeenddaaaaaa",
];

let noIndex = 0;

noBtn.onclick = () => {
  // Update message
  noBubble.textContent = noLines[noIndex % noLines.length];

  // Calculate warm color based on clicks (white → pale yellow → golden)
  // We'll use HSL: 50deg = soft yellow, 45-55 range
  const hue = 50; // yellow
  const lightness = Math.max(95 - noIndex * 8, 65); // decreases → darker warmer yellow
  const saturation = 80; // keep warm
  noBubble.style.background = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

  // Show bubble
  noBtn.classList.add("show-bubble");

  // Subtle YES pull
  yesBtn.style.transform = `rotate(-45deg) scale(${1 + noIndex * 0.04})`;

  // Auto-hide bubble
  setTimeout(() => {
    noBtn.classList.remove("show-bubble");
  }, 2200);

  noIndex++;
};




/* YES MOMENT */
yes.onclick = () => {
  document.querySelector(".card").innerHTML = `
    <h1>Yaaaaaaaaaaaaay!!🤍</h1>
    <p style="font-size:18px; margin-top:20px;">
      Sasa niambie,<br/>
      What do you want for Valentines Kamum 💛
    </p>
  `;
};

/* LOVE NOTES */
const notes = [
  "You look really cute when you smile 💛",
  "I love a lot more when with you",
  "You feel like home",
  "I love you Kamum",
  "I feel calm around you",
  "You make me happy",
  "This made me think of you",
  "You matter to me",
  "I'm so lucky to have you",
  "You’re my favorite thought today",
];

const notesLayer = document.getElementById("notes");

function createNote(text) {
  const note = document.createElement("span");
  note.textContent = text;

  let x, y;

  // Safe placement loop
  do {
    x = Math.random() * 80 + 10; // 10% – 90% (no edges)
    y = Math.random() * 80 + 10; // 10% – 90%
  } while (
    x > 35 && x < 65 && y > 35 && y < 65 // avoid center card
  );

  note.style.left = x + "vw";
  note.style.top = y + "vh";
  note.style.setProperty("--r", `${Math.random() * 10 - 5}deg`);

  notesLayer.appendChild(note);

  setTimeout(() => note.remove(), 20000);
}

// Drop notes slowly, not spammy
setInterval(() => {
  const text = notes[Math.floor(Math.random() * notes.length)];
  createNote(text);
}, 2500);


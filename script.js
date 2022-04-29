const text = document.querySelector("span");
const randomBtn = document.querySelector(".dice-div");
const container = document.querySelector(".container");

const quote = async function () {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    text.textContent = data.slip.advice;
    if (!container.style.display) container.style.display = "block";
  } catch (err) {
    console.error(`${err}: that's the problem`);
  }
};

randomBtn.addEventListener("click", quote);
quote();

// List for Top Image

const textList = ["I'm a Software Developer", "I'm a Full stack Developer", "I'm a Node.JS Developer", "I'm a Python Developer"];

// Function to cycle through list

const cycle = document.querySelector("#cycle");
let i = 0;
const cycleText = () => {
  cycle.innerHTML = textList[i];
  i = ++i % textList.length;
};
cycleText();
setInterval(cycleText, 1000);
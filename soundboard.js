let playSound = (path) => {
  // Access audio system
  // load file at path
  // play loaded file
  // handle errors
};

let setupSounds = () => {
  let sounds = document.query(".sound");
  sounds.forEach((el) => {
    el.onclick = () => {
      playSound(el.getAttribute("data-sound"));
    };
  });
};

document.onLoad = setupSounds;

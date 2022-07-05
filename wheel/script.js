(function () {
  const wheel = document.querySelector(".wheel");
  const startButton = document.querySelector(".button");
  const display = document.querySelector(".display");

  let deg = 0;
  let zoneSize = 45; // degrees

  const symbolZones = {
    1: "Frog",
    2: "Snail",
    3: "Dolphin",
    4: "Ladybug",
    5: "Koala",
    6: "Unicorn",
    7: "Dragon",
    8: "Snowman",
  };

  const handleWin = (actualDeg) => {
    const winningSymbolNum = Math.ceil(actualDeg / zoneSize);
    display.innerHTML = symbolZones[winningSymbolNum];
  };

  startButton.addEventListener("click", () => {
    display.innerHTML = "-"; // Reset display

    startButton.style.pointerEvents = "none"; // Disable button during spin

    deg = Math.floor(5000 + Math.random() * 5000); // Calculate a new rotation between 5000 and 10 000

    wheel.style.transition = "all 10s ease-out"; // Set the transition on the wheel

    wheel.style.transform = `rotate(${deg}deg)`; // Rotate the wheel

    wheel.classList.add("blur"); // Applies the blur
  });

  wheel.addEventListener("transitionend", () => {
    wheel.classList.remove("blur"); // Removes the blur

    startButton.style.pointerEvents = "auto"; // Re-enables the button after the spin ends.

    wheel.style.transition = "none"; // resets the wheels rotation to 0

    const actualDeg = deg % 360;

    wheel.style.transform = `rotate(${actualDeg}deg)`;

    handleWin(actualDeg); // Calculate and display the prize;
  });
})();



function renderGoat(goat) {
  const namePlate = document.querySelector(".goat-name");
  namePlate.innerText = goat.name;

  const image = document.querySelector(".goat-image");
  image.src = goat.image;

  const age = document.querySelector(".goat-age");
  age.innerText = goat.age;

  const brush = document.querySelector(".goat-brushes");
  brush.innerText = goat.brushesToday;

  const goodGoat = document.querySelector(".goat-status");
  goodGoat.innerText = goat.badGoat;

  const brushButton = document.querySelector(".brush-button");
  brushButton.addEventListener("click", function () {
    brushCount = parseInt(brush.innerText);
    newCount = brushCount + 1;
    brush.innerText = newCount;
  });

  const toggleGoat = document.querySelector(".goat-toggle");
  toggleGoat.addEventListener("click", () => {
    badGoatStatus = goodGoat.innerText;
    if (badGoatStatus === "false") {
      badGoatStatus = "true";
    } else {
      badGoatStatus = "false";
    }
    goodGoat.innerText = badGoatStatus;
  });
}

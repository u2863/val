document.addEventListener("DOMContentLoaded", () => {
  const buttonsDiv = document.querySelector(".buttons");
  const noButton = document.getElementById("no");
  const yesButton = document.getElementById("yes");

  const title = document.getElementById("title");
  const originalTitleText = title.textContent;

  const subTitle = document.getElementById("sub-title");
  const originalSubTitleText = subTitle.textContent;

  const imagesDiv = document.querySelector(".images");

  noButton.addEventListener("mouseenter", function () {
    title.textContent = "Hi my girlfriend..";
    subTitle.innerHTML = "Be my valentine<br>ig...";
  });

  noButton.addEventListener("mouseleave", function () {
    title.textContent = originalTitleText;
    subTitle.innerHTML = originalSubTitleText;
  });

  noButton.addEventListener("click", function () {
    buttonsDiv.removeChild(noButton);

    title.textContent = "Try again bitch >:|";
    subTitle.innerHTML = "You don't really have choice.";
  });

  yesButton.addEventListener("click", function () {
    buttonsDiv.remove();

    title.textContent = "YAYYYYY PRINCESS!!!!";
    subTitle.innerHTML =
      "I love you pretty girl!<br>Choose your valentines gift";

    createImgs(imagesDiv);

    imagesDiv.addEventListener("click", function (e) {
      if (e.target.tagName === "IMG") {
        const clickedImageClassList = e.target.classList;

        title.textContent = "I adore you pretty girl.";

        if (clickedImageClassList.contains("img-1")) {
          subTitle.textContent = "1 YEAR DISCORD NITRO!!!";
        } else if (clickedImageClassList.contains("img-2")) {
          subTitle.textContent = "A NEW HELLO KITTY NECKLACE!!!";
        } else if (clickedImageClassList.contains("img-3")) {
          subTitle.textContent = "A PROMISE RING!!!!!!!";
        } else {
          console.log("Error clicking images.");
        }
      }
    });
  });
});

function createImgs(div) {
  let loadedImages = 0;
  const totalImages = 3;

  for (let i = 0; i < totalImages; i++) {
    const img = new Image();
    img.onload = function () {
      loadedImages++;
      if (loadedImages === totalImages) {
        for (let j = 0; j < totalImages; j++) {
          const imgElement = document.createElement("img");
          imgElement.classList.add("respond");
          imgElement.classList.add(`img-${j + 1}`);
          imgElement.src = `imgs/gift${j + 1}.jpeg`;
          div.appendChild(imgElement);
        }
      }
    };
    img.src = `imgs/gift${i + 1}.jpeg`;
  }
}

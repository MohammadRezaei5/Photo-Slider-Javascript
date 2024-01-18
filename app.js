// const imageBoxList = document.querySelector(".image-box-list");
// const imageBoxes = imageBoxList.querySelectorAll("li");
// const topSectionImage = document.querySelector(".top-section img");
// const arrowButton = document.querySelector(".arrow-button");
// const prevButton = document.querySelector(".arrow-button.prev-button");

// let currentIndex = 0;

// imageBoxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     displayImage(box.querySelector("img"));
//   });
// });

// // arrowButton.addEventListener("click", () => {
// //   if (currentIndex === 5) {
// //     currentIndex = 0;
// //   } else {
// //     currentIndex++;
// //   }

// //   displayImage(imageBoxes[currentIndex].querySelector("img"));
// // });

// arrowButton.addEventListener("click", () => {
//   if (currentIndex === 0) {
//     currentIndex = 5;
//   } else {
//     currentIndex--;
//   }

//   displayImage(imageBoxes[currentIndex].querySelector("img"));
// });

// prevButton.addEventListener("click", () => {
//   if (currentIndex === 5) {
//     currentIndex = 0;
//   } else {
//     currentIndex++;
//   }

//   displayImage(imageBoxes[currentIndex].querySelector("img"));
// });

// function displayImage(image) {
//   topSectionImage.src = image.src;
// }
// -----------------------------------------
// const imageBoxList = document.querySelector(".image-box-list");
// const imageBoxes = imageBoxList.querySelectorAll("li");
// const topSectionImage = document.querySelector(".top-section img");
// const arrowButton = document.querySelector(".arrow-button");
// const prevButton = document.querySelector(".arrow-button.prev-button");

// let currentIndex = 0;

// let totalImageCount = 10;

// imageBoxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     displayImage(box.querySelector("img"));
//   });
// });

// arrowButton.addEventListener("click", () => {
//   if (currentIndex === 0) {
//     currentIndex = totalImageCount - 1;
//   } else {
//     currentIndex--;
//   }

//   displayImage(imageBoxes[currentIndex].querySelector("img"));
// });

// prevButton.addEventListener("click", () => {
//   if (currentIndex === totalImageCount - 1) {
//     currentIndex = 0;
//   } else {
//     currentIndex++;
//   }

//   displayImage(imageBoxes[currentIndex].querySelector("img"));
// });

// function displayImage(image) {
//   topSectionImage.src = image.src;
// }
// --------------------------------------------------

//
// -------------------------

// const imageBoxList = document.querySelector(".image-box-list");
// const imageBoxes = imageBoxList.querySelectorAll("li");
// const topSectionImage = document.querySelector(".top-section img");
// const arrowButton = document.querySelector(".arrow-button");
// const prevButton = document.querySelector(".arrow-button.prev-button");

// let currentIndex = 0;

// let totalImageCount = 10;

// imageBoxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     displayImage(box.querySelector("img"));
//     toggleActiveClass(box);
//   });
// });

// arrowButton.addEventListener("click", () => {
//   if (currentIndex === 0) {
//     currentIndex = totalImageCount - 1;
//   } else {
//     currentIndex--;
//   }

//   displayImage(imageBoxes[currentIndex].querySelector("img"));
//   toggleActiveClass(imageBoxes[currentIndex]);
// });

// prevButton.addEventListener("click", () => {
//   if (currentIndex === totalImageCount - 1) {
//     currentIndex = 0;
//   } else {
//     currentIndex++;
//   }

//   displayImage(imageBoxes[currentIndex].querySelector("img"));
//   toggleActiveClass(imageBoxes[currentIndex]);
// });

// function toggleActiveClass(box) {
//   box.classList.toggle("active");
// }

// function displayImage(image) {
//   topSectionImage.src = image.src;
// }

// ------------------------------ این خوبه👇

// const imageBoxList = document.querySelector(".image-box-list");
// const imageBoxes = imageBoxList.querySelectorAll("li");
// const topSectionImage = document.querySelector(".top-section img");
// const arrowButton = document.querySelector(".arrow-button");
// const prevButton = document.querySelector(".arrow-button.prev-button");

// let currentIndex = 0;

// let totalImageCount = 10;

// imageBoxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     displayImage(box.querySelector("img"));
//     setActiveImageOutline(box);
//   });
// });

// arrowButton.addEventListener("click", () => {
//   if (currentIndex === 0) {
//     currentIndex = totalImageCount - 1;
//   } else {
//     currentIndex--;
//   }

//   displayImage(imageBoxes[currentIndex].querySelector("img"));
//   setActiveImageOutline(imageBoxes[currentIndex]);
// });

// prevButton.addEventListener("click", () => {
//   if (currentIndex === totalImageCount - 1) {
//     currentIndex = 0;
//   } else {
//     currentIndex++;
//   }

//   displayImage(imageBoxes[currentIndex].querySelector("img"));
//   setActiveImageOutline(imageBoxes[currentIndex]);
// });

// function setActiveImageOutline(box) {
//   // Remove the outline from all other image boxes
//   imageBoxes.forEach((otherBox) => {
//     if (otherBox !== box) {
//       otherBox.classList.remove("active");
//     }
//   });

//   // Set the outline on the current active image box
//   box.classList.add("active");
// }

// function displayImage(image) {
//   topSectionImage.src = image.src;
// }

// -----------------
const imageBoxList = document.querySelector(".image-box-list");
const imageBoxes = imageBoxList.querySelectorAll("li");
const topSectionImage = document.querySelector(".top-section img");
const arrowButton = document.querySelector(".arrow-button");
const prevButton = document.querySelector(".arrow-button.prev-button");

let currentIndex = 0;

let totalImageCount = 8; // Adjust total image count based on your images

imageBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    displayImage(box.querySelector("img"));
    setActiveImageOutline(box);
  });
});

arrowButton.addEventListener("click", () => {
  if (currentIndex === 0) {
    currentIndex = totalImageCount - 1;
  } else {
    currentIndex--;
  }

  displayImage(imageBoxes[currentIndex].querySelector("img"));
  setActiveImageOutline(imageBoxes[currentIndex]);
});

prevButton.addEventListener("click", () => {
  if (currentIndex === totalImageCount - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  displayImage(imageBoxes[currentIndex].querySelector("img"));
  setActiveImageOutline(imageBoxes[currentIndex]);
});

function setActiveImageOutline(box) {
  // Remove the outline from all other image boxes
  imageBoxes.forEach((otherBox) => {
    if (otherBox !== box) {
      otherBox.classList.remove("active");
    }
  });

  // Set the outline on the current active image box
  box.classList.add("active");
}

function displayImage(image) {
  topSectionImage.src = image.src;
}

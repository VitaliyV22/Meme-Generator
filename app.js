const formList = document.getElementById("form");
const allInputs = document.querySelectorAll("input");
const mainGrid = document.getElementById("main-grid");
const deleteButton = document.getElementById("delete-button");

// listening for submit event after form has been submitted
formList.addEventListener("submit", (e) => {
  e.preventDefault();
  // creates a separe div called imagebox to store the image and text
  const imageBox = document.createElement("div");
  imageBox.id = "box-1";
  const topText = document.getElementById("top-text").value;
  const bottomText = document.getElementById("bottom-text").value;
  // creating a separte div for Top text and Bottom text, both acting as divs within the imageBox div
  textBoxTop = document.createElement("div");
  textBoxTop.innerHTML = topText;
  textBoxTop.id = "final-top-text";

  textBoxBottom = document.createElement("div");
  textBoxBottom.innerHTML = bottomText;
  textBoxBottom.id = "final-bottom-text";

  // taking the value of the image and creating a new element with the url
  const imgUrl = document.getElementById("imgurl").value;

  const img = document.createElement("img");

  img.classList.add("newimg");
  img.src = imgUrl;

  // appending all the created text and image to imageBox
  mainGrid.appendChild(imageBox);
  imageBox.appendChild(img);
  imageBox.appendChild(textBoxTop);
  imageBox.appendChild(textBoxBottom);
  allInputs.forEach((singleInput) => (singleInput.value = ""));
});
// button to delete last generated meme on click
deleteButton.addEventListener("click", () => {
  mainGrid.removeChild(mainGrid.lastChild);
});

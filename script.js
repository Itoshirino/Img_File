const elFile = document.querySelector(".file");
const elOutput = document.querySelector(".output");

let imagesArray = []


elFile.addEventListener("change", () => {
const file = elFile.files
imagesArray.push(file[0])
displayImages()
})

function displayImages() {
  let images = ""
  imagesArray.forEach((image, index) => {
    images += `<div class="image">
                <img src="${URL.createObjectURL(image)}" alt="image">
                <span onclick="deleteImage(${index})">&times;</span>
              </div>`
  })
  elOutput.innerHTML = images
}

function deleteImage(index) {
  imagesArray.splice(index, 1)
  displayImages()
}
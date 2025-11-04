const imageContainerE1 = document.querySelector(".image-container");
const btnE1 = document.querySelector(".btn");

btnE1.addEventListener("click", () => {
    console.log("clicked");
    addNewImages();
});

function addNewImages() {
    const imageNum = 10;
    for (let i = 0; i < imageNum; i++) {
        const newImageE1 = document.createElement("img");
        newImageE1.src = `https://picsum.photos/536/354?random=${Math.floor(Math.random() * 2000)}`;
        imageContainerE1.appendChild(newImageE1);
    }
}

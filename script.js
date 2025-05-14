function changeHeading() {
    const heading = document.getElementById("mainHeading");
    heading.textContent = "You've updated the heading with JavaScript!";
}

function styleImage() {
    const image = document.getElementById("image");
    image.style.border = "5px solid #4CAF50";
    image.style.borderRadius = "10px";
    image.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
}

function toggleParagraph() {
    const container = document.getElementById("dynamicContent");
    const existingPara = document.getElementById("newPara");

    if (existingPara) {
        container.removeChild(existingPara);
    } else {
        const para = document.createElement("p");
        para.id = "newPara";
        para.textContent = "This paragraph was added with JavaScript!";
        para.style.color = "#333";
        container.appendChild(para);
    }
}

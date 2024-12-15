const $ = document;
let leftButton = $.getElementById("leftButton");
let rightButton = $.getElementById("rightButton");
let pictureBox = $.getElementById("pictureBox");
let pictureIndex = 0;
let pictures = [
    {
        id : 1,
        src : "img/1.jpg",
    },
    {
        id : 2,
        src : "img/2.jpg",
    },
    {
        id : 3,
        src : "img/3.jpg",
    },
]
let picture = pictures[0].src;
pictureBox.innerHTML = `<img src="${picture}">`;
rightButton.addEventListener("click", ()=> {
    setTimeout(() => {
        pictureBox.style.opacity = '0';
    }, 100);
    setTimeout(() => {
        pictureIndex++;
    if (pictureIndex == pictures.length) {
        pictureIndex = 0;
    }
    pictureBox.innerHTML = `<img src="${pictures[pictureIndex].src}">`;
    }, 200);
    setTimeout(() => {
    pictureBox.style.opacity = '1';
    }, 300);
})

leftButton.addEventListener("click", ()=> {
    setTimeout(() => {
        pictureBox.style.opacity = '0';
    }, 100);
    setTimeout(() => {
        pictureIndex--;
        if (pictureIndex < 0) {
            pictureIndex = pictures.length -1;
        }
    pictureBox.innerHTML = `<img src="${pictures[pictureIndex].src}">`;
    }, 200);
    setTimeout(() => {
    pictureBox.style.opacity = '1';
    }, 300);
})
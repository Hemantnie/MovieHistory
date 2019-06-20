const content = document.getElementById("content");
const button = document.getElementById("button");
const imgURL = "https://m.media-amazon.com/images/M/MV5BNGJlYjVkMjQtN2NlZC00NTJhLThmZjItMTRlZDczMmE3YmI3XkEyXkFqcGdeQXVyMzI0NDc4ODY@._V1_UX182_CR0,0,182,268_AL_.jpg";

function addImageSource(){
    let outerDiv = document.createElement('div');
    let imgTag = document.createElement('img');
    imgTag.setAttribute('src',imgURL);
    outerDiv.appendChild(imgTag);
    content.appendChild(outerDiv);
}

button.addEventListener(click,addImageSource);
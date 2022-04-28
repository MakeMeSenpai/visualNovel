/* Start of JavaScript*/

const storyheading = document.querySelector(".story-heading")
const storyimg = document.querySelector(".story-img")
const storytext = document.querySelector(".story-text")

const choice1 = document.querySelector("#choice1");
const choice2 = document.querySelector("#choice2");

function choseFirst() {
    storytext.innerHTML="So you chose the first path. Wise..."
}

function choseSecond() {
    storytext.innerHTML="So you chose the second path. Clever..."
}
const inputs = document.getElementsByClassName("inputbox");
Array.prototype.forEach.call(inputs, (input) => {
    input.addEventListener("input", (e) => {
        let engtranslation = e.target.nextElementSibling;
        if(e.target.value) {
            engtranslation.style.display = "none";
        }
        else if(!e.target.value) {
            engtranslation.style.display = "inline";
        }
    })
});

/* hover 更換圖片 */
const buttons = document.getElementsByClassName("button");
Array.prototype.forEach.call(buttons, (button) => {
    const oldsrc = button.children[0].src;
    const routes = oldsrc.split('/');
    let newsrc;
    button.addEventListener('mouseover', (e) => {
        newsrc = "image/whenHover/" + routes[routes.length-1];
        button.children[0].src = newsrc;
    })
    button.addEventListener('mouseout', (e) => {
        button.children[0].src = oldsrc;
    })
})
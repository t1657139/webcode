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
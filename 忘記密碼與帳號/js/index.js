/* 控制placeholder的顯示*/
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
/* step控制 */
const buttons = document.getElementsByClassName("step-button");
const steps = document.getElementsByClassName("step");
const contents = document.getElementsByClassName("content");
let now = 0;
console.log("現在步驟：" + (now+1));
Array.prototype.forEach.call(buttons, (button) => {
    button.addEventListener("click", () => {
        if(steps[now+1]){
            steps[now].classList.remove("step-active");
            steps[now+1].classList.add("step-active");
            contents[now].classList.remove("content-active");
            contents[now+1].classList.add("content-active");
            now++;
            console.log("現在步驟：" + (now+1));
        }
        else if(!steps[now+1]) {

        }
    });
});              
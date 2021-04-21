/* CONSTS */
const header = document.getElementById("header");
const nav = document.getElementById("nav");
const footer = document.getElementById("footer");
const goTop = document.getElementById("go-top");         
const bigIndexButtons = document.getElementsByClassName("big-index-button");  
const services = document.getElementsByClassName("service");
const sideButtons = document.getElementsByClassName("side-button");

/* 執行 */
window.addEventListener('scroll', () => {
    navFixTop();
    showCurrentService();           
    sideButtonDisplayControl();
});
bigIndexButtonOnClick();
sideButtonOnclick();
goTopOnClick();

/*FUNCTIONS */
/* 設定NAV在fix top */
function navFixTop() {
    if(header.offsetHeight <= window.scrollY) {
        nav.classList.add("fix-top");
    }
    else if(header.offsetHeight > window.scrollY) {
        nav.classList.remove("fix-top");
    }
}
/* 網頁滑動至對應位置改變side-button圖示 */
function showCurrentService() {
    for(let i=0; i < sideButtons.length; i++) {
        let isReached = services[i+1].offsetTop <= window.scrollY+(document.body.clientHeight/2);
        let haveNotPassThrough = services[i+2] ? window.scrollY+(document.body.clientHeight/2) < services[i+2].offsetTop : !services[i+2] ;
        if(isReached && haveNotPassThrough) {
            sideButtons[i].children[0].classList.add('d-none');
            sideButtons[i].children[1].classList.add('d-block');
        }
        else {
            sideButtons[i].children[0].classList.remove('d-none');
            sideButtons[i].children[1].classList.remove('d-block');
        }
    }
}
/* 偵測是否在頁頂 */
function atTop() {
    let totalScroll = window.scrollY;
    if (totalScroll == 0) {
        return true;
    }
    else {
        return false;
    }
}
/* 偵測是否在頁底 */
function atBottom() {
    let webPageHeight = document.body.scrollHeight;
    let totalScroll = document.body.clientHeight + window.scrollY;
    if (webPageHeight <= totalScroll+50) {
        return true;
    }
    else {
        return false;
    }
}
/* 控制side-buttons的顯示，在頁頂時隱藏，在頁底時避開footer */
function sideButtonDisplayControl() {
    let sideButtonParent = sideButtons[0].parentElement;
    if(atTop()) {
        sideButtonParent.style.display = "none";
    }
    else if(!atTop()) {
        sideButtonParent.style.display = "block";
    }
    if(atBottom()) {
        sideButtonParent.style.bottom = footer.offsetHeight + "px";
        sideButtonParent.style.transform = 'unset';                
    }
    else if(!atBottom()) {
        sideButtonParent.style.bottom = "50%";
        sideButtonParent.style.transform = 'translate(0, 50%)';
    }
}
/*點選big-index-button，視窗捲動至對應位置*/
function bigIndexButtonOnClick() {
    for (let i=0; i < bigIndexButtons.length; i++) {
        bigIndexButtons[i].addEventListener("click", () => {
            window.scrollTo({
                left: 0,
                top: services[(i+1)%services.length].offsetTop-nav.offsetHeight*2,
                behavior: 'smooth',
            });
        })
    }
}
/*點選side-button，視窗捲動至對應位置*/ 
function sideButtonOnclick() {
    for (let i = 0; i < sideButtons.length; i++) {
        sideButtons[i].addEventListener('click', () => {
            window.scrollTo({
                left: 0,
                top: services[i+1].offsetTop-nav.offsetHeight*2,
                behavior: 'smooth',
            });
        });
    }               
}
/* 返回頁頂按鈕 */
function goTopOnClick() {
    goTop.addEventListener('click', () => {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth',
        });
    });
}
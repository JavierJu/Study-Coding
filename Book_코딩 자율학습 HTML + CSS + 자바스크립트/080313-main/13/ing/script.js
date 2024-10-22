/* 여기부터 책의 코드를 작성해주세요 */
(function(){
    const spanEL = document.querySelector("main h2 span");
    const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-End Developer'];
    let index = 0;
    let currentTxt = txtArr[index].split("");

    function writeTxt(){
        spanEL.textContent += currentTxt.shift();
        if(currentTxt.length !== 0){
            setTimeout(writeTxt, Math.floor(Math.random() * 100));
        }else{
            currentTxt = spanEL.textContent.split("");
            setTimeout(deleteTxt, 3000);
        }
    }
    function deleteTxt(){
        currentTxt.pop();
        spanEL.textContent = currentTxt.join("")
        if(currentTxt.length !== 0){
            setTimeout(deleteTxt, Math.floor(Math.random() * 100));
        }else{
            index = (index + 1) % txtArr.length;
            currentTxt = txtArr[index].split("");
            writeTxt();
        }
    }
    writeTxt();
})()

const headerEl = document.querySelector("header");
window.addEventListener('scroll', function(){
  requestAnimationFrame(scrollCheck);
});
function scrollCheck(){
  let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
  if(browerScrollY > 0){
    headerEl.classList.add("active");
  }else{
    headerEl.classList.remove("active");
  }
}

const animationMove = function(selector){
    const targetEL = document.querySelector(selector);
    const browerScrollY = window.pageYOffset;
    const targetScorllY = targetEL.getBoundingClientRect().top + browerScrollY;
    window.scrollTo({ top: targetScorllY, behavior: 'smooth'});
};
const scollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
for(let i = 0; i < scollMoveEl.length; i++){
    scollMoveEl[i].addEventListener('click', function(e){
        const target = this.dataset.target;
        animationMove(target);
    });
}



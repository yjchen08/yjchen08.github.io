const text = document.querySelectorAll(".thePaths");
// 每個字的長度(用於css動畫)
for (let i = 0; i < text.length; i++) {
  console.log(`text num ${i} length is ${text[i].getTotalLength()}`);
}

// 當動畫結束時要將動畫隱藏
const lastWord = document.querySelector("#thirteenth");
const animation = document.querySelector("div.animation");
lastWord.addEventListener("animationend", () => {
  // 做法1:直接用js將style寫進去
  // animation.style = "transition: all 1s ease; opacity: 0; pointer-events: none;";
  // 做法2:把隱藏寫進css，再添加class
  animation.classList.add("animationEnd");
});

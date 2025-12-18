const toggleButton = document.querySelector("#toggle-button");
const englishEls = document.querySelectorAll(".en");
const chineseEls = document.querySelectorAll(".zh");

let showChinese = false;

function setLanguage(showChineseLang) {
  showChinese = showChineseLang;

  englishEls.forEach((el) => {
    el.hidden = showChinese;
  });

  chineseEls.forEach((el) => {
    el.hidden = !showChinese;
  });

  toggleButton.textContent = showChinese ? "Show English" : "Show 中文";
}

toggleButton.addEventListener("click", () => {
  setLanguage(!showChinese);
});

setLanguage(false);
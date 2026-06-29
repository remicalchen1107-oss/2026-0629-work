const slides = document.querySelectorAll(".card");
const counter = document.getElementById("slideCounter");
let currentSlide = 0;

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove("active", "left", "right");
    if (index === currentSlide) {
      slide.classList.add("active");
    } else if (index === (currentSlide + 1) % slides.length) {
      slide.classList.add("right");
    } else {
      slide.classList.add("left");
    }
  });
  counter.textContent = String(currentSlide + 1).padStart(2, "0") + " / " + String(slides.length).padStart(2, "0");
}

document.getElementById("nextBtn").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlides();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlides();
});

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlides();
}, 4200);

const experiences = [
  {
    title: "2020年 · 好感創意設計有限公司・台北",
    text: "在這裡第一次接觸到真實客戶與截止日期的壓力。協助資深設計師完成品牌提案、印刷品排版與簡報視覺，也負責整理設計素材庫與供應商聯絡。雖然是打雜起步，但正是這段時期讓我養成對細節的執著。",
    tags: ["排版設計", "印刷品", "簡報製作"]
  },
  {
    title: "2021年 · MUSE 品牌顧問公司・台北",
    text: "進入品牌顧問環境後，學會從策略反推視覺。負責中小型品牌的識別系統、提案視覺與社群延伸應用，第一次帶領小型專案到上線。",
    tags: ["品牌策略", "識別系統", "社群延伸"]
  },
  {
    title: "2023年 · Nextway 科技新創・台北",
    text: "加入科技新創團隊後，開始把設計帶進產品開發流程。負責 App 與官網的視覺、互動原型、設計系統建置，與工程師密切協作。",
    tags: ["產品設計", "設計系統", "原型互動"]
  }
];

const expDetail = document.getElementById("expDetail");
const expButtons = document.querySelectorAll(".exp-btn");

function setExperience(index) {
  const item = experiences[index];
  expDetail.innerHTML = `
    <h3>${item.title}</h3>
    <p>${item.text}</p>
    <div class="tags">${item.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
  `;
  expButtons.forEach(btn => btn.classList.remove("active"));
  expButtons[index].classList.add("active");
}

expButtons.forEach(button => {
  button.addEventListener("mouseenter", () => setExperience(Number(button.dataset.index)));
  button.addEventListener("click", () => setExperience(Number(button.dataset.index)));
});

setExperience(0);

document.getElementById("inquiry").addEventListener("submit", (event) => {
  event.preventDefault();
  const message = document.getElementById("quickMessage").value.trim();
  alert(message ? "已收到你的訊息：" + message : "請先輸入想說的話。");
});

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  alert("表單已送出！這是前端示範版，尚未串接後端。");
});

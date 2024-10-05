let count = 0; // 初始化计数器

// 获取计数器显示元素和按钮
const counterDisplay = document.getElementById("counter");
const incrementButton = document.getElementById("incrementButton");

// 为按钮添加点击事件监听器
incrementButton.addEventListener("click", function () {
  count++; // 增加计数
  counterDisplay.textContent = count; // 更新计数器显示
});

// 设置 GitHub 链接
const githubLink = document.getElementById("githubLink");
githubLink.href = "https://github.com/Heroking113/web_pages"; // 动态设置 href

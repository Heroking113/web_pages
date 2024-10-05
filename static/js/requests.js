const data_url = "http://jsonplaceholder.typicode.com/posts";

function fetchData(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("网络响应错误");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("请求失败:", error);
      throw error; // 重新抛出错误以供进一步处理
    });
}

// 渲染数据到 HTML 表格
function renderData(data) {
  const container = document.getElementById("dataContainer");
  container.innerHTML = ""; // 清空容器

  data.forEach((item) => {
    const row = document.createElement("tr"); // 创建新行
    row.innerHTML = `<td>${item.id}</td><td>${item.title}</td>`; // 填充数据
    container.appendChild(row); // 将新行添加到表格
  });
}

// 绑定按钮点击事件
document.getElementById("fetchButton").addEventListener("click", () => {
  fetchData(data_url).then((data) => {
    renderData(data); // 渲染数据
  });
});

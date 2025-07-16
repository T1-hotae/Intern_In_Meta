const addBtn = document.getElementById("addBtn");
const badge = document.getElementById("badge");
let state = 0;
let count = 0;

addBtn.addEventListener("click", () => {
  if (state) {
    alert("해당 상품은 이미 담겨있습니다.");
    return;
  }
  addBtn.style.background = "gray";
  addBtn.textContent = "담김!";
  state = 1;
  count++;
  alert("카트에 담겼습니다.");

  badge.textContent = count;
});

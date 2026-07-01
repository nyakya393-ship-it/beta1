console.log("JS動いてる");
const form = document.getElementById("battleForm");
const list = document.getElementById("list");

let battles = JSON.parse(localStorage.getItem("battles")) || [];

// 表示
function render() {
  list.innerHTML = "";

  battles.forEach((b, i) => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <b>${b.rule}</b><br>
      結果：${b.result === "win" ? "勝ち" : "負け"}<br>
      メモ：${b.memo || "なし"}<br><br>
      <button onclick="removeBattle(${i})">削除</button>
    `;

    list.appendChild(div);
  });
}

// 保存
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const battle = {
    rule: document.getElementById("rule").value,
    result: document.getElementById("result").value,
    memo: document.getElementById("memo").value
  };

  battles.push(battle);
  localStorage.setItem("battles", JSON.stringify(battles));

  form.reset();
  render();
});

// 削除
function removeBattle(index) {
  battles.splice(index, 1);
  localStorage.setItem("battles", JSON.stringify(battles));
  render();
}

render();

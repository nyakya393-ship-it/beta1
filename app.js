document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("battleForm");
  const list = document.getElementById("list");

  let battles = JSON.parse(localStorage.getItem("battles")) || [];

  // =====================
  // 統計（完全分離）
  // =====================
  function updateStats() {

    const win = battles.filter(b => b.result === "win").length;
    const lose = battles.filter(b => b.result === "lose").length;

    const disconnect = battles.filter(b => b.result === "disconnect").length;
    const invalid = battles.filter(b => b.result === "invalid").length;

    const totalValid = win + lose;

    const rate = totalValid === 0 ? 0 : Math.round((win / totalValid) * 100);

    const kill = battles.reduce((s, b) => s + (b.kill || 0), 0);
    const death = battles.reduce((s, b) => s + (b.death || 0), 0);

    const kd = death === 0 ? kill : (kill / death).toFixed(2);

    document.getElementById("totalBattles").textContent = battles.length;
    document.getElementById("winCount").textContent = win;
    document.getElementById("loseCount").textContent = lose;
    document.getElementById("winRate").textContent = rate + "%";
    document.getElementById("kdRatio").textContent = kd;
  }

  // =====================
  // 表示（完全修正版）
  // =====================
  function render() {

    list.innerHTML = "";

    battles.forEach((b, i) => {

      let label = "";

      if (b.result === "win") label = "勝ち";
      else if (b.result === "lose") label = "負け";
      else if (b.result === "disconnect") label = "通信切断";
      else if (b.result === "invalid") label = "無効試合";

      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <b>${b.rule}</b><br>
        結果：${label}<br>
        武器：${b.weapon || "未設定"}<br>
        キル：${b.kill} / デス：${b.death}<br>
        カウント：${b.count ?? "-"}<br>
        メモ：${b.memo || "なし"}<br><br>

        <button onclick="removeBattle(${i})">削除</button>
      `;

      list.appendChild(div);
    });

    updateStats();
  }

  // =====================
  // 保存
  // =====================
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    battles.push({
      rule: document.getElementById("rule").value,
      result: document.getElementById("result").value,
      weapon: document.getElementById("weapon").value,
      kill: Number(document.getElementById("kill").value),
      death: Number(document.getElementById("death").value),
      count: Number(document.getElementById("count").value),
      memo: document.getElementById("memo").value
    });

    localStorage.setItem("battles", JSON.stringify(battles));

    form.reset();
    render();
  });

  // =====================
  // 削除
  // =====================
  window.removeBattle = function (index) {
    battles.splice(index, 1);
    localStorage.setItem("battles", JSON.stringify(battles));
    render();
  };

  render();

});

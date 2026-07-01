// =====================
// データ
// =====================
let battles = JSON.parse(localStorage.getItem("battles")) || [];

// =====================
// 武器
// =====================
const weapons = [
  "スプラシューター","スプラシューターコラボ","ヒーローシューター",
  "わかばシューター","もみじシューター",
  ".52ガロン",".52ガロンデコ",".96ガロン",".96ガロンデコ",".96ガロン爪",
  "プロモデラーMG","プロモデラーRG","プロモデラー彩",
  "N-ZAP85","N-ZAP89",
  "スペースシューター","スペースシューターコラボ",
  "ボールドマーカー","ボールドマーカーネオ",
  "シャープマーカー","シャープマーカーネオ","シャープマーカーGECK",
  "プライムシューター","プライムシューターコラボ","プライムシューターFRZN",
  "ジェットスイーパー","ジェットスイーパーカスタム","ジェットスイーパーCOBR",
  "ボトルガイザー","ボトルガイザーフォイル",
  "L3リールガン","L3リールガンD","L3リールガン箔",
  "H3リールガン","H3リールガンD","H3リールガンSNAK",

  "ホットブラスター","ノヴァブラスター","オーダーブラスターレプリカ",
  "スプラローラー","カーボンローラー","オーダーローラーレプリカ",
  "スプラチャージャー","リッター4K",
  "バレルスピナー","ハイドラント",
  "スプラマニューバー","クアッドホッパー",
  "ホクサイ","パブロ",
  "トライストリンガー","ドライブワイパー"
];

// =====================
// ステージ
// =====================
const stages = [
  "ユノハナ大渓谷","ゴンスイ地区","ヤガラ市場","マテガイ放水路",
  "ナンプラー遺跡","ナメロウ金属","クサヤ温泉","タラポート",
  "ヒラメが丘団地","マサバ海峡大橋","キンメダイ美術館","マヒマヒリゾート",
  "海女美術大学","チョウザメ造船","ザトウマーケット","スメーシーワールド",
  "コンブトラック","マンタマリア号","タカアシ経済特区","オヒョウ海運",
  "バイガイ亭","ネギトロ炭鉱","カジキ空港","リュウグウターミナル","デカライン高架下"
];

// =====================
// DOM
// =====================
const form = document.getElementById("battleForm");
const list = document.getElementById("list");

let weaponSel, stageSel;

// =====================
// 初期化（ここが重要）
// =====================
document.addEventListener("DOMContentLoaded", () => {

  weaponSel = document.getElementById("weapon");
  stageSel = document.getElementById("stage");

  // 武器セット
  weapons.forEach(w => {
    const o = document.createElement("option");
    o.textContent = w;
    o.value = w;
    weaponSel.appendChild(o);
  });

  // ステージセット
  stages.forEach(s => {
    const o = document.createElement("option");
    o.textContent = s;
    o.value = s;
    stageSel.appendChild(o);
  });

  render();
});

// =====================
// 保存
// =====================
form.addEventListener("submit", e => {
  e.preventDefault();

  battles.push({
    battleType: document.getElementById("battleType").value,
    rule: document.getElementById("rule").value,
    stage: stageSel.value,
    weapon: weaponSel.value,
    result: document.getElementById("result").value,

    kill: Number(document.getElementById("kill").value),
    assist: Number(document.getElementById("assist").value),
    death: Number(document.getElementById("death").value),
    paint: Number(document.getElementById("paint").value),
    special: Number(document.getElementById("special").value),

    memo: document.getElementById("memo").value
  });

  localStorage.setItem("battles", JSON.stringify(battles));

  form.reset();
  render();
  toast("Saved");
});

// =====================
// 表示
// =====================
function render() {
  list.innerHTML = "";

  battles.forEach(b => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <b>${b.stage}</b> / ${b.weapon}<br>
      ${b.rule} / ${b.result}<br>
      K:${b.kill} A:${b.assist} D:${b.death}<br>
      ${b.paint}p SP:${b.special}<br>
      ${b.memo || ""}
    `;

    list.appendChild(div);
  });

  stats();
}

// =====================
// 統計
// =====================
function stats() {
  const wins = battles.filter(b => b.result === "win").length;
  const loses = battles.filter(b => b.result === "lose").length;
  const total = battles.length;

  const kills = battles.reduce((a,b)=>a+b.kill,0);
  const deaths = battles.reduce((a,b)=>a+b.death,0);

  document.getElementById("totalBattles").textContent = total;
  document.getElementById("wins").textContent = wins;
  document.getElementById("loses").textContent = loses;

  document.getElementById("winRate").textContent =
    total ? Math.round((wins/(wins+loses))*100) + "%" : "0%";

  document.getElementById("kd").textContent =
    deaths ? (kills/deaths).toFixed(2) : kills;
}

// =====================
// トースト
// =====================
function toast(text) {
  const t = document.getElementById("toast");
  t.textContent = text;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 1200);
}

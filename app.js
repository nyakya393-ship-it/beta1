let battles = JSON.parse(localStorage.getItem("battles")) || [];

const battleTypes = [
  "レギュラーマッチ",
  "バンカラマッチ（オープン）",
  "バンカラマッチ（チャレンジ）",
  "Xマッチ",
  "イベントマッチ",
  "フェスマッチ（オープン）",
  "フェスマッチ（チャレンジ）",
  "トリカラバトル（攻撃）",
  "トリカラバトル（守備）",
  "プライベートマッチ"
];

const rules = ["ナワバリバトル","ガチエリア","ガチヤグラ","ガチホコバトル","ガチアサリ"];

const weapons = [
  // =====================
  // シューター
  // =====================
  "スプラシューター","スプラシューターコラボ","スプラシューター煌",
  "ヒーローシューターレプリカ","オーダーシューターレプリカ","オクタシューターレプリカ",
  "わかばシューター","もみじシューター",
  ".52ガロン",".52ガロンデコ",
  ".96ガロン",".96ガロンデコ",".96ガロン爪",
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

  // =====================
  // ブラスター
  // =====================
  "ホットブラスター","ホットブラスターカスタム","ホットブラスター艶",
  "ロングブラスター","ロングブラスターカスタム",
  "ラピッドブラスター","ラピッドブラスターデコ",
  "Rブラスターエリート","Rブラスターエリートデコ","RブラスターエリートWNTR",
  "ノヴァブラスター","ノヴァブラスターネオ",
  "オーダーブラスターレプリカ",
  "クラッシュブラスター","クラッシュブラスターネオ",
  "S-BLAST92","S-BLAST91",

  // =====================
  // ローラー
  // =====================
  "スプラローラー","スプラローラーコラボ","オーダーローラーレプリカ",
  "カーボンローラー","カーボンローラーデコ","カーボンローラーANGL",
  "ダイナモローラー","ダイナモローラーテスラ","ダイナモローラー冥",
  "ワイドローラー","ワイドローラーコラボ","ワイドローラー惑",
  "ヴァリアブルローラー","ヴァリアブルローラーフォイル",

  // =====================
  // チャージャー
  // =====================
  "スプラチャージャー","スプラチャージャーコラボ","スプラチャージャーFRST",
  "スプラスコープ","スプラスコープコラボ","スプラスコープFRST",
  "スクイックリンα","スクイックリンβ",
  "14式竹筒銃・甲","14式竹筒銃・乙",
  "ソイチューバー","ソイチューバーカスタム",
  "R-PEN/5H","R-PEN/5B",
  "リッター4K","リッター4Kカスタム",
  "4Kスコープ","4Kスコープカスタム",

  // =====================
  // スロッシャー
  // =====================
  "バケットスロッシャー","バケットスロッシャーデコ",
  "ヒッセン","ヒッセンヒュー","ヒッセンASH",
  "モップリン","モップリンD","モップリン角",
  "スクリュースロッシャー","スクリュースロッシャーネオ",
  "エクスプロッシャー","エクスプロッシャーカスタム",
  "オーバースロッシャー","オーバースロッシャーデコ",

  // =====================
  // スピナー
  // =====================
  "バレルスピナー","バレルスピナーデコ",
  "スプラスピナー","スプラスピナーコラボ","スプラスピナーPYTN",
  "イグザミナー","イグザミナーヒュー",
  "ハイドラント","ハイドラントカスタム","ハイドラント圧",
  "ノーチラス47","ノーチラス79",
  "クーゲルシュライバー","クーゲルシュライバーヒュー",

  // =====================
  // マニューバー
  // =====================
  "スプラマニューバー","スプラマニューバーコラボ","スプラマニューバー耀",
  "デュアルスイーパー","デュアルスイーパーカスタム","デュアルスイーパー蹄",
  "スパッタリー","スパッタリーヒュー","スパッタリーOWL",
  "クアッドホッパーブラック","クアッドホッパーホワイト",
  "ケルビン525","ケルビン525デコ",
  "ガエンFF","ガエンFFカスタム",

  // =====================
  // シェルター
  // =====================
  "パラシェルター","パラシェルターソレーラ",
  "24式張替傘・甲","24式張替傘・乙",
  "キャンピングシェルター","キャンピングシェルターソレーラ","キャンピングシェルターCREM",
  "スパイガジェット","スパイガジェットソレーラ","スパイガジェット繚",

  // =====================
  // フデ
  // =====================
  "ホクサイ","ホクサイヒュー","ホクサイ彗",
  "オーダーブラシレプリカ",
  "パブロ","パブロヒュー",
  "フィンセント","フィンセントヒュー","フィンセントBRNZ",

  // =====================
  // ストリンガー
  // =====================
  "トライストリンガー","トライストリンガーコラボ","トライストリンガー燈",
  "LACT-450","LACT-450デコ","LACT-450MILK",
  "フルイドV","フルイドVカスタム",

  // =====================
  // ワイパー
  // =====================
  "ドライブワイパー","ドライブワイパーデコ","ドライブワイパーRUST",
  "ジムワイパー","ジムワイパーヒュー","ジムワイパー封",
  "オーダーワイパーレプリカ",
  "デンタルワイパーミント","デンタルワイパースミ"
];

const stages = [
  "ユノハナ大渓谷",
  "ゴンズイ地区",
  "ヤガラ市場",
  "マテガイ放水路",
  "ナンプラー遺跡",
  "ナメロウ金属",
  "クサヤ温泉",
  "タラポートショッピングパーク",
  "ヒラメが丘団地",
  "マサバ海峡大橋",
  "キンメダイ美術館",
  "マヒマヒリゾート＆スパ",
  "海女美術大学",
  "チョウザメ造船",
  "ザトウマーケット",
  "スメーシーワールド",
  "コンブトラック",
  "マンタマリア号",
  "タカアシ経済特区",
  "オヒョウ海運",
  "バイガイ亭",
  "ネギトロ炭鉱",
  "カジキ空港",
  "リュウグウターミナル",
  "デカライン高架下"
];

/* 初期化 */
window.onload = () => {

  fill("weapon", weapons);
  fill("stage", stages);
  fill("rule", rules);
  fill("battleType", battleTypes);

  renderAll();
};

/* タブ切替（ここが重要） */
function showTab(id){

  document.querySelectorAll(".page")
    .forEach(p => p.classList.remove("active"));

  document.querySelectorAll(".tab")
    .forEach(t => t.classList.remove("active"));

  document.getElementById(id).classList.add("active");

  event.target.classList.add("active");

  renderAll();
}

/* セレクト */
function fill(id, arr){
  const el = document.getElementById(id);

  arr.forEach(v=>{
    const o=document.createElement("option");
    o.value=v;
    o.textContent=v;
    el.appendChild(o);
  });
}

/* 保存 */
function saveBattle(){

  battles.push({
    weapon:v("weapon"),
    stage:v("stage"),
    rule:v("rule"),
    battleType:v("battleType"),
    result:v("result"),
    kill:n("kill"),
    assist:n("assist"),
    death:n("death"),
    paint:n("paint")
  });

  localStorage.setItem("battles", JSON.stringify(battles));

  clearInputs();
  renderAll();

  alert("保存できました");
}

/* クリア */
function clearInputs(){
  ["kill","assist","death","paint"].forEach(id=>{
    document.getElementById(id).value="";
  });
}

/* 一括 */
function renderAll(){
  renderList();
  renderStats();
}

/* 戦績 */
function renderList(){

  const el=document.getElementById("list");
  el.innerHTML = battles.slice().reverse().map(b=>`
    <div class="card">
      ${b.weapon}<br>
      ${b.stage}<br>
      ${b.rule} / ${b.battleType}<br>
      ${b.result}<br>
      K:${b.kill} D:${b.death}
    </div>
  `).join("");
}

/* 統計 */
function renderStats(){

  const wins = battles.filter(b=>b.result==="win").length;
  const kills = sum("kill");
  const deaths = sum("death");

  const kd = deaths ? kills/deaths : kills;

  document.getElementById("summary").innerHTML = `
    試合数: ${battles.length}<br>
    勝率: ${(battles.length ? wins/battles.length*100 : 0).toFixed(1)}%<br>
    K/D: ${kd.toFixed(2)}
  `;

  renderWeaponRank();
  renderStageRank();
}

/* 武器 */
function renderWeaponRank(){

  const map={};

  battles.forEach(b=>{
    if(!map[b.weapon]) map[b.weapon]={win:0,total:0};
    map[b.weapon].total++;
    if(b.result==="win") map[b.weapon].win++;
  });

  const arr=Object.entries(map).map(([k,v])=>({
    name:k,
    rate:v.win/v.total
  })).sort((a,b)=>b.rate-a.rate);

  document.getElementById("weaponRank").innerHTML =
    arr.slice(0,5).map(x=>`${x.name} ${(x.rate*100).toFixed(1)}%<br>`).join("");
}

/* ステージ */
function renderStageRank(){

  const map={};

  battles.forEach(b=>{
    if(!map[b.stage]) map[b.stage]={win:0,total:0};
    map[b.stage].total++;
    if(b.result==="win") map[b.stage].win++;
  });

  const arr=Object.entries(map).map(([k,v])=>({
    name:k,
    rate:v.win/v.total
  })).sort((a,b)=>b.rate-a.rate);

  document.getElementById("stageRank").innerHTML =
    arr.slice(0,5).map(x=>`${x.name} ${(x.rate*100).toFixed(1)}%<br>`).join("");
}

/* ヘルパー */
function v(id){return document.getElementById(id)?.value||"";}
function n(id){return Number(document.getElementById(id)?.value||0);}
function sum(k){return battles.reduce((a,b)=>a+(b[k]||0),0);}

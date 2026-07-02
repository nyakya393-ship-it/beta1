let battles = JSON.parse(localStorage.getItem("battles")) || [];

/* =====================
 バトル種類（対戦のみ）
===================== */
const battleTypes = [
  "レギュラーマッチ",
  "バンカラマッチ（チャレンジ）",
  "バンカラマッチ（オープン）",
  "Xマッチ",
  "フェスマッチ（チャレンジ）",
  "フェスマッチ（オープン）",
  "イベントマッチ",
  "トリカラバトル",
  "プライベートマッチ"
];

/* =====================
 ルール
===================== */
const rules = [
  "ナワバリバトル",
  "ガチエリア",
  "ガチヤグラ",
  "ガチホコバトル",
  "ガチアサリ"
];

/* =====================
 武器
===================== */
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

/* =====================
 ステージ
===================== */
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

/* =====================
 初期化
===================== */
window.onload = () => {

  fill("weapon", weapons);
  fill("stage", stages);
  fill("rule", rules);
  fill("battleType", battleTypes);

  renderStats();
};

/* =====================
 セレクト生成
===================== */
function fill(id, arr){
  const el = document.getElementById(id);
  if(!el) return;

  arr.forEach(v=>{
    const o=document.createElement("option");
    o.value=v;
    o.textContent=v;
    el.appendChild(o);
  });
}

/* =====================
 ＋−操作
===================== */
function change(id, val){
  const el = document.getElementById(id);
  el.value = Number(el.value || 0) + val;
}

/* =====================
 保存
===================== */
function saveBattle(){

  battles.push({
    weapon: v("weapon"),
    stage: v("stage"),
    rule: v("rule"),
    battleType: v("battleType"),
    result: v("result"),
    kill: n("kill"),
    assist: n("assist"),
    death: n("death"),
    paint: n("paint")
  });

  localStorage.setItem("battles", JSON.stringify(battles));

  resetInputs();
  renderStats();

  showToast("保存できました");
}

/* =====================
 入力リセット
===================== */
function resetInputs(){
  ["kill","assist","death","paint"].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.value = 0;
  });
}

/* =====================
 統計
===================== */
function renderStats(){

  const wins = battles.filter(b=>b.result==="win").length;

  const kills = sum("kill");
  const deaths = sum("death");
  const paint = sum("paint");

  const avgKill = battles.length ? kills / battles.length : 0;
  const avgDeath = battles.length ? deaths / battles.length : 0;
  const avgPaint = battles.length ? paint / battles.length : 0;

  const kd = deaths ? kills / deaths : kills;

  const el = document.getElementById("summary");

  if(el){
    el.innerHTML = `
      <div class="card">
        <b>総合</b><br>
        試合数: ${battles.length}<br>
        勝率: ${(battles.length ? wins/battles.length*100 : 0).toFixed(1)}%<br>
        K/D: ${kd.toFixed(2)}
      </div>

      <div class="card">
        <b>平均</b><br>
        平均キル: ${avgKill.toFixed(1)}<br>
        平均デス: ${avgDeath.toFixed(1)}<br>
        平均塗り: ${avgPaint.toFixed(1)}
      </div>
    `;
  }

  renderWeaponRank();
  renderStageRank();
}

/* =====================
 武器ランキング
===================== */
function renderWeaponRank(){

  const map={};

  battles.forEach(b=>{
    if(!map[b.weapon]) map[b.weapon]={win:0,total:0};
    map[b.weapon].total++;
    if(b.result==="win") map[b.weapon].win++;
  });

  const arr = Object.entries(map).map(([k,v])=>({
    name:k,
    rate:v.win/v.total
  })).sort((a,b)=>b.rate-a.rate);

  const el = document.getElementById("weaponRank");

  if(el){
    el.innerHTML = arr.slice(0,5).map(x=>`
      <div class="card">
        ${x.name}<br>
        ${(x.rate*100).toFixed(1)}%
      </div>
    `).join("");
  }
}

/* =====================
 ステージランキング
===================== */
function renderStageRank(){

  const map={};

  battles.forEach(b=>{
    if(!map[b.stage]) map[b.stage]={win:0,total:0};
    map[b.stage].total++;
    if(b.result==="win") map[b.stage].win++;
  });

  const arr = Object.entries(map).map(([k,v])=>({
    name:k,
    rate:v.win/v.total
  })).sort((a,b)=>b.rate-a.rate);

  const el = document.getElementById("stageRank");

  if(el){
    el.innerHTML = arr.slice(0,5).map(x=>`
      <div class="card">
        ${x.name}<br>
        ${(x.rate*100).toFixed(1)}%
      </div>
    `).join("");
  }
}

/* =====================
 トースト
===================== */
function showToast(text){

  const t=document.createElement("div");
  t.textContent=text;

  t.style.cssText=`
    position:fixed;
    bottom:80px;
    left:50%;
    transform:translateX(-50%);
    background:#22c55e;
    color:white;
    padding:10px 16px;
    border-radius:8px;
    z-index:9999;
  `;

  document.body.appendChild(t);
  setTimeout(()=>t.remove(),1500);
}

/* =====================
 ヘルパー
===================== */
function v(id){
  return document.getElementById(id)?.value || "";
}

function n(id){
  return Number(document.getElementById(id)?.value || 0);
}

function sum(key){
  return battles.reduce((a,b)=>a+(b[key]||0),0);
}

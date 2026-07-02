let battles = JSON.parse(localStorage.getItem("battles")) || [];

/* =====================
 バトル種類（完全版）
===================== */
const battleTypes = [
  "レギュラーマッチ",
  "バンカラマッチ（チャレンジ）",
  "バンカラマッチ（オープン）",
  "Xマッチ",
  "イベントマッチ",
  "フェスマッチ（チャレンジ）",
  "フェスマッチ（オープン）",
  "トリカラバトル",
  "プライベートマッチ"
];

/* =====================
 ルール（完全版）
===================== */
const rules = [
  "ナワバリバトル",
  "ガチエリア",
  "ガチヤグラ",
  "ガチホコバトル",
  "ガチアサリ"
];

/* =====================
 武器（完全版）
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
 ステージ（完全版）
===================== */
const stages = [
  "ユノハナ大渓谷","ゴンズイ地区","ヤガラ市場","マテガイ放水路",
  "ナメロウ金属","クサヤ温泉","タラポートショッピングパーク","ヒラメが丘団地",
  "マサバ海峡大橋","キンメダイ美術館","マヒマヒリゾート＆スパ",
  "海女美術大学","チョウザメ造船","ザトウマーケット","スメーシーワールド",
  "コンブトラック","マンタマリア号","タカアシ経済特区","オヒョウ海運",
  "バイガイ亭","ネギトロ炭鉱","カジキ空港","リュウグウターミナル",
  "デカライン高架下"
];

/* =====================
 初期化
===================== */
window.onload = () => {

  fill("battleType", battleTypes);
  fill("rule", rules);
  fill("weapon", weapons);
  fill("stage", stages);

  update();
};

function fill(id, arr){
  const el = document.getElementById(id);
  arr.forEach(v=>{
    const o=document.createElement("option");
    o.value=v;
    o.textContent=v;
    el.appendChild(o);
  });
}

/* =====================
 タブ
===================== */
function showTab(id){
  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  if(id==="statsTab") renderStats();
}

/* =====================
 保存
===================== */
function saveBattle(){

  battles.push({
    battleType:v("battleType"),
    rule:v("rule"),
    stage:v("stage"),
    weapon:v("weapon"),
    result:v("result"),
    kill:n("kill"),
    assist:n("assist"),
    death:n("death"),
    paint:n("paint"),
    special:n("special")
  });

  sync();

  clearInputs();
  showToast("保存できました");
}

/* =====================
 1件削除
===================== */
function deleteBattle(index){

  if(!confirm("この戦績を削除しますか？")) return;

  battles.splice(index,1);
  sync();

  showToast("削除しました");
}

/* =====================
 全削除
===================== */
function clearAllBattles(){

  if(!confirm("全戦績を削除しますか？")) return;

  battles = [];
  sync();

  showToast("全データ削除しました");
}

/* =====================
 同期
===================== */
function sync(){

  localStorage.setItem("battles", JSON.stringify(battles));
  update();
}
/* =====================
 入力クリア
===================== */
function clearInputs(){
  ["kill","assist","death","paint","special"].forEach(id=>{
    document.getElementById(id).value="";
  });
}

/* =====================
 更新
===================== */
function update(){
  renderList();
}

/* =====================
 一覧
===================== */
function renderList(){

  const list=document.getElementById("list");
  list.innerHTML="";

  battles.slice().reverse().forEach((b,i)=>{

    const index = battles.length - 1 - i;

    const div=document.createElement("div");
    div.className="card";

    div.innerHTML=`
      <b>${b.weapon}</b><br>
      ${b.stage}<br>
      ${b.rule} / ${b.result}<br>
      K:${b.kill} D:${b.death}<br>
      ${b.paint}p<br>

      <button onclick="deleteBattle(${index})">削除</button>
    `;

    list.appendChild(div);
  });
}

/* =====================
 分析
===================== */
function renderStats(){

  const wins = battles.filter(b=>b.result==="win").length;

  const kills = sum("kill");
  const deaths = sum("death");
  const paint = sum("paint");

  const avgKill = battles.length ? kills / battles.length : 0;
  const avgDeath = battles.length ? deaths / battles.length : 0;
  const avgPaint = battles.length ? paint / battles.length : 0;

  const kd = deaths ? kills/deaths : kills;

  document.getElementById("summary").innerHTML = `
    試合数:${battles.length}<br>
    勝率:${(wins/battles.length*100||0).toFixed(1)}%<br>
    K/D:${kd.toFixed(2)}<br>
    平均キル:${avgKill.toFixed(1)}<br>
    平均デス:${avgDeath.toFixed(1)}<br>
    平均塗り:${avgPaint.toFixed(1)}
  `;

  renderWeaponRank();
  renderStageRank();
}
/* =====================
 武器ランキング
===================== */
function renderWeaponRank(){

  const map={};

  battles.forEach(b=>{
    if(!map[b.weapon]){
      map[b.weapon]={win:0,total:0,kill:0,death:0};
    }

    map[b.weapon].total++;
    if(b.result==="win") map[b.weapon].win++;

    map[b.weapon].kill += b.kill||0;
    map[b.weapon].death += b.death||0;
  });

  const arr = Object.entries(map).map(([name,v])=>({

    name,
    winRate: v.win / v.total,
    kd: v.death ? v.kill / v.death : v.kill,
    total: v.total

  })).sort((a,b)=>b.winRate - a.winRate);

  document.getElementById("weaponRank").innerHTML =
    arr.slice(0,10).map(x=>`
      <div class="card">
        <b>${x.name}</b><br>
        勝率:${(x.winRate*100).toFixed(1)}%<br>
        K/D:${x.kd.toFixed(2)}<br>
        試合:${x.total}
      </div>
    `).join("");
}
/* =====================
 ステージランキング
===================== */
function renderStageRank(){

  const map={};

  battles.forEach(b=>{
    if(!map[b.stage]){
      map[b.stage]={win:0,total:0};
    }

    map[b.stage].total++;
    if(b.result==="win") map[b.stage].win++;
  });

  const arr = Object.entries(map).map(([name,v])=>({
    name,
    rate: v.win / v.total,
    total: v.total
  })).sort((a,b)=>b.rate-a.rate);

  document.getElementById("stageRank").innerHTML =
    arr.slice(0,10).map(x=>`
      <div class="card">
        <b>${x.name}</b><br>
        勝率:${(x.rate*100).toFixed(1)}%<br>
        試合:${x.total}
      </div>
    `).join("");
}
/* =====================
 ヘルパー
===================== */
function v(id){return document.getElementById(id)?.value||"";}
function n(id){return Number(document.getElementById(id)?.value||0);}
function sum(k){return battles.reduce((a,b)=>a+(b[k]||0),0);}

function showToast(text) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = text;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 1500);
}

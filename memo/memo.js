// ページが読み込まれた時に実行
window.onload = function() {
  // ローカルストレージからデータを取得
  const storedData = localStorage.getItem("tableData");

  // データがある場合はテーブルに反映
  if (storedData) {
    document.getElementById("base").innerHTML = storedData;
  }
}

//ページを離れるときに実行
window.onbeforeunload = function() {
  // テーブルのデータをローカルストレージに保存
  localStorage.setItem("tableData", document.getElementById("base").innerHTML);
}

// ボタンを取得
const addButton = document.getElementById("add-row");

// ボタンをクリックしたら、新しい行を追加するイベントを追加
addButton.addEventListener("click", function() {
  // テーブルを取得
  const table = document.getElementById("base");

  // 新しい行を作成
  const newRow = table.insertRow();

  // 新しい行にセルを追加
  const titleCell = newRow.insertCell(0);
  const contentCell = newRow.insertCell(1);
  const dateCell = newRow.insertCell(2);

  // セルに内容を追加
  titleCell.contentEditable = true;
  contentCell.contentEditable = true;
  dateCell.contentEditable = true;
});

// テーブルの最後の行を削除
function deleteRow() {
  const table = document.getElementById("base");
  const rowCount = table.rows.length;
  if (rowCount <= 2) {
    alert("これ以上削除できません！");
  } else {
    table.deleteRow(rowCount - 1);
  }
}
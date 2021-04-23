// HTMLが最初に読み込まれた時に関数が動作する
document.addEventListener('DOMContentLoaded', function(){

  // id='message_image'が取得できれば
  if ( document.getElementById('message_image')) {

    const ImageList = document.getElementById('image-list');

    // 選択した画像を表示する関数
    const createImageHTML = (blob) => {
      // 画像を表示するdiv要素を生成する
      const imageElement = document.createElement('div');
      imageElement.setAttribute('class', "image-element")
      let imageElementNum = document.querySelectorAll('.image-element').length

      // 画像を表示するためのimg要素を生成する
      const blobImage = document.createElement('img');
      blobImage.setAttribute('src', blob);

      // ファイル選択ボタンを生成
      const inputHTML = document.createElement('input');
      inputHTML.setAttribute('id', `message_image_${imageElementNum}`)
      inputHTML.setAttribute('name', 'message[images][]')
      inputHTML.setAttribute('type', 'file')
      
      // 生成したHTML要素を配置しブラウザに表示させる
      imageElement.appendChild(blobImage);
      imageElement.appendChild(inputHTML)
      ImageList.appendChild(imageElement);

      inputHTML.addEventListener('change', (e) => {
        file = e.target.files[0];
        blob = window.URL.createObjectURL(file);

        createImageHTML(blob);
      });
    };

    document.getElementById('message_image').addEventListener("change", function(e) {
      

      // 画像情報を取得し変数fileへ格納
      const file = e.target.files[0];
      // 画像情報のURLを生成する
      const blob = window.URL.createObjectURL(file);

      createImageHTML(blob);
    });
  }
  
});
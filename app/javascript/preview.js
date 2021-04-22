// HTMLが最初に読み込まれた時に関数が動作する
document.addEventListener('DOMContentLoaded', function(){

  // id='message_image'が取得できれば
  if ( document.getElementById('message_image')) {

    const ImageList = document.getElementById('image-list');

    // 選択した画像を表示する関数
    const createImageHTML = (blob) => {
      // 画像を表示するdiv要素を生成する
      const imageElement = document.createElement('div');
      // 画像を表示するためのimg要素を生成する
      const blobImage = document.createElement('img');
      blobImage.setAttribute('src', blob);
      
      // 生成したHTML要素を配置しブラウザに表示させる
      imageElement.appendChild(blobImage);
      ImageList.appendChild(imageElement);
    };

    document.getElementById('message_image').addEventListener("change", function(e) {
      // 既に画像が表示されている場合は、既に存在している画像を削除する
      const imageContent = document.querySelector('img');
      if ( imageContent ) {
        imageContent.remove();
      }

      // 画像情報を取得し変数fileへ格納
      const file = e.target.files[0];
      // 画像情報のURLを生成する
      const blob = window.URL.createObjectURL(file);

      createImageHTML(blob);
    });
  }
  
});
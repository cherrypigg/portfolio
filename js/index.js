function header(){
  $.ajax({
      url: "../html/index.html",
      cache: false,
      success: function(html){
          document.write(html);
      }
  });
}

//上のでいいのかわからないけど//
// とりあえずはじめてみる//


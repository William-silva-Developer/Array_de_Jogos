

var listaGames = ["https://m.media-amazon.com/images/I/61MXORMRgML._AC_SX342_.jpg", "https://m.media-amazon.com/images/I/6161slXZUTL._AC_SX342_.jpg",
"https://www.pontofrio-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1511796962",
"https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1428400772",
"https://www.ecompletocdn.com.br/i/fp/2280/1222085_1_1632568771.jpg",
"https://images-americanas.b2w.io/produtos/01/00/img/3942992/1/3942992146_1GG.jpg",
"https://s2.glbimg.com/HtKsPZuC6NdgEKFv48TVRyJ2SV4=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/4/z/AqfvaPQfmR39ON8WQ31g/eas-fifa22-gen4-se-crop-1080x1350.png",
"https://m.media-amazon.com/images/I/61OZeW+pPYL._AC_SX342_.jpg",
"https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7",
"https://images.kabum.com.br/produtos/fotos/217923/jogo-battlefield-2042-br-ps5_1630608151_original.jpg"]


/*======================LISTAR JOGOS======================================*/ 

for (var i = 0; i < listaGames.length; i++) {

   var games = "<img  src="+listaGames[i]+">" 
   var list = document.getElementById("listarFilmes")
   list.innerHTML =  list.innerHTML + games
   
}
/*=====================FUNÇÃO PARA ADCIONAR JOGOS AO ARRAY================ */


function adcionar () {
   
   let inserir = (document.getElementById("jogo").value)

   if (inserir.endsWith(".jpg")){

      var newGame = "<img src=" + inserir + ">"
      
      
      var list = document.getElementById("listarFilmes")
      list.innerHTML = list.innerHTML + newGame
      
   }
   document.getElementById("jogo").value = ""

}

/*=======================================================================*/












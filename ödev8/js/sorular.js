var dogru_soru=0, soru_sayisi=0;
//SORU1
var soru1_img = `<img src="img/atakule.jpg" alt="atakule" width="500px" height="300px">`;
var soru1 = "Soru #1<br><br> Yukarıdaki görseldeki yapı hangi şehirde bulunmaktadır ?";
var soru1_sec = `
<button id="yanlis1" onclick="yanlis_cvp()">İstanbul</button>
<button id="dogru" onclick="dogru_cvp()">Ankara</button>
<button id="yanlis2" onclick="yanlis_cvp()">Kocaeli</button>
<button id="yanlis3" onclick="yanlis_cvp()">İzmir</button>`;

//SORU2
var soru2_video = `<video width="500px" height="300px" controls autoplay>
<source src="video/müzik.mp4" type="video/mp4">
</video>`;
var soru2 = "Soru #2<br><br> Dinlediğiniz eserin adı hangi seçenekte doğru verilmiştir ?";
var soru2_sec = `
<button id="yanlis1" onclick="yanlis_cvp()">Hayat</button>
<button id="yanlis2" onclick="yanlis_cvp()">Kimse Bilmez</button>
<button id="yanlis3" onclick="yanlis_cvp()">Bulutlar</button>
<button id="dogru" onclick="dogru_cvp()">Gurbet</button>`;

//SORU3
var soru3_img = `<img src="img/tatlı.jpg" alt="tatlı" width="500px" height="300px">`;
var soru3 = "Soru #3<br><br> Görseldeki tatlının ismi nedir ?";
var soru3_sec = `
<button id="yanlis1" onclick="yanlis_cvp()">Kemalpaşa</button>
<button id="yanlis2" onclick="yanlis_cvp()">Revani</button>
<button id="dogru" onclick="dogru_cvp()">Şekerpare</button>
<button id="yanlis3" onclick="yanlis_cvp()">Kadayıf</button>`;

//SORU4
var soru4_img = `<img src="img/park.jpg" alt="park" width="500px" height="300px">`;
var soru4 = "Soru #4<br><br> Görseldeki Ankara'da bulunan Kuğulu Park ne zaman açılmıştır ?";
var soru4_sec = `
<button id="dogru" onclick="dogru_cvp()">1958</button>
<button id="yanlis1" onclick="yanlis_cvp()">1975</button>
<button id="yanlis2" onclick="yanlis_cvp()">2002</button>
<button id="yanlis3" onclick="yanlis_cvp()">1940</button>
<button id="yanlis4" onclick="yanlis_cvp()">2000</button>`;

//SORU5
var soru5 = "Soru #5<br><br> JQuery Hangi seçenekteki dilin kütüphanesidir ?";
var soru5_sec = `
<button id="yanlis1" onclick="yanlis_cvp()">C#</button>
<button id="dogru" onclick="dogru_cvp()">JavaScript</button>
<button id="yanlis2" onclick="yanlis_cvp()">C++</button>
<button id="yanlis3" onclick="yanlis_cvp()">Java</button>
<button id="yanlis4" onclick="yanlis_cvp()">Python</button>`;

//dogru cevap
function dogru_cvp(){
    cevap.innerText = "Doğru..";
    dogru_soru++;
    skor.innerText = skor.innerText = dogru_soru + " / " + soru_sayisi;
 }

//yanlış cevap
function yanlis_cvp(){
  cevap.innerText = "Yanlış!!";
  setTimeout(() => {
    $("#dogru").css("background-color", "#006400");
  }, 1500);
  skor.innerText = skor.innerText = dogru_soru + " / " + soru_sayisi;
}

//OYUN SONU
var son_img = `<img id="son" src="img/son.png" alt="son" width="500px" height="300px">`;
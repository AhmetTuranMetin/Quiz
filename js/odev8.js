$(document).ready(function(){
    var skor = document.getElementById("skor");
    var kronometre = document.getElementById("sayac");
    var soru_alan = document.getElementById("soru_alani");
    var yazi_alan = document.getElementById("yazi_alani");
    var secenek = document.getElementById("secenek_alani");
    var basla_btn = document.getElementById("basla_btn");
    var gorsel_alan = document.getElementById("gorsel_alani");
    var cevap = document.getElementById("cevap");
    var reset = document.getElementById("reset");

    var soru_dizisi = [s1, s2, s3, s4, s5];
    var soru = 0;
    var zaman = 10;
    var syc;

    skor.innerText = dogru_soru + " / " + soru_sayisi;
    kronometre.innerText = "00:00";

    basla_btn.addEventListener('click', function(){
        basla_btn.remove();
        soru_dizisi[soru]();
        sayac(zaman);
    })

    function sayac(zaman){
        kronometre.innerText = "00:"+zaman;
        syc = setInterval(say, 1000);
        function say(){
            zaman--;
            kronometre.innerText = "00:0"+zaman

            if(zaman == 0){
                clearInterval(syc);
                $("#dogru").css("background-color", "#006400");
                setTimeout(function(){
                    soru++;
                    soru_dizisi[soru]();
                    zaman = 10;
                    sayac(zaman);
                }, 4000);

                if(soru === 4){
                    setTimeout(function(){
                        oyunSonu();
                    }, 4000);
                }
            }
        }
    }

    function s1(){
        gorsel_alan.innerHTML = soru1_img;
        secenek.innerHTML = soru1_sec;
        yazi_alan.innerHTML = soru1;
        cevap.innerText = "Cevap Nedir? :";
        soru_sayisi++;
        skor.innerText = dogru_soru + " / " + soru_sayisi;
    }

    function s2(){
        gorsel_alan.innerHTML = soru2_video;
        secenek.innerHTML = soru2_sec;
        yazi_alan.innerHTML = soru2;
        cevap.innerText = "Cevap Nedir? :";
        soru_sayisi++;
        skor.innerText = dogru_soru + " / " + soru_sayisi;
    }

    function s3(){
        gorsel_alan.innerHTML = soru3_img;
        secenek.innerHTML = soru3_sec;
        yazi_alan.innerHTML = soru3;
        cevap.innerText = "Cevap Nedir? :";
        soru_sayisi++;
        skor.innerText = dogru_soru + " / " + soru_sayisi;
    }

    function s4(){
        gorsel_alan.innerHTML = soru4_img;
        secenek.innerHTML = soru4_sec;
        yazi_alan.innerHTML = soru4;
        cevap.innerText = "Cevap Nedir? :"
        soru_sayisi++;
        skor.innerText = dogru_soru + " / " + soru_sayisi;
    }

    function s5(){
        gorsel_alan.innerHTML = "";
        secenek.innerHTML = soru5_sec;
        yazi_alan.innerHTML = soru5;
        cevap.innerText = "Cevap Nedir? :";
        soru_sayisi++;
        skor.innerText = dogru_soru + " / " + soru_sayisi;
    }

    $(secenek).click(function(){
        clearInterval(syc);
        setTimeout(function(){
            soru++;
            soru_dizisi[soru]();
            zaman = 10;
            sayac(zaman);
        }, 4000);

        if(soru === 4){
            setTimeout(function(){
                oyunSonu();
            }, 4000);
        }
    })

    function oyunSonu(){
        gorsel_alan.innerHTML = son_img;
        secenek.innerHTML = "";
        yazi_alan.innerHTML = "Toplam Puan: " + dogru_soru + " / " + soru_sayisi;
        cevap.innerText = "";
        skor.innerText = "";
        kronometre.innerText = "";

        reset.innerHTML += `<button id="restart">Yeniden Oyna</button>`;
    }

    //butona tıklandığında oyunu tekrar başlatmak..
    reset.addEventListener('click', function(){
        reset.remove();
        soru = 0;
        zaman = 10;
        dogru_soru = 0;
        soru_sayisi = 0;
        soru_dizisi[soru]();
        sayac(zaman);
    })
})
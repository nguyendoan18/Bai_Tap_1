window.onscroll = function(){
    var kc = document.documentElement.scrollTop;
    var logo = document.getElementById("logo");
    var h1 = document.getElementById("h1");
    var hinh = document.getElementById("hinh");
    var header = document.getElementById("header");
    var diemcong = document.getElementById("diemcong");
    var menu = document.getElementById("menu");
    if(kc>150){
        logo.style.height = "100px";
        h1.style.fontSize = "20px";
        hinh.style.width = "200px";
        hinh.style.height = "100px";
        logo.style.position = "fixed";
        header.style.height = "150px";
        diemcong.style.left = "200px";
        menu.style.position = "fixed";
        menu.style.top = "100px";
    }else{
        logo.style.height = "250px";
        h1.style.fontSize = "30px";
        hinh.style.width = "250px";
        hinh.style.height = "150px";
        logo.style.position = "fixed";
        header.style.height = "250px";
        diemcong.style.left = "100px";
        menu.style.top = "150px";
    }
    console.log(kc);
};

function opensearch(){
    var khung = document.getElementById('khung');
    khung.style.width = "0";
}
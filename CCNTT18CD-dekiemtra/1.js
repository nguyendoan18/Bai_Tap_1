window.onscroll=function(){
    var diemcong = document.getElementById("dc");
    var kc = document.documentElement.scrollTop;
    if (kc > 120) {
        diemcong.style.left="0px";
    }
    else{
        diemcong.style.left="-340px";
    } 
};
const opensearch = function() {
    var input = document.querySelector(".inpute");
    if (input.classList.contains("hieuunginput"))
    {
        input.classList.remove("hieuunginput");
    }else{
        input.classList.add("hieuunginput");
    }
    console.log('1');
}


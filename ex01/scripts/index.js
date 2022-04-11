document.getElementById("link").onclick = function(e) {
    e.preventDefault();
    document.getElementById("popupdarkbg").style.display = "block";
    document.getElementById("popup").style.display = "block";
    // document.getElementById('popupiframe').src = "";
    document.getElementById('popupdarkbg').onclick = function() {
        document.getElementById("popup").style.display = "none";
        document.getElementById("popupdarkbg").style.display = "none";
    };
    return false;
}
document.getElementById('modalclose').onclick = function (){
    document.getElementById("popup").style.display = "none";
    document.getElementById("popupdarkbg").style.display = "none";
}









var myvideo = document.getElementById("video");
var str = '<div id="zhuf">给不了你太多的感动<br>但我会陪你很久很久</div><div class="names">祝鑫鑫：</div><div id="zhuf">所求皆所愿<br>所行皆坦途<br>多喜乐<br>长安宁</div><a href="./../yh/"><div id="zhuf">烟花</div></a>';
var i = 0;
var divTyping = document.getElementById('jiyu');
function typing(){
    if (i <= str.length) {
        divTyping.innerHTML = str.slice(0, i++) + '_';
        setTimeout('typing()', 100);
    }
    else{
        divTyping.innerHTML = str;
    }
}
function play(){
    myvideo.play();
    document.getElementById("top").classList.add("tran");
    document.getElementById("bottom").classList.add("trans");
    setTimeout("typing();", 1);
}
//マウスオーバー時の処理
function mouseOn(){
    var obj = document.getElementById("bear_hand");
    obj.src = "common/images/kuma_after.svg";
}

//マウスアウト時の処理
function mouseOff(){
    var obj = document.getElementById("bear_hand");
    obj.src = "common/images/kuma_before.svg";
}
//マウスオーバー時の処理
function mouseOn_minikuma(){
    var obj = document.getElementById("minibear_hand");
    obj.src = "common/images/kuma_after.svg";
}

//マウスアウト時の処理
function mouseOff_minikuma(){
    var obj = document.getElementById("minibear_hand");
    obj.src = "common/images/kuma_before.svg";
}

//鳥の目
var pics_tori_src = new Array("common/images/tori.svg","common/images/tori_eye.svg");
var num_a = -1;

slideshow_timer_tori();

function slideshow_timer_tori(){
    if (num_a == 1){
        num_a = 0;
    }
    else {
        num_a ++;
    }
    document.getElementById("tori_eye_move").src=pics_tori_src[num_a];
    setTimeout("slideshow_timer_tori()",1000);
}

// ラッコ動作
var pics_rakko_src = new Array("common/images/rakko.svg","common/images/rakko_other.svg");
var num_b = -1;

slideshow_timer_rakko();

function slideshow_timer_rakko(){
    if (num_b == 1){
        num_b = 0;
    }
    else {
        num_b ++;
    }
    document.getElementById("rakko_move").src=pics_rakko_src[num_b];
    setTimeout("slideshow_timer_rakko()",600);
}

// かめ歩き
var pics_kame_work_src = new Array("common/images/kame_before.svg","common/images/kame_after.svg");
var num_c = -1;

slideshow_timer_kame();

function slideshow_timer_kame(){
    if (num_c == 1){
        num_c = 0;
    }
    else {
        num_c ++;
    }
    document.getElementById("kame_work").src=pics_kame_work_src[num_c];
    setTimeout("slideshow_timer_kame()",500);
}

// 蝙蝠
var pics_koumori_src = new Array("common/images/koumori.svg","common/images/koumori_move_1.svg","common/images/koumori_move_2.svg");
var num_d = -1;

slideshow_timer_koumori();

function slideshow_timer_koumori(){
    if (num_d== 2){
        num_d = 0;
    }
    else {
        num_d ++;
    }
    document.getElementById("komori_move").src=pics_koumori_src[num_d];
    setTimeout("slideshow_timer_koumori()",200);
}



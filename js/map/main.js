let checkInspection;
let checkI = [];
let contents;

// mapSelect選択情報取得
function mapDateSelect(click_class){
    // CMS接続
    fetch("https://workproduction.microcms.io/api/v1/date?limit=100", {
        headers: {
            "X-API-KEY": "c2aa018e-aeb0-43c6-b6c2-e2bc343ab15e"
        }
    })
    .then(res => res.json())
    .then(json => {

        contents = json.contents;
        let animalInfo;
        let animalCount = 0;

        for( let i = 0; contents.length > i; i++ ){
            if( contents[i].prefectureen == click_class.className ){
                animalInfo += '<li><img src="'+ contents[i].img.url +'"><p class="animalName">'+ contents[i].name +'</p></li>';
                animalCount++;
            }
        }

        // 不要に入った文字列削除
        let nAnimalInfo = ("" + animalInfo).replace("undefined","");

        sessionStorage.setItem('animalInfo', nAnimalInfo);
        if( animalCount > 0 ){
            location.href="/afterSearch/searchResults/searchResults.html";
        } else {
            alert("対象の動物がいません");
        }
    });
}

// mapCheckbox選択情報取得
function mapDateCheckbox(){
    checkInspection = $('input[type="checkbox"]');
    checkI = [];

    for( let i = 0; i < checkInspection.length; i++ ){
        if( checkInspection[i].checked ){
            checkI.push(checkInspection[i].id);
        }
    }

    // CMS接続
    fetch("https://workproduction.microcms.io/api/v1/date?limit=100", {
        headers: {
            "X-API-KEY": "c2aa018e-aeb0-43c6-b6c2-e2bc343ab15e"
        }
    })
    .then(res => res.json())
    .then(json => {

        contents = json.contents;
        let animalInfo;
        let animalCount = 0;

        for( let i = 0; contents.length > i; i++ ){
            for( let j = 0; checkI.length > j; j++ ){
                if( contents[i].prefectureen == checkI[j] ){
                    animalInfo += '<li><img src="'+ contents[i].img.url +'"><p class="animalName">'+ contents[i].name +'</p></li>';
                    animalCount++;
                }
            }
        }

        // 不要に入った文字列削除
        let nAnimalInfo = ("" + animalInfo).replace("undefined","");

        sessionStorage.setItem('animalInfo', nAnimalInfo);
        if( animalCount > 0 ){
            location.href="/afterSearch/searchResults/searchResults.html";
        } else {
            alert("対象の動物がいません");
        }
    });
}

// 日本地図

// // -1-1-1
// // -東西-地方-県

// 東日本
// 東日本 click イベント

function eastAllCheck(){
    if( $('input[name="map-1"]').prop('checked')){
        $('input[name="map-1-1"]').prop('checked', true );
        $('input[name="map-1-1-1"]').prop('checked', true );
        $('input[name="map-1-2"]').prop('checked', true );
        $('input[name="map-1-2-1"]').prop('checked', true );
        $('input[name="map-1-2-2"]').prop('checked', true );
        $('input[name="map-1-2-3"]').prop('checked', true );
        $('input[name="map-1-2-4"]').prop('checked', true );
        $('input[name="map-1-2-5"]').prop('checked', true );
        $('input[name="map-1-2-6"]').prop('checked', true );
        $('input[name="map-1-3"]').prop('checked', true );
        $('input[name="map-1-3-1"]').prop('checked', true );
        $('input[name="map-1-3-2"]').prop('checked', true );
        $('input[name="map-1-3-3"]').prop('checked', true );
        $('input[name="map-1-3-4"]').prop('checked', true );
        $('input[name="map-1-3-5"]').prop('checked', true );
        $('input[name="map-1-3-6"]').prop('checked', true );
        $('input[name="map-1-4"]').prop('checked', true );
        $('input[name="map-1-4-1"]').prop('checked', true );
        $('input[name="map-1-4-2"]').prop('checked', true );
        $('input[name="map-1-4-3"]').prop('checked', true );
        $('input[name="map-1-4-4"]').prop('checked', true );
        $('input[name="map-1-4-5"]').prop('checked', true );
        $('input[name="map-1-4-6"]').prop('checked', true );
        $('input[name="map-1-4-7"]').prop('checked', true );
        $('input[name="map-1-4-8"]').prop('checked', true );
        $('input[name="map-1-4-9"]').prop('checked', true );
    } else {
        $('input[name="map-1-1"]').prop('checked', false );
        $('input[name="map-1-1-1"]').prop('checked', false );
        $('input[name="map-1-2"]').prop('checked', false );
        $('input[name="map-1-2-1"]').prop('checked', false );
        $('input[name="map-1-2-2"]').prop('checked', false );
        $('input[name="map-1-2-3"]').prop('checked', false );
        $('input[name="map-1-2-4"]').prop('checked', false );
        $('input[name="map-1-2-5"]').prop('checked', false );
        $('input[name="map-1-2-6"]').prop('checked', false );
        $('input[name="map-1-3"]').prop('checked', false );
        $('input[name="map-1-3-1"]').prop('checked', false );
        $('input[name="map-1-3-2"]').prop('checked', false );
        $('input[name="map-1-3-3"]').prop('checked', false );
        $('input[name="map-1-3-4"]').prop('checked', false );
        $('input[name="map-1-3-5"]').prop('checked', false );
        $('input[name="map-1-3-6"]').prop('checked', false );
        $('input[name="map-1-4"]').prop('checked', false );
        $('input[name="map-1-4-1"]').prop('checked', false );
        $('input[name="map-1-4-2"]').prop('checked', false );
        $('input[name="map-1-4-3"]').prop('checked', false );
        $('input[name="map-1-4-4"]').prop('checked', false );
        $('input[name="map-1-4-5"]').prop('checked', false );
        $('input[name="map-1-4-6"]').prop('checked', false );
        $('input[name="map-1-4-7"]').prop('checked', false );
        $('input[name="map-1-4-8"]').prop('checked', false );
        $('input[name="map-1-4-9"]').prop('checked', false );
    }
}

// 北海道地方 click イベント
function hokkaidouAllCheck(){
    if( $('input[name="map-1-1"]').prop('checked')){
        $('input[name="map-1-1-1"]').prop('checked', true );
    } else {
        $('[name="map-1-1-1"]').prop('checked', false );
    }
}

// 東北地方　click イベント
function touhokuAllCheck(){
    if( $('input[name="map-1-2"]').prop('checked')){
        $('input[name="map-1-2-1"]').prop('checked', true );
        $('input[name="map-1-2-2"]').prop('checked', true );
        $('input[name="map-1-2-3"]').prop('checked', true );
        $('input[name="map-1-2-4"]').prop('checked', true );
        $('input[name="map-1-2-5"]').prop('checked', true );
        $('input[name="map-1-2-6"]').prop('checked', true );
    } else {
        $('[name="map-1-2-1"]').prop('checked', false );
        $('[name="map-1-2-2"]').prop('checked', false );
        $('[name="map-1-2-3"]').prop('checked', false );
        $('[name="map-1-2-4"]').prop('checked', false );
        $('[name="map-1-2-5"]').prop('checked', false );
        $('[name="map-1-2-6"]').prop('checked', false );
    }
}

// 関東 click イベント
function kantouAllCheck(){
    if( $('input[name="map-1-3"]').prop('checked')){
        $('input[name="map-1-3-1"]').prop('checked', true );
        $('input[name="map-1-3-2"]').prop('checked', true );
        $('input[name="map-1-3-3"]').prop('checked', true );
        $('input[name="map-1-3-4"]').prop('checked', true );
        $('input[name="map-1-3-5"]').prop('checked', true );
        $('input[name="map-1-3-6"]').prop('checked', true );
    } else {
        $('[name="map-1-3-1"]').prop('checked', false );
        $('[name="map-1-3-2"]').prop('checked', false );
        $('[name="map-1-3-3"]').prop('checked', false );
        $('[name="map-1-3-4"]').prop('checked', false );
        $('[name="map-1-3-5"]').prop('checked', false );
        $('[name="map-1-3-6"]').prop('checked', false );
    }
}

// 中部 click イベント
function tyubuAllCheck(){
    if( $('input[name="map-1-4"]').prop('checked')){
        $('input[name="map-1-4-1"]').prop('checked', true );
        $('input[name="map-1-4-2"]').prop('checked', true );
        $('input[name="map-1-4-3"]').prop('checked', true );
        $('input[name="map-1-4-4"]').prop('checked', true );
        $('input[name="map-1-4-5"]').prop('checked', true );
        $('input[name="map-1-4-6"]').prop('checked', true );
        $('input[name="map-1-4-7"]').prop('checked', true );
        $('input[name="map-1-4-8"]').prop('checked', true );
        $('input[name="map-1-4-9"]').prop('checked', true );
    } else {
        $('[name="map-1-4-1"]').prop('checked', false );
        $('[name="map-1-4-2"]').prop('checked', false );
        $('[name="map-1-4-3"]').prop('checked', false );
        $('[name="map-1-4-4"]').prop('checked', false );
        $('[name="map-1-4-5"]').prop('checked', false );
        $('[name="map-1-4-6"]').prop('checked', false );
        $('[name="map-1-4-7"]').prop('checked', false );
        $('[name="map-1-4-8"]').prop('checked', false );
        $('[name="map-1-4-9"]').prop('checked', false );
    }
}

// 西日本
// 西日本 click イベント
function wastAllCheck(){
    if( $('input[name="map-2"]').prop('checked')){
        $('input[name="map-2-1"]').prop('checked', true );
        $('input[name="map-2-1-1"]').prop('checked', true );
        $('input[name="map-2-1-2"]').prop('checked', true );
        $('input[name="map-2-1-3"]').prop('checked', true );
        $('input[name="map-2-1-4"]').prop('checked', true );
        $('input[name="map-2-1-5"]').prop('checked', true );
        $('input[name="map-2-1-6"]').prop('checked', true );
        $('input[name="map-2-1-7"]').prop('checked', true );
        $('input[name="map-2-2"]').prop('checked', true );
        $('input[name="map-2-2-1"]').prop('checked', true );
        $('input[name="map-2-2-2"]').prop('checked', true );
        $('input[name="map-2-2-3"]').prop('checked', true );
        $('input[name="map-2-2-4"]').prop('checked', true );
        $('input[name="map-2-2-5"]').prop('checked', true );
        $('input[name="map-2-3"]').prop('checked', true );
        $('input[name="map-2-3-1"]').prop('checked', true );
        $('input[name="map-2-3-2"]').prop('checked', true );
        $('input[name="map-2-3-3"]').prop('checked', true );
        $('input[name="map-2-3-4"]').prop('checked', true );
        $('input[name="map-2-4"]').prop('checked', true );
        $('input[name="map-2-4-1"]').prop('checked', true );
        $('input[name="map-2-4-2"]').prop('checked', true );
        $('input[name="map-2-4-3"]').prop('checked', true );
        $('input[name="map-2-4-4"]').prop('checked', true );
        $('input[name="map-2-4-5"]').prop('checked', true );
        $('input[name="map-2-4-6"]').prop('checked', true );
        $('input[name="map-2-4-7"]').prop('checked', true );
    } else {
        $('input[name="map-2-1"]').prop('checked', false );
        $('input[name="map-2-1-1"]').prop('checked', false );
        $('input[name="map-2-1-2"]').prop('checked', false );
        $('input[name="map-2-1-3"]').prop('checked', false );
        $('input[name="map-2-1-4"]').prop('checked', false );
        $('input[name="map-2-1-5"]').prop('checked', false );
        $('input[name="map-2-1-6"]').prop('checked', false );
        $('input[name="map-2-1-7"]').prop('checked', false );
        $('input[name="map-2-2"]').prop('checked', false );
        $('input[name="map-2-2-1"]').prop('checked', false );
        $('input[name="map-2-2-2"]').prop('checked', false );
        $('input[name="map-2-2-3"]').prop('checked', false );
        $('input[name="map-2-2-4"]').prop('checked', false );
        $('input[name="map-2-2-5"]').prop('checked', false );
        $('input[name="map-2-3"]').prop('checked', false );
        $('input[name="map-2-3-1"]').prop('checked', false );
        $('input[name="map-2-3-2"]').prop('checked', false );
        $('input[name="map-2-3-3"]').prop('checked', false );
        $('input[name="map-2-3-4"]').prop('checked', false );
        $('input[name="map-2-4"]').prop('checked', false );
        $('input[name="map-2-4-1"]').prop('checked', false );
        $('input[name="map-2-4-2"]').prop('checked', false );
        $('input[name="map-2-4-3"]').prop('checked', false );
        $('input[name="map-2-4-4"]').prop('checked', false );
        $('input[name="map-2-4-5"]').prop('checked', false );
        $('input[name="map-2-4-6"]').prop('checked', false );
        $('input[name="map-2-4-7"]').prop('checked', false );
    }
}

// 近畿地方　click イベント
function kinkiAllCheck(){
    if( $('input[name="map-2-1"]').prop('checked')){
        $('input[name="map-2-1-1"]').prop('checked', true );
        $('input[name="map-2-1-2"]').prop('checked', true );
        $('input[name="map-2-1-3"]').prop('checked', true );
        $('input[name="map-2-1-4"]').prop('checked', true );
        $('input[name="map-2-1-5"]').prop('checked', true );
        $('input[name="map-2-1-6"]').prop('checked', true );
        $('input[name="map-2-1-7"]').prop('checked', true );
    } else {
        $('[name="map-2-1-1"]').prop('checked', false );
        $('[name="map-2-1-2"]').prop('checked', false );
        $('[name="map-2-1-3"]').prop('checked', false );
        $('[name="map-2-1-4"]').prop('checked', false );
        $('[name="map-2-1-5"]').prop('checked', false );
        $('[name="map-2-1-6"]').prop('checked', false );
        $('[name="map-2-1-7"]').prop('checked', false );
    }
}

// 中国地方　click イベント
function tyugokuAllCheck(){
    if( $('input[name="map-2-2"]').prop('checked')){
        $('input[name="map-2-2-1"]').prop('checked', true );
        $('input[name="map-2-2-2"]').prop('checked', true );
        $('input[name="map-2-2-3"]').prop('checked', true );
        $('input[name="map-2-2-4"]').prop('checked', true );
        $('input[name="map-2-2-5"]').prop('checked', true );
    } else {
        $('[name="map-2-2-1"]').prop('checked', false );
        $('[name="map-2-2-2"]').prop('checked', false );
        $('[name="map-2-2-3"]').prop('checked', false );
        $('[name="map-2-2-4"]').prop('checked', false );
        $('[name="map-2-2-5"]').prop('checked', false );
    }
}

// 四国地方　click イベント
function shikokuAllCheck(){
    if( $('input[name="map-2-3"]').prop('checked')){
        $('input[name="map-2-3-1"]').prop('checked', true );
        $('input[name="map-2-3-2"]').prop('checked', true );
        $('input[name="map-2-3-3"]').prop('checked', true );
        $('input[name="map-2-3-4"]').prop('checked', true );
    } else {
        $('[name="map-2-3-1"]').prop('checked', false );
        $('[name="map-2-3-2"]').prop('checked', false );
        $('[name="map-2-3-3"]').prop('checked', false );
        $('[name="map-2-3-4"]').prop('checked', false );
    }
}

// 九州地方　click イベント
function kyusyuAllCheck(){
    if( $('input[name="map-2-4"]').prop('checked')){
        $('input[name="map-2-4-1"]').prop('checked', true );
        $('input[name="map-2-4-2"]').prop('checked', true );
        $('input[name="map-2-4-3"]').prop('checked', true );
        $('input[name="map-2-4-4"]').prop('checked', true );
        $('input[name="map-2-4-5"]').prop('checked', true );
        $('input[name="map-2-4-6"]').prop('checked', true );
        $('input[name="map-2-4-7"]').prop('checked', true );
    } else {
        $('[name="map-2-4-1"]').prop('checked', false );
        $('[name="map-2-4-2"]').prop('checked', false );
        $('[name="map-2-4-3"]').prop('checked', false );
        $('[name="map-2-4-4"]').prop('checked', false );
        $('[name="map-2-4-5"]').prop('checked', false );
        $('[name="map-2-4-6"]').prop('checked', false );
        $('[name="map-2-4-7"]').prop('checked', false );
    }
}

$(function(){
    //地域を選択
    $('.area_btn').click(function(){
        $('.area_overlay').show();
        $('.pref_area').show();
        var area = $(this).data('area');
        $('[data-list]').hide();
        $('[data-list="' + area + '"]').show();
    });

    //レイヤーをタップ
    $('.area_overlay').click(function(){
        prefReset();
    });

    //都道府県をクリック
    $('.pref_list [data-id]').click(function(){
        if($(this).data('id')){
            var id = $(this).data('id');
            //このidを使用して行いたい操作をしてください
            //都道府県IDに応じて別ページに飛ばしたい場合はこんな風に書く↓
            //window.location.href = 'https://kinocolog.com/pref/' + id;

            prefReset();
        }
    });

    //表示リセット
    function prefReset(){
        $('[data-list]').hide();
        $('.pref_area').hide();
        $('.area_overlay').hide();
    }
});